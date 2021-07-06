import Link from 'next/link'
import { Container, AddNfeContent, AddNfeImg } from './styles'
import { GrDocumentDownload } from 'react-icons/gr'
import Button from '../../elements/Button'

export type AddNfeProps = {}

export default function AddNfeSection() {
  return (
    <Container>
      <AddNfeContent>
        <GrDocumentDownload size="160" />
        <h1>
          Simule sua taxa antes de operar!
          <br /> Arraste suas NFE's em formato XML
          <br /> ou
        </h1>
        <Button label="Enviar NFE" size="big" autoFocus/>
        <p>Verifique se a NFe está condizente com o padrão do sistema. </p>
        <p>
          Clique <Link href="/">aqui</Link> para saber mais
        </p>
      </AddNfeContent>
      <AddNfeImg>
        <img loading="lazy" src="/mascoteadiante.png" alt="" />
      </AddNfeImg>
    </Container>
  )
}
