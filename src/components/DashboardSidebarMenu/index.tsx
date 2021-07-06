import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Container,
  LimitWrapper,
  LimitContent,
  DashboardButtonsWrapper,
  InfoSection,
  InfoButton,
  LogoutButton,
} from './styles'
import Button from '../../elements/Button'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { IoWalletOutline } from 'react-icons/io5'
import { FaUserLock, FaRobot, FaWhatsapp } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import { GiMeshNetwork } from 'react-icons/gi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import defaultAccount from '../../mock/account'

export type SidebarMenuProps = {
  totalLimit : number
  availableLimit : number
  setCurrentSidebarActive: React.Dispatch<React.SetStateAction<string>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  companyName: string
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
}

export default function SidebarMenu({ ...props }: SidebarMenuProps) {
  const [dashboardButtonActive, setDashboardButtonActive] = useState('Adicionar NF-e')

  useEffect(() => {
    const userInfo = localStorage.getItem('@teste-frontend/userInfo')
    if (userInfo) {
      const localStorageInfos = JSON.parse(userInfo)
      props.setCompanyName(localStorageInfos.companyName)
    } else {
      props.setCompanyName(defaultAccount.companyName)
    }
  }, [])

  const dashboardButtons = [
    { label: 'Adicionar NF-e', icon: <AiOutlineDollarCircle size="28" /> },
    {
      label: 'Operações',
      icon: <AiOutlineDollarCircle size="28" />,
    },
    {
      label: 'Carteira',
      icon: <IoWalletOutline size="28" />,
    },
    {
      label: 'Cadastro',
      icon: <FaUserLock size="28" />,
    },
    {
      label: 'Addy points',
      icon: <FaRobot size="28" />,
    },
  ]
  const infoButtons = [
    { label: 'WhatsApp', icon: <FaWhatsapp size="28" /> },
    {
      label: 'Informações',
      icon: <TiInfoLarge size="28" />,
    },
    {
      label: 'Indicar',
      icon: <GiMeshNetwork size="28" />,
    },
  ]

  const transformNumberToCurrency = (number:number):string => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
  }

  const navigateThroughDashboardButtons = (menuHeader: string) => {
    // função que renderiza a página conforme o usuário clica nos links do dashboard

    setDashboardButtonActive(menuHeader)
    props.setCurrentSidebarActive(menuHeader)
  }

  return (
    <Container {...props}>
      <h3>{props.companyName}</h3>
      <LogoutButton>
        <RiLogoutBoxLine size="30" color="white" />
      </LogoutButton>
      <LimitWrapper>
        <LimitContent>
          <li>Limite Total</li>
          <h3>{transformNumberToCurrency(props.totalLimit)}</h3>
          <Link href="/">
            <a>Solicitar Aumento</a>
          </Link>
          <li>Limite Disponível</li>
          <h3>{transformNumberToCurrency(props.availableLimit)}</h3>
        </LimitContent>
      </LimitWrapper>
      <DashboardButtonsWrapper>
        {dashboardButtons.map((eachButton) => {
          return (
            <Button
              className="dashboard-button"
              label={eachButton.label}
              icon={eachButton.icon}
              active={dashboardButtonActive === eachButton.label}
              onClick={() => {
                navigateThroughDashboardButtons(eachButton.label)
                props.setOpen(!open)
              }}
              dashboard
              key={eachButton.label}
            />
          )
        })}
      </DashboardButtonsWrapper>
      <InfoSection>
        {infoButtons.map((button) => {
          return (
            <InfoButton className="dashboard-button" key={button.label}>
              {button.icon}
              {button.label}
            </InfoButton>
          )
        })}
      </InfoSection>
    </Container>
  )
}
