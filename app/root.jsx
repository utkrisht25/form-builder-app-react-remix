import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Provider } from 'react-redux';
import { store } from './store/store';
import "./tailwind.css";
import { ThemeProvider } from "./context/ThemeContext";

export function links() {
  return [];
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
      <body className="h-full transition-colors">
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