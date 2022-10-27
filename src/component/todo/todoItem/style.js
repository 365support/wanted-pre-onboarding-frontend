import { css } from "@emotion/react";
import { COLOR } from "../../../shared/style";
import styled from "@emotion/styled";

export const todoListContainer = css`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export const inputCss = css`
  width: 36%;
  background-color: ${COLOR.White200};
  justify-content: center;
  display: flex;
  margin-right: 10px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  word-break: break-all;
`;

export const basicButton = css`
  color: ${COLOR.White100};
  font-weight: bold;
  background-color: ${COLOR.Purple200};
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  white-space: pre-line;
  text-align: center;
`;

export const customButton = css`
  ${basicButton}
  background-color: ${COLOR.Purple100};
`;

export const checkCircle = css`
  width: 22px;
  height: 22px;
  border-radius: 16px;
  border: 1px solid ${COLOR.White200};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 7px;
  cursor: pointer;
`;

export const hiddencheckCircle = css`
  ${checkCircle}
  visibility: hidden;
`;

export const CheckBox = styled.div`
  ${checkCircle}
  border: ${({ isCompleted }) => (isCompleted ? ` 1px solid ${COLOR.White100}` : "")};
  color: ${({ isCompleted }) => (isCompleted ? `${COLOR.White100}` : "")};
`;

export const ContentDiv = styled.div`
  ${inputCss};

  text-decoration: ${({ isCompleted }) => (isCompleted ? "line-through" : null)};
`;
