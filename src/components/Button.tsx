import { ButtonHTMLAttributes, VFC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: VFC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="text-sm font-bold w-52 h-12 border-4 border-black rounded hover:bg-black hover:text-white transition-all disabled:border-0 disabled:text-gray-400 disabled:hover:bg-transparent"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
