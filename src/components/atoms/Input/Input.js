import styled from "styled-components";

const Input = styled.input`
  background-color: ${({ theme }) => theme.grey100};
  padding: 15px 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

export default Input;
