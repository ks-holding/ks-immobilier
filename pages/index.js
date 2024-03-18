import Layout from "../components/general/layout/layout.js";
import Head from "next/head";
import useMediaQuery from "../lib/useMediaQuery";

import Landing from "./../components/sections/home/Landing";
import Presentation from "./../components/sections/home/Presentation";
import Prestations from "./../components/sections/home/Prestations";
import Skills from "./../components/sections/home/Skills";
import Clients from "./../components/sections/home/Clients";
import Realisations from "./../components/sections/home/Realisations";




export default function Index() {
  const mobile = useMediaQuery(768);

  return (
    <Layout
      title="location de bureaux en coworking"
      description="des solutions complètes de location de bureaux en coworking et location de parkings pour une expérience professionnelle sans tracas"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
       
            window.axeptioSettings = {
              clientId: "61c0a29a5bdb3f6e2bb96ebb",
              cookiesVersion: "https://ks-renov/-base",
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
    
                  `,
          }}
        />
      </Head>
      <div id="home">
        {" "}
        <Landing />
        {/* <Presentation /> */}
        <Prestations />
        
        
        <Realisations />
        <Clients />
        
        
        
      </div>
    </Layout>
  );
}
