import * as React from "react";
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 0;
const MAX = 10;

const Slider = ({ rtl }) => {
  const [values, setValues] = React.useState([5]);
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
              height: "18px",
              width: "2px",
              backgroundColor: index * STEP < values[0] ? "#548BF4" : "#ccc",
            }}
          />
        )}
        renderTrack= {({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "30px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                alignSelf: "center",
                background: getTrackBackground({
                    values,
                    colors: ['#548BF4', '#ccc'],
                    min: MIN,
                    max: MAX,
                    rtl
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
              height: isDragged ? "20px" : "30px",
              width: isDragged ? "20px" : "30px",
              borderRadius: "50%",
              backgroundColor: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA"
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
      <output style={{ marginTop: "30px" }}>{values[0]}</output>
    </div>
  );
};

export default Slider;
