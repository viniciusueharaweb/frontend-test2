import styled from 'styled-components'

import { BurgerProps } from '.'

type WrapperProps = Pick<BurgerProps, 'open'>

export const StyledBurger = styled.button<WrapperProps>`
  position: absolute;
  top: 1.5%;
  left: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 1.5rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.neutrals.white[600] : theme.colors.primary.blue[700]};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media screen and (max-width: 992px) {
    display: flex;
  } ;
`
