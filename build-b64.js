require("@babel/register")({
  extensions: [".js", ".jsx"],
});

const ReactDOMServer = require("react-dom/server");
const { App } = require("./src/scripts/App");

const html = ReactDOMServer.renderToStaticMarkup(App());
console.log("html", html);
