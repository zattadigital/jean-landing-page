import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html className="touch" lang="pt-br">
      <head>
        <Script src="https://static.elfsight.com/platform/platform.js" async />
      </head>
      <body
        id="dmRoot"
        data-page-alias="home"
        className="dmRoot dmMobileBody fix-mobile-scrolling addCanvasBorder dmResellerSite pcCustomScrollbar d1SiteBody dmLayoutBody dmBodyNoIscroll"
        style={{ padding: 0, margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
