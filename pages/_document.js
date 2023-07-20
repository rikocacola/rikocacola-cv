import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta_title = "Riko Chair | Frontend Developer";
  const description = "Riko Chair Nugroho's Portofolio Website";
  return (
    <Html>
      <Head>
        <meta name="description" content={description} />
        <meta name="title" content={meta_title} />
        <meta name="author" content="Riko Chair Nugroho" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51926901917_cd42fe4bf6_k.jpg"
        />
        <link rel="icon" href="/rcn-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KQV372CT');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQV372CT" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
