import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
  width: 46%;
  margin: 14px;
  @media screen and (max-width: 768px) {
    display: block;
    width: max(220px, 80%);
    margin: 14px auto;
  }
`

export default InputWrapper
