import { bool, func } from 'prop-types'
import { StyledBurger } from './styles'

export interface BurgerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger = ({ open, setOpen, ...props }: BurgerProps) => {
  const isExpanded = open ? true : false

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
