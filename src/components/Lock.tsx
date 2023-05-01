import { render } from "preact";
import { useState } from "preact/hooks";
import { getConfig } from "../lib/config";
interface mainD {
    setAddFromCommand: Function|any
}
export default function({setAddFromCommand}:mainD) {
    let [time,setTime] = useState("...")
    function setDate() {
        let d = new Date()
        setTime(d.getHours() + ":" + d.getMinutes())
    }
    let interval = setInterval(()=>setDate,1000)
    setDate()
    return <>
    <style>{`
        #appWrapper {
            filter: blur(10px);
        }
    `}</style>
    <div class="lock" onClick={()=>{
        clearInterval(interval)
        setAddFromCommand(<></>)
    }}>
        <div class="title">{getConfig().user}</div>
        <div class="description">Hello, The time is {time}</div> 
    </div>
    </>
}