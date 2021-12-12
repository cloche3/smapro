import type { NextPage } from 'next'
import Image from 'next/image'
import heroImage from '../assets/hero.png'
import Button from '../components/Button'
import { signIn } from '../firebase/auth'

const Page: NextPage = () => {
  return (
    <div className="justify-center mt-60 flex">
      <div className="flex flex-col text-gray-900">
        <h1 className="text-6xl font-bold">Serch Room</h1>
        <p className="text-sm mt-4 font-bold">
          金沢工業大学のレンタルスペースを予約できるアプリ
        </p>
        <div className="flex flex-col mt-16">
          <Button onClick={signIn}>ログインする</Button>
          <p className="text-sm font-bold mt-7">
            ※金沢工業大学関係者のみ利用可能です
          </p>
        </div>
      </div>
      <Image
        alt="パソコンの前に座っている女の子"
        height={387}
        src={heroImage}
        width={586}
      />
    </div>
  )
}

export default Page
