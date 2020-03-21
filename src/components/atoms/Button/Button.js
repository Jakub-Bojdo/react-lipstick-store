import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.darkerPink};
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  text-transform: capitalize;

  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 50%;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    `}
`;
export default Button;
