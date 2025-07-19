/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",

  // THIS IS THE IMPORTANT PART
  serverBuildTarget: "netlify",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
};

