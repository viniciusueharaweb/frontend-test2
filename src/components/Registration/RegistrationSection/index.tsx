import { useState } from 'react'
import { Container, RegistrationNav } from './styles'
import MenuLabel from '../../../elements/MenuLabel'
import RegistrationData from '../RegistrationData'

export type RegistrationSectionProps = {
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
}

export default function RegistrationSection({ setCompanyName }: RegistrationSectionProps) {
  // responsável pela renderização da seção "Carteira" do dashboard

  const [menuHeaderActive, setMenuHeaderActive] = useState('Dados Cadastrais')
  const registrationMenuHeaders = [
    'Dados Cadastrais',
    'Dados Endereço',
    'Dados Telefone',
    'Dados Bancários',
  ]

  const navigateThroughMenus = (menuHeader: string) => {
    setMenuHeaderActive(menuHeader)
  }

  return (
    <Container>
      <RegistrationNav>
        {registrationMenuHeaders.map((menuHeader) => {
          return (
            <MenuLabel
              label={menuHeader}
              active={menuHeaderActive === menuHeader && true}
              onClick={() => navigateThroughMenus(menuHeader)}
              key={menuHeader}
            />
          )
        })}
      </RegistrationNav>
      {menuHeaderActive === 'Dados Cadastrais' && (
        <RegistrationData setCompanyName={setCompanyName} />
      )}
    </Container>
  )
}
