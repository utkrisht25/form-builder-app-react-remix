/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v3_routeConvention: true,
  },
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildPath: 'netlify/functions/server/build.js',
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
};