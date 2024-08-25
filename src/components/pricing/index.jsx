import config from "@/constants/index";
import Benefits from "./components/benefits";

const Pricing = () => {
  const {
    contact: { phone },
    plans = [],
  } = config || {};

  return (
    <div
      className="u_1549561334 dmRespRow"
      style={{ textAlign: "center", paddingTop: 'unset !important' }}
      id={1549561334}
      data-anchor="My Programs"
    >
      <div className="dmRespColsWrapper" id={1297758432}>
        <div
          className="dmRespCol small-12 medium-12 large-12 u_1293837732"
          id={1293837732}
        >
          <span id={1491741063} />
          <div className="u_1894572796 dmRespRow" id={1894572796}>
            <div className="dmRespColsWrapper" id={1852125217}>
              {plans.map((plan) => (
                <div
                  key={plan?.id}
                  className="u_1323229572 dmRespCol small-12 medium-4 large-4 hasBackgroundOverlay lazy"
                  id={1323229572}
                  data-loaded="true"
                >
                  {plan?.bestOfferText && (
                    <div
                      className="u_1384678582 default dmShape"
                      id={1384678582}
                      dmle_extension="shape"
                      data-element-type="shape"
                      text-position="center_center"
                      wr="true"
                      icon="true"
                      surround="true"
                      adwords=""
                      shape-text="QmVzdCBPZmZlcg=="
                      shape-description=""
                      shape-image=""
                      alt-text=""
                      tooltip=""
                      shape-type="parallelogram"
                      show-text-on-shape="true"
                      show-description-on-shape="true"
                      shape-color="rgb(130 52 233)"
                      border-color-shape=""
                      overlay-color="#ffffff"
                      image-position="xMidYMid"
                      shape-keep-proportion="false"
                      shape-layout="layout1"
                      border-width-shape={0}
                      overlay-opacity={50}
                    >
                      <a data-link-id="shape-link-container" id={1632386146}>
                        <div
                          className="container-text container-padding center_center"
                          id={1218641992}
                        >
                          <h3 className="shape-text" id={1897796727}>
                            {plan?.bestOfferText}
                          </h3>
                          <div className="shape-description" id={1895106801} />
                        </div>
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0.00 0.00 100 100"
                          preserveAspectRatio="none"
                          id={1931473515}
                        >
                          <g>
                            <polygon
                              points="0,0 80,0 100,100 20,100 "
                              style={{
                                fill: "rgb(130 52 233)",
                              }}
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  )}
                  <div
                    className="u_1175165527 dmNewParagraph"
                    data-element-type="paragraph"
                    id={1175165527}
                    style={{
                      transition: "none 0s ease 0s",
                      display: "block",
                      lineHeight: "initial",
                      textAlign: "center",
                    }}
                    data-version={5}
                  >
                    {/* <h3 className="text-align-center">
                      <span style={{ display: "initial" }}>
                        <br />
                      </span>
                    </h3> */}
                    <h3 className="text-align-center size-28">
                      <span
                        className="font-size-28"
                        style={{
                          color: "rgb(255, 255, 255)",
                          fontWeight: 700,
                          display: "initial",
                          fontFamily: 'Barlow, "Barlow Fallback"',
                        }}
                      >
                        <span
                          className="font-size-28"
                          style={{
                            color: "rgb(255, 255, 255)",
                            fontWeight: 700,
                            display: "initial",
                            fontFamily: 'Barlow, "Barlow Fallback"',
                          }}
                        >
                          {plan?.displayName}
                        </span>
                      </span>
                      {/* <span
                      className="font-size-28"
                      style={{
                        color: "rgb(255, 255, 255)",
                        fontWeight: "normal",
                        display: "initial",
                        fontFamily: 'Barlow, "Barlow Fallback"',
                      }}
                    >
                      MEMBERSHIP
                    </span> */}
                    </h3>
                    <h3 className="text-align-center">
                      <span style={{ display: "initial" }}>
                        <br />
                      </span>
                    </h3>
                  </div>
                  <div
                    className="u_1443598449 dmNewParagraph"
                    data-element-type="paragraph"
                    data-version={5}
                    id={1443598449}
                    style={{
                      transition: "none 0s ease 0s",
                      textAlign: "left",
                      display: "block",
                    }}
                  >
                    <h3
                      className="m-size-28 text-align-center size-35"
                      style={{ lineHeight: 1 }}
                    >
                      <span
                        className="m-font-size-28 font-size-35"
                        style={{
                          color: "rgb(255 205 30)",
                          fontWeight: 700,
                          display: "unset",
                          fontFamily: 'Barlow, "Barlow Fallback"',
                        }}
                      >
                        {plan?.title}
                      </span>
                      <span style={{ display: "initial" }}>
                        <br />
                      </span>
                    </h3>
                  </div>
                  <div
                    className="u_1939682894 dmNewParagraph"
                    data-element-type="paragraph"
                    data-version={5}
                    id={1939682894}
                    style={{
                      transition: "none 0s ease 0s",
                      textAlign: "left",
                      display: "block",
                    }}
                  >
                    <p className="text-align-center" style={{ lineHeight: 1 }}>
                      <span style={{ display: "initial" }}>
                        <br />
                      </span>
                    </p>
                    <p
                      className="text-align-center m-size-16"
                      style={{ lineHeight: 1 }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          display: "unset",
                          color: "rgb(255, 255, 255)",
                        }}
                        className="font-size-48 m-font-size-48"
                        m-font-size-set="true"
                      >
                        {plan?.price}
                      </span>
                      <span
                        style={{
                          display: "unset",
                          color: "rgb(255, 255, 255)",
                        }}
                        m-font-size-set="true"
                        className="m-font-size-16"
                      >
                        {`/${plan?.abreviation}`}
                      </span>
                    </p>
                  </div>
                  <a
                    data-display-type="block"
                    className="u_1698594783 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient lazy"
                    file="false"
                    //   href="https://dedicated.ulissesworld.com/subscribe/533e10a7-0b90-4e05-adb3-bd576fe9beaf/sign-up"
                    data-element-type="dButtonLinkId"
                    id={1698594783}
                    // data-buttonstyle="SQUISHY"
                    target="_blank"
                    data-background-image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc1IDQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9ImhhdDAiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9Ii0xLjQyMTA4NTQ3MTUyMDJlLTE0JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNDA1MDUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2hhdDApIiAvPgo8L3N2Zz4="
                    style={{
                      backgroundImage: 'url("data:image/svg+xml',
                    }}
                    data-loaded="true"
                    href={`https://wa.me//55${phone}?text=${plan?.messageWhatsappContact}`}
                  >
                    <span className="iconBg" id={1553507536}>
                      <span
                        className="icon hasFontIcon icon-star"
                        id={1320424647}
                      />
                    </span>
                    <span className="text" id={1773508110}>
                      {plan?.textBuyButton}
                    </span>
                  </a>
                  <Benefits benefits={plan?.benefits} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
