import { useRef, useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { runMaybeCommand } from "../lib/commands"
import { getConfig } from "../lib/config"
import Commands from "./Commands"

interface mainD {
    todos: Array<any>,
    settodos: Function | any,
    addFromCommand: JSX.Element,
    setAddFromCommand: Function | any
}

export interface todoInterface {
    time: string,
    id: string,
    content: string,
    additional?: Object,
}

interface saveTodoInterface {
    content:string,
    additional?: Object
}

interface todosInterface {
    todos: Array<todoInterface>,
    settodos: Function | any
}

export function saveTodo({content,additional}:saveTodoInterface, {todos,settodos}:todosInterface) {
    let id = Date.now().toString()
    let args: todoInterface = {
        time: id,
        id: id,
        content: content,
        additional: additional,
    }
    settodos([...todos, args])
    
    todos = [...todos, args]
    localStorage.setItem("todos", JSON.stringify(todos || []))
}

export default function ({ todos, settodos, addFromCommand, setAddFromCommand }: mainD) {
    let [input, setInput] = useState<string>("")
    function addTodo() {
        if (input) {
            if(config.useCommands == "true") {
                let cmd = runMaybeCommand(input,setAddFromCommand,{settodos,todos})
                if(cmd.status) {
                    return setAddFromCommand(cmd.content)
                }
            }
            let id = Date.now().toString()
            let args: todoInterface = {
                time: id,
                id: id,
                content: input,
                additional: {},
            }
            settodos([...todos, args])
            setInput("")
            todos = [...todos, args]
            localStorage.setItem("todos", JSON.stringify(todos || []))

            let el: HTMLInputElement | any = document.getElementById("addtodoInput")
            el!.value = ""
        }
    }

    function callbackChange(e: any) {
        setInput(e.target.value)
    }
    let config = getConfig()
    return <>
        <div class="addtodo">
            {config.useCommands == "true" && input.startsWith("/") && <Commands setInput={setInput} input={input} />}
            <button class="button" onClick={addTodo}>
                <span class="material-symbols-outlined icon">add</span>
            </button>
            <div class="wrap">
                <input id="addtodoInput" type="text" placeholder="napiš svůj nápad..." onInput={callbackChange} class="input" />
            </div>
        </div>
    </>
}