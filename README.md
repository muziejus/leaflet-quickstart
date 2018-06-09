# leaflet-quickstart

![Project Demo Screenshot](https://i.imgur.com/nF8ZR40.jpg)

A container for quickstarting [Leaflet](http://leafletjs.com) projects for
learners, `leaflet-quickstart` provides a single webpage, `index.html`, that
is a full-page map that can be controlled via the JavaScript file
`scripts.js`.

The webpage loads the following extensions and makes them available to
`scripts.js`:

* [Bootstrap](http://getbootstrap.com) for styling popups and the cards that
float above the map in the `#above-map` container.
* [Full jQuery](http://jquery.com) to provide access to the `$.getJSON()`
method, should the learner want to download GeoJSON data from somewhere else.
* [d3](http://d3js.org/), for parsing CSV files and being awesome.
* [Turf.js](http://turfjs.org), an advanced geospatial analysis tool for
analyzing data inside the browser.
* [Leaflet-Providers](https://github.com/leaflet-extras/leaflet-providers),
which provides quick, configurable basemaps for Leaflet
* [Markdown-it](https://github.com/markdown-it/markdown-it), a
[Markdown](http://en.wikipedia.org/wiki/Markdown) parser.
* [FontAwesome](https://fontawesome.com/), to provide icons.

## Installation with Atom

1. Fork this repository by clicking on the fork button in the top right.

1. Next, clone your copy of this repository by clicking on the “Clone or
   download” button and copying the url in “Clone with HTTPS.”

1. In Atom, open the Command palette (`cmd-shift-p` or `ctrl-shift-p`) and
   type in “clone.”

1. Choose “GitHub: Clone” and paste in the url you copied above.

1. The repository will now be cloned onto your computer. By default, on the
   Mac it will be saved as `/Users/yourusername/github/leaflet-quickstart`. On
   Windows, it will be in
   `\Users\yourusername\documents\github\leaflet-quickstart`. Those are
   important paths to keep track of for when you spin up your tiny web server
   below.

For questions regarding installing Atom or installing Git, see [this list of
installers](https://plain-plain-text.org/installers).

## Uploading and Sharing

When you commit changes and push them to GitHub, you will automatically be
making a website you can share with your friends and colleagues. To do so, you
must enable it, however.

1. Click on the Settings tab at the top of this window.

1. Scroll down to “GitHub Pages.”

1. Change the “None” dropdown to “master branch” and click “Save.”

Now you have a url you can share along the lines of
`http://githubusername.github.io/leaflet-quickstart/`.

## Using `$.getJSON()` Locally

This repository is wired out of the box for you to use the `$.getJSON()`
method to access JSON files on the internet. The signature for that method is
pretty straightforward, and you can [read more about it from
jQuery](https://api.jquery.com/jquery.getjson/). If you want to access files
in the same folder as your `index.html` and `scripts.js` files, however, you
will need to spin up a local webserver.

**Note:** Once your JSON files are pushed to GitHub, you can access them using
the GitHub url above and stop using a local webserver, if you like.

* On a Mac, you can spin up a web server quickishly with Python:

  1. Open up Terminal.app

  1. Find out what version of Python you have by typing: `python -V` (with a
     capital V!).

  1. If the response is 2.x, launch a server by typing `python -m
     SimpleHTTPServer 8888`

  1. If the response is 3.x, launch a server by typing `python -m http:server
     8888`

* On Windows, 
  
  1. First you have to [install
     Python](https://www.python.org/downloads/windows/). I recommend the
     “Windows x86-64 web-based installer.” 

  1. The install takes about ten minutes.

  1. Once the install is done, you can launch the command prompt (search for
     “Command Prompt”) and change into the directory where you cloned the
     project, `...something\something\leaflet-quickstart\`. Inside there, run
     `py -m http.server 8888`

Now you can access your `index.html` file by pointing a browser at
`http://localhost:8888/`.

## Using Markdown Files (Locally)

Using local Markdown files falls under the same rubric as using `$.getJSON()`
above, except you have to use the more verbose `$.ajax()` method. Given a
local Markdown file `loremipsum.md` in the same folder as `index.html`, you
can have it fill the overlay card’s body by using:

```javascript
const md = markdownit({html: true}).use(markdownitFootnote);
$.ajax({
  url: "loremipsum.md",
  success(bodyMarkdown) {
    $("#outlet-card-body").html(md.render(bodyMarkdown));
  }
});
```

## Audience

This template was written in preparation for teaching a workshop at the NYU
PSL Spatial Humanities Partnership workshop in 2018, [“Exploring the
Geographic Information of Literature and Art History” / “Cartographie
numérique en littérature et en histoire de
l’art”](https://wp.nyu.edu/nyupslgeo/workshop/), but it also builds on the
techniques demonstrated in the later chapters of [_The JavaScripting English
Major_](https://the-javascripting-english-major.org/). In other words, it is
written for humanities and social sciences students eager to learn how to make
web maps.

© 2018 Moacir P. de Sá Pereira. Content [CC BY-SA-NC
4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
