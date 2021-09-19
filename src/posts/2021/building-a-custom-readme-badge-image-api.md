---
title: Building a README badge image API with Python
date: 2021-08-20
---

README badges are great convenient way to display important information and links about a project. 
Showcasing things like your builds passing, or the number of downloads a project has. Here is an
example of some README badges from my [Flagpole WordPress plugin](https://github.com/jamesrwilliams/flagpole) project on GitHub:

![](../images/readme-badge-image-example.png)

One of our newer projects at work is a mono-repository with configuration and settings spread out over a few other repos,
which can make getting a high-level view of a single app's setup difficult. A co-worker and I were discussing building a quick
status dashboard experience to resolve this problem, that quickly morphed into creating an API that renders a summary image for
each app distribution we could put in the README. The more we thought about it, we realised that it would work better as a styled badge.

The plan was to have a unique badge for specific information in our mono-repo, showing things like 
individual app version or specific metrics developers can glance at when looking at the sub-directory
README for each brand. 

## Choosing Python

I have written a fair amount JavaScript in my career and felt it was time for a change up, and learn 
more Python. One of the major projects I work with at Points is a Flask API server so thought what
better way to learn more about the framework than try my hand at making my own.

One of the most confusing things about Python, for me, is the environment setup. I understand the need for virtual
environments just gets a little confusing between running things like [pip](https://pypi.org/project/pip/) inside or
outside a virtual env, alongside the difference between a `Pipfile` and a `requirements.txt` file[^1]. This was my first python project
I completed end-to-end, set up, testing and deployed so plenty of room for personal growth here and certainly learnt
a lot deploying this.

## Setup

To get started we set up a virtual environment using `pipenv` and then we're going access the 
python shell using `pipenv shell`. 

```
pipenv shell
```

Now we're in our virtual-environment we can install our dependencies, namely Flask, Gunicorn, and Pillow. Flask is the API framework
we're going to use for our routing etc. Pillow being the image library we're going to be using to manipulate our image data, and 
gunicorn is our web server.

```shell
pipenv install Flask
```

This command will install Flask into our pipenv virtual environment and update our `Pipfile` and `Pipfile.lock`. Now Flask 
is installed we can go ahead and install our other dependencies:

- `pipenv install gunicorn` - For our web server we're going to use [gunicorn](https://gunicorn.org/) 
- `pipenv install Pillow` - Our image processing library [Python-pillow](https://python-pillow.org/)

## The Flask API Routes

In our `app.py` file we're going to spin up a quick application and keep things as simple as possible. Here we just 
have two routes, first our actual API route for the badge endpoint, the second a catch-all fallback HTML page. With the
first route we're using route parameters to capture `<project>`, this is then passed into our function as a dynamic 
value based on the URL. The idea you can pass the specific `project` that you want this badge to represent via the 
image SRC url.

```python
from flask import Flask, render_template


# Setup the app and provide a route to our templates directory
app = Flask(__name__, template_folder='./templates/') 


@app.route("/api/badge/<project>")
def route_func(project):
    # We'll do more with this in a second
    

# Fallback route
@app.route('/')
@app.route('/<path:dummy>')
def fallback(dummy=None):
    return render_template('index.html')
```

Then to run this you can either run Flask directly or you can run things with gunicorn by running 
`gunicorn app:app` which represents a sort of `gunicorn file:func` syntax. So if your 
Flask file is called `app.py` and your flask instance is `app = Flask(...`.

## Images with Python Pillow

Python Pillow is a fork of the core Python Image Library (PIL) which makes working with images super simple. For 
this example we're mainly working with adding text however there is a comprehensive set of features with Pillow that
include much more than just text. Checkout the [Pillow docs](https://pillow.readthedocs.io/en/stable/) for a full 
feature set.
 
### Loading a base image

To get started we're going to use a base PNG image as our background that we're going to add text to, and 
load in a font file for said text. You can skip the font file but the default font used is super retro!

```python:title=app.py {numberLines: 10}
@app.route('/api/badge/<project>')
def route_func(project):
    # This reads the PNG into `im` for us to use
    with Image.open("./assets/base-images/base-single.png") as im: 

    # This creates our drawing context
    d = ImageDraw.Draw(im) 
    
    # Make our local font file available 
    font_regular_bold = ImageFont.truetype("./assets/fonts/Roboto-Bold.ttf", 16)
```

### Adding text

Now we've got our font and background image loaded, and a drawing context we can start rendering multi-line text to 
the image. You can use either [`d.text`](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.ImageDraw.text)
or [`d.multiline_text`](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.ImageDraw.multiline_text) 
depending on your needs. Either way you'll need the X/Y coordinates next, for the start of the text from the image's 
origin in the upper left origin corner. Then you can assign the font you want the text to be rendered, and it's fill 
color in RGB.

```python:title=app.py {numberLines: 18}
    # Make our local font file available 
    font_regular_bold = ImageFont.truetype("./assets/fonts/Roboto-Bold.ttf", 16)

    d.multiline_text((115, 2), "Hello", font=font_regular_bold, fill=(255, 255, 255))
    d.multiline_text((115, 20), "World", font=font_regular_bold, fill=(255, 255, 255))
```

We've got the text writing to the image at a specific place we can wire up how we get the content.
For us, we are reading a from a few internal APIs using the `project` argument as the project
identifier.

### Make it work in an HTML IMG tag

To make the image be delivered as an image we need to set up Pillow and Flask to return the data in
the correct encoding. We can do this by using a little utility function we used to do just that: 

```python:title=app.py {numberLines: true}
def serve_pil_image(pil_img):
    # First we create a new BytesIO object (bytes stored in memory)
    img_io = BytesIO()
    
    # We then save the provided Pillow image to that BytesIO variable 
    pil_img.save(img_io, 'PNG', quality=100)
    
    # Reset the IO stream position back to zero
    img_io.seek(0)
    
    # Return the image bytyes as an image/png format.
    return send_file(img_io, mimetype='image/png')
```

Then in the endpoint function we just return the value from this function like so:

```python:title=app.py {numberLines: 21}
    d.multiline_text((115, 2), "Hello", font=font_regular_bold, fill=(255, 255, 255))
    d.multiline_text((115, 20), "World", font=font_regular_bold, fill=(255, 255, 255))
    
    return serve_pil_image(image)
```

## Deploying to Heroku

It had been a while since I had used [Heroku Dynos](https://www.heroku.com/dynos), but it is my go-to service 
for Netlify esk app deployments. This was the first time deploying a new python application into the wild. 
One of my main stumbling blocks with this wsa not realising I needed a web server to power Flask. For python 
apps you can use [gunicorn](https://gunicorn.org/) server to get all the parts to click. Inside your 
[`Procfile`](https://devcenter.heroku.com/articles/procfile) (the Heroku config file) you specify the commands 
that each Heroku process runs each time the dyno starts. So ours looks like this for a web server to run our Flask app:

```
web: gunicorn app:app
```

The above is telling the Heroku `web` process to run the `gunicorn app:app` which, in turn, is the startup command for 
gunicorn with the app:app which corresponds to: `$(MODULE_NAME):$(VARIABLE_NAME)`. This is all hooked up in Heroku via GitHub, so it will automatically deploy the latest commits on my `main` branch.
You can also use the Heroku git repositories for deployments where you push directly to their servers but having two origins never sat right with me. 

[^1]: The `Pipfile` and `Pipfile.lock` that Pipenv uses are designed to replace requirements.txt.
