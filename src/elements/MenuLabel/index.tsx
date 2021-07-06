import { Container } from './styles'

export interface MenuLabelProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function MenuLabel({ ...props }: MenuLabelProps) {
  return <Container {...props}><h2>{props.label}</h2></Container>
}
