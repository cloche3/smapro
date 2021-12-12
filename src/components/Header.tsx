import { mdiAccount, mdiBellOutline, mdiCalendarBlankOutline } from '@mdi/js'
import Icon from '@mdi/react'
import Button from './Button'

const Header = () => {
  const checkButton = () => console.log('ボタンが押されました')
  return (
    <header className=" flex justify-between mx-36">
      <h1 className=" font-bold text-2xl mt-9">SearchRoom</h1>
      <div className=" flex mt-9">
        <Button onClick={checkButton}>
          <div className=" flex justify-center">
            <Icon path={mdiCalendarBlankOutline} size={1} />
            予約する
          </div>
        </Button>
        <Icon className=" ml-5 my-auto" path={mdiBellOutline} size={1} />
        <Icon className=" ml-5 my-auto" path={mdiAccount} size={1} />
      </div>
    </header>
  )
}

export default Header
