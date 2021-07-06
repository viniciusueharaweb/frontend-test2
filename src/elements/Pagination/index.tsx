import { Container } from './styles'
import {
  CgPushChevronLeft,
  CgPushChevronRight,
  CgChevronLeft,
  CgChevronRight,
} from 'react-icons/cg'

export type PaginationProps = {
  firstCurrentItem: number
  lastCurrentItem: number
  totalItems: number
}

export default function Pagination({ ...props }: PaginationProps) {
  return (
    <Container>
      <CgPushChevronLeft size="20" />
      <CgChevronLeft size="20" />
      <span>
        {props.firstCurrentItem} - {props.lastCurrentItem} de {props.totalItems}
      </span>
      <CgChevronRight size="20" />
      <CgPushChevronRight size="20" />
    </Container>
  )
}
