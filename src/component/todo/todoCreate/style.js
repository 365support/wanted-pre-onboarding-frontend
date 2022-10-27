import { css } from "@emotion/react";
import { COLOR } from "../../../shared/style";

export const todoCreateContainer = css`
  margin: 10px 0px;
  justify-content: center;
  display: flex;
`;

export const todoCreateInputCss = css`
  width: 58%;
  height: 20px;
  background: ${COLOR.White200};
  justify-content: center;
  display: flex;
  margin-right: 12px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const todoCreateButtonCss = css`
  color: ${COLOR.White100};
  padding: 10px;
  font-weight: bold;
  background-color: ${COLOR.Purple200};
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
`;
