import { useState, useRef } from 'react'
import { Container } from './styles'
import SidebarMenu from '../components/DashboardSidebarMenu'
import AddNfeSection from '../components/AddNfeSection'
import WalletSection from '../components/Wallet/WalletSection'
import RegistrationSection from '../components/Registration/RegistrationSection'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { limit } from '../mock/account'
import Burger from '../elements/Burger'
import FocusLock from 'react-focus-lock'

const Home = () => {
  const [companyName, setCompanyName] = useState('')
  const [currentSidebarActive, setCurrentSidebarActive] = useState('Adicionar NF-e')
  const [open, setOpen] = useState(false)
  const node = useRef<HTMLDivElement>(null)
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))
  return (
    <Container>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <SidebarMenu
            totalLimit={limit.total}
            availableLimit={limit.available}
            companyName={companyName}
            setCompanyName={setCompanyName}
            open={open}
            setOpen={setOpen}
            id={menuId}
            setCurrentSidebarActive={setCurrentSidebarActive}
          />
        </FocusLock>
      </div>
      {currentSidebarActive === 'Adicionar NF-e' && <AddNfeSection />}
      {currentSidebarActive === 'Carteira' && (

        <WalletSection />

      )}
      {currentSidebarActive === 'Cadastro' && (

        <RegistrationSection setCompanyName={setCompanyName} />
 
      )}
    </Container>
  )
}

export default Home


