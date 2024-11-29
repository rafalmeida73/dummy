import { useSignInModel } from './model'
import { SignInView } from './view'

export default function Index() {
  const data = useSignInModel()

  return (
    <SignInView {...data} />
  )
}
