import styled, { css } from "styled-components";

export const Container = styled.main`
  margin-top: -60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
  padding: 0 40px 30px 40px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  img {
    margin: 0 auto;
    position: relative;
    top: -25px;
  }

  h1 {
    text-align: center;
    font-size: 1.7em;
  }

  p {
    text-align: center;
    margin-top: 14px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
`;

export const bookmark = styled.div`
  height: 40px;

  display: flex;
  align-items: center;
  background-color: rgb(240, 240, 240);
  border-radius: 50px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  p {
    height: 100%;
    margin: 0;
    padding: 0 15px 0 10px;

    line-height: 40px;
    font-size: 0.82em;
    font-weight: 600;
    /* color: ${(props) => props.handleBookmark}; */
    color: ${props=>props.bookmark};
  }

  img {
    top: 0;
    height: 100%;
  }
`;
