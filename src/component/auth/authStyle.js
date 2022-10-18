import { css } from "@emotion/react";

export const labelCss = css`
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

export const inputCss = css`
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const buttonCss = css`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
`;

export const errorWrapper = css`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  font-size: 15px;
  margin: auto;
`;
