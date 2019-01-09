---
title: JQL Filters for Atlassian JIRA
author: James W.
type: post
date: 2018-03-19T15:32:13+00:00
draft: true
url: /?p=76
categories:
  - Project Management

---
To manage software projects at <a href="https://silver.agency" rel="noopener" target="_blank">Silver Agency</a> we use JIRA from Atlassian. Moving from Google spreadsheets for managing issues, JIRA worked well offering us more flexibility in managing snags and progress in our jobs.

One of the more interesting features I have only recently started using is the JIRA Query Language or JQL. A powerful search syntax for filtering the myriad of tickets that are in JIRA after a year or so of use. Here are a few useful filters I use on my dashboard to make my day a little easier:

    assignee=currentUser() AND status in (Backlog, "In Progress", "Selected for Development")