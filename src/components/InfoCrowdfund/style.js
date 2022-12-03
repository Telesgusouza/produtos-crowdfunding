import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ContainerValue = styled.div`
  padding: 15px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  p {
    color: #505050;
    margin-top: 7px;
    font-size: 0.9em;
  }

  div {
    border-right: 1px solid #c0c0c0;
    padding: 5px 25px;

    &:nth-child(1) {
      padding-left: 0;
    }

    &:nth-child(3) {
      border: none;
    }
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;

    div {
      margin: 0 auto;
      width: fit-content;
      padding: 10px 0;
      border: none;
      text-align: center;

      border-bottom: 1px solid #c0c0c0;
    }
  }
`;

export const navBar = styled.div`
  background-color: hsl(0, 0%, 88%);
  margin-top: 14px;
  height: 7px;
  border-radius: 5px;

  div {
    background-color: hsl(176, 50%, 47%);
    height: 100%;
    width: 77%;
    border-radius: 5px;
  }
`;
