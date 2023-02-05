import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 576px) and (max-width: 992px){
      ${props}
    }
  `;
};