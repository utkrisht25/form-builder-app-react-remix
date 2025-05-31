import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Provider } from 'react-redux'; // <<< THIS IS CRUCIAL
import { store } from './store/store'; // <<< THIS IS CRUCIAL (ensure path is correct)

import "./tailwind.css"; // Your main Tailwind CSS import

export function links() {
  return [];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/*
          CRITICAL: The <Outlet /> (which renders your routes and thus your FormBuilder)
          MUST BE WRAPPED INSIDE THE <Provider store={store}> component.
        */}
        <Provider store={store}>
          <Outlet />
        </Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}