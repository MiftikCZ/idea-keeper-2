import { render } from 'preact'
import { App } from './settings'
import "../index.css"
import "@fontsource/roboto"

render(<App />, document.getElementById('app') as HTMLElement)
