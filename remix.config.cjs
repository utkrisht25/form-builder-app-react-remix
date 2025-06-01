/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_meta: true,
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  serverBuildTarget: "netlify", // <<< important
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: ".netlify/functions-internal/server.js",
};
