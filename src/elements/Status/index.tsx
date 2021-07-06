import { Container } from './styles'

export interface StatusProps {
  label: string
}

export default function Status({ label }: StatusProps) {
  return <Container label={label}>{label}</Container>
}
