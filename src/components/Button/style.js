import styled from "styled-components";

export const Container = styled.button`
  background-color: ${props=>props.bg};
  color: white;
  font-weight: 600;
  
  padding: 13px 24px;
  border: none;
  border-radius: ${(props) => props.border}px;

  transition: all .2s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${props=>props.bgHover};
  }
`;
