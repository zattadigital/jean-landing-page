const Benefits = ({ benefits = [] }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="u_1496346230 dmNewParagraph"
        data-element-type="paragraph"
        id={1496346230}
        style={{
          transition: "none 0s ease 0s",
          display: "block",
          textAlign: "left",
          marginTop: "30px !important",
        }}
        data-version={5}
      >
        {benefits.map((item, index) => (
          <div key={index}>
            <h4
              className=" m-size-14"
              style={{ lineHeight: "1.7", marginBottom: "12px" }}
            >
              <span
                style={{
                  display: "initial",
                  fontWeight: 300,
                  color: "rgb(255, 255, 255)",
                }}
                className="m-font-size-14"
                m-font-size-set="true"
              >
                {`✓ ${item}`}
              </span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
