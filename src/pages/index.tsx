import type { NextPage } from 'next'
import Header from '../components/Header'
import { signOut } from '../firebase/auth'

const Page: NextPage = () => {
  return (
    <div>
      <Header/>
      <button onClick={signOut}>ログアウト</button>
    </div>
  )
}

export default Page
