---
title: "Spinning wheel of Prizes"
date: 2019-12-20
slug: 'wheel-of-prizes'
categories: ["project"]
tags: ["CSS", "Animations", "CodePen"]
---

## The Ask

A lot of what I do at <a href="https://points.com">Points</a> is to bring to life small experiences to engage customers following some form of direct mail. Recently a partner got in touch asking if we could do a "wheel of fortune" style spinner when they visit the page revealing the prize a customer had won.

## Results

<p class="codepen" data-height="400" data-theme-id="default" data-default-tab="result" data-user="jamesrwilliams" data-slug-hash="LYExEmY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Spinner Banner Element PoC">
  <span>See the Pen <a href="https://codepen.io/jamesrwilliams/pen/LYExEmY">
  Spinner Banner Element PoC</a> by James R. Williams (<a href="https://codepen.io/jamesrwilliams">@jamesrwilliams</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Method

This features a lot of CSS. Let's break it down. The wheel is made up of any number of "slices". You can see the cake references are going to be plentiful here. Each slice has a label.

After learning a bit of basic maths again. I defined some SCSS variables to try and make this as dynamic as possible. Number of slices etc.

 ```scss
$diameter: 350px;
$numberOfSlices: 12;
$radius: ($diameter / 2);
$circumfrance: (6.283185307 * $radius);
$sliceHeight: ($circumfrance / $numberOfSlices);
$sliceOffeset: ($sliceHeight / 2); 
```

### Creating the Slices

The Dial is made up of multiple slices. Each one has a container with the class of `slice` which we use for rotation and positioning. The label is for the, you guessed it, label or the content of that slice.

```html
<div class="slice">
    <div class="label">1</div>
</div>
```

From that we use `:before` and `:after` pseudo elements to create triangles before and after the label.

{{< figure src="/post-images/wheel-of-prizes_slice-structure.png" alt="" class="float-right" >}}


### Putting the slices together.

Once the first slice was working. We just repeat them for however many slices we want. We set each slice use the tip of the triangles as the transform origin point: `transform-origin: center left;`, this allows us to rotate each slice around our center points. To spread out our slices we just use a lot of `:nth-child` selectors to rotate them. E.g.

```scss
&:nth-child(10) {
    transform: rotate(270deg);
}
```

### Making the loading random.

Next I needed to randomise the slice order. Ideally we don't want the same spinner to load for each customer, or even each time they open the offer. The trick with randomising the order was we needed to work out a way to "spin" the wheel but calculate how to get the arrow to point at the right prize for the customer. 

We started with a default spin amount of 1080 degrees, so three full rotations. From that initial rotation amount we worked out the position of our customers predetermined prize slice.

{{< figure src="/post-images/wheel-of-prizes_1.png" alt="" class="float-right" >}}

The starting position of the wheel is the slice located on the right in the center (the slice with the number 1 on it). 

If our prize is the 6th index, and each slice has an arc of 30 deg (360 &divide; 12 = 30).

To rotate to the prize we need to rotate by at lease 180 deg.

### Animation Timing

The real challenge here was the animation timing. After watching a few episodes of wheel of fortune as "research", I noticed a few people try and build momentum by pulling the wheel back before throwing it forward, then the wheel slowly decreasing in speed, until the force of the arrow pulls it back slightly.

To do this with [CSS timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function) you need to make use of the mysteriously powerful `cubic-bezier()` timing function. The four arguments of this function defines a Cubic Bézier curve. I would liek to pretend I know fully how the maths behind this works but, sadly, I do not. I made use of this wonderful [css easing animation GUI](https://matthewlein.com/tools/ceaser) by Matthew Lein, to generate the curve with the draw-back and slow spin, until a tiny bounce, feel we where trying to get. Here it is in all it's glory:

```css
.elm {
    animation-timing-function: cubic-bezier(0.440, -0.205, 0.000, 1.130);
}
```

{{< figure src="/post-images/wheel-of-prizes_animation-example.gif" alt="" class="float-right" >}}

Without these animation timing functions the wheel just abruptly starts spinning and then stops, while using the default keywords like `ease` and `ease-in` didn't have quite the right feel.




