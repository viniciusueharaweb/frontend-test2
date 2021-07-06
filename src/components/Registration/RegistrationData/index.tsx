import { MyForm } from '../../Form'

export type RegistrationDataProps = {
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
}

export default function RegistrationData({ setCompanyName }: RegistrationDataProps) {
  // responsável pela renderização do menu "Dados Cadastrais" dentro da seção "Cadastro"
  const userInfo = localStorage.getItem('@teste-frontend/userInfo')
  // render condicional: se existir info no localstorage, use-os no componente
  if (userInfo) {
    const localStorageInfos = JSON.parse(userInfo)

    interface StorageUserInfo {
      cnpj: string
      companyName: string
      tradingName: string
      email: string
    }
    const { cnpj, companyName, tradingName, email }: StorageUserInfo = localStorageInfos
    return (
      <div>
        <MyForm
          setCompanyName={setCompanyName}
          initialCnpj={cnpj}
          initialCompanyName={companyName}
          initialTradingName={tradingName}
          initialEmail={email}
        />
      </div>
    )
  } else {
    return <MyForm setCompanyName={setCompanyName} />
  }
}
