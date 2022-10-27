import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLOR } from "../../../shared/style";
import * as authSytle from "../authStyle";

export const LoginContainer = styled.form`
  height: 460px;
  background: ${COLOR.White100};
  border-radius: 60% / 10%;
  transition: 0.8s ease-in-out;
  transform: ${({ isShown }) => (!isShown ? "translateY(20px)" : "translateY(-290px)")};
`;

export const loginLabelCss = css`
  ${authSytle.labelCss}
  color: ${COLOR.Purple200};
  padding-top: 15px;
`;

export const loginErrorWrapper = css`
  ${authSytle.errorWrapper}
  color: ${COLOR.Purple200};
`;
