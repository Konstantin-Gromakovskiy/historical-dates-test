import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import init from './app/init'

const vdom = document.querySelector('#root')!

const root = createRoot(vdom)
root.render(init())
