---
title: 'Automate git activities with Node'
date: 2021-09-02
---

- we have CI processes that deploy specific projects in part of a mono repo.

## Gitlab Mono-repositories

GitLab's mono-repository support isn't great for our set-up. We've got project with separate sub-brands in folders and 
can have up to (N) "brands" within the `brands` directory that each runs the same pipeline. Each representing a unique
distribution of the project.

```
/brands
  /brand-1
  /brand-2
```

We can specify which brand our commit is targeted at by using a custom implemented commit message flag system. When the
CI jobs run the commit message is parsed to remove the `--brand` flag from a commit to pass to the subsequent processes.
For example: 

```
JIRA-0000 Fix foo --brand=brand-1
``` 

Built a CLI with OCLIF that handles batch committing and tagging a project to trigger a series of deployments.

## Why automate

We recently made some changes to our S3 configuration that required us to re-deploy all our brands. For infrastructure
reasons, and for good reason, we don't have a facility to re-deploy every brand in one go. So sadly we need to deploy
50+ brands manually. Each requiring a recent commit and a subsequent tag to trigger the CI pipelines and go through our 
release control process.

## A CLI that can Git?

Dumb automation / CLI designs are my favourite. This solution started as an exercise to see if it is possible to 
interact with Git with node. Turns out I've done something minor with git before, just a check with another CLI that
checked you where on the `master` branch before trying to run a command. That worked by using
[`exec()`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback).

I found a fantastic Node library for interacting with Git in clean, async way: 
[steveukx/git-js](https://github.com/steveukx/git-js). This makes interacting with the git repo a breeze.

```js
const simpleGit = require('simple-git')
const git = simpleGit()

const commit = await git.commit(`JIRA-0000 Fix foo --brand=brand-1`, {'--allow-empty': null})
```

How easy is that!? The library has excellent documentation and pretty much can support any git workflow required, so our simple
commit and tag ask can easily be managed with this library.
 
## Let's build a CLI

With working with git in node being that easy why not write a simple node CLI to automate these commits and tags. 
[OCLIF](https://oclif.io/) - the Open CLI Framework - by the folks over at Heroku, is an awesome framework to quickly
spin up a sensible CLI. It has a really rich feature set right out of the box and is my now go to CLI pairing.

I started with a multi-command CLI setup, just in case this project gets more complicated, nothing like flying in the 
face of <abbr title="You ain't gonna need it">YAGNI</abbr>. The OCLIF is a based around self-contained command files in
the `/src/commands/` directory, we start out with a basic `run.js` file with some simple scaffolding. Oclif handles a
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

Our use case is pretty specific, we want to create N number of commits with a specific flag in the commit message to 
trigger our CI workflow. I want to make this as extensible as possible, so I've made a lot of flags for this command to
support any changes you could want to make. Here are the options I settled on:

| Flag | Description | Default Value |
| ---- | ----------- | ------- |
| `--key` |  
| `--value` | |
| `--file` | |
| `--commit-message` | |
| `--push` | |
| `--tag` | |

### Command flags

- `--key` (required) = This is the name of the flag we're going to add to the commit message: E.g. `--flag=foo` would 
end up being `--foo` in the commit message.
- `--value` - Used to set a one time value associated with the `--key` e.g. `--flag=foo --value=bar` would end up as 
with a commit message ending with: `--foo=bar`
- `--file` - This is a mutually exclusive flag with `--value` that allows you to provide multiple values to pass with 
the `--key` as a file, just provide the file path to a new-line separated list of values.
- `--commit-message` - This is the string provided at the start of the commit message prior to the --key=value additions
at the end.
- `--tag` (bool) - Tell the CLI to commit and tag at the same point. The tag name will be a URL styled commit message 
and --key=value pair. 
- `--push` (bool) - Optionally tell the CLI to push these commits (and tags) to the origin.
- Option to tag also - Tagging replaces all spaces in the commit message with `_` to make it a valid tag.

And here is how those flags are represented in the command.js file with OCLIF handling a lot of the CLI logic, such as
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

See the full project on GitHub [jamesrwilliams/batch-commit](https://github.com/jamesrwilliams/batch-commit)
