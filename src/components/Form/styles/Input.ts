import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  background-color: rgba(246, 246, 246, 0.3);
  border: 1px solid ${({ theme }) => theme.colors.neutrals.white[600]};
  border-radius: 5px;
  text-indent: 20px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  ::-webkit-input-placeholder {
    opacity: 0.4;
    font-size: inherit;
    color: inherit;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.neutrals.gray[500]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.neutrals.black[600]};
    background-color: rgba(246, 246, 246, 0.2);
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
    transform: translateX(10px);
  }
`

export default Input
