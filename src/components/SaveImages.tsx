import { useState } from "preact/hooks"
import { saveTodo, todoInterface } from "./Addtodo"
import CommandContainer from "./CommandContainer"
interface mainD {
    setAddFromCommand: Function|any,
    todos: Array<todoInterface>,
    settodos: Function | any
}
export default function ({setAddFromCommand,todos,settodos}:mainD) {
    let [input, setInput] = useState("")
    return <CommandContainer>
        <h1>Save photos with links</h1>
        <textarea cols={30} rows={10} onInput={(e:any) => { setInput(e?.target?.value) }} placeholder="split with new line"></textarea>
        <div class="tlacitka">
        <button class="done" onClick={()=>{
            saveTodo({
                content: input.split("\n").map(e => `![https://${e.replace("https://","").replace("http://","").replace("://","")}]`).join(" ")
            },{todos,
            settodos})
            setAddFromCommand(<></>)
        }}>Done</button>
        <button class="close material-symbols-outlined" onClick={()=>{
            setAddFromCommand(<></>)
        }}>close</button>
        </div>
    </CommandContainer>
}