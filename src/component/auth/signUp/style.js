import { COLOR } from "../../../shared/style";
import { css } from "@emotion/react";
import * as authSytle from "../authStyle";

export const signUplabelCss = css`
  ${authSytle.labelCss}
  color: ${COLOR.White100};
`;

export const signUperrorWrapper = css`
  ${authSytle.errorWrapper}
  color: ${COLOR.White100};
`;
