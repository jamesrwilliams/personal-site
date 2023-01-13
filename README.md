# My personal site

[![Netlify Status](https://api.netlify.com/api/v1/badges/7fc57b18-f2ef-4fc0-9d79-ab5d5287b0fb/deploy-status)](https://app.netlify.com/sites/jamesrwilliams-site/deploys) [![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/b508b0be68d641af88cbb7856db0541c)](https://www.codacy.com/gh/jamesrwilliams/personal-site/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jamesrwilliams/personal-site&amp;utm_campaign=Badge_Grade) [![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/jamesrwilliams/personal-site)

This is the source code for my personal website. Built with [GatsbyJS](https://www.gatsbyjs.org/), 
deployed via [Netlify](https://www.netlify.com/). I'm a development engineer based in Canada, 
who enjoys building delightfully fast, easy to use, and engaging digital projects. I'm working with 
the wonderful team at [Points](https://points.com), building the future of loyalty.

## Notes

This project uses [Git Large File Storage (LFS)](https://git-lfs.github.com/) to store images,
remember to install and pull down images before trying to run a fresh build. You can do this with:

```bash
git lfs fetch
```

## Code Fence Syntax

This site uses [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/) 
as our highlighting engine for Markdown.

### Line Numbers

Highlighting lines can be done like so:

```markdown
```js{1,4-6}
```

Line numbers can be added using: 

```markdown
```js{numberLines: 1}
```

Code file name:

```markdown
```python:title=app.py {numberLines: 10}
```
