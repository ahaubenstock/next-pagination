import { PropsWithChildren } from "react";

import "../styles/globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <head>
        <title>Pagination</title>
      </head>
      <body>
        <main className="h-screen w-screen p-10 flex justify-center items-center bg-orange-50">
          {children}
        </main>
      </body>
    </html>
  );
}
