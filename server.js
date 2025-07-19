const { createRequestHandler } = require("@remix-run/netlify");

// The path to your server build
const build = require("./build");

exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});