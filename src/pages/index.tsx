import type { GetStaticProps, NextPage } from 'next'
import { signOut } from '../utils/firebase'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const Page: NextPage = () => {
  return (
    <div>
      <button onClick={signOut}>ログアウト</button>
    </div>
  )
}

export default Page
