import { ButtonHTMLAttributes, FC } from 'react'
import styles from './CircleButton.module.scss'
// import ArrowIcon from '@/assets/icons/arrow.svg'

// TODO: разобраться с имортом кнопки и сделать стрелку нужного цвета
const CircleButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  onClick,
  className,
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`${styles.button} ${className ? className : ''}`}
  />
)

export default CircleButton
