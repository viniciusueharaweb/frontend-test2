import styled, { css } from 'styled-components'
import { StatusProps } from '.'

export const Container = styled.div<StatusProps>`
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  width: fit-content;
  display: flex;
  height: 23px;
  font-size: 0.8rem;
  font-weight: 500;
  align-items: center;
  padding: 0 10px;
  border-radius:8px;
  text-align: center;
  ${({ label }) =>
    label === 'VENCIDO' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.pink[400]};
    `}
  ${({ label }) =>
    label === 'PENDENTE' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.yellow[500]};
    `}
  ${({ label }) =>
    label === 'PAGO' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary.green[500]};
    `}
`
