---
title: Using the Toggl Track API to automate a daily ritual with Python
date: 2021-09-22
---

I have a real habit of over-engineering automation tools. This is yet another, semi-useless 
automation project, but this time using Python! Before we dive into specifics, here is a bit of 
context...

In my current team's form of agile, we post a short message at the end of the day summarising where we 
got to with our tickets prior to sign off. This acts as a cover for our teammates in other timezones before the stand-up session the next day.

Our east coast folks get to read west coast summaries when we log in the morning, and 
our west coast folks read them as we log off, roughly after their lunch. I find these particularly useful in 
bridging the gap in progress or project updates between daily's. These messages normally follow the
format of a short bullet list of updates with context or links as needed to ticket and progress.

I also have to track my time (like many other developers). For this I use [Toggl Track](https://toggl.com/track/), 
it has a super sleek UI, baked in [Pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique) 
in the desktop app, and simple project assignment functionality letting me group my time entries by 
ticket super easily. Tie in their iOS app and an extension for my Stream Deck I have no excuse not 
to keep an eye on my time! I'm not amazing at remembering to log my hours, my current 
engineering role at Points is actually the first development job where I've had actual timesheets, 
and I just haven't built up that habit yet, but I had an idea on how to help: 
*Generate my daily summaries from my Toggl time tracking entries!*

## Automate with Toggl API

Turns out Toggle Track has a REST API and buried in their v8 docs are details of their 
[`/time_entries`](https://github.com/toggl/toggl_api_docs/blob/master/chapters/time_entries.md#get-time-entries-started-in-a-specific-time-range)
endpoint where you can provide a start and end date and the API will respond with the entries that 
match, a daily summary if you will.

I put together a quick Python script to using `requests` to send a GET request to that endpoint and calculating 
exact ISO8601 start and end dates, and the API responds with a JSON array of entries looking like this:

```json
[
  {
		"id":436691234,
		"wid":777,
		"pid":123,
		"billable":true,
		"start":"2013-03-11T11:36:00+00:00",
		"stop":"2013-03-11T15:36:00+00:00",
		"duration":14400,
		"description":"Meeting with the client",
		"tags":[""],
		"at":"2013-03-11T15:36:58+00:00"
  }
]
```

I tend to reuse the same description to track work on each ticket which lets me group them together. 
This saves me creating a new Toggl project for each one as they are a bit cumbersome to manage. 
For larger or longer term projects I do create them, but they are few and far between.

## Processing my entries

So we've got a request to the API, with our credentials, and our start and end dates as parameters.
Time to start manipulating our output! I start by combining entries with duplicate descriptions adding their durations together. I then sort the
resulting `dict` by duration so my most time-consuming (and what I'd like to think) most valuable work is at the top.

```python:title=lib/summary.py {numberLines: 6}
def generate_summary_list(entries):
    items = {}

    if len(entries) == 0:
        return []

    for entry in entries:
        name = entry['description']
        duration = entry['duration']

        if name not in items:
            items[name] = duration
        else:
            items[name] = items[name] + duration

    return sorted(items.items(), key=lambda kv: kv[1], reverse=True)
```

## Rendering

From here I create an output string to match what I normally post in Slack, a title line with an
emoji, each entry starting with a bullet and then a closing line.

```python:title=lib/summary.py {numberLines: 24}
def render_output(entries):

    if len(entries) == 0:
        print("No entries - Did you not track your time today?!")
        return

    print(f"\nGenerating daily summary for {date.today()} from Toggl Track:\n")

    final_parts = ["\N{Studio Microphone} Today"]

    for entry in entries:
        final_parts.append(f"• {entry[0]}")

    final_parts.append("\nYour daily summary has been copied to your clipboard!")

    final = "\n".join(final_parts)

    pyperclip.copy(final)

    return final
```

One new thing I've picked up while doing this is `Line 77` and it's fun `\N{...}` syntax. This 
represents an escape sequence for [named characters](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)
in the Unicode database, so here we're using the `Studio Microphone` emoji name which results with the corresponding emoji being rendered.
I also implemented `pyperclip` at the very end to copy the output, bullet and all, to my clipboard
so its nice and easy to share on Slack. This is then all wired up in `app.py` like so:

```python:title=app.py
#!/path/to/your/python/interpreter

import datetime
import os

from lib.summary import generate_summary_list, render_output

from dotenv import load_dotenv
from datetime import datetime, date, time, timedelta

import requests

load_dotenv()

API_KEY = os.getenv('TOGGLE_KEY')
API_BASE = "https://api.track.toggl.com/api/v8/"


def run():

    if not API_KEY:
        print("Can't find your TOGGLE_KEY - Ensure it's exported and available: `echo $TOGGLE_KEY`")
        return

    dt = datetime.combine(date.today(), time(0, 0, 0))
    start_of_day = int((dt - timedelta(days=0)).timestamp())

    start = datetime.fromtimestamp(start_of_day).astimezone().isoformat()
    end = datetime.now().replace(microsecond=0, minute=0).astimezone().isoformat()

    params = (
        ('start_date', start),
        ('end_date', end),
    )

    response = requests.get(f"{API_BASE}/time_entries", params=params, auth=(API_KEY, 'api_token'))
    data = response.json()

    summary_list = generate_summary_list(data)

    print(render_output(summary_list))


if __name__ == "__main__":
    run()
```

As you can see on the first line of `app.py` we're setting the python interpreter using a 
[shebang `#!`](https://en.wikipedia.org/wiki/Shebang_(Unix)) which allows me to run this file from 
the command line without the `python` prefix, after making it executable with: `chmod +x app.py`. 

I made available via the command line by running a symlink to my python script in 
my `/usr/local/bin` as `eod`.

```shell
ln -s /path/to/project/app.py /usr/local/bin/eod
```

Check it out on GitHub: https://github.com/jamesrwilliams/eod
