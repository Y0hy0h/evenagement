import { MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline'

interface ButtonProps {
  tag?: 'a' | 'button' | 'input'
  label?: string
  type?: ButtonType
  href?: string
  className?: string
  onClick?: MouseEventHandler
}

function extraStylesForType(type: ButtonType) {
  switch (type) {
    case 'fill': return 'text-white bg-primary hover:bg-primary-dark border border-transparent'
    case 'outline': return 'text-primary hover:text-white bg-transparent hover:bg-primary-dark border border-solid border-primary hover:border-primary-dark'
  }
}

function stylesForType(type: ButtonType) {
  const styles = 'transition-all inline-block px-6 py-1 select-none text-center text-base font-medium rounded shadow hover:shadow-lg outline-none focus:outline-none cursor-pointer'
  return styles + ' ' + extraStylesForType(type)
}

export default function Button({ children, label, type, tag, ...props }: PropsWithChildren<ButtonProps>) {
  props.className = (props.className || '') + ' ' + stylesForType(type || 'fill')
  switch (tag || 'a') {
    case 'a': return <a {...props}>{label || children}</a>
    case 'button': return <button {...props}>{label || children}</button>
    case 'input': return <input type="submit" value={label} {...props} />
  }
}
