import { PropsWithChildren } from "react";

import "../styles/globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <head>
        <title>Pagination</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
