import styled from "styled-components";
import bgDesktop from "../../assets/images/image-hero-desktop.jpg";
import bgMobile from "../../assets/images/image-hero-mobile.jpg";

export const Container = styled.header`
  height: 250px;

  width: 100vw;

  background-image: url(${bgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  img {
    height: fit-content;
  }

  div {
    width: 100%;
    height: 100px;
    padding: 25px 0;
    background-image: linear-gradient(
      to top,
      rgba(10, 10, 10, 0),
      rgba(0, 0, 0, 0.7)
    );
  }

  nav {
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    background-image: url(${bgMobile});
  }
`;

export const Navigation = styled.ul`
  display: flex;

  li {
    list-style: none;
    margin-left: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9em;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

export const ContainerMenu = styled.menu`
  display: none;

  position: relative;
  background-image: none;

  img {
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 30px;
    right: 0;

    display: ${(props) => props.viewMenu};
    flex-direction: column;

    background-color: white;
    width: 140px;
    border-radius: 7px;

    transition: all 0.2s ease-in-out;
  }

  li {
    list-style: none;
    border-bottom: 1px solid #cacaca;
    padding: 7px 14px;

    transition: all 0.2s ease-in-out;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 500;
  }

  @media (max-width: 460px) {
    display: block;
  }

  @media (max-width: 350px) {
    ul {
        width: 90vw;
    }
  }
`;
