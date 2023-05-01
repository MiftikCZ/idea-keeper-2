import { useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { configDArray, getConfig } from "../lib/config"
import { todoInterface } from "./Addtodo"

interface todoD {
    settodos: Function | any,
    todos: Array<any>,
    e: todoInterface
}

function Dole({ after, time }: any) {
    function Main() {
        if (getConfig().showDateInTodos == "true") {
            let agoTime = Math.floor((Date.now() - parseInt(time)) / 1000 / 60 / 60 / 24)
            let ago = agoTime ? <span class="datum">{agoTime} days</span> : <></>
            return after ? <> <details class="img_wrap">
                <summary>images</summary>
                <span class="img_list">
                    {after}
                </span>
            </details> {ago} </> : <><div class="img_wrap"></div>{ago}</>
        } else {
            return after && <details class="img_wrap">
                <summary>images</summary>
                <span class="img_list">
                    {after}
                </span>
            </details>
        }
    }

    return <div class="dolu">
        <Main />
    </div>
}

function preprocessTodoContent(str: string, time: string) {
    let after: (JSX.Element | undefined) = undefined
    let imageI = 0
    let text = str.split(" ").map(e => {
        if (e.startsWith("https://") || e.startsWith("http://")) {
            return `<a href=${e} class="link" target="_blank">${e}</a>`
        } else if ((e.startsWith("![https://") || e.startsWith("![http://")) && e.endsWith("]")) {
            let link = e.replace(/\!\[/g, "").replace(/\]/g, "")
            after = <>{after}<img src={link} height="50" /></>
            imageI++
            return `<a href=${link} class="link" target="_blank">image ${imageI}</a>`
        }
        return e
    }).join(" ").replace(/\`(.*?)\`/g, "\<code\>$1<\/code\>")
    .replace(/\*\*(.*?)\*\*/g, "\<b\>$1<\/b\>")
    .replace(/\*(.*?)\*/g, "\<i\>$1 <\/i\>")
    .replace(/\_(.*?)\_/g, "\<u\>$1<\/u\>")
    return <>
        <span class="text" dangerouslySetInnerHTML={{__html:text}}/>

        <Dole after={after} time={time} />
    </>
}

export function Todo({ settodos, e, todos }: todoD) {
    return <div class="todo" id={"todo_" + e.id}>
        <div class="body">
            {preprocessTodoContent(e.content, e.time)}
        </div>

        <div class="remove" onClick={() => {
            settodos(todos.filter(a => a.id !== e.id))
        }}>
            <span class="material-symbols-outlined icon">delete</span>
        </div>
    </div>
}
