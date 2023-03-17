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
        <h1>Ulož fotky pomocí odkazů</h1>
        <textarea cols={30} rows={10} onInput={(e:any) => { setInput(e?.target?.value) }} placeholder="odděluj novým řádkem"></textarea>
        <div class="tlacitka">
        <button class="done" onClick={()=>{
            saveTodo({
                content: input.split("\n").map(e => `![https://${e.replace("https://","").replace("http://","").replace("://","")}]`).join(" ")
            },{todos,
            settodos})
            setAddFromCommand(<></>)
        }}>Hotovo</button>
        <button class="close" onClick={()=>{
            setAddFromCommand(<></>)
        }}>Zavřít</button>
        </div>
    </CommandContainer>
}