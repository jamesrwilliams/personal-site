---
title: 'Automate git activities with Node'
date: 2021-09-02
---

Turns out you can automate Git commands and processes with node, and interact with any other 
scripts with a copious use of `child_process.exec`. A recent silly exercise in wasteful automation 
of mine was to speed up some git housekeeping we need to do with one of our monorepo projects. GitLab's 
mono-repository support isn't great for our set-up. We've got project with separate sub-brands in folders and 
can have up to (N) "brands" within the `brands` directory that each runs the same pipeline. Each representing
a unique distribution of the project.

```
/brands
  /brand-1
  /brand-2
```

We can specify which brand our commit is targeted at by using our custom commit message parsing system. When the
CI jobs run the commit message is parsed to grab the `--brand` flag from a commit message to pass its value to the 
subsequent processes. For example if this is our commit message `JIRA-0000 Fix foo --brand=brand-1`, our CI pipeline
would parse the message and then an environment variable of `brand` to `brand-1`.

Normally during the course of development we deploy updates to individual brands pretty frequently.
We recently made some changes to our S3 configuration that required us to re-deploy all our brands and for 
infrastructure reasons, (and a little by design) we don't have a facility to re-deploy every brand in one go. Sadly that 
means we need to deploy 50+ brands manually. Each requiring a recent commit and a subsequent tag to trigger the
CI pipelines and go through our release control process.

## A CLI that can Git?

Dumb automation / CLI designs are my favourite. This solution started as an exercise to see if it is possible to 
interact with Git with node. Turns out I've done something minor with git before, just a check in another CLI that
ensured you are on the `master` branch before trying to run a command that worked by using
[`exec()`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback).

Instead of attempting to recreate all of Git's required commands via `exec`, I found a fantastic
library, [steveukx/git-js](https://github.com/steveukx/git-js), for interacting with Git in clean, async way  
that makes interacting with the git repo a breeze. This is all you need to write with `simple-git` to add an empty commit:

```js
const simpleGit = require('simple-git')
const git = simpleGit()

const commit = await git.commit(`JIRA-0000 Fix foo --brand=brand-1`, {'--allow-empty': null})
```

How easy is that!? The library has excellent documentation and pretty much can support any git workflow required, so our simple
commit and tag ask can easily be managed with this library.
 
## Let's build a CLI

Now we're working with git in node with a nice and easy setup, why not write a simple node CLI to automate these commits and tags. 
[OCLIF](https://oclif.io/) - the Open CLI Framework - by the folks over at Heroku, is an awesome framework to quickly
spin up a sensible CLI. It has a really rich feature set right out of the box and is my now go to CLI framework.

I started with a multi-command template, just in case this project gets more complicated, nothing like flying in the 
face of <abbr title="You ain't gonna need it">YAGNI</abbr>. The framework is a based around self-contained command files in
the `/src/commands/` directory where we start out with a basic `run.js` file with some simple scaffolding. OCLIF handles a
lot of the leg-work around `--help` flags and things like command descriptions. Our basic command file looks a little
like this:

```js
const {Command, flags} = require('@oclif/command')

class RunCommand extends Command {
  async run() {
    const {flags} = this.parse(RunCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/run.js`)
  }
}

RunCommand.description = `Describe the command here
...
Extra documentation goes here
`

RunCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RunCommand
```

Our use case is pretty specific, we want to create `N` number of commits with a specific flag in the commit message to 
trigger our CI workflow. I want to make this as extensible as possible, so I've made a lot of flags for this command to
support any changes you could want to make. Here are the options I settled on:

| Flag | Description |
| ---- | ----------- |
| `--key` | (required) = This is the name of the flag we're going to add to the commit message: E.g. `--flag=foo` would end up being `--foo` in the commit message. |
| `--value` | Used to set a one time value associated with the `--key` e.g. `--flag=foo --value=bar` would end up as with a commit message ending with: `--foo=bar` |
| `--file` | This is a mutually exclusive flag with `--value` that allows you to provide multiple values to pass with the `--key` as a file, just provide the file path to a new-line separated list of values. |
| `--commit-message` | This is the string provided at the start of the commit message prior to the --key=value additions at the end. |
| `--push` | (bool) - Optionally tell the CLI to push these commits (and tags) to the origin.
| `--tag` | (bool) - Tell the CLI to commit and tag at the same point. The tag name will be a URL styled commit message and --key=value pair. |

Here is how those flags are represented in the `command.js` file with OCLIF handling a lot of the CLI logic, such as
shorthands, validation, mutually exclusive values, required values and defaults.

```js
RunCommand.flags = {
  file: flags.string({
    char: 'c',
    multiple: false,
    exclusive: ['flag-value'],
    description: 'Path to a txt file with a new-line seperated list of values to be used as the --value',
  }),
  key: flags.string({
    char: 'f',
    multiple: false,
    required: true,
    description: 'The flag name to add to the commits',
  }),
  value: flags.string({
    char: 'v',
    multiple: false,
    description: 'The value passed to the key',
    exclusive: ['config-file'],
  }),
  tag: flags.boolean({
    description: 'Create tags along with commits',
    default: false,
  }),
  'commit-message': flags.string({
    char: 'm',
    multiple: false,
    required: true,
    description: 'The commit message prefix (used for all commits when used with --file)',
  }),
  push: flags.boolean({
    char: 'p',
    default: false,
    description: 'Push to the remote after each commit',
  }),
}
```

## Few cosmetic changes for better experience

I am a fan of making my projects super easy to use in case I forget how they work in a few weeks.
In an effort to improve the developer experience I added an interactive confirmation prompt with [commander](https://github.com/tj/commander.js/)
and a nice output summary table using [`cli-ux`](https://github.com/oclif/cli-ux) and it's table functionality to display a table of changes that users can review before committing them. 

![](../images/batch-commit-preview.png)

This is a prime example of spending a few hours automating something that probably didn't need to,
but it was also a fun experiment in whether this is a thing we should do. [Was this worth the time](https://xkcd.com/1205/), 
probably not, but we do what we must because we can. 

You can see the full project on GitHub [jamesrwilliams/batch-commit](https://github.com/jamesrwilliams/batch-commit)
