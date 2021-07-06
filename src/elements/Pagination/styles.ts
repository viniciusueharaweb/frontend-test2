import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  & span {
    font-size: 0.8rem;
  }
  & svg {
    margin: 0 15px;
    color: ${({ theme }) => theme.colors.neutrals.gray[400]};
  }
`
