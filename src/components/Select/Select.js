import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    // <Wrapper as="select" value={value} onChange={onChange}>
    //   {children}
    // </Wrapper>
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

//declare NativeSelect styled select componen
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
// const Wrapper = styled.div`
//   width: fit-content;
//   height: 43px;
//   border-radius: 8px;
//   background-color: ${COLORS.transparentGray15};
//   font-family: "Roboto", sans-serif;
//   color: ${COLORS.gray700};
//   font-weight: 400;

//   &:focus {
//     outline: 2px solid #4374cb;
//     -moz-outline-radius: 3px;
//   }

//   &:hover {
//     color: black;
//   }
// `;

export default Select;
