import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  & button {
    margin-right: 0;
    margin-top: 50px;
  }
  & > span {
    display: none;
    width: fit-content;
    padding: 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primary.green[600]};
    background-color: ${({ theme }) => theme.colors.neutrals.white[600]};
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    justify-content: center;
    & button {
      margin-top: 20px;
    }
  }
`

export const Flex = styled.div`
  display: flex;
  @media screen and (max-width:768px) {
    display: block;
  }

`



export default Container
