import { useEffect, useRef, useState } from 'preact/hooks'
import "../css/dist/settings.css"
import '../css/dist/app.css'
import Topbar from '../components/Topbar'
import { getConfig, configD, configDArray, setConfig, configDNames, themesNames } from '../lib/config'

interface AppD {
    todos: Array<any>
}

const onChangeTemplate = ({ config, useInnerText, e, useChecked }: any) => {
    return (f: any) => {
        //@ts-ignore
        config[e[0]] = (useInnerText ? f.target.innerText : useChecked ? f.target.checked : f.target.value).toString()
        setConfig(config)
        console.log("saved!")
    }
}


function getBase64(file: any, e: any, config: any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        let l = reader?.result?.toString()
        config[e[0]] = l
        setConfig(config)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

const fileChangeTemplate = ({ config, e }: any) => {
    return (f: any) => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            console.log("here!")
            let file = input.files?.[0];
            getBase64(file, e, config)
        };
        input.click();
    }
}

function Choose({ config, e }: any) {
    return <>
        <select class="choose second" value={config[e[0]]} onChange={onChangeTemplate({ config, e, useInnerText: false })}>
            {e[1][2].map((a: string) => {
                return <option value={a} >{/*@ts-ignore*/
                    e[1][3][a]}</option>
            })}
        </select>
    </>
}

function WriteString({ config, e }: any) {
    return <>
        <input placeholder={e[1][1]} class="input second" value={config[e[0]]} onChange={onChangeTemplate({ config, e, useInnerText: false })} />
    </>
}

function WriteArea({ config, e }: any) {
    return <>
        <textarea placeholder={e[1][1]} class="area second" spellCheck={false} onChange={onChangeTemplate({ config, e, useInnerText: false })}>{config[e[0]]}</textarea>
    </>
}

function WriteNumber({ config, e }: any) {
    return <>
        <input placeholder={e[1][1]} class="input second" type="number" value={config[e[0]]} onChange={onChangeTemplate({ config, e, useInnerText: false })} />
    </>
}

function WriteRange({ config, e, setValue, value }: any) {
    return <>
        <input placeholder={e[1][1]} onInput={(e: any) => {
            setValue(e.target?.value)
        }} min="0" max="360" step="2" class="range second" type="range" value={value} onChange={onChangeTemplate({ config, e, useInnerText: false })} />
    </>
}

function Check({ config, e }: any) {
    return <>
        <input type="checkbox" checked={config[e[0]] == "true" ? true : false} onChange={onChangeTemplate({ config, e, useChecked: true })} />
    </>
}

function WriteImage({ config, e }: any) {
    return <div class="gridtwo">
        <button class="button" onClick={fileChangeTemplate({ config, e })}>Vybrat</button>
        <button class="button nofocus" onClick={() => {
            let ms = prompt("Napiš celý odkaz na obrázek")
            if (ms) {
                config[e[0]] = ms
                setConfig(config)
            }
        }}>Odkaz</button>
    </div>
}


export function App() {
    let config: configD = getConfig()
    return (
        <>
            <Topbar isInSettings={true} howmuch={0} />
            <div class="main">
                {Object.entries(configDArray).map((e: any) => {
                    let [value, setValue] = useState(/*@ts-ignore*/
                        getConfig()?.[e[0]])
                    return <div class="wrap">
                        <span class="info">
                            <span>{//@ts-ignore
                                configDNames[e[0]]}</span>
                            {e[1][0] == "write_range" && /*@ts-ignore*/
                                <span class="hint">{value}</span>}
                        </span>
                        {e[1][0] == "choose" ? <Choose config={config} e={e} />
                            : e[1][0] == "write_string" ? <WriteString config={config} e={e} />
                                : e[1][0] == "write_area" ? <WriteArea config={config} e={e} />
                                    : e[1][0] == "write_number" ? <WriteNumber config={config} e={e} />
                                        : e[1][0] == "write_range" ? <WriteRange config={config} e={e} setValue={setValue} value={value} />
                                            : e[1][0] == "write_image" ? <WriteImage config={config} e={e} />
                                                : e[1][0] == "check" ? <Check config={config} e={e} />
                                                    : ""}
                    </div>
                })}
            </div>
        </>
    )
}
