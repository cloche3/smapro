import type { NextPage } from 'next'
import { signOut } from '../firebase/auth'

const Page: NextPage = () => {
  return (
    <div>
      <button onClick={signOut}>ログアウト</button>
    </div>
  )
}

export default Page
