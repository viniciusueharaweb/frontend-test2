import styled from 'styled-components'

export const WalletTable = styled.div`
  display: grid;
  overflow: scroll;
  font-size: 0.9rem;
  grid-template-columns:
    minmax(70px, 1fr) minmax(150px, 2fr) minmax(100px, 2fr) minmax(120px, 2fr) minmax(120px, 2fr)
    minmax(100px, 2fr);
  align-items: center;
  row-gap: 10px;
  &:nth-child(1) {
    margin-bottom: -50px;
  }

  margin: 30px 0;
  & > span {
    padding: 8px 4px;
  }
`
