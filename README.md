Javascript website template
---

This is a website template for quick prototyping and testing technology integrations. Many of these technologies are in use or under consideration at [Planfu](http://planfu.com) today. A number of the client-server data technologies are redundant. The intent is to demo the technologies and choose based on project requirements.

Some of the technologies in the current stack:

* React with a PureRender base class
* Redux with react bindings and reselect
* Superagent, Falcor, PouchDB, and SocketIO
* Gulp, Browserify, and Babel for building ES6
* Mocha, Chai, Sinon, and Istanbul for testing and coverage

Other technologies pending possible integration in the future:

* Flowtype
* Radium
* Sample synch and asynch tests
* RethinkDB's notification with socket.io and/or Couch as a backend for Pouch

---

Usage:

1. Install node >= 4.0.
2. Install gulp globally (npm install -g gulp)
3. clone the respoitory locally
4. cd js-webstack && npm install && gulp && npm start
5. In another window run gulp watch for automatic rebundling (also supports livereload)
6. Open http://localhost:3000 in the browser.

Open the JS console and hack away. Logging is configured on both client and server sides.

Disclaimer: This build uses a symlink for cleaner import paths. Tested on Mac and Linux; YMMV on Windows.

