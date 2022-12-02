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

export const ContainerViewCrowndfund = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 100pc;
`;

export const ViewCrowndfund = styled.div`
  opacity: 1;
  z-index: 15;
  background-color: white;

  height: fit-content;
  margin-top: 50px;
  padding: 20px;
  border-radius: 5px;

  width: 100%;
  max-width: 700px;

  p {
    margin: 12px 0;
    font-size: 0.85em;
  }
`;

export const HeaderViewCrowndfund = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    font-size: 1.2em;
  }

  img {
    margin-left: 20px;
    height: fit-content;
    cursor: pointer;
  }
`;

export const ContainerOptionCrowndfund = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin-top: 15px;

  div {
  }

  input {
    height: 100%;
    cursor: pointer;

    margin-right: 25px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  padding: 15px;
`;

export const ContentOptionCrowndfund = styled.div`
  width: 100%;
`;

export const OptionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  h6 {
    font-size: 0.9em;
    margin-right: 7px;
    margin-left: -10px;
  }

  span {
    color: hsl(176, 50%, 47%);
    font-size: 0.8em;
    font-weight: 600;
  }

  p {
    font-size: 0.78em;
  }
`;

export const ContainerPledge = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #a9a9a9;
  padding: 15px;

  div {
    height: 100%;
    display: flex;
  }
  button {
    padding: 10px 20px;
  }
`;

export const InputValue = styled.div`
  height: 100%;

  /* background-color: red; */
  position: relative;

  p {
    position: absolute;
    left: 15px;
    bottom: 0px;
    top: -3px;
  }

  input {
    height: 100%;
    margin: 0;
    margin-right: 10px;

    border-radius: 20px;
    border: 1px solid black;

    padding: 8px 27px;
    padding-right: 20px;
    width: 80px;
    text-align: end;

    overflow: hidden;
    cursor: text;
    transition: all .15s ease-in-out;

    &:focus {
      outline: 0;
      border: 1px solid hsl(176, 50%, 47%);
    }
  }
`;
