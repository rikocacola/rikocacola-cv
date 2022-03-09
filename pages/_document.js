import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta_title = 'Riko Chair | Frontend Developer'
  const description = "Riko Chair Nugroho's Portofolio Website"
  return (
    <Html>
      <Head>
        <meta name="description" content={description} />
        <meta name="title" content={meta_title} />
        <meta name="author" content="Riko Chair Nugroho"/>
        <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51926901917_cd42fe4bf6_k.jpg"/>
        <link rel="icon" href="/rcn-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;500;600;700&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
