---
title: "Fisticuffs with timezones in Javascript"
date: 2019-02-08T15:42:24-05:00
slug: "fisticuffs-with-timezones-in-javascript"
---

Today marks the day I had my first experience with the headache that is programming and timezones. I was working with a booking calendar for a service based in the UK, with me sat at my dinner table in Toronto, which is five hours (UTC-5 or EST) behind the UK. I was trying to debug an issue where the displayed dates of the booking calendar JS widget was not matching the PHP output from the database.

Turns out the server was rendering the dates correctly, using the UTC timezone from where it was based, and the issue was the JavaScript. So a little more poking around until I noticed the JS widget that renders the calendar on the UI was interpreting these using the local computer timezone, which for me was EST, hence why the dates where not matching up.

## Date.prototype.getTimezoneOffset();

After a little research into how to handle this I came across the [`Date.prototype.getTimezoneOffset()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) method. It returns the number of minutes between the current computer timezone (EST in Toronto) and UTC (Coordinated Universal Time) from a date object. For example:

```javascript
let toronto = new Date().getTimezoneOffset();
console.log(toronto);
// result: 300
```

Any time zones ahead of UTC will be negative, so calculating with the difference would give you the correct time. Very useful for adjusting a time to a correct timezone right?

## Just use getTimezoneOffset() right? Nope.

I need to adjust these to be all based in UK time to keep things in order. Can I just use the offset to adjust the times. Not really, I could but it would not end well. Like most things with Javascript, it's not that easy. I need to properly consider things such as daylight savings time and other nuances with dates. It's not wise to assume anything, which is the reason behind Moment.js being such a massive JS library. So I need a more robust way to calculate these dates.

The solution is adjust the way the dates are displayed so that they are always displayed as a time in the target timezone, in my case which is "Europe/London". How can we do this without messing with the date object directly?

## Localising a date object

Using the `toLocaleString();` method which normally returns a localised string of the date object as in _MM/DD/YYYY_ for you Americans, and _DD/MM/YYYY_ for the UK. However you can pass an object of options, one of which is `timeZone`. This we can set to something like 'Europe/London' to display the localised time in the specified timezone. Example:

```javascript
let EST = new Date().toLocaleString("en-CA");
let UTC = new Date().toLocaleString("en-CA", { timeZone: "Europe/London" });

console.log({
  EST: EST,
  UTC: UTC,
});
```

This does not change the initial value of your date object and just adjusts it for the provided timezone. Solving my problem of the drifting time object, winning!

## Show difference between timezones

As a bonus here is how to display the hours difference as text you can always just multiply the number by -1, to invert so 300 would become -300.

```javascript
let offset = new Date().getTimezoneOffset();

let time_difference_in_hours = offset / 60;

console.log(time_difference_in_hours * -1);
// result: -5
```

**TL;DR** - [`Date.prototype.getTimezoneOffset()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) is great for just that. Getting the offset of your current timezone from UTC. If you want to get the current time in another timezone, use something like [`Date.prototype.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) and pass the appropriate locale string as an argument like so:

```javascript
let output = new Date().toLocaleString("en-CA", { timeZone: "Europe/London" });
```
