import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
       <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Blog branché à une bdd postgreSQL"
          />
          <meta property="og:site_name" content="Blog" />
          <meta
            property="og:description"
            content="Blog branché à une bdd postgreSQL"
          />
          <meta property="og:title" content="Blog" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blog" />
          <meta
            name="twitter:description"
            content="Blog branché à une bdd postgreSQL"
          />
        </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
