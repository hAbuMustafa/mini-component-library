/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    height: "24px",
    "border-radius": "8px",
    padding: "4px",
  },
  medium: {
    height: "12px",
  },
  small: {
    height: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <div
        role="progressbar"
        style={{
          width: (value >= 100 ? 100 : value) + "%",
          borderRadius: value >= 100 ? "4px 4px 4px 4px" : "4px 0px 0px 4px",
        }}
        aria-valuenow={value}
        aria-valuemax="100"
        aria-valuemin="0"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

  div {
    height: 100%;
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
