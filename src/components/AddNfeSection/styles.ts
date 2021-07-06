import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.neutrals.white[400]};
  box-shadow: 0px 10px 15px 5px rgba(201, 201, 201, 1);
  border-radius: 22px;
  position: relative;
`

export const AddNfeContent = styled.div`
  max-width: 550px;
  width: 55%;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutrals.gray[500]};
  padding: 60px 0;

  & h1 {
    width: 80%;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 auto 20px;
  }
  & path {
    stroke: ${({ theme }) => theme.colors.primary.blue[700]};
  }
  & svg {
    margin-bottom: 45px;
  }
  & button {
    margin: 0 auto;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 80%;
    svg {
      width: 100px;
      margin-bottom: 10px;
    }
  }
`
export const AddNfeImg = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  img {
    width: 15vw;
  }
  @media (max-width: 992px) {
    bottom: 150px;
    img {
      width: 25vw;
    }
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`
