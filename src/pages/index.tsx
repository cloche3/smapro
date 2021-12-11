import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import topImage from '../assets/topImage.png'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex left-44 text-red-600">
        <h1>Serch Room</h1>
        <p>金沢工業大学のレンタルスペースを予約できるアプリ</p>
      </div>      
    <div>
        <button>登録する</button>
        <button>ログインする</button>
        <p>※金沢工業大学関係者のみ利用可能です。</p>
      </div>
      <Image
        src={topImage}
        alt="topImage"
        width={586}
        height={586}
      />
    </div>
  )
}

export default Home
