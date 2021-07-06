import styled from 'styled-components'

import { SidebarMenuProps } from '.'

type WrapperProps = Pick<SidebarMenuProps, 'open'>

export const Container = styled.aside<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.primary.blue[600]};
  width: 340px;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  & > h3 {
    color: ${({ theme }) => theme.colors.neutrals.white[400]};
    margin: 0 auto;
    text-align: center;
    padding: 17px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 992px) {
    position: absolute;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 10px;
`

export const LimitWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.blue[500]};
  width: 85%;
  margin: 0 auto 28px;
  padding: 17px 23px;
  border-radius: 7px;
`
export const LimitContent = styled.ul`
  color: white;
  & li {
    display: inline;
    font-size: 0.83rem;
    &:before {
      width: 8px;
      height: 8px;
      content: '';
      display: inline-block;
      position: relative;
      bottom: 1px;
      right: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary.blue[400]};
    }
  }
  & h3 {
    font-size: 0.94rem;
    font-weight: 700;
    padding-left: 8px;
    margin: 6px 0;
  }
  & a {
    font-size: 0.83rem;
    display: block;
    font-weight: 300;
    text-decoration: underline;
    padding-left: 8px;
    margin: 12px 0;
    &:link {
      color: ${({ theme }) => theme.colors.neutrals.white[400]};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.neutrals.white[400]};
    }
  }
`
export const DashboardButtonsWrapper = styled.div`
  padding-bottom: 21px;
`

export const InfoSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.blue[700]};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const InfoButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  & svg {
    margin-bottom: 10px;
  }
`
