import { getConfig } from "../lib/config"
import { Todo } from "./Todo"

interface mainD {
    todos: Array<any>,
    settodos: Function | any
}

export default function ({ todos, settodos }: mainD) {
    return <div class="todos">
        {todos.length > 0.1 ? todos.map(e => {
            return <Todo settodos={settodos} e={e} todos={todos}/>
        }) : <>
            <h2>
                nic tu není...
            </h2>
        </>}
    </div>
}