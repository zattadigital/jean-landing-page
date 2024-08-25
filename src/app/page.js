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
                    <div className="p_hfcontainer">
                      {" "}
                      <div
                        id="mobile-hamburger-drawer"
                        className="hamburger-drawer layout-drawer"
                        layout="89cac9ed3175430eb42be55472f57c07===header"
                        data-origin="side-reverse"
                        aria-hidden="true"
                      >
                        {" "}
                        <div
                          className="dmRespRow u_1509275155"
                          style={{ textAlign: "center" }}
                          id={1509275155}
                        >
                          {" "}
                          <div className="dmRespColsWrapper" id={1208448668}>
                            {" "}
                            <div
                              className="dmRespCol small-12 medium-12 large-12 empty-column"
                              id={1331534710}
                            />
                          </div>
                        </div>
                        <div
                          className="u_1365764397 dmRespRow middleDrawerRow"
                          style={{ textAlign: "center" }}
                          id={1365764397}
                        >
                          {" "}
                          <div className="dmRespColsWrapper" id={1289956021}>
                            {" "}
                            <div
                              className="dmRespCol small-12 medium-12 large-12 u_1764669401"
                              id={1764669401}
                            >
                              {" "}
                              <nav
                                className="u_1494404016 effect-bottom2 main-navigation unifiednav dmLinksMenu"
                                role="navigation"
                                layout-main="vertical_nav_layout_4"
                                layout-sub="submenu_horizontal_1"
                                data-show-vertical-sub-items="HIDE"
                                id={1494404016}
                                dmle_extension="onelinksmenu"
                                data-element-type="onelinksmenu"
                                data-nav-structure="VERTICAL"
                                wr="true"
                                icon="true"
                                surround="true"
                                navigation-id="unifiedNav"
                              >
                                {" "}
                                <ul
                                  role="menubar"
                                  className="unifiednav__container  "
                                  data-auto="navigation-pages"
                                >
                                  {" "}
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/#MyPrograms"
                                      className="unifiednav__item currentPage"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="My Programs"
                                        data-auto="page-text-style"
                                      >
                                        My Programs
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/#WhatYouGet"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="What You Get"
                                        data-auto="page-text-style"
                                      >
                                        What You Get
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/#Transformations"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="Transformations"
                                        data-auto="page-text-style"
                                      >
                                        Transformations
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/#MeetYourTrainer"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="Meet Your Trainer"
                                        data-auto="page-text-style"
                                      >
                                        Meet Your Trainer
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/#FAQ"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="FAQ"
                                        data-auto="page-text-style"
                                      >
                                        FAQ
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/free-guide"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="
   Free Guide
  "
                                        data-auto="page-text-style"
                                      >
                                        Free Guide
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    role="menuitem"
                                    className="unifiednav__item-wrap"
                                    data-auto="more-pages"
                                    data-depth={0}
                                  >
                                    {" "}
                                    <a
                                      href="/"
                                      className="unifiednav__item"
                                      target=""
                                      data-target-page-alias=""
                                    >
                                      {" "}
                                      <span
                                        className="nav-item-text "
                                        data-link-text="
   My Program
  "
                                        data-auto="page-text-style"
                                      >
                                        My Program
                                        <span
                                          className="icon icon-angle-down"
                                          data-hidden-on-mobile=""
                                          data-hidden-on-desktop=""
                                          data-hidden-on-tablet=""
                                        />
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                              <div
                                id={1426924239}
                                dmle_extension="multilingual"
                                data-element-type="multilingual"
                                data-display="dropdown"
                                icon="false"
                                wr="false"
                                surround="false"
                                className="u_1426924239 displayNone"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="dmRespRow u_1610987705"
                          style={{ textAlign: "center" }}
                          id={1610987705}
                        >
                          {" "}
                          <div className="dmRespColsWrapper" id={1778221998}>
                            {" "}
                            <div
                              className="dmRespCol small-12 medium-12 large-12 u_1349519636 empty-column"
                              id={1349519636}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="layout-drawer-overlay"
                        id="layout-drawer-overlay"
                      />
                    </div>
                    <div className="site_content">
                      {" "}
                      <div
                        id="hamburger-header-container"
                        className="hamburger-header-container p_hfcontainer"
                      >
                        {" "}
                        <div
                          id="mobile-hamburger-header"
                          className="hamburger-header p_hfcontainer"
                          layout="837ce1cb59c8431ea7fd0dcd9b0a381f===header"
                        >
                          {" "}
                          <div
                            className="dmRespRow dmDefaultListContentRow u_1418037020 fullBleedChanged fullBleedMode"
                            style={{ textAlign: "center" }}
                            id={1418037020}
                            mode={2}
                          >
                            {" "}
                            <div className="dmRespColsWrapper" id={1111482395}>
                              {" "}
                              <div
                                className="u_1570581462 dmRespCol medium-6 large-6 small-2 empty-column"
                                id={1570581462}
                              />
                              <div
                                className="u_1134560283 dmRespCol medium-6 large-6 small-10"
                                id={1134560283}
                              >
                                {" "}
                                <div
                                  className="u_1449735839 imageWidget align-center"
                                  data-element-type="image"
                                  data-widget-type="image"
                                  id={1449735839}
                                  editablewidget="true"
                                >
                                  {" "}
                                  <a
                                    href="/my-program-old"
                                    id={1876166572}
                                    file="false"
                                  >
                                    <img
                                      src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-640w.png"
                                      id={1937417085}
                                      className=""
                                      data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/logo-2-_1_-3000x3000.png"
                                      // onError={() => {}}
                                      loading="lazy"
                                      height={0.0}
                                      width={0.0}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                              {" "}
                              <div
                                className="u_TOPOFSITE dmRespRow"
                                id="TOPOFSITE"
                                data-anchor="TOP OF SITE"
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1514918088}
                                >
                                  {" "}
                                  <div
                                    className="dmRespCol large-12 medium-12 small-12 u_1034247276"
                                    id={1034247276}
                                  >
                                    {" "}
                                    <div
                                      className="dmNewParagraph u_1715626810"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1715626810}
                                      style={{
                                        transition: "opacity 1s ease-in-out 0s",
                                      }}
                                    >
                                      <p className="size-8 m-size-6">
                                        <span
                                          style={{
                                            display: "unset",
                                            color: "rgba(0, 0, 0, 0)",
                                          }}
                                          className="font-size-8 m-font-size-6"
                                        >
                                          New Paragraph
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Hero - start */}
                              <Hero />
                              {/* <Divisor
                                text={renderText()}
                              /> */}
                              {/* Hero - end */}
                              {/* Compare - start */}

                              <Causes/>

                              <Divisor
                                text="CONSTRUA UM FÌSICO MELHOR"
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
                              {/* <div
                                className="u_1672462187 dmRespRow dmSectionNoParallax fullBleedChanged fullBleedMode mobile-columns-reversed"
                                id={1672462187}
                                data-gallery-bg="eyJzbGlkZXMiOltdfQ=="
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1543470361}
                                >
                                  {" "}
                                  <div
                                    className="u_1413154402 dmRespCol small-12 large-6 medium-6"
                                    id={1413154402}
                                  >
                                    {" "}
                                    <div
                                      className="u_1878796523 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1878796523}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="text-align-left m-text-align-center size-36 m-size-30"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-36 m-font-size-30"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: "bold",
                                            display: "initial",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          PERSONALIZED MEALS
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1633863213 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1633863213}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="text-align-center size-18 m-size-16"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-18 m-font-size-16"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                            fontWeight: 700,
                                          }}
                                        >
                                          (Value $149)
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1785152950 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1785152950}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p className="m-size-14 size-16 m-text-align-center">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          My meal plans will aid in transforming
                                          you into your dream body. Based on
                                          your personal goals, your meals will
                                          provide you with the required calories
                                          and macronutrient breakdowns you
                                          need.&nbsp;
                                        </span>
                                      </p>
                                      <p className="m-text-align-center">
                                        <span
                                          style={{ display: "initial" }}
                                          className="m-font-size-14"
                                          m-font-size-set="true"
                                        >
                                          <br />
                                        </span>
                                      </p>
                                      <p className="size-14 m-size-14 m-text-align-center">
                                        <span
                                          className="font-size-14 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(239, 239, 239)",
                                            fontWeight: 300,
                                            display: "initial",
                                            fontFamily:
                                              'Poppins, "Poppins Fallback"',
                                          }}
                                        >
                                          There are a range of dietary options
                                          you can choose from!
                                        </span>
                                      </p>
                                      <p className="size-16 m-size-14 m-text-align-center">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: "bold",
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                          }}
                                        >
                                          Vegetarian
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            m-font-size-set="true"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                          >
                                            ,
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          Vegan
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            ,
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          Dairy-free
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            ,
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          Gluten-free
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            ,
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          Keto
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            ,
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          General
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          {" "}
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              display: "initial",
                                              color: "rgb(239, 239, 239)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            or
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(216, 168, 0)",
                                            fontWeight: "bold",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          Pescatarian
                                        </span>
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          .
                                        </span>
                                        <span style={{ display: "initial" }}>
                                          <br />
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1998911067 dmRespRow fullBleedChanged fullBleedMode hide-for-medium"
                                      id={1998911067}
                                      mode={4}
                                    >
                                      {" "}
                                      <div
                                        className="dmRespColsWrapper"
                                        id={1916585432}
                                      >
                                        {" "}
                                        <div
                                          className="u_1430910099 dmRespCol large-4 medium-4 small-4"
                                          id={1430910099}
                                        >
                                          {" "}
                                          <div
                                            className="graphicWidget u_1847441777"
                                            data-element-type="graphic"
                                            data-widget-type="graphic"
                                            id={1847441777}
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 100 100"
                                              id={1827800895}
                                              className="svg u_1827800895"
                                              data-icon-name="food_and_drinks_clinking_glasses"
                                            >
                                              {" "}
                                              <path d="M24.93,89.38a3.51,3.51,0,0,1-1.17-.22c-3.17-1.12-6-2.13-9-3.11a2.67,2.67,0,0,1-1.69-1.32,2.73,2.73,0,0,1,0-2.18,2.48,2.48,0,0,1,3.35-1.66,8.12,8.12,0,0,0,2,.45,9.2,9.2,0,0,0,.73-1.82q.67-1.92,1.32-3.84c.65-1.9,1.3-3.79,2-5.69a1,1,0,0,0-.13-1.15,21.94,21.94,0,0,1-3.68-22,102.71,102.71,0,0,1,8.76-18.5,3.07,3.07,0,0,1,4.15-1.5c4.6,1.65,9.32,3.23,13.89,4.76l1.9.64a2.82,2.82,0,0,1,2.24,3.14c-1.3,8.52-2.63,17.28-6.9,25.24-2.74,5.12-7.29,8.53-13.51,10.15a2.08,2.08,0,0,0-1.8,1.63c-1.18,3.78-2.5,7.51-3.64,10.67a2.37,2.37,0,0,0-.08.27l.18,0a7,7,0,0,1,.9.27,5.28,5.28,0,0,0,.62.19,2.65,2.65,0,0,1,1.84,1.2,2.83,2.83,0,0,1,.08,2.34A2.71,2.71,0,0,1,26,89.15,2.29,2.29,0,0,1,24.93,89.38Zm-9.47-6.66c-.24,0-.32.15-.45.51s-.11.61-.1.63.17.18.52.29c3,1,5.82,2,9,3.12a1,1,0,0,0,.64.08c.08,0,.2-.2.3-.52.18-.54.09-.71.08-.73s-.2-.17-.54-.24a7.4,7.4,0,0,1-.86-.26,5,5,0,0,0-.64-.2,2.26,2.26,0,0,1-1.57-1,2.36,2.36,0,0,1,0-2C23,79.31,24.3,75.6,25.46,71.86a4,4,0,0,1,3.21-3c5.67-1.47,9.79-4.56,12.25-9.16,4.1-7.66,5.41-16.24,6.68-24.55,0-.4,0-.69-.89-1l-1.89-.64c-4.57-1.54-9.3-3.12-13.93-4.78-.94-.34-1.24-.23-1.75.63a100.82,100.82,0,0,0-8.6,18.14A20.06,20.06,0,0,0,23.9,67.61a2.9,2.9,0,0,1,.45,3c-.67,1.89-1.31,3.78-2,5.67q-.66,1.93-1.33,3.85c-1.16,3.35-1.74,3.64-5.15,2.63A1.72,1.72,0,0,0,15.46,82.72Z" />
                                              <path d="M75.07,89.38a2.29,2.29,0,0,1-1-.23,2.71,2.71,0,0,1-1.32-1.7,2.83,2.83,0,0,1,.08-2.34,2.65,2.65,0,0,1,1.84-1.2,5.24,5.24,0,0,0,.62-.19,7,7,0,0,1,.9-.27l.18,0a2.43,2.43,0,0,0-.08-.27c-1.14-3.16-2.46-6.89-3.64-10.67a2.08,2.08,0,0,0-1.8-1.63c-6.23-1.62-10.77-5-13.51-10.15-4.26-8-5.6-16.72-6.89-25.19v0a2.82,2.82,0,0,1,2.24-3.14l1.9-.64c4.56-1.53,9.29-3.11,13.89-4.76a3.07,3.07,0,0,1,4.15,1.5,102.69,102.69,0,0,1,8.76,18.5,21.94,21.94,0,0,1-3.68,22A1,1,0,0,0,77.54,70c.67,1.89,1.32,3.79,2,5.69q.66,1.92,1.32,3.84a7.73,7.73,0,0,0,.76,1.84,10.14,10.14,0,0,0,1.93-.47,2.48,2.48,0,0,1,3.35,1.66,2.72,2.72,0,0,1,0,2.18,2.67,2.67,0,0,1-1.69,1.32c-2.93,1-5.79,2-9,3.11A3.52,3.52,0,0,1,75.07,89.38ZM52.4,35.21c1.27,8.3,2.58,16.88,6.67,24.52,2.46,4.61,6.59,7.69,12.25,9.16a4,4,0,0,1,3.21,3C75.7,75.6,77,79.31,78.15,82.45a2.36,2.36,0,0,1,0,2,2.26,2.26,0,0,1-1.58,1,5.06,5.06,0,0,0-.64.2,7.36,7.36,0,0,1-.86.26c-.33.07-.5.18-.54.24s-.09.19.08.73c.11.33.23.48.3.52a1,1,0,0,0,.64-.08c3.18-1.13,6-2.14,9-3.12.36-.12.5-.24.52-.29s.07-.16-.1-.63-.27-.61-.9-.42c-3.41,1-4,.72-5.15-2.63q-.67-1.92-1.33-3.85c-.65-1.89-1.3-3.78-2-5.67a2.9,2.9,0,0,1,.45-3,20.05,20.05,0,0,0,3.37-20.06,100.8,100.8,0,0,0-8.6-18.14c-.51-.87-.81-1-1.75-.63-4.62,1.66-9.35,3.24-13.93,4.78l-1.89.64C52.4,34.49,52.36,34.77,52.4,35.21Z" />
                                              <path d="M48.71,19.06c0-1,0-2,0-3,0-.58.24-1.13,1.4-1.1s1.35.55,1.35,1.15c0,2,0,3.94,0,5.92,0,.63-.24,1.2-1.42,1.19s-1.33-.57-1.33-1.15Q48.71,20.58,48.71,19.06Z" />
                                              <path d="M58.36,24.34a1.31,1.31,0,0,1-1.23-.49.94.94,0,0,1,0-1.3,60.42,60.42,0,0,1,5.81-5.09,1.16,1.16,0,0,1,1.45.1c.48.37.74.94.34,1.36a56.13,56.13,0,0,1-6,5.31A.91.91,0,0,1,58.36,24.34Z" />
                                              <path d="M36.63,17.38a1.79,1.79,0,0,1,1.22.58l4.67,4.11c.69.6,1,1.28.23,2s-1.47.31-2.12-.26q-2.37-2.11-4.77-4.2a1.18,1.18,0,0,1-.47-1.47A1.28,1.28,0,0,1,36.63,17.38Z" />
                                            </svg>
                                          </div>
                                          <div
                                            className="u_1709306472 dmNewParagraph"
                                            data-element-type="paragraph"
                                            data-version={5}
                                            id={1709306472}
                                            style={{
                                              transition: "none 0s ease 0s",
                                              textAlign: "left",
                                              display: "block",
                                            }}
                                          >
                                            <p
                                              className="m-text-align-center m-size-11 text-align-center size-14"
                                              style={{ lineHeight: 1 }}
                                            >
                                              <span
                                                className="font-size-14 m-font-size-11"
                                                m-font-size-set="true"
                                                style={{
                                                  fontWeight: "bold",
                                                  color: "rgb(255, 255, 255)",
                                                  display: "unset",
                                                }}
                                              >
                                                DINE IN/OUT OPTION
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          className="dmRespCol large-4 medium-4 small-4 u_1874305000"
                                          id={1874305000}
                                        >
                                          {" "}
                                          <div
                                            className="graphicWidget u_1068936892"
                                            data-element-type="graphic"
                                            data-widget-type="graphic"
                                            id={1068936892}
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 70 70"
                                              id={1949906478}
                                              className="svg u_1949906478"
                                              data-icon-name="wp-shopping_cart"
                                            >
                                              {" "}
                                              <g>
                                                {" "}
                                                <circle cx={26} cy={57} r={3} />
                                                <circle cx={54} cy={57} r={3} />
                                                <path
                                                  d="M29,42h28c1,0,1.8-0.7,2-1.6l4-21c0.1-0.6,0-1.2-0.4-1.6C62.2,17.3,61.6,17,61,17H21.1l-1.8-4.5C18.8,11,17.3,10,15.6,10H9
		c-1.1,0-2,0.9-2,2s0.9,2,2,2h6.6l10.1,25.7l-3.1,4.4c-1.1,1.5-1.2,3.5-0.3,5.2c0.9,1.7,2.6,2.7,4.4,2.7H57c1.1,0,2-0.9,2-2
		s-0.9-2-2-2H26.8c-0.5,0-0.8-0.4-0.9-0.5c-0.1-0.2-0.2-0.6,0.1-1L29,42z M49,32h-7v-5h7V32z M51,27h6.4l-1,5H51V27z M49,34v4h-7v-4
		H49z M42,25v-4h7v4H42z M40,25h-7v-4h7V25z M40,27v5h-7v-5H40z M40,34v4h-7v-4H40z M31,38h-1.6l-1.6-4H31V38z M51,38v-4h5.1l-0.8,4
		H51z M57.8,25H51v-4h7.6L57.8,25z M31,21v4h-6.7l-1.6-4H31z M25,27h6v5h-4L25,27z"
                                                />
                                              </g>
                                            </svg>
                                          </div>
                                          <div
                                            className="u_1099416943 dmNewParagraph"
                                            data-element-type="paragraph"
                                            data-version={5}
                                            id={1099416943}
                                            style={{
                                              transition: "none 0s ease 0s",
                                              textAlign: "left",
                                              display: "block",
                                            }}
                                          >
                                            <p
                                              className="text-align-center m-text-align-center m-size-11 size-14"
                                              style={{ lineHeight: 1 }}
                                            >
                                              <span
                                                className="font-size-14 m-font-size-11"
                                                m-font-size-set="true"
                                                style={{
                                                  fontWeight: "bold",
                                                  display: "unset",
                                                  color: "rgb(255, 255, 255)",
                                                }}
                                              >
                                                SHOPPING
                                              </span>
                                            </p>
                                            <p
                                              className="text-align-center m-text-align-center m-size-11 size-14"
                                              style={{ lineHeight: 1 }}
                                            >
                                              <span
                                                className="font-size-14 m-font-size-11"
                                                m-font-size-set="true"
                                                style={{
                                                  fontWeight: "bold",
                                                  display: "unset",
                                                  color: "rgb(255, 255, 255)",
                                                }}
                                              >
                                                <span className="ql-cursor">
                                                  ﻿
                                                </span>
                                                LIST
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          className="dmRespCol large-4 medium-4 small-4 u_1240881015"
                                          id={1240881015}
                                        >
                                          {" "}
                                          <div
                                            className="graphicWidget u_1121166177"
                                            data-element-type="graphic"
                                            data-widget-type="graphic"
                                            id={1121166177}
                                          >
                                            {" "}
                                            <svg
                                              width="20px"
                                              height="20px"
                                              viewBox="0 0 20 20"
                                              xmlns="http://www.w3.org/2000/svg"
                                              id={1681996900}
                                              className="svg u_1681996900"
                                              data-icon-custom="true"
                                              data-icon-name="swap-svgrepo-com.svg"
                                            >
                                              {" "}
                                              <path d="M9 6a4 4 0 1 1 8 0v8h3l-4 4-4-4h3V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8a4 4 0 1 1-8 0V6H0l4-4 4 4H5v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2V6z" />
                                            </svg>
                                          </div>
                                          <div
                                            className="u_1794839815 dmNewParagraph"
                                            data-element-type="paragraph"
                                            data-version={5}
                                            id={1794839815}
                                            style={{
                                              transition: "none 0s ease 0s",
                                              textAlign: "left",
                                            }}
                                          >
                                            <p
                                              className="m-size-11 m-text-align-center text-align-center size-14"
                                              style={{ lineHeight: 1 }}
                                            >
                                              <span
                                                className="m-font-size-11 font-size-14"
                                                m-font-size-set="true"
                                                style={{
                                                  color: "rgb(255, 255, 255)",
                                                  display: "unset",
                                                  fontWeight: "bold",
                                                }}
                                              >
                                                MEAL
                                              </span>
                                            </p>
                                            <p
                                              className="m-text-align-center text-align-center size-14 m-size-11"
                                              style={{ lineHeight: 1 }}
                                            >
                                              <span
                                                style={{
                                                  color: "rgb(255, 255, 255)",
                                                  display: "unset",
                                                  fontWeight: "bold",
                                                }}
                                                className="m-font-size-11 font-size-14"
                                                m-font-size-set="true"
                                              >
                                                SWAP
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="u_1436660748 graphicWidget hide-for-medium hide-for-large"
                                      data-element-type="graphic"
                                      data-widget-type="graphic"
                                      id={1436660748}
                                    >
                                      {" "}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 70 70"
                                        id={1724553804}
                                        className="svg u_1724553804"
                                        data-icon-name="ar-arrow_drop_down"
                                      >
                                        {" "}
                                        <polygon points="35,45.7 15.1,26.7 17.4,24.3 35,41.2 52.6,24.3 54.9,26.7 " />
                                      </svg>
                                    </div>
                                    <a
                                      data-display-type="block"
                                      className="u_1034273868 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient lazy"
                                      file="false"
                                      href="/#STARTNOW"
                                      data-element-type="dButtonLinkId"
                                      id={1034273868}
                                      // data-buttonstyle="SQUISHY"
                                      data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                      style={{
                                        backgroundImage:
                                          'url("data:image/svg+xml',
                                      }}
                                      data-loaded="true"
                                    >
                                      {" "}
                                      <span className="iconBg" id={1894765684}>
                                        {" "}
                                        <span
                                          className="icon hasFontIcon icon-star"
                                          id={1951926608}
                                        />
                                      </span>
                                      <span className="text" id={1230444228}>
                                        GET RESULTS!
                                      </span>
                                    </a>
                                  </div>
                                  <div
                                    className="u_1997465863 dmRespCol small-12 hasBackgroundOverlay large-6 medium-6 lazy"
                                    id={1997465863}
                                    data-background-image="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-8354669-640w.jpeg"
                                    style={{
                                      backgroundImage:
                                        'url("https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-8354669-640w.jpeg") !important',
                                    }}
                                    data-loaded="true"
                                  >
                                    {" "}
                                    <div
                                      className="u_1930467386 flex-container dmImageSlider dmNoMargin dmNoMark hide-for-medium"
                                      data-widget-type="imageSlider"
                                      dmle_volatile_widget="true"
                                      data-element-type="dSliderId"
                                      id={1930467386}
                                      editablewidget="true"
                                    >
                                      {" "}
                                      <div
                                        className="flexslider ed-version"
                                        sliderscriptparams="{'stretch':false,'animation':true,'randomize':false,'directionNav':false,'isAutoPlay':true,'isFade':true,'controlNav':false,'slideshowSpeed':7000,'animationDuration':600,'pausePlay':true}"
                                        id={1503560825}
                                        layout="empty"
                                      >
                                        {" "}
                                        <ul
                                          className="slides"
                                          id={1544953870}
                                          // style={{}}
                                        >
                                          {" "}
                                          <li
                                            layout="center"
                                            position="center"
                                            animation="fadeInUp"
                                            show-content="true"
                                            color-overlay="true"
                                            text-background="true"
                                            id={1433740050}
                                            className="dmCoverImgContainer"
                                            style={{
                                              backgroundImage:
                                                'url("https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/Ulisses+Meal+1-f179e6f4-391w.png")',
                                              backgroundSize: "contain",
                                              backgroundRepeat: "no-repeat",
                                              backgroundPosition:
                                                "center center",
                                              width: "100%",
                                              float: "left",
                                              // marginRight: "-100%",
                                              position: "relative",
                                              opacity: 0,
                                              display: "block",
                                              transition:
                                                "opacity 0.6s ease 0s",
                                              zIndex: 1,
                                            }}
                                          >
                                            <img
                                              dm="true"
                                              src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/Ulisses+Meal+1-f179e6f4-391w.png"
                                              id={1274660998}
                                              // onError={() => {}}
                                              height={319.0}
                                              width={326.0}
                                              style={{ display: "none" }}
                                              draggable="false"
                                            />{" "}
                                            <div
                                              className="color-overlay"
                                              id={1417508465}
                                            />
                                            <div
                                              className="slide-inner"
                                              id={1321125647}
                                              duda_id={1321125647}
                                            >
                                              {" "}
                                              <div
                                                className="text-wrapper"
                                                id={1579201444}
                                              >
                                                {" "}
                                                <h3
                                                  className="slide-title"
                                                  id={1777212866}
                                                >
                                                  Slide title
                                                </h3>
                                                <div
                                                  className="slide-text richText"
                                                  id={1708972657}
                                                >
                                                  Write your caption here
                                                </div>
                                              </div>
                                              <div
                                                className="slide-button dmWidget clearfix lazy"
                                                id={1368158494}
                                                data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                              >
                                                {" "}
                                                <span
                                                  className="iconBg"
                                                  id={1078191488}
                                                >
                                                  {" "}
                                                  <span
                                                    className="icon hasFontIcon icon-star"
                                                    id={1873619803}
                                                  />
                                                </span>
                                                <span
                                                  className="text"
                                                  id={1275165667}
                                                >
                                                  Button
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                          <li
                                            layout="center"
                                            position="center"
                                            animation="fadeInUp"
                                            show-content="true"
                                            color-overlay="true"
                                            text-background="true"
                                            id={1107852925}
                                            className="dmCoverImgContainer flex-active-slide"
                                            style={{
                                              backgroundImage:
                                                'url("https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/meal+2+-+ulisses-391w.png")',
                                              backgroundSize: "contain",
                                              backgroundRepeat: "no-repeat",
                                              backgroundPosition:
                                                "center center",
                                              width: "100%",
                                              float: "left",
                                              // marginRight: "-100%",
                                              position: "relative",
                                              opacity: 1,
                                              display: "block",
                                              transition:
                                                "opacity 0.6s ease 0s",
                                              zIndex: 2,
                                            }}
                                          >
                                            <img
                                              dm="true"
                                              src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/meal+2+-+ulisses-391w.png"
                                              id={1623636880}
                                              // onError={() => {}}
                                              height={319.0}
                                              width={326.0}
                                              style={{ display: "none" }}
                                              draggable="false"
                                            />{" "}
                                            <div
                                              className="color-overlay"
                                              id={1097508974}
                                            />
                                            <div
                                              className="slide-inner fadeInUp animated"
                                              id={1751601762}
                                              duda_id={1751601762}
                                            >
                                              {" "}
                                              <div
                                                className="text-wrapper"
                                                id={1399821779}
                                              >
                                                {" "}
                                                <h3
                                                  className="slide-title"
                                                  id={1723779696}
                                                >
                                                  Slide title
                                                </h3>
                                                <div
                                                  className="slide-text richText"
                                                  id={1031281897}
                                                >
                                                  Write your caption here
                                                </div>
                                              </div>
                                              <div
                                                className="slide-button dmWidget clearfix lazy"
                                                id={1471391140}
                                                data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                              >
                                                {" "}
                                                <span
                                                  className="iconBg"
                                                  id={1398821417}
                                                >
                                                  {" "}
                                                  <span
                                                    className="icon hasFontIcon icon-star"
                                                    id={1147403335}
                                                  />
                                                </span>
                                                <span
                                                  className="text"
                                                  id={1282136449}
                                                >
                                                  Button
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div
                                className="u_1920645582 dmRespRow"
                                id={1920645582}
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1904573693}
                                >
                                  {" "}
                                  <div
                                    className="dmRespCol large-12 medium-12 small-12"
                                    id={1545307539}
                                  >
                                    {" "}
                                    <div
                                      className="u_1240668507 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1240668507}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="m-size-30 text-align-center size-48"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="m-font-size-30 font-size-48"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(41, 41, 41)",
                                            display: "unset",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          PLUS
                                        </span>
                                        <span
                                          className="m-font-size-30 font-size-48"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "unset",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {" "}
                                          <span
                                            className="m-font-size-30 font-size-48"
                                            m-font-size-set="true"
                                            style={{
                                              color: "rgb(255, 255, 255)",
                                              display: "unset",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            EXCLUSIVE MEMBER BENEFITS
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1954064162 graphicWidget"
                                      data-element-type="graphic"
                                      data-widget-type="graphic"
                                      id={1954064162}
                                    >
                                      {" "}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 70 70"
                                        id={1103495951}
                                        className="svg u_1103495951"
                                        data-hover-effect="none"
                                        data-icon-name="ar-arrow_drop_down"
                                      >
                                        {" "}
                                        <polygon points="35,45.7 15.1,26.7 17.4,24.3 35,41.2 52.6,24.3 54.9,26.7 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="u_1739704791 dmRespRow dmSectionNoParallax fullBleedChanged fullBleedMode"
                                id={1739704791}
                                data-gallery-bg="eyJzbGlkZXMiOltdfQ=="
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1561282692}
                                >
                                  {" "}
                                  <div
                                    className="u_1600944711 dmRespCol small-12 hasBackgroundOverlay large-6 medium-6 lazy"
                                    id={1600944711}
                                    data-background-image="https://irp.cdn-website.com/cb86c99c/import/clib/ulissesworld_com/dms3rep/multi/WhatsApp-Image-2020-03-25-at-9.37.04-PM-1--1080x1330.jpg"
                                    style={{
                                      backgroundImage:
                                        'url("https://irp.cdn-website.com/cb86c99c/import/clib/ulissesworld_com/dms3rep/multi/WhatsApp-Image-2020-03-25-at-9.37.04-PM-1--1080x1330.jpg") !important',
                                    }}
                                    data-loaded="true"
                                  >
                                    {" "}
                                    <div
                                      data-element-type="spacer"
                                      className="dmSpacer u_1811091969"
                                      id={1811091969}
                                    />
                                  </div>
                                  <div
                                    className="u_1675242268 dmRespCol small-12 large-6 medium-6"
                                    id={1675242268}
                                  >
                                    {" "}
                                    <div
                                      className="u_1086959912 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1086959912}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="m-size-30 text-align-left m-text-align-center size-30"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="m-font-size-30 font-size-30"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: "bold",
                                            display: "initial",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          DEFINED ABS PROGRAM
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1987909675 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1987909675}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="m-size-16 text-align-center size-18"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="m-font-size-16 font-size-18"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: 700,
                                            display: "initial",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          (Value $99)
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1484776938 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1484776938}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p className="m-size-14 size-16 m-text-align-center">
                                        <span
                                          className="m-font-size-14 font-size-16"
                                          m-font-size-set="true"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          My defined abs program is a
                                          personalized abdominal workout program
                                          to transform your mid section. These
                                          workouts get progressively harder
                                          every month so that you can have a
                                          stomach to be proud of. Included are
                                          exercise videos with rep counts to
                                          ensure you reach your goal.
                                        </span>
                                      </p>
                                      <p className="m-text-align-center">
                                        <br />
                                      </p>
                                      <p className="m-size-14 size-16 m-text-align-center">
                                        <span
                                          className="m-font-size-14 font-size-16"
                                          m-font-size-set="true"
                                          style={{
                                            display: "initial",
                                            color: "rgb(239, 239, 239)",
                                          }}
                                        >
                                          The defined abs program is designed to
                                          be used alongside your personalized
                                          workout program.
                                        </span>
                                        <span style={{ display: "initial" }}>
                                          <br />
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1608858025 graphicWidget hide-for-medium hide-for-large"
                                      data-element-type="graphic"
                                      data-widget-type="graphic"
                                      id={1608858025}
                                    >
                                      {" "}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 70 70"
                                        id={1339071066}
                                        className="svg u_1339071066"
                                        data-icon-name="ar-arrow_drop_down"
                                      >
                                        {" "}
                                        <polygon points="35,45.7 15.1,26.7 17.4,24.3 35,41.2 52.6,24.3 54.9,26.7 " />
                                      </svg>
                                    </div>
                                    <a
                                      data-display-type="block"
                                      className="u_1808427364 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient lazy"
                                      file="false"
                                      href="/#STARTNOW"
                                      data-element-type="dButtonLinkId"
                                      id={1808427364}
                                      // data-buttonstyle="SQUISHY"
                                      data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                      style={{
                                        backgroundImage:
                                          'url("data:image/svg+xml',
                                      }}
                                      data-loaded="true"
                                    >
                                      {" "}
                                      <span className="iconBg" id={1510343648}>
                                        {" "}
                                        <span
                                          className="icon hasFontIcon icon-star"
                                          id={1192274488}
                                        />
                                      </span>
                                      <span className="text" id={1411209455}>
                                        YES! LET'S DO IT!
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div
                                className="u_1171467069 dmRespRow"
                                id={1171467069}
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1370133219}
                                >
                                  {" "}
                                  <div
                                    className="u_1228829059 dmRespCol small-12 large-5 medium-5 hasBackgroundOverlay lazy"
                                    id={1228829059}
                                    data-background-image="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png"
                                    style={{
                                      backgroundImage:
                                        'url("https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png") !important',
                                    }}
                                    data-loaded="true"
                                  >
                                    {" "}
                                    <div
                                      className="u_1096755152 imageWidget align-center"
                                      data-element-type="image"
                                      data-widget-type="image"
                                      id={1096755152}
                                      editablewidget="true"
                                    >
                                      <img
                                        src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/34-283h.png"
                                        alt=""
                                        id={1674729578}
                                        className=""
                                        data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/34.png"
                                        width={1920}
                                        height={2048}
                                        // onError={() => {}}
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="u_1331448636 dmRespCol small-12 large-7 medium-7"
                                    id={1331448636}
                                  >
                                    {" "}
                                    <div
                                      className="u_1236801001 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1236801001}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="m-text-align-center text-align-left m-size-30 size-30"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-30 m-font-size-30"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          EXCLUSIVE MONTHLY BLOG
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1156088076 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1156088076}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="text-align-center m-size-16 size-18"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-18 m-font-size-16"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                            fontWeight: 700,
                                          }}
                                        >
                                          (Value $49)
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1630012715 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1630012715}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p className="m-size-13 size-16 m-text-align-center">
                                        <span
                                          className="font-size-16 m-font-size-13"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                          }}
                                        >
                                          Every month I will be releasing a new
                                          and informative blog to help you
                                          achieve your fitness goals faster! You
                                          will get all my tips and tricks to
                                          burn extra calories, increase your
                                          muscle mass and more! These are
                                          EXCLUSIVE blogs and only accessible to
                                          I Am Dedicated members.&nbsp;
                                        </span>
                                      </p>
                                    </div>
                                    <a
                                      data-display-type="block"
                                      className="u_1215394475 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient lazy"
                                      file="false"
                                      href="/#STARTNOW"
                                      data-element-type="dButtonLinkId"
                                      id={1215394475}
                                      // data-buttonstyle="SQUISHY"
                                      data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                      style={{
                                        backgroundImage:
                                          'url("data:image/svg+xml',
                                      }}
                                      data-loaded="true"
                                    >
                                      {" "}
                                      <span className="iconBg" id={1392652244}>
                                        {" "}
                                        <span
                                          className="icon hasFontIcon icon-star"
                                          id={1030552760}
                                        />
                                      </span>
                                      <span className="text" id={1505711318}>
                                        YES! I'M IN!
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div
                                className="u_1541736110 dmRespRow hasBackgroundOverlay lazy"
                                id={1541736110}
                                data-background-image="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png"
                                style={{
                                  backgroundImage:
                                    'url("https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png") !important',
                                }}
                                data-loaded="true"
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1806598283}
                                >
                                  {" "}
                                  <div
                                    className="u_1840776661 dmRespCol small-12 medium-12 large-12"
                                    id={1840776661}
                                  >
                                    {" "}
                                    <div
                                      className="u_1951193771 imageWidget align-center"
                                      data-element-type="image"
                                      data-widget-type="image"
                                      id={1951193771}
                                      editablewidget="true"
                                    >
                                      <img
                                        src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/all---ul-348w.png"
                                        alt=""
                                        id={1499859330}
                                        className=""
                                        data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/all---ul.png"
                                        width={1370}
                                        height={996}
                                        // onError={() => {}}
                                        loading="lazy"
                                      />
                                    </div>
                                    <div
                                      className="u_1585519235 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1585519235}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="text-align-center size-36 m-size-24"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-36 m-font-size-24"
                                          style={{
                                            fontWeight: "normal",
                                            display: "unset",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          <span
                                            className="font-size-36 m-font-size-24"
                                            m-font-size-set="true"
                                            style={{
                                              fontWeight: "normal",
                                              display: "unset",
                                              color: "rgb(255, 255, 255)",
                                            }}
                                          >
                                            EXCLUSIVE
                                          </span>
                                        </span>
                                        <span
                                          className="font-size-36 m-font-size-24"
                                          style={{
                                            fontWeight: "bold",
                                            display: "unset",
                                            color: "rgb(216, 168, 0)",
                                          }}
                                          m-font-size-set="true"
                                        >
                                          MEMBERS-ONLY
                                        </span>
                                        <span
                                          className="font-size-36 m-font-size-24"
                                          style={{
                                            fontWeight: "normal",
                                            display: "unset",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          {" "}
                                          <span
                                            className="font-size-36 m-font-size-24"
                                            style={{
                                              fontWeight: "normal",
                                              display: "unset",
                                              color: "rgb(255, 255, 255)",
                                            }}
                                            m-font-size-set="true"
                                          >
                                            APP
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1370930742 dmNewParagraph"
                                      data-element-type="paragraph"
                                      id={1370930742}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                      data-version={5}
                                    >
                                      <p className="text-align-center m-size-14 size-16">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: 300,
                                            display: "initial",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          My exclusive "I am Dedicated"
                                          members-only app contains your meal
                                          and workout plan so you have easy
                                          access wherever you are. It contains
                                          your recipes, shopping lists, exercise
                                          videos and much more. You can also
                                          track your progress with the in-built
                                          progress tracker to ensure you stay
                                          accountable.
                                        </span>
                                      </p>
                                    </div>{" "}
                                    <div
                                      className="u_1941192488 dmRespRow"
                                      id={1941192488}
                                      mode={2}
                                    >
                                      {" "}
                                      <div
                                        className="dmRespColsWrapper"
                                        id={1766114504}
                                      >
                                        {" "}
                                        <div
                                          className="dmRespCol large-6 medium-6 small-6 u_1055980745"
                                          id={1055980745}
                                        >
                                          {" "}
                                          <div
                                            className="u_1045535435 imageWidget align-center"
                                            data-element-type="image"
                                            data-widget-type="image"
                                            id={1045535435}
                                            editablewidget="true"
                                          >
                                            <img
                                              src="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                              alt=""
                                              id={1476879459}
                                              className=""
                                              data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                              width={120}
                                              height={40}
                                              // onError={() => {}}
                                              loading="lazy"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="dmRespCol large-6 medium-6 small-6 u_1304346975"
                                          id={1304346975}
                                        >
                                          {" "}
                                          <div
                                            className="u_1346595899 imageWidget align-center"
                                            data-element-type="image"
                                            data-widget-type="image"
                                            id={1346595899}
                                            editablewidget="true"
                                          >
                                            <img
                                              src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/google-play-badge-14d2a291-110w.png"
                                              alt=""
                                              id={1299644506}
                                              className=""
                                              data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/google-play-badge-14d2a291.png"
                                              width={565}
                                              height={169}
                                              // onError={() => {}}
                                              loading="lazy"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div
                                className="u_1554691266 dmRespRow"
                                id={1554691266}
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1911514923}
                                >
                                  {" "}
                                  <div
                                    className="dmRespCol large-12 medium-12 small-12 u_1398741960"
                                    id={1398741960}
                                  >
                                    {" "}
                                    <div
                                      className="u_1715875347 graphicWidget"
                                      data-element-type="graphic"
                                      data-widget-type="graphic"
                                      id={1715875347}
                                    >
                                      {" "}
                                      <a
                                        id={1558577107}
                                        file="false"
                                        className=""
                                      >
                                        {" "}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 1408 1792"
                                          id={1842070461}
                                          className="svg u_1842070461"
                                          data-icon-name="fa-plus"
                                        >
                                          {" "}
                                          <path
                                            fill="inherit"
                                            d="M1408 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="u_1762656686 dmRespRow"
                                id={1762656686}
                              >
                                {" "}
                                <div
                                  className="dmRespColsWrapper"
                                  id={1866215403}
                                >
                                  {" "}
                                  <div
                                    className="u_1814156027 dmRespCol small-12 large-5 medium-5 hasBackgroundOverlay lazy"
                                    id={1814156027}
                                    data-background-image="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png"
                                    style={{
                                      backgroundImage:
                                        'url("https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-f9c264ef-640w.png") !important',
                                    }}
                                    data-loaded="true"
                                  >
                                    {" "}
                                    <div
                                      className="u_1130082495 imageWidget align-center"
                                      data-element-type="image"
                                      data-widget-type="image"
                                      id={1130082495}
                                      editablewidget="true"
                                    >
                                      <img
                                        src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/MAX+MOCKUPS-295h.png"
                                        alt=""
                                        id={1185080418}
                                        className=""
                                        data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/MAX+MOCKUPS.png"
                                        width={943}
                                        height={1860}
                                        // onError={() => {}}
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="u_1300420911 dmRespCol small-12 large-7 medium-7"
                                    id={1300420911}
                                  >
                                    {" "}
                                    <div
                                      className="u_1251037606 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1251037606}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p
                                        className="text-align-left m-size-24 size-36 m-text-align-center"
                                        style={{ lineHeight: 1 }}
                                      >
                                        <span
                                          className="font-size-36 m-font-size-24"
                                          m-font-size-set="true"
                                          style={{
                                            fontWeight: "bold",
                                            display: "unset",
                                            color: "rgb(216, 168, 0)",
                                          }}
                                        >
                                          EMAIL SUPPORT
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="u_1157605206 dmNewParagraph"
                                      data-element-type="paragraph"
                                      data-version={5}
                                      id={1157605206}
                                      style={{
                                        transition: "none 0s ease 0s",
                                        textAlign: "left",
                                        display: "block",
                                      }}
                                    >
                                      <p className="m-text-align-center m-size-14 size-16">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                          }}
                                        >
                                          My awesome team and I are here to
                                          guide you all the way. If you have
                                          questions about supplements, your
                                          program, working out or nutrition, we
                                          can help you. I want to make sure you
                                          get the best results possible.
                                        </span>
                                      </p>
                                      <p className="m-text-align-center">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                          }}
                                        >
                                          <br />
                                        </span>
                                      </p>
                                      <p className="m-text-align-center m-size-14 size-16">
                                        <span
                                          className="font-size-16 m-font-size-14"
                                          m-font-size-set="true"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                          }}
                                        >
                                          We are here to celebrate your
                                          transformation with you too! We want
                                          to hear about your progress, so feel
                                          free to email any time. We are here to
                                          help you train hard and guide you
                                          every step of the way.
                                        </span>
                                        <span
                                          single-space="true"
                                          className="font-size-16 m-font-size-14"
                                          style={{
                                            color: "rgb(255, 255, 255)",
                                            display: "initial",
                                          }}
                                        >
                                          {" "}
                                          <span
                                            className="font-size-16 m-font-size-14"
                                            style={{
                                              color: "rgb(255, 255, 255)",
                                              display: "initial",
                                            }}
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <a
                                      data-display-type="block"
                                      className="u_1869500883 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient lazy"
                                      file="false"
                                      href="/#STARTNOW"
                                      data-element-type="dButtonLinkId"
                                      id={1869500883}
                                      // data-buttonstyle="SQUISHY"
                                      data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                                      style={{
                                        backgroundImage:
                                          'url("data:image/svg+xml',
                                      }}
                                      data-loaded="true"
                                    >
                                      {" "}
                                      <span className="iconBg" id={1655820834}>
                                        {" "}
                                        <span
                                          className="icon hasFontIcon icon-star"
                                          id={1537604854}
                                        />
                                      </span>
                                      <span className="text" id={1296637203}>
                                        JOIN NOW!
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div> */}
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
                      <a
                        class="btn-whatsapp-pulse"
                        href={`https://wa.me//55${phone}?text=${contactMessage}`}
                      >
                        <i
                          class="fab fa-whatsapp"
                          style={{ color: "white" }}
                        ></i>
                      </a>
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
