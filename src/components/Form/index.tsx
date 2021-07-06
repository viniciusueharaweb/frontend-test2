import Container, { ButtonWrapper, Flex } from './styles/Container'
import InputWrapper from './styles/InputWrapper'
import Input from './styles/Input'
import Label from './styles/Label'
import ErrorLabel from './styles/ErrorLabel'
import Button from '../../elements/Button'
import Notification from '../../elements/Notification'
import defaultAccount from '../../mock/account'
import * as Yup from 'yup'
import { withFormik, FormikProps } from 'formik'

export type RegistrationDataProps = {}

interface FormValues {
  email: string
  password: string
  cnpj: string
  companyName: string
  tradingName: string
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const cnpjMask = (e: React.FormEvent<HTMLInputElement>) => {
    // função que faz a mask do cnpj ao preencher o input
    const element = e.currentTarget as HTMLInputElement
    let value = element.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d)/, '$1.$2')
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
    return value
  }

  const {
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Flex>
          <InputWrapper>
            <Label htmlFor="CNPJ">Documento</Label>
            <Input
              autoFocus
              type="text"
              name="cnpj"
              id="CNPJ"
              pattern="[0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}[-][0-9]{2}"
              onChange={(e) => {
                setFieldValue('cnpj', cnpjMask(e))
              }}
              onBlur={handleBlur}
              value={values.cnpj}
              maxLength={18}
              minLength={18}
              placeholder="00.000.000/0000-00"
              aria-invalid={errors.cnpj && touched.cnpj ? true : false}
              aria-describedby={errors.cnpj && touched.cnpj ? 'cnpj-error' : ''}
              aria-required="true"
            />
            {touched.cnpj && errors.cnpj && (
              <ErrorLabel>
                <span>{errors.cnpj}</span>
              </ErrorLabel>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="companyName">Razão Social</Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.companyName}
              aria-invalid={errors.companyName && touched.companyName ? true : false}
              aria-describedby={
                errors.companyName && touched.companyName ? 'companyName-error' : ''
              }
              aria-required="true"
            />
            {touched.companyName && errors.companyName && (
              <ErrorLabel>
                <span>{errors.companyName}</span>
              </ErrorLabel>
            )}
          </InputWrapper>
        </Flex>

        <Flex>
          <InputWrapper>
            <Label htmlFor="tradingName">Nome Fantasia</Label>
            <Input
              type="text"
              name="tradingName"
              id="tradingName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tradingName}
              aria-invalid={errors.tradingName && touched.tradingName ? true : false}
              aria-describedby={
                errors.tradingName && touched.tradingName ? 'tradingName-error' : ''
              }
              aria-required="true"
            />
            {touched.tradingName && errors.tradingName && (
              <ErrorLabel>
                <span>{errors.tradingName}</span>
              </ErrorLabel>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input
              width={50}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              aria-invalid={errors.email && touched.email ? true : false}
              aria-describedby={errors.email && touched.email ? 'email-error' : ''}
              aria-required="true"
            />
            {touched.email && errors.email && (
              <ErrorLabel>
                <span>{errors.email}</span>
              </ErrorLabel>
            )}
          </InputWrapper>
        </Flex>

        <InputWrapper>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            minLength={6}
            aria-invalid={errors.password && touched.password ? true : false}
            aria-describedby={errors.password && touched.password ? 'password-error' : ''}
            aria-required="true"
          />
          {touched.password && errors.password && (
            <ErrorLabel>
              <span>{errors.password}</span>
            </ErrorLabel>
          )}
        </InputWrapper>
        <ButtonWrapper>
          <Button label="Atualizar" size="medium" type="submit" disabled={isSubmitting} />
        </ButtonWrapper>
        {isSubmitting && <Notification message="Cadastro atualizado" />}
      </Container>
    </form>
  )
}

interface MyFormProps {
  initialCnpj?: string
  initialCompanyName?: string
  initialTradingName?: string
  initialEmail?: string
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
}

export const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      cnpj: props.initialCnpj || defaultAccount.cnpj,
      companyName: props.initialCompanyName || defaultAccount.companyName,
      tradingName: props.initialTradingName || defaultAccount.tradingName,
      email: props.initialEmail || defaultAccount.email,
      password: defaultAccount.password,
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
    cnpj: Yup.string().required('CNPJ obrigatório'),
    companyName: Yup.string().required('Razão social obrigatória'),
    tradingName: Yup.string().required('Nome fantasia obrigatório'),
  }),

  handleSubmit: (values, { props }) => {
    // guarda informações no local storage
    localStorage.setItem('@teste-frontend/userInfo', JSON.stringify(values))
    props.setCompanyName(values.companyName)

    // guarda informações nos cookies
    Object.entries(values).forEach((value) => {
      document.cookie = `${value[0]}=${value[1]}`
    })
  },
})(InnerForm)
