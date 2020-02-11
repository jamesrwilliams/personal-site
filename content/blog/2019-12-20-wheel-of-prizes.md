---
title: "CSS Roulette Wheel Project"
date: 2019-12-20
slug: 'css-roulette-wheel'
draft: true
categories: ["project"]
tags: ["CSS", "Animations", "CodePen"]
---

A lot of what I do at <a href="https://points.com">Points</a> is to bring to life small experiences to engage customers following some form of direct mail. Recently a partner got in touch asking if we could do a "wheel of fortune" style spinner when they visit the page revealing the prize a customer had won. 

The prize, was of course is predetermined, however in an effort to keep things interesting we introduced a bit of randomness. The user's prize would appear at different positions on the wheel for each page load so it looked like it's different each time, when really they'll always get the same prize! You can refresh as much as you want but the prize will always be the same.

_Skip to the **[CodePen demo](#results)** to see it in action if you don't want to read about the how and the why._

## Background

When initially approached about this idea I was expecting the request to be recreating something along the lines of the wheel featured on "the price is right" with one prize being viable at the front with the wheel rotating around vertically "in front" of the users.
 
 Thankfully the partner specifically supplied us with the image of a more "wheel of fortune" like prize wheel, that being the vertical, elevation of a wheel that spins centered on the screen with all prizes visually rotating around the center point. Thankfully this is the easier of the two (I still want to try and build the other too).

## Desired Experience

> Customer receives communication about their "special prize" of up to <code>X</code>% discount. They visit the web page that loads a wheel of fortune spinner. Clicking "spin", the wheel slowly reveals their prize.

Let's first breakdown what we're after here. The wheel is made up of a number of sections, I'm going to call 'slices'. Each slice represents a prize the customer has a chance of winning, featuring some centered on the slice, pointing toward the center.

## Key Components

What makes one of these wheels recognisable? There are three things I thought of to get that authentic "Wheel of fortune" effect. The visual ecstatic, movement, sound. For the sake of my own sanity I decided to leave sound at the door, no one want's to hear that clicking noise when they load a web page (do they?)!

### Visual Aesthetic

These wheels have a very distinctive look and feel, iconic almost. The slices or wedges, featuring they alternating colours, the "handles", and the labels on each all centered around the circular board.

Initially I was going to just use a background image for the wheel and PhotoShop the prize wheel together, but that's no fun at all. Instead I opted for a HTML/CSS solution (only featuring a small amount of Javascript that I will get on to later).

I started off by getting some `scss` variables set up with some useful numbers around the area, angle of our wheel. Hope you all paid attention during Math to work out the arc of a circle!
   
```scss
   $diameter: 350px;
   $numberOfSlices: 12;
   $radius: ($diameter / 2);
   $circumfrance: (6.283185307 * $radius);
   $sliceHeight: ($circumfrance / $numberOfSlices);
   $sliceOffeset: ($sliceHeight / 2); 
   ```

The wheel, in essence, is just a rotating `div` element with a border radius of 50% to cut it into a circle. The wedges are where this get's challenging. My example has 12 slices in total, nice and even. As all the wedges are the same, I focused my attention on creating one that I could repeat N times and that are adaptable so if I need to reduce my wedge count or something like that I don't have to throw out the entire project!

#### How To Build A Wedge
With the wheel made up of multiple slices. Each one has a container with the class of `slice` which we use for rotation and positioning. The label is for the, you guessed it, label or the content of that slice.

```html
<div class="slice">
    <div class="label">Label Text</div>
</div>
```

{{< figure src="/post-images/wheel-of-prizes_slice-structure.png" alt="" class="float-left" caption="Before/after pseudo elements creating our wedge" >}}

From that we use `:before` and `:after` pseudo elements to blocks before and after our label. Using CSS triangles before and after the label we can create the wedge shape we're after. Like so:  

Once the first slice was working. We just repeat them for however many slices we want. We set each slice use the tip of the triangles as the transform origin point: `transform-origin: center left;`, this allows us to rotate each slice around our center points. To spread out our slices we just use a lot of `:nth-child` selectors to rotate them. E.g.

```scss
&:nth-child(10) {
    transform: rotate(270deg);
}
```

### Motion

The real challenge here was the animation timing. After watching a few episodes of wheel of fortune as "research", I noticed a few people try and build momentum by pulling the wheel back before throwing it forward, then the wheel slowly decreasing in speed, until the force of the arrow pulls it back slightly.

To do this with [CSS timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function) you need to make use of the mysteriously powerful `cubic-bezier()` timing function. The four arguments of this function defines a Cubic Bézier curve. I would liek to pretend I know fully how the maths behind this works but, sadly, I do not. I made use of this wonderful [css easing animation GUI](https://matthewlein.com/tools/ceaser) by Matthew Lein, to generate the curve with the draw-back and slow spin, until a tiny bounce, feel we where trying to get. Here it is in all it's glory:

```css
.elm {
    animation-timing-function: cubic-bezier(0.440, -0.205, 0.000, 1.130);
}
```

{{< figure src="/post-images/wheel-of-prizes_animation-example.gif" alt="" class="float-right" >}}

Without these animation timing functions the wheel just abruptly starts spinning and then stops, while using the default keywords like `ease` and `ease-in` didn't have quite the right feel.


### Putting the slices together.

### Making the loading random.

This part requires a bit more Javascript, but if you're happy with it being static you can ignore this step. To make things random I needed two things. First I needed to make the slices appear in a random order each time the page loads, by using JavaScript.

I Removed all the slices from the HTML so the dial now is just an empty `<div />`. I moved my prizes into an array that I can then shuffle to give us a random array of prizes we then iterate over to generate a randomised dial. The shuffle function is one I found on StackOverflow after searching "[how can I shuffle an array](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)"?

```js
const prizes = [ 'Prize A', ..., 'Prize L'];
```

Now our "winning" prize is in a different position each time the page loads, so we need to adjust the animation to ensure the dial ends on the correct slice each time. Finding the prize position in the array is just a matter of using `prizes.indexOf()` looking for the prize we want. 

Using this number we can then use that to adjust a spin offset. The "offset" as I call it is the rotation required from the starting position to the prize, which you can calculate by simply dividing 360 by the number of slices we have (12) and then multiply that by the prize position. So if our winning tile is in position 4, we need the wheel to spin 120deg to land on the correct tile. `(360 / 12) * 4 = 120`.

But just spinning to your prize doesn't look right. The wheel would need some full rotations to make the effect believable. To add initial rotations to the wheel before it settles on a prize we add `spinCounts` to the mix, which after multiplying by 360, and subtracting our offset gives us a rotation value that we can use in our animation.

Great so we have our rotation amount as a variable in our JavaScript, great, now how do we get this value into our CSS? Enter DOM manipulation. By dynamically creating a script tag in the `<head />` with our `keyframe` animation name and using CSS template strings to create our CSS rule using our spin value. Throw it all together and we this:

```js
function updateAnimationNumbers(prizePosition) {
  const spinCount = 3;
  const offset = (360 / 12) * prizePosition;
  const spinValue = (360 * spinCount) - offset;

  const styles = document.getElementById('dynamic').sheet;

  const CSSTemplate = `
    @keyframes spinning {
      from { transform: rotate(0); }
      to {  transform: rotate(${spinValue}deg); }
    }
  `;

  styles.insertRule(CSSTemplate, 0);
}
```

## Results

I tried to do this with as little JavaScript as possible, in an effort to reduce complexity, in hindsight this may have been easier with than without but we do love a challenge. The only Javascript in this project shuffles the "slices" on load and then adjusts the rotation number so it always ends on the winning tile! 

BrowserSupport is impressive for something this complex. However for those older browsers that don't support things like `:psudo` elements and CSS animation/transitions. A graceful fallback is in place that just shows them their prize. Luckily the application the final code went into kicks anyone IE9> to a upgrade page so I didn't have to worry too much about those oldies! 

