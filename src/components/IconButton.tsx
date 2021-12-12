import Icon from '@mdi/react'
import { ButtonHTMLAttributes, VFC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  path: string
  size: number
}

const ImageButton: VFC<ButtonProps> = ({ path, size, onClick }) => {
  return (
    <button onClick={onClick}>
      <Icon path={path} size={size} />
    </button>
  )
}
export default ImageButton
