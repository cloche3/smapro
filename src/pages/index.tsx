import type { NextPage } from 'next'
import { signOut } from '../utils/firebase'

const Page: NextPage = () => {
  return (
    <div>
      <button onClick={signOut}>ログアウト</button>
    </div>
  )
}

export default Page
