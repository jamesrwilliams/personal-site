---
title: "Using the karama commit message style"
type: post
date: 2019-08-08T09:41:33-04:00
---

For my own projects (and any others I start) I *try* to stick to the [karma git commit message conventions](https://karma-runner.github.io/4.0/dev/git-commit-msg.html) which in turn is based upon the [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#). These resolves around the following format:

```bash
subject(scope): Message body
```

An example of its use would be the following, which is referencing a feature commit based around a ticket number "foo-1234".
                               
```bash
feat(foo-1234): Added new responsive banner text 
```

This makes the git log much easier to read at a glance along with this standard you can then search the git log for specific commits and things you've changed/fixed etc by using grep and the message subject prefix.

```bash
git log HEAD --grep fix
```

## Allowed values for the message subject

- `feat` - New feature for the user, not a new feature for build script.
- `fix` - Bug fix for the user, not a fix to a build script.
- `docs` - Changes to the documentation.
- `style` - Formatting, missing semi colons, etc; no production code change.
- `refactor` Refactoring production code, eg. renaming a variable.
- `test` Adding missing tests, refactoring tests; no production code change.
- `chore` Updating grunt tasks etc; no production code change.

