import { createRoot } from 'react-dom/client'
import './styles/_global.scss'
import init from './init'

const vdom = document.querySelector('#root')!

const root = createRoot(vdom)
root.render(init())
