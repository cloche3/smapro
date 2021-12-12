import { mdiClockEditOutline, mdiCogOutline, mdiImport } from '@mdi/js'
import Icon from '@mdi/react'
import Button from './Button'

const Popmenu = () => {
  const checkButton = () => console.log('ボタンが押されました')
  return (
    <div className=" flex flex-col space-y-2">
      <div className=" flex justify-center h-12 border-4 border-black rounded">
        <div className=" flex justify-center m-2">
          <Icon path={mdiClockEditOutline} size={1} />
          予約履歴
        </div>
      </div>
      <div className=" flex justify-center h-12 border-4 border-black rounded">
        <div className=" flex justify-center m-2">
          <Icon path={mdiCogOutline} size={1} />
          設定
        </div>
      </div>
      <Button onClick={checkButton}>
        <div className="flex justify-center">
          <Icon path={mdiImport} size={1} />
          ログアウト
        </div>
      </Button>
    </div>
  )
}

export default Popmenu
