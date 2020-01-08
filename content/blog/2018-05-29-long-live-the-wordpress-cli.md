---
title: Long live the WordPress CLI
date: 2018-05-29T16:31:06+00:00
aliases: [/2018/05/29/long-live-the-wordpress-cli/]
---
My previous method of choice for migrating a site from a development URL to a production one was to open an SQL dump in my editor, find-and-replace all the instances of the URL (sans-protocol) and then upload the new SQL file to the server.

## The Problem

Our build stack at Silver, heavily relied upon ACF for dynamic page builder elements. They added a _link_ field type that was the saving grace of tightly controlled link actions, allowing users to edit the content and target but in a friendly way. However they introduced me to something I was unaware of, serialised data in a database. This really doesn&#8217;t play well with my find-and-replace approach at all. A lesson I learnt the hard way just after deploying a client site realising all the links (there was a lot) had gone blank. Luckily the source handled the empty variables correctly but the client wasn&#8217;t happy.

## Enter the CLI

After doing some digging looking into the what and why behind this. I discovered my find-replace action was corrupting the PHP serialized data that the links where saved as. The solution using the **wp cli**. A php based CLI for preforming actions on a WordPress install, some not possible via the UI. One of the best features in my opinion is the search/replace feature.

> Search/replace intelligently handles PHP serialized data, and does not change primary key values.

In one simple command you can find and replace the current database for URLs and other strings. It also has a handy output flag allowing a database file to be exported to the file system rather than preforming the action directly on the current database. For example:
```bash
    wp search-replace foo bar --export=database.sql
```
The `--dry-run` flag is also a personal favourite for avoiding nasty surprises while running these commands.

  * Read more about the CLI here: <https://wp-cli.org/>
  * Full info on the commands: <https://developer.wordpress.org/cli/commands/>
