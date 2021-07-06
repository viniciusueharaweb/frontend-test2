import { ButtonStyled, DashboardButton } from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'medium' | 'big'
  dashboard?: boolean
  icon?: JSX.Element
  active?: boolean
  disabled?: boolean
}

export default function Button({ ...props }: ButtonProps) {6
  return !props.dashboard ? (
    <ButtonStyled size={props.size} {...props}>
      {props.label}
    </ButtonStyled>
  ) : (
    <DashboardButton {...props}>
      {props.icon}
      {props.label}
    </DashboardButton>
  )
}
