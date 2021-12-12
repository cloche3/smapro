import { mdiBellOutline, mdiCalendarBlankOutline } from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import { useUser } from '../hooks/useUser'
import Button from './Button'

const Header = () => {
  const [user] = useUser()

  const checkButton = () => console.log('ボタンが押されました')

  return (
    <header className="flex justify-between items-center mx-36 pb-16 pt-4">
      <h1 className="font-bold text-2xl">SearchRoom</h1>
      <div className="flex items-center gap-4">
        <Button onClick={checkButton}>
          <div className="flex justify-center">
            <Icon path={mdiCalendarBlankOutline} size={1} />
            予約する
          </div>
        </Button>
        <Icon className="" path={mdiBellOutline} size={1} />
        {user?.photoURL && (
          <button>
            <Image
              alt={`${user.displayName}のアイコン`}
              className="rounded-full"
              height={48}
              src={user.photoURL}
              width={48}
            />
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
