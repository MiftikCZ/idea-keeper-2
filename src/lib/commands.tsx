import { render } from "preact"
import { useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { todoInterface } from "../components/Addtodo"
import CommandContainer from "../components/CommandContainer"
import Lock from "../components/Lock"
import SaveImages from "../components/SaveImages"

export const commands = {
    "lock": (setAddFromCommand:Function|any) => {
        return <Lock setAddFromCommand={setAddFromCommand}/>
    }, 
    "saveimgs": (setAddFromCommand:Function|any,{todos,settodos}:todosInterface) => {
        return <SaveImages setAddFromCommand={setAddFromCommand} todos={todos} settodos={settodos}/>
    },
    "reload": () => {

    }
}

export function getCommands() {
    return Object.keys(commands)
}
interface outD {
    status: boolean,
    content: JSX.Element
}

interface todosInterface {
    todos: Array<todoInterface>,
    settodos: Function | any
}
export function runMaybeCommand(input:string,setAddFromCommand:Function|any, {todos,settodos}:todosInterface):outD {
    let inp = input.replace("/","")
    let spl = inp.split(" ")[0]
    if(Object.hasOwn(commands,spl)) {
        return {
            status: true,
            //@ts-ignore
            content: commands[spl](setAddFromCommand,{todos,settodos})
        }
    } else {
        return {
            status: false,
            content: <></>
        }
    }
}