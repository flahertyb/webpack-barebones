# webpack-barebones

This is a tiny repo that lets you write React code without setting up anything.

### The very basic setup it provides:

 - Webpack bundles your javascript files and runs a dev server.
 - Webpack uses babel-loader so that you can write modern ES6 javascript code and react syntax, e.g.

  `import Thing from "./components/thing"` or `<Thing className="my-thing" />`

That's it!

There is a global css file, `public/styles.css`. 

There is no css preprocessor. There is no testing framework. There is no linting or formatting. It doesn't use yarn. If you want those things, probably better to use `create-react-app`!

### To start writing React code, clone the repo and run:

```
npm install
npm run dev
```

Then open the localhost:8080 in your browser as directed by the output. 
