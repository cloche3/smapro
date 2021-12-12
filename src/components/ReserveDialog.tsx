import { mdiWindowClose } from '@mdi/js'
import { VFC } from 'react'
import { useForm } from 'react-hook-form'
import IconButton from './IconButton'

type Data = {
  participants: string
  startHour: string
  startMinuts: string
  endHour: string
  endMinuts: string
}

const ReserveDialog: VFC<{ close: () => void }> = ({ close }) => {
  const { register, handleSubmit } = useForm<Data>()

  return (
    <div className=" absolute border-4 border-black rounded-md w-80 h-auto left-0 right-0 mx-auto z-50 bg-white top-24">
      <div className="relative">
        <IconButton
          className="justify-item-end"
          onClick={close}
          path={mdiWindowClose}
          size={1}
        />
        <form
          className=" flex flex-col justify-center  "
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h2 className=" text-xl font-bold mx-auto mt-8">今すぐ予約</h2>
          <div className=" flex mx-auto mt-14 ">
            <h3 className=" text-sm font-bold ">人数：</h3>
            <input
              className=" w-10 h-6 border-b border-black"
              type="text"
              {...register('participants')}
            />
            <p className=" text-sm font-bold ">人</p>
          </div>
          <div className=" flex flex-col mx-auto mt-14">
            <h3 className=" text-sm font-bold ">時間</h3>
            <div className="flex">
              <input
                className=" w-10 h-6 border-b border-black  "
                type="text"
                {...register('startHour')}
              />
              <p>:</p>
              <input
                className=" w-10 h-6 border-b border-black"
                type="text"
                {...register('startMinuts')}
              />
              <p>から</p>
            </div>
            <div className="flex">
              <input
                className=" w-10 h-6 font-bold text-sm border-b border-black"
                type="text"
                {...register('endHour')}
              />
              <p>:</p>
              <input
                className=" w-10 h-6 font-bold text-sm border-b border-black"
                type="text"
                {...register('endMinuts')}
              />
              <p>まで</p>
            </div>
          </div>
          <button
            className="text-sm font-bold w-32 h-12 border-4 border-black rounded hover:bg-black hover:text-white transition-all mx-auto my-8"
            type="submit"
          >
            予約確定
          </button>
        </form>
      </div>
    </div>
  )
}
export default ReserveDialog
