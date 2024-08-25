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
              className="m-size-28 text-align-center size-60"
              style={{ lineHeight: 1 }}
            >
              {/* <span
                style={{
                  fontWeight: "bold",
                  color: "#0D83EF",
                  display: "initial",
                }}
                className="m-font-size-48 font-size-60"
                m-font-size-set="true"
              >
                TE EMPRESTO
              </span> */}
              <span
                single-space="true"
                className="m-font-size-48 font-size-60"
                style={{
                  fontWeight: "bold",
                  color: "#0D83EF",
                  display: "initial",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
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
                  textTransform: "uppercase",
                  fontSize: "28px !important",
                }}
                className=""
                m-font-size-set="true"
              >
                Você se dedica ao{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
                    display: "unset",
                  }}
                  className="m-font-size-28 font-size-60"
                  m-font-size-set="true"
                >
                  máximo
                </span>{" "}
                 nos treinos, mas seu corpo <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
                    display: "unset",
                  }}
                  className="m-font-size-28 font-size-60"
                  m-font-size-set="true"
                >

<span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
                    display: "unset",
                  }}
                  className="m-font-size-28 font-size-60"
                  m-font-size-set="true"
                >
                  não
                </span>
                  
                </span> mostra os <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
                    display: "unset",
                  }}
                  className="m-font-size-28 font-size-60"
                  m-font-size-set="true"
                >
                  resultados
                  esperados?
                </span> 
              </span>
              {/* <span
                style={{
                  fontWeight: "bold",
                  color: "#0D83EF",
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
                  color: "#0D83EF",
                  display: "unset",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
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
                  color: "#0D83EF",
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
                  color: "#0D83EF",
                  display: "unset",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#0D83EF",
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
            <span
              className="text"
              id={1627352477}
              style={{ padding: "7px 7px" }}
            >
              FAZER PARTE DO TIME
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
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
