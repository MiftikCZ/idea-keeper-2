import { render } from "preact"
import { JSX } from "preact/jsx-runtime"
import Lock from "../components/Lock"

export const commands = {
    "lock": (setAddFromCommand:Function|any) => {
        return <Lock setAddFromCommand={setAddFromCommand}/>
    }, 
}

export function getCommands() {
    return Object.keys(commands)
}
interface outD {
    status: boolean,
    content: JSX.Element
}
export function runMaybeCommand(input:string,setAddFromCommand:Function|any):outD {
    let inp = input.replace("/","")
    let spl = inp.split(" ")[0]
    if(Object.hasOwn(commands,spl)) {
        console.log("here!")
        
        return {
            status: true,
            //@ts-ignore
            content: commands[spl](setAddFromCommand)
        }
    } else {
        return {
            status: false,
            content: <></>
        }
    }
}