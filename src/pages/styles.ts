import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  & > div:first-child {
  }
  & > section:nth-of-type(1) {
    flex-grow: 1;
    margin: 40px;
  }
`
export default Container
