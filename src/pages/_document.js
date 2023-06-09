import {Html, Head, Main, NextScript} from 'next/document'


export default function Document() {
  return (<Html lang="ru">
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>КАМНЕЛОТ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>)
}
