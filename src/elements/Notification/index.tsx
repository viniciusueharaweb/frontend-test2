import { Container } from './styles'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export interface NotificationProps {
  message: string
  active?: boolean
}

export default function Notification({ ...props }: NotificationProps) {
  return (
    <Container {...props}>
      <AiOutlineCheckCircle size="20" />
      <span>{props.message}</span>
    </Container>
  )
}
