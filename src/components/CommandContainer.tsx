import { JSX } from "preact/jsx-runtime";

interface d {
    children:JSX.Element|Array<JSX.Element>|any
}

export default function ({children}:d) {
    return <div class="command_container">
        {children}
    </div>
}