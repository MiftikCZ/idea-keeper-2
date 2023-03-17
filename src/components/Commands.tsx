import { render } from "preact"
import { getCommands, commands } from "../lib/commands"

interface propsD {
    input: string,
    setInput: Function | any,
}

export default function ({input,setInput}: propsD) {
    let _commands = Object.keys(commands).filter(e => ("/"+e).startsWith(input))
    let addtodoInput:HTMLInputElement|any = document.getElementById("addtodoInput")
    // let inp = input.replace("/", "")
    return <>{
        _commands.length > 0.9 && <div class="commands">
        <div class="list">
            {_commands.map(x => {
                return <div class="command" onClick={()=>{
                    let out = "/"+x+" "
                    setInput(out)
                    addtodoInput!.value = out
                    addtodoInput.focus()
                }}>{<><span class="focus">{input}</span>{x.replace(input.replace("/",""),"")}</>}</div>
            })}
        </div>
    </div>
    } </>
}