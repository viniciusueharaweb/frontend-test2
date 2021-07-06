import { useState } from 'react'
import { Container, WalletNav } from './styles'
import Pagination from '../../../elements/Pagination'
import MenuLabel from '../../../elements/MenuLabel'
import Search from '../../../elements/Search'
import WalletMenu from '../WalletMenu'
import nfeMock from '../../../mock/nfeMock'

export default function WalletSection() {
  // responsável pela renderização da seção "Carteira" do dashboard

  const [menuHeaderActive, setMenuHeaderActive] = useState('Carteira')
  const walletMenuHeaders = [
    'Carteira',
    'Títulos Liquidados',
    'Títulos Não Operados',
    'Avisos de Depósito',
    'Cartão de Crédito',
  ]

  const navigateThroughMenus = (menuHeader: string) => {
    setMenuHeaderActive(menuHeader)
  }

  return (
    <Container>
      <WalletNav>
        {walletMenuHeaders.map((menuHeader) => {
          return (
            <MenuLabel
              label={menuHeader}
              active={menuHeaderActive === menuHeader && true}
              onClick={() => navigateThroughMenus(menuHeader)}
              key={menuHeader}
            />
          )
        })}
      </WalletNav>
      <Search />
      {menuHeaderActive === 'Carteira' && <WalletMenu />}
      <Pagination
        firstCurrentItem={1}
        lastCurrentItem={nfeMock.length}
        totalItems={nfeMock.length}
      />
    </Container>
  )
}
