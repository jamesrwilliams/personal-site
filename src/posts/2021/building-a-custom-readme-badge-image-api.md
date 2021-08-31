---
title: Building a README badge image API with Python
date: 2021-08-20
---

The idea here is to have a unique badge for specific information in our mono-repo. Things like individual app version or
specific metrics developers can glance at when looking at the sub-project READMEs. Think those images at the top of 
READMEs on GitHub, but with custom text, design and connected to a custom data source / API.

I have written a fair amount JavaScript in my career and felt it was time for a change up. Time I branch out and learn 
some more Python. One of the major projects I work with at Points is a Flask API server so thought what better way to 
learn more about the framework than try my hand at making my own.

## Setup

One of the most confusing things for me about Python is the environmental setup. I understand the need for virtual 
environments just gets a little confusing between running things like [pip](https://pypi.org/project/pip/) inside or 
outside an env. And the difference between a `Pipfile` and a `requirements.txt` file. This was my first python project 
I completed end-to-end, set up, testing and deployed so plenty of room for personal growth here and certainly learnt 
a lot deploying this app.

One of our main projects at Points is written with the Flask python framework. This was a perfect opportunity to start 
my own, albeit, much more basic. We've set up a virtual environment using `pipenv` and then we're going access the 
python shell using `pipenv shell`. 

```
pipenv shell
```

Now we're in our virtual-environment we can install our dependencies, namely Flask and Pillow. Flask is the API framework
we're going to use for our routing etc, and Pillow being the image library we're going to be using to manipulate our image data.

```jshelllanguage
pipenv install Flask
```

This command will install Flask into our pipenv virtual environment and update our Pipfile and Pipfile.lock. Now Flask 
is installed we can go ahead and install our other dependencies:

- `pipenv install gunicorn` - For our web server we're going to use [gunicorn](https://gunicorn.org/) 
- `pipenv install Pillow` - Our image processing library [Python-pillow](https://python-pillow.org/)

## The Flask API Routes

In our `app.py` file we're going to spin up a quick application and keep things as simple as possible. Here we just 
have two routes, first our actual API route for the badge endpoint, the second a catch-all fallback HTML page. With the
first route we're using route parameters to capture `<project>`, this is then passed into our function as a dynamic 
value based on the URL. The idea you can pass the specific `project` that you want this badge to represent here.

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

Then to run this you can either run Flask directly or you can run things with gunicorn by running `gunicorn app:app` which represents a sort of `gunicorn file:func` sytax. So if your 
Flask file is called `app.py` and your flask instance is `app = Flask(...`.

## Images with Python Pillow

Python Pillow is a fork of the core Python Image Library (PIL) which makes working with images super simple. For 
this example we're mainly working with adding text however there is a comprehensive set of features with Pillow that
include much more than just text. Checkout the [Pillow docs](https://pillow.readthedocs.io/en/stable/) for a full 
feature set.
 
### Loading a base image

To get started we're going to use a base PNG image as our background graphic that we're going to add text to, and 
load in a font file for said text. You can skip the font file but the default font used is super retro!

```python
@app.route('/api/badge')
def route_func():
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

```python
    # Make our local font file available 
    font_regular_bold = ImageFont.truetype("./assets/fonts/Roboto-Bold.ttf", 16)

    d.multiline_text((115, 2), "Hello", font=font, fill=(255, 255, 255))
    d.multiline_text((115, 20), "World", font=font, fill=(255, 255, 255))
```

### Make it work in a HTML IMG tag

To make the image be delivered as an image we need to set up Pillow and Flask to return the information in the correct 
encoding. We can do this by using a little utility function I wrote:

```python
def serve_pil_image(pil_img):
    # First we create a new BytesIO object (bytes stored in memory)
    img_io = BytesIO()
    
    # We then save the provided Pillow image to that BytesIO  variable 
    pil_img.save(img_io, 'PNG', quality=100)
    
    # Reset the IO stream position back to zero
    img_io.seek(0)
    
    # Return the image bytyes as an image/png format.
    return send_file(img_io, mimetype='image/png')
```

## Deploying to Heroku

It had been a while since I had used [Heroku Dynos](https://www.heroku.com/dynos), but it is my go-to service for Netlify esk app deployments. This was the
first time deploying a new python application into the wild. One of my main stumbling blocks with this wsa not 
realising I needed a web server to power flask. For python apps you need to use [gunicorn](https://gunicorn.org/) 
server to get all the parts to click. Inside your [`Procfile`](https://devcenter.heroku.com/articles/procfile) (the Heroku config file) you specify the 
commands that each Heroku process runs each time the dyno starts. So ours looks like this for a web server to run our Flask app:

```
web: gunicorn app:app
```

The above is telling the `web` process to run the `gunicorn app:app` which, in turn, is the startup command for 
gunicorn with the app:app which corresponds to: `$(MODULE_NAME):$(VARIABLE_NAME)`. This is all hooked up in Heroku to GitHub it'll automatically deploy the latest commits on my `main` branch.
You can also use the Heroku git repositories for deployments where you push directly to their servers but having two origins never sat right with me. 

## All in

