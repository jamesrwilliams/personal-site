---
title: "Autocomplete Branch Names Git"
date: 2018-07-23
---

Trying to get over the force of habit that is using tab to auto-complete things on Mac. Well, it doesn't work for git out of the box but here is a way to get it working on the command line. You can use this script as part of your bash_profile in order to be able to autocomplete long branch names by pressing TAB.

First, download the script to your home folder:
{{< highlight bash >}}
curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash
{{< /highlight >}}
Next, you need to edit your <code>~/.bash_profile</code> and add the following:
{{< highlight bash >}}
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
{{< /highlight >}}

Source: <a href="http://apple.stackexchange.com/questions/55875/how-can-i-get-git-to-autocomplete-e-g-branches-at-the-command-line/55886#55886">http://apple.stackexchange.com/questions/55875/how-can-i-get-git-to-autocomplete-e-g-branches-at-the-command-line/55886#55886</a>
