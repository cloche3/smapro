import { ButtonHTMLAttributes, VFC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: VFC<Props> = ({ children, onClick }) => {
  return (
    <button
      className=" text-sm font-semibold w-52 h-12 border-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
