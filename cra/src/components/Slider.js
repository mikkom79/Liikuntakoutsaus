import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 10;

const Slider = ({ rtl, values, setValues }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "1em",
              width: "1px",
              backgroundColor:
                index * STEP < values[0]
                  ? "var(--color-coat-of-arms)"
                  : "var(--color-black-20)",
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "30px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                alignSelf: "center",
                background: getTrackBackground({
                  values,
                  colors: ["var(--color-coat-of-arms)", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: isDragged ? "20px" : "25px",
              width: isDragged ? "20px" : "25px",
              borderRadius: "50%",
              backgroundColor: "var(--color-coat-of-arms-dark)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "var(--box-shadow-l)",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: "transparent",
              }}
            />
          </div>
        )}
      />
      <output className="output-range">{values[0]}</output>
    </div>
  );
};

export default Slider;
