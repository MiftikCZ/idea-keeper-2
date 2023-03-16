import { useRef, useState } from "preact/hooks"
import Commands from "./Commands"

interface mainD {
    todos: Array<any>,
    settodos: Function | any
}

export interface todoInterface {
    time: string,
    id: string,
    content: string,    
    additional?: Object,
}

export default function({todos,settodos}: mainD) {
    let [input, setInput] = useState<string>("")
    function addTodo() {
        //@ts-ignore
        // let v = document.getElementById("addtodoInput").value
        if(input) {
            let id = Date.now().toString()
            let args:todoInterface = {
                time: id,
                id: id,
                content: input,
                additional: {},
            }
            settodos([...todos,args])
            todos = [...todos,args]
            localStorage.setItem("todos",JSON.stringify(todos || []))
            //@ts-ignore
            document.getElementById("addtodoInput").value = ""
        }
    }

    function callbackChange(e:any) {
        setInput(e.target.value)
    }

    return <div class="addtodo">
    <button class="button" onClick={addTodo}>  
        <span class="material-symbols-outlined icon">add</span>
    </button>
    <div class="wrap">
        <Commands input={input}/>
        <input id="addtodoInput" type="text" placeholder="napiš svůj nápad..." onInput={callbackChange} class="input"/>
    </div>
    </div>
}