import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.green[500]};
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  padding: 8px 11px;
  font-size: 1rem;
  margin-top: 20px;
  & svg {
    margin-right: 10px;
  }
`
