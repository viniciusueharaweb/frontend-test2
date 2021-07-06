import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & input {
    outline: 0;
    border-width: 0 0 1px;
    padding: 8px;
    border-color:  ${({ theme }) => theme.colors.neutrals.gray[600]};
  }
  & svg {
    margin: 0 15px;
    color: ${({ theme }) => theme.colors.neutrals.gray[600]};
  }
`
