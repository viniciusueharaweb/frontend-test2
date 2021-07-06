import styled, { css } from 'styled-components'
import { MenuLabelProps } from '.'

export const Container = styled.button<MenuLabelProps>`
  background-color: transparent;
  display: inline-block;
  padding: 8px 11px;
  margin-bottom: 10px;
  ${({ active }) =>
    active &&
    css`
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary.blue[700]}`};
    `}
  & h2 {
    color: ${({ theme }) => theme.colors.neutrals.gray[400]};
    font-weight: 600;
    font-size: 1rem;
    &:hover {
    color: ${({ theme }) => theme.colors.neutrals.gray[600]};
  }
  }

`
