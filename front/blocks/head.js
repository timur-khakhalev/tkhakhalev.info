import Head from 'next/head'
import Script from 'next/script'

export default function HeadHtml () {
  return (
    <div>
      <Head>
        <title>Timur Khakhalev — Back-end Developer</title>
      </Head>
      <Script type="text/javascript"
              onLoad={() => {
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(85407781, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                })
              }
              }/>
    </div>
  )
}
