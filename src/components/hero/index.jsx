import config from "@/constants/index";
import Link from "next/link";
const Hero = () => {
  const {
    contact: { phone = "", contactMessage = "" },
  } = config || {};

  return (
    <div
      className="u_1323198548 dmRespRow dmSectionNoParallax fullBleedChanged fullBleedMode hasBackgroundOverlay hide-for-medium"
      id={1323198548}
    >
      {" "}
      <div className="dmRespColsWrapper" id={1768965626}>
        {" "}
        <div
          className="dmRespCol large-12 medium-12 small-12 u_1579228427"
          id={1579228427}
        >
          {" "}
          {/* <div
            className="u_1493266128 imageWidget align-center"
            data-element-type="image"
            data-widget-type="image"
            id={1493266128}
            editablewidget="true"
          >
            <img
              src="https://lirp.cdn-website.com/cb86c99c/dms3rep/multi/opt/logo-2-_1_-3000x3000-0040468f-213w.png"
              alt=""
              id={1620889828}
              className=""
              data-dm-image-path="https://irp.cdn-website.com/cb86c99c/dms3rep/multi/logo-2-_1_-3000x3000-0040468f.png"
              width={1920}
              height={1502}
              // onError={() => {}}
            />
          </div> */}
          {/* <div
            className="u_1807932248 dmNewParagraph"
            data-element-type="paragraph"
            data-version={5}
            id={1807932248}
            style={{
              transition: "none 0s ease 0s",
              textAlign: "left",
              display: "block",
            }}
          >
            <p
              className="text-align-center m-size-20 size-30"
              style={{ lineHeight: 1 }}
            >
              <span
                style={{
                  color: "rgb(255, 255, 255)",
                  fontWeight: "bold",
                  display: "initial",
                }}
                className="font-size-30 m-font-size-20"
                m-font-size-set="true"
              >
                Build your
              </span>
              <span
                single-space="true"
                className="font-size-30 m-font-size-20"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontWeight: "bold",
                  display: "initial",
                }}
              >
                {" "}
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontWeight: "bold",
                    display: "initial",
                  }}
                  className="font-size-30 m-font-size-20"
                />
              </span>
              <span
                style={{
                  color: "rgb(74, 74, 74)",
                  fontWeight: "bold",
                  display: "initial",
                }}
                className="font-size-30 m-font-size-20"
                m-font-size-set="true"
              >
                best
              </span>
              <span
                single-space="true"
                className="font-size-30 m-font-size-20"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontWeight: "bold",
                  display: "initial",
                }}
              >
                {" "}
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontWeight: "bold",
                    display: "initial",
                  }}
                  className="font-size-30 m-font-size-20"
                />
              </span>
              <span
                style={{
                  color: "rgb(255, 255, 255)",
                  fontWeight: "bold",
                  display: "initial",
                }}
                className="font-size-30 m-font-size-20"
                m-font-size-set="true"
              >
                physique
              </span>
            </p>
          </div> */}
          <div
            className="u_1495096076 dmNewParagraph"
            data-element-type="paragraph"
            data-version={5}
            id={1495096076}
            style={{
              transition: "none 0s ease 0s",
              textAlign: "left",
              display: "block",
              marginBottom: "300 !important",
            }}
          >
            <p
              className="m-size-48 text-align-center size-60"
              style={{ lineHeight: 1 }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "initial",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                TE EMPRESTO
              </span>
              <span
                single-space="true"
                className="m-font-size-48 font-size-60"
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "initial",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgb(216, 168, 0)",
                    display: "initial",
                  }}
                  className="m-font-size-48 font-size-60"
                />
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "rgb(255, 255, 255)",
                  display: "initial",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                R$ 150
              </span>
              {/* <span
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "unset",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                &nbsp;
              </span>
              <span
                single-space="true"
                className="m-font-size-48 font-size-60"
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "unset",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgb(216, 168, 0)",
                    display: "unset",
                  }}
                  className="m-font-size-48 font-size-60"
                />
              </span> */}
            </p>
            {/* <p
              className="m-size-48 text-align-center size-60"
              style={{ lineHeight: 1 }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "unset",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                R$ 150
              </span>
              <span
                single-space="true"
                className="m-font-size-48 font-size-60"
                style={{
                  fontWeight: "bold",
                  color: "rgb(255, 255, 255)",
                  display: "unset",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgb(255, 255, 255)",
                    display: "unset",
                  }}
                  className="m-font-size-48 font-size-60"
                />
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "rgb(255, 255, 255)",
                  display: "unset",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                A PERDER DE VISTA
              </span>
              <span
                single-space="true"
                className="m-font-size-48 font-size-60"
                style={{
                  fontWeight: "bold",
                  color: "rgb(216, 168, 0)",
                  display: "unset",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgb(216, 168, 0)",
                    display: "unset",
                  }}
                  className="m-font-size-48 font-size-60"
                />
              </span>
            </p> */}
          </div>
          <a
            data-display-type="block"
            className="u_1337210630 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient sticky-desktop-position-bottom-right sticky-mobile-position-bottom"
            file="false"
            // href="/#STARTNOW"
            href={`https://wa.me//55${phone}?text=${contactMessage}`}
            data-element-type="dButtonLinkId"
            id={1337210630}
            // data-buttonstyle="SQUISHY"
          >
            {" "}
            <span className="iconBg" id={1487156950}>
              {" "}
              <span className="icon hasFontIcon icon-star" id={1848238682} />
            </span>
            <span className="text" id={1627352477}>
              CONTRATAR
            </span>
          </a>
          <Link
            data-display-type="block"
            className="u_1337210630 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient sticky-desktop-position-bottom-right sticky-mobile-position-bottom"
            file="false"
            href="#results"
            data-element-type="dButtonLinkId"
            // id={1681737098}
            // scroll={false}
          >
            {" "}
            <span className="iconBg" id={1487156950}>
              {" "}
              <span className="icon hasFontIcon icon-star" id={1848238682} />
            </span>
            <span className="text" id={1627352477}>
              RESULTADOS
            </span>
          </Link>
          {/* <a
            data-display-type="block"
            className="u_1337210630 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient sticky-desktop-position-bottom-right sticky-mobile-position-bottom"
            file="false"
            href="/#STARTNOW"
            data-element-type="dButtonLinkId"
            id={1337210630}
            // data-buttonstyle="SQUISHY"
          >
            {" "}
            <span className="iconBg" id={1487156950}>
              {" "}
              <span className="icon hasFontIcon icon-star" id={1848238682} />
            </span>
            <span className="text" id={1627352477}>
              RESULTADOS
            </span>
          </a> */}
          <a
            data-display-type="block"
            className="u_1337210630 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient sticky-desktop-position-bottom-right sticky-mobile-position-bottom"
            file="false"
            href="/#STARTNOW"
            data-element-type="dButtonLinkId"
            id={1337210630}
            // data-buttonstyle="SQUISHY"
          >
            {" "}
            <span className="iconBg" id={1487156950}>
              {" "}
              <span className="icon hasFontIcon icon-star" id={1848238682} />
            </span>
            <span className="text" id={1627352477}>
              PLANOS
            </span>
          </a>
          <div
            className="u_1933124479 dmRespRow fullBleedChanged fullBleedMode"
            id={1933124479}
          >
            {" "}
            <div className="dmRespColsWrapper" id={1154879213}>
              {" "}
              <div
                className="dmRespCol small-12 medium-12 large-12"
                id={1164045771}
              >
                {" "}
                <div
                  className="u_1621027972 dmNewParagraph"
                  data-element-type="paragraph"
                  data-version={5}
                  id={1621027972}
                  style={{
                    transition: "none 0s ease 0s",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  <p
                    className="m-text-align-center text-align-center m-size-24 size-36"
                    style={{ lineHeight: 1 }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(216, 168, 0)",
                        display: "initial",
                      }}
                      className="font-size-36 m-font-size-24"
                      m-font-size-set="true"
                    >
                      TENHA OS MELHORES RESULTADOS
                    </span>
                  </p>
                  <p
                    className="m-text-align-center text-align-center"
                    style={{ lineHeight: 1 }}
                  >
                    <span style={{ display: "initial" }}>
                      <br />
                    </span>
                  </p>
                  <p
                    className="m-text-align-center text-align-center"
                    style={{ lineHeight: 1 }}
                  >
                    <span style={{ display: "initial" }}>C</span>
                  </p>
                  <p
                    className="m-text-align-center text-align-center size-24 m-size-18"
                    style={{ lineHeight: 1 }}
                  >
                    {/* <span
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        CHOOSE FROM MY
                      </span>
                    </span> */}
                    <span
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                      className="font-size-24 m-font-size-18"
                      m-font-size-set="true"
                    >
                      {"TREINAMENTOS "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                          fontWeight: "bold",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        {"PERSONALIZADOS "}
                      </span>
                      {"PARA A SUA  "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                          fontWeight: "bold",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        {"MÁXIMA PERFORMANCE"}
                      </span>
                    </span>

                    {/* <span
                      single-space="true"
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      />
                    </span>
                    <span
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                        fontWeight: "bold",
                      }}
                      className="font-size-24 m-font-size-18"
                      m-font-size-set="true"
                    >
                      ESSENTIALS
                    </span>
                    <span
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        OR
                      </span>
                    </span>
                    <span
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                        fontWeight: "bold",
                      }}
                      className="font-size-24 m-font-size-18"
                      m-font-size-set="true"
                    >
                      ULTIMATE TRANSFORMATION
                    </span>
                    <span
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        PROGRAM
                      </span>
                    </span> */}
                  </p>
                  {/* <p
                    className="m-text-align-center text-align-center"
                    style={{ lineHeight: 1 }}
                  >
                    <span
                      style={{ display: "initial" }}
                      className="m-font-size-18"
                      m-font-size-set="true"
                    >
                      <br />
                    </span>
                  </p>
                  <p
                    className="m-text-align-center text-align-center size-24 m-size-18"
                    style={{ lineHeight: 1 }}
                  >
                    <span
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        AND JOIN THE ARMY OF OVER
                      </span>
                    </span>
                    <span
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                        fontWeight: "bold",
                      }}
                      className="font-size-24 m-font-size-18"
                      m-font-size-set="true"
                    >
                      40,000 PEOPLE
                    </span>
                    <span
                      className="font-size-24 m-font-size-18"
                      style={{
                        color: "rgb(255, 255, 255)",
                        display: "initial",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          display: "initial",
                        }}
                        className="font-size-24 m-font-size-18"
                        m-font-size-set="true"
                      >
                        WHO ARE ALREADY SMASHING THEIR GOALS!
                      </span>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
