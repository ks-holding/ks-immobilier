import { useEffect, useState } from "react";
import { CloseOutline, MenuOutline } from "react-ionicons";
import HeaderNav from "./header-nav.js";
import { motion } from "framer-motion";
export default function Header() {
  const [selected, setSelected] = useState("/");
  const [openModal, setOpenModal] = useState(false);
  const [mobile, setMobile] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const recalculateMobile = () => {
    setMobile(window.matchMedia("(max-width: 768px)").matches);
  };

  useEffect(() => {
    let str = window.location.href;
    let url = new URL(str);
    setSelected(url.pathname);
    ////// MOBILE
    recalculateMobile();
    window.addEventListener("resize", recalculateMobile);
    return () => window.removeEventListener("resize", recalculateMobile);
  }, []);

  if (!mobile) {
    return (
      <header>
        <HeaderNav selected={selected} setSelected={setSelected} />
      </header>
    );
  } else {
    return (
      <header>
        {!openModal && mobile && (
          <div className="openmenu_bar">
            <span
              className="openbtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <MenuOutline height="35px" width="35px" color={"#2a3352"} />
            </span>
          </div>
        )}
        {openModal && mobile ? (
          <>
            <span
              className="closebtn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <CloseOutline height="40px" width="40px" color={"#2a3352"} />
            </span>
            <HeaderNav selected={selected} setSelected={setSelected} />
          </>
        ) : null}
      </header>
    );
  }
}
