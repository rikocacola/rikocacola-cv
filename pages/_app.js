import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const meta_title = "Riko Chair | Frontend Developer";
  console.log(process.env.GA_MEASUREMENT_ID);
  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WK6H17XB1W`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-WK6H17XB1W);
        `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KQV372CT');
      `}
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
