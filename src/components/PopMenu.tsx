import { mdiClockEditOutline, mdiCogOutline, mdiImport } from '@mdi/js'
import Icon from '@mdi/react'
import { signOut } from '../firebase/auth'

const PopMenu = () => {
  return (
    <div className=" flex flex-col space-y-2 absolute top-16 bg-white right-0 border-4 border-black">
      <div className=" flex justify-center h-12  rounded">
        <div className=" flex justify-center m-2">
          <Icon path={mdiClockEditOutline} size={1} />
          予約履歴
        </div>
      </div>
      <div className=" flex justify-center h-12 rounded">
        <div className=" flex justify-center m-2">
          <Icon path={mdiCogOutline} size={1} />
          設定
        </div>
      </div>
      <button
        className="text-sm font-bold w-52 h-12 rounded hover:bg-black hover:text-white transition-all disabled:border-0 disabled:text-gray-400 disabled:hover:bg-transparent"
        onClick={signOut}
      >
        <div className="flex justify-center">
          <Icon path={mdiImport} size={1} />
          ログアウト
        </div>
      </button>
    </div>
  )
}

export default PopMenu
