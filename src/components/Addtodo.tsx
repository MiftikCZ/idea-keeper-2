import { useRef } from "preact/hooks"

interface mainD {
    callbackChange?: Function | any,
    todos: Array<any>,
    settodos: Function | any
}

export interface todoInterface {
    time: string,
    id: string,
    content: string,    
    additional?: Object,
}

export default function({callbackChange,todos,settodos}: mainD) {
    function addTodo() {
        //@ts-ignore
        let v = document.getElementById("addtodoInput").value
        if(v) {
            let id = Date.now().toString()
            let args:todoInterface = {
                time: id,
                id: id,
                content: v,
                additional: {},
            }
            settodos([...todos,args])
            todos = [...todos,args]
            localStorage.setItem("todos",JSON.stringify(todos || []))
            //@ts-ignore
            document.getElementById("addtodoInput").value = ""
        }
    }

    return <div class="addtodo">
    <button class="button" onClick={addTodo}>  
        <span class="material-symbols-outlined icon">add</span>
    </button>
    <div class="wrap">
        <input id="addtodoInput" type="text" placeholder="napiš svůj nápad..." onInput={callbackChange} class="input"/>
    </div>
    </div>
}