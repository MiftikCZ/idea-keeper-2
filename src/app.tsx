import { useEffect, useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'
import './css/dist/app.css'
import Addtodo from './components/Addtodo'
import CustomCss from './components/CustomCss'
import ListTodos from './components/ListTodos'
import Topbar from './components/Topbar'
import { getConfig } from './lib/config'

export function App() {

  //@ts-ignore
  let _todos_db: string = localStorage.getItem("todos") || ""
  if (!_todos_db) {
    localStorage.setItem("todos", "[]")
    _todos_db = ""
  }
  let [todos, setTodos] = useState<Array<any>>(JSON.parse(_todos_db || "[]") || [])
  if (!todos) setTodos([])
  let [addFromCommand,setAddFromCommand] = useState<JSX.Element>(<></>)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <span id="appWrapper">
        <CustomCss getConfig={getConfig}/>
        <Topbar isInSettings={false} howmuch={todos.length} />
        <ListTodos todos={todos} settodos={setTodos} />
        <Addtodo todos={todos} settodos={setTodos} addFromCommand={addFromCommand} setAddFromCommand={setAddFromCommand} />
      </span>
      <span id="commandWrapper"><span id="commandContainer">{addFromCommand||<></>}</span></span>
    </>
  )
}
