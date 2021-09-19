---
title: zxcvbn – A sensible password strength estimator
date: 2018-05-30T18:41:38+00:00
aliases: [/2018/05/30/zxcvbn-a-sensible-password-strength-estimator/]
---

Password requirements should get out of the user&#8217;s way. The often restrictive password requirements limiting users to a password of just 8 characters and forcing symbol use ignores one of the main parts of password security. Length. [Bonus XKCD comic][1].

I am a fanatical user of [1Password][2], my password manager of choice. With a few keystrokes, I can have a 64b random password with a mixture of symbols and alphanumeric symbols galore. Albeit this also has a password meter but it&#8217;s a little harder to please. Leaving it on the 64 length setting cannot be a bad thing.

That little green bar fills up as you swap out the first character of your pet&#8217;s name for a dollar symbol in the hope the meter fills up more, makes us think that passwords that might not be secure are green and safe.

If you&#8217;re looking for a better alternative there is a nice OSS project from the folks over at Dropbox that does the math. Check it out from the Dropbox OSS: https://github.com/dropbox/zxcvbn/

&nbsp;

&nbsp;

[1]: https://xkcd.com/936/
[2]: https://1password.com/
