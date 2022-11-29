import styled, { css } from "styled-components";

export const Container = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 28px 0;
  }
`;

export const OptionsCrowdfunding = styled.div`
  border: 1px solid #acacac;
  padding: 20px 19px;
  margin-top: 17px;
  border-radius: 5px;

  p {
    margin: 15px 0;
    font-size: 0.95em;
  }

  ${(props) =>
    props.nullOption &&
    css`
      opacity: 0.5;
      cursor: no-drop;

      button {
        cursor: no-drop;
      }
    `}
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1.07em;
  }

  span {
    font-size: 0.9em;
    font-weight: 500;
    color: hsl(176, 50%, 47%);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  h5 {
    font-size: 1.7em;
  }

  p {
    height: 50%;
    margin-left: 7px;
  }

  button {
    height: 100%;
  }
`;
