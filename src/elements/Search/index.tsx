import { Container } from './styles'
import { FiDownload } from 'react-icons/fi'

export default function Search() {
  return (
    <Container>
      <input type="text" placeholder="Buscar" />
      <FiDownload size={22} />
    </Container>
  )
}
