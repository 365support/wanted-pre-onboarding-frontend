import { css } from "@emotion/react";
import { COLOR } from "../../../shared/style";

export const todoHeaderLabelCss = css`
  color: ${COLOR.White100};
  font-size: 2.3em;
  justify-content: space-between;
  display: flex;
  margin: 30px 35px;
  font-weight: bold;
`;

export const todoHeaderLogoutBtnCss = css`
  background-color: ${COLOR.White200};
  color: ${COLOR.Purple200};
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
