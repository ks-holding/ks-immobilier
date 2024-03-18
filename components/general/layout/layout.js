import Footer from "./footer.js";
import Header from "./header.js";
import Meta from "../../meta.js";
import Head from "next/head";
import { SITE_NAME } from "../../../lib/constants";

import { useEffect, useState } from "react";
import ReturnToTheTop from "../ButtonTop.js";
//import UseScroll from "../../../lib/useScroll.js";

export default function Layout({ children, title, description }) {
  const [scrolled, setScrolled] = useState(false);

  //
  // console.log(title, description);

  /// SCROLL
  useEffect(() => {
    const listener = () => {
      window.pageYOffset > 600 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  //// COOKIES

  return (
    <>
      <Meta />
      <Head>
      
        <title>{SITE_NAME + " | " + title}</title>
        {/* <meta name="description" content={description} /> */}
        <meta name="google-site-verification" content="D_bZF01sgCpDHkyXjbSKLSNRvu4UfRsTv6nq0i4ytm4" />
      </Head>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}
