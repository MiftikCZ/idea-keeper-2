import { getConfig } from "../lib/config"

interface mainD {
    todos: Array<any>,
    settodos: Function | any
}

export default function({todos,settodos}: mainD) {
    
    return <div class="todos">
        {todos.length > 0.1 ? todos.map(e => {
            return <div class="todo" id={"todo_"+e.id}>
                <div class="body">
                    {e.content}
                </div>
                <div class="remove" onClick={() => {
                    settodos(todos.filter(a => a.id !== e.id))
                }}>
                    <span class="material-symbols-outlined icon">delete</span>
                </div>
            </div>
        }) : <>
        <h2>
        nic tu není...
        </h2>
        </>}
    </div>
}