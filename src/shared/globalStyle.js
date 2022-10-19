import { css } from "@emotion/react";
import { COLOR } from "./style";

export const customBodyStyle = css`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(
      to bottom,
      ${COLOR.Purple500},
      ${COLOR.Purple300},
      ${COLOR.Purple400}
    );
  }
`;

export const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    ${COLOR.Purple450},
    ${COLOR.Purple300},
    ${COLOR.Purple450}
  );
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;
