import { useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { todoInterface } from "./Addtodo"

interface todoD {
    settodos: Function | any,
    todos: Array<any>,
    e:todoInterface
}

function preprocessTodoContent(str:string) {
    let after: (JSX.Element | undefined) = undefined
    let imageI = 0
    return <>
        <span class="text">
        {
            str.split(" ").map(e => {
                if(e.startsWith("https://") || e.startsWith("http://")) {
                    return <><a href={e} class="link" target="_blank">{e}</a> </>
                } else if ((e.startsWith("![https://") || e.startsWith("![http://")) && e.endsWith("]")) {
                    let link = e.replace(/\!\[/g, "").replace(/\]/g,"")
                    after = <>{after}<img src={link} height="50"/></>
                    imageI++
                    return <><a href={link} class="link" target="_blank">obrázek {imageI}</a> </>
                }
                return <>{e} </>
            })
        }
        </span>
        {after && <details class="img_wrap">
            <summary>příloha</summary>
            <span class="img_list">
                {after}
            </span>
        </details>}
    </>
}

export function Todo({settodos,e,todos}: todoD) {
    return <div class="todo" id={"todo_" + e.id}>
        <div class="body">
            {preprocessTodoContent(e.content)}
        </div>
        
        <div class="remove" onClick={() => {
            settodos(todos.filter(a => a.id !== e.id))
        }}>
            <span class="material-symbols-outlined icon">delete</span>
        </div>
    </div>
}
