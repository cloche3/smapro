import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState, VFC } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import ReserveDialog from '../components/ReserveDialog'

const PerformingStudio = dynamic(
  () => import('../components/PerformingStudio'),
  {
    ssr: false,
  }
)

const TabList: VFC = () => {
  const [dialog, setDialog] = useState(false)

  const openDialog = () => {
    setDialog(true)
  }

  return (
    <>
      <div className="flex gap-4 mb-4" role="tablist">
        <Button
          aria-controls="performing-studio-tab-panel"
          id="performing-studio-tab"
          role="tab"
          aria-selected
        >
          パフォーミングスタジオ
        </Button>
        <Button aria-controls="" aria-selected={false} role="tab" disabled>
          コミュニケーションスタジオ
        </Button>
        <Button aria-controls="" aria-selected={false} role="tab" disabled>
          ライブラリーセンター
        </Button>
      </div>
      <div
        aria-describedby="performing-studio-tab"
        id="performing-studio-tab-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <PerformingStudio onCellClick={openDialog} />
        {dialog && <ReserveDialog close={() => setDialog(false)} />}
      </div>
    </>
  )
}

const Page: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="mx-36">
        <h2 className="font-bold text-xl mb-4">現在の利用状況</h2>
        <TabList />
      </div>
    </div>
  )
}

export default Page
