import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

const sizes = {
  medium: () => css`
    padding: 8px 30px;
  `,
  big: () => css`
    padding: 10px 50px;
  `,
} as const

type WrapperProps = Pick<ButtonProps, 'size' | 'active' | 'disabled'>

export const ButtonStyled = styled.button<WrapperProps>`
  display: block;
  border-radius: 40px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  background-color: ${({ theme }) => theme.colors.primary.blue[700]};
  box-shadow: 0px 4px 2px 1px rgba(201, 201, 201, 0.53);
  ${({ size }) => size && sizes[size!]()}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray;
      cursor: default;
    `}
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.blue[500]};
  }
`
export const DashboardButton = styled.button<WrapperProps>`
  background-color: transparent;
  border-radius: 40px;
  display: flex;
  align-items: center;
  width: 97%;
  margin: 8px 0 0 3%;
  padding: 10px 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  & svg {
    margin-right: 11px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.blue[500]};
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.neutrals.white[400]};
      color: ${({ theme }) => theme.colors.primary.blue[600]};
      &:hover {
        background-color: ${({ theme }) => theme.colors.neutrals.white[600]};
      }
    `}
`
