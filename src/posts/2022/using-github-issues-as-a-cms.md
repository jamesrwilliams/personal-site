---
title: Using GitHub issues as a CMS
date: 2022-02-22
---

Reading lists, you know that feature in your browser you never quite use. You know the one, 
saves a URL for a rainy day. This is my quest for a better reading list. I once used Pocket for 
about a month (the Mozilla one), but it felt like it was trying too hard, too many invasive features
that got in the way of what experience clickbait and invasive for me.

I first did the usual thing, building my own over-engineered solution, this time with 
React and Firebase. I then got bogged down quickly with forms and CRUD operations, then reverted 
to a plain Google Sheet. Then I had a silly idea. Can I use GitHub issues as a CMS for my reading 
list entries? If the fields provided by issues are enough, you can utilise GitHub's extensive 
GraphQL API to make full use of all this information to create a view and use the GitHub mobile 
app to insert new data.

As always: just because you can do something, doesn't always mean you should. But in this case 
how will we know if we don't try!

## The plan

I need to move all my reading list entries into GitHub issues in a new private repository. Each 
issue will represent a separate article or entry in my reading list. The status of which will 
reflect its status, open being an unread entry, while closed, read. All the issue's labels and 
comments will also be brought over for added context. I even wrote a quick and dirty node script 
to parse a CSV and insert these items via the API. 

Now all this information is available via the GitHub API what am I going to do with it? I toyed 
with the idea of building a separate app/site for it but realistically why double the effort 
when I could just add this functionality to my personal site.

## Adding To Gatsby

I use the [gatsby-source-github](https://www.gatsbyjs.com/plugins/gatsby-source-github/) plugin to 
add the GitHub GraphQL schema to Gatsby's data sources. With that installed you can then explore 
the vast amount of information available to you via Gatsby's GraphQL explorer, or alternatively 
You can use the [GitHub GraphQL API explorer](https://docs.github.com/en/graphql/overview/explorer) 
to see the full depth of information available to you via the API before wiring anything up in 
Gatsby. I then use these issues to create new pages via `gatsby-node.js`.

```js:title=gatsby-node.js
const { data } = await graphql(`
  {
    github {
      repository(name: "repo-name", owner: "jamesrwilliams") {
        issues(first: 100) {
          nodes {
            number
          }
        }
      }
    }
  }
`);

const readingListEntryTemplate = require.resolve('./src/templates/ReadingListEntryTemplate.tsx');
const entries = data.github.repository.issues.nodes;

entries.forEach((entry) => {
  createPage({
    path: `/resources/reading/${entry.number}`,
    component: readingListEntryTemplate,
    context: {
      ...entry,
    },
  });
});
```

We only really need the issue number as `context` here, we can use that in a separate 
query on the individual entry page to grab the rest of the info we want.

### Parsing the issue body

The two things I need at minimum to make this work is a URL and a link title. A GitHub issue has 
a title field and a freeform text field. I could have the URL as the issue title but that is not 
very easy to read. If I want both the human-readable post title and the URL I need to find a way 
to denote this information in a not too obtrusive way.

My first iteration of this had both to the issue title by using Markdown link 
syntax (`[Text](URL)`) but that made the issue screen in GitHub almost unreadable. Next best 
option was the usual front-matter format with three dashes (`---`) and then key value props but 
on GitHub this strangely renders as a table. My final solution was to use a bulleted list at the 
start of the issue as my front-matter that I can parse for metadata. Leaving anything under the 
initial bulleted list as initial content or notes.

To make getting new posts into the system easier I created a quick issue template that allows me 
to quickly paste in URLs instead of having to type out the `- URL:` markdown.

```markdown:title=.github/ISSUE_TEMPLATE/reading-list-entry.md
---
name: Reading List Entry
about: Add new items to the reading list
title: ''
labels: ''
assignees: ''
---

- URL: 

```

After some quick parsing using [cheerio](https://www.npmjs.com/package/cheerio) to filter out the 
initial `UL` metadata that lets me isolate the URL and any description I may have written in 
the issue content.

### Using comments

Comments on each issue or entry can be pulled in to the site also. I intend to use them to keep 
track of my notes or any additional related items so the site is updated with that information. From
here I map the issue body and the comments to notes on the post and render them to the page 
template for the single entry view.

### Page Query

The single entry page uses the page query below to fetch the associated content from the issue 
number, I can then use it like any other data in React.

```js:title=/src/templates/ReadingListEntryTemplate.tsx
export default ReadingListEntryTemplate;

export const query = graphql`
  query EntryQuery($number: Int!) {
    github {
      repository(name: "repo-name", owner: "jamesrwilliams") {
        issue(number: $number) {
          number
          title
          bodyHTML
          createdAt
          lastEditedAt
          updatedAt
          comments(first: 100) {
            totalCount
            nodes {
              bodyHTML
            }
          }
        }
      }
    }
  }
`;
```

## Weekly builds = weekly updates

I've got a cron adjacent system working on Google Cloud Scheduler to trigger a site build on Netlify
each week. This is used to update any dynamic data this site uses as content from various APIs (like 
GoodReads) so this reading list system will update at least each week, or whenever I trigger an 
additional build, by commit or hitting the deployment button in Netlify.

