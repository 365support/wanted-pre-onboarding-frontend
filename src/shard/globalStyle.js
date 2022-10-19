import { css } from "@emotion/react";

export const customBodyStyle = css`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  }
`;

export const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: linear-gradient(to bottom, #26224f, #302b63, #26224f);
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;
