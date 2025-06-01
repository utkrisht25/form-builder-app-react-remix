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

import stylesheet from "./tailwind.css"; // Your main Tailwind CSS import
import { ThemeProvider } from "./context/ThemeContext"; // Adjust the import path as necessary

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ThemeProvider>
          <Provider store={store}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}