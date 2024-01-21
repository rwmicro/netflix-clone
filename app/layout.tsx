import "../public/assets/styles/global.css";
import { CookiesProvider } from "next-client-cookies/server";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </CookiesProvider>
  );
}
