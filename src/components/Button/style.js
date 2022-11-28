import styled from "styled-components";

export const Container = styled.button`
  background-color: hsl(176, 50%, 47%);
  color: white;
  font-weight: 600;
  
  padding: 13px 24px;
  border: none;
  border-radius: ${(props) => props.border}px;

  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;
