import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import topImage from '../assets/topImage.png'
import Button from '../components/Button'

const Home: NextPage = () => {
  const buttonText = 'ログインする'
  const loginFunc = () => {
    console.log('Loginしました')
  }

  return (
    <div className=" justify-center mt-60 flex">
      <div className="flex flex-col text-gray-900">
        <h1 className=" text-6xl font-bold">Serch Room</h1>
        <p className=" text-sm mt-4 font-bold">
          金沢工業大学のレンタルスペースを予約できるアプリ
        </p>
        <div className="flex flex-col mt-16">
          <Button onClick={loginFunc}>{buttonText}</Button>
          <p className=" text-sm font-bold mt-7">
            ※金沢工業大学関係者のみ利用可能です
          </p>
        </div>
      </div>
      <Image alt="topImage" height={417} src={topImage} width={586} />
    </div>
  )
}

export default Home
