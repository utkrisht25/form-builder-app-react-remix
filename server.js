import { createRequestHandler } from '@remix-run/netlify';
import * as build from '@remix-run/dev/server-build';

export const handler = createRequestHandler({
  build,
  getLoadContext() {
    // You can add custom context here
  },
});