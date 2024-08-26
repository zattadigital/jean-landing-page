// import Image from "next/image";
// import styles from "./page.module.css";
// import '@/assets/css/override.css'

import About from "@/components/about";
import Causes from "@/components/causes";
import Compare from "@/components/compare";
import Divisor from "@/components/divisor";
import Divisor1 from "@/components/divisor-1";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import GetReady from "@/components/get-ready";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import StartNow from "@/components/start-now";
import Workouts from "@/components/workouts";

import config from "@/constants/index";

export default function Home() {
  const {
    contact: { phone = "", contactMessage = "" },
  } = config || {};

  const renderText = () => {
    return (
      <span
        style={{
          color: "rgb(255, 255, 255)",
          display: "initial",
          fontWeight: "bold",
        }}
        className="font-size-24 m-font-size-18"
        m-font-size-set="true"
      >
        {/* {"PERSONALIZADOS "} */}
        <div>- Falta de alongamentos específicos;</div>
        {/* <br /> */}
        <div>- Divisão de treino ruim; </div>
        {/* <br /> */}
        <div>
          - Escolha errada dos exercícios que potencializam a hipertrofia da
          musculatura alvo;{" "}
        </div>
        <div>{/* <br /> */}- Falta de intensidade no treinamento.</div>
      </span>
    );
  };

  return (
    <div id="dm" className="dmwr">
      <div className="dm_wrapper mobileHamburgerLayout-var5 null mobileHamburgerLayout">
        <div
          dmwrapped="true"
          id={1901957768}
          className="dm-home-page"
          themewaschanged="true"
        >
          {" "}
          <div
            dmtemplateid="mobileHamburgerLayout"
            className="runtime-module-container dm-bfs dm-layout-home hasAnimations rows-1200 inMiniHeaderMode hasStickyHeader hamburger-reverse dmPageBody d-page-1716942098 dmFreeHeader"
            id="dm-outer-wrapper"
            data-page-class={1716942098}
            data-soch="true"
            data-background-parallax-selector=".dmHomeSection1, .dmSectionParallex"
          >
            {" "}
            <div id="dmStyle_outerContainer" className="dmOuter">
              {" "}
              <div id="dmStyle_innerContainer" className="dmInner">
                {" "}
                <div className="dmLayoutWrapper standard-var dmStandardMobile">
                  {" "}
                  <div id="site_content">
                    {" "}
                    <div className="site_content">
                      {" "}
                      <button
                        className="layout-drawer-hamburger hamburger-on-header"
                        id="layout-drawer-hamburger"
                        aria-label="menu"
                      >
                        {" "}
                        <span className="hamburger__slice" />
                        <span className="hamburger__slice" />
                        <span className="hamburger__slice" />
                      </button>
                      <div
                        dmwrapped="true"
                        id="dmFirstContainer"
                        className="dmBody u_dmStyle_template_home dm-home-page"
                        themewaschanged="true"
                      >
                        {" "}
                        <div id="allWrapper" className="allWrapper">
                          <div id="dm_content" className="dmContent">
                            {" "}
                            <div
                              // dm:templateorder={170}
                              className="dmHomeRespTmpl mainBorder dmRespRowsWrapper dmFullRowRespTmpl dmRespRowsWrapperSize2"
                              id={1716942098}
                            >
                              {/* Hero - start */}
                              <Hero />
                              {/* <Divisor
                                text={renderText()}
                              /> */}
                              {/* Hero - end */}
                              {/* Compare - start */}
                              <Causes />
                              <Divisor
                                text="TRANSFORME SEU FÍSICO"
                                // underlineText="VOCÊ"
                              />
                              <Compare />
                              {/* Compare - end */}
                              {/* Divisor - start */}
                              {/* <Divisor1 /> */}
                              <Divisor
                                text="PROGRAMA DE TREINAMENTO ESPECIAL"
                                // underlineText="VOCÊ"
                              />
                              <Workouts />
                              {/* Divisor - end */}
                              {/* Start now - start */}
                              {/* <GetReady /> */}
                              <Divisor
                                text="FAÇA PARTE DO TIME E VAMOS CRIAR SUA MELHOR "
                                underlineText="VERSÃO"
                              />
                              <StartNow />
                              {/* Start now - end */}
                              {/* Pricing - start */}
                              <Pricing />
                              {/* Pricing - end */}
                              {/* Workouts - start */}
                              {/* Workouts - end */}
                              {/* About - start */}
                              {/* <About /> */}
                              {/* About - end */}
                              {/* <Faq /> */}
                              {/* Get ready - start */}
                              {/* <GetReady /> */}
                              {/* Get ready - end */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="sticky-widgets-container-global"
                        id={1364529934}
                      />
                      {/* Footer  */}
                      <Footer />
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "5px",
                      }}
                    >
                      <button
                        className="btn-whatsapp-pulse"
                        href={`https://wa.me//55${phone}?text=${contactMessage}`}
                      >
                        <i
                          className="fab fa-whatsapp"
                          style={{ color: "white" }}
                        ></i>
                      </button>
                    </div>
                    {/* <a
                      className="dmBackToTop"
                      id="dmBackToTop"
                      aria-label="Scroll to top"
                      href="#dmContent"
                      style={{ opacity: 1, visibility: "visible" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
