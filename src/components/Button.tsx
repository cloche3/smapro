interface buttonProps {
  btnText: string
  btnFunc: any
}

const Button = ({ btnText, btnFunc }: buttonProps) => {
  return (
    <button
      className=" text-sm font-semibold border-2 w-52 h-12 border-slate-800 rounded"
      onClick={btnFunc}
    >
      {btnText}
    </button>
  )
}

export default Button
