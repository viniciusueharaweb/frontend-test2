import { WalletTable } from './styles'
import nfeMock from '../../../mock/nfeMock'
import Status from '../../../elements/Status'
import { GiTakeMyMoney } from 'react-icons/gi'
import { AiOutlineFilePdf } from 'react-icons/ai'

export type WalletMenuProps = {}

export default function WalletMenu() {
  // responsável pela renderização do menu "Carteira" dentro da seção "Carteira"

  const walletTableHeaders = ['NF', 'SACADO', 'VALOR', 'VENCIMENTO', 'STATUS', 'AÇÕES']

  return (
    <WalletTable>
      {walletTableHeaders.map((menuHeader) => {
        return (
          <span key={menuHeader}>
            <strong>{menuHeader}</strong>
          </span>
        )
      })}
      {nfeMock.map((eachData) => {
        return (
          <>
            <span>{eachData.nf}</span>
            <span>{eachData.sacado}</span>
            <span>R${eachData.preco}</span>
            <span>{eachData.vencimento}</span>
            <Status label={eachData.status} />
            <span style={{ padding: 0 }}>
              {eachData.acoes.includes('pay') && (
                <button>
                  <GiTakeMyMoney size={32} />
                </button>
              )}
              {eachData.acoes.includes('download') && (
                <button>
                  <AiOutlineFilePdf size={32} />
                </button>
              )}
            </span>
          </>
        )
      })}
    </WalletTable>
  )
}
