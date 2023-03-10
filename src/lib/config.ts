export interface configD {
    theme:"basic" | "catppuccin" | "neon",
    addTheme:string,
    customCss:string,
    user:string,
    useNeonText:string
    hue:number
}
export const configDArray = {
    theme:["choose", "vyber",["basic", "catppuccin", "neon"]],
    user: ["write_string", "text"],
    customCss: ["write_area", "css"],
    addTheme: ["write_string", "napište názvy motivů, oddělujte čárkou"],
    useNeonText: ["check"], 
    hue: ["write_range", "0-360"]
}

export enum configDNames {
    theme = "Motiv",
    user = "Jméno",
    customCss = "Vlastní CSS",
    addTheme = "Další styly",
    useNeonText = "Neonový text",
    hue = "Odstín"
}


export enum themesNames {
    basic = "Výchozí",
    catppuccin = "Catppuccin",
    neon = "Neon"
}

export const defaultConfig:configD = {
    theme: "basic",
    addTheme: "[]",
    customCss: "",
    user: "Kubík",
    useNeonText: "false",
    hue: 120
}


export function setConfig(someNew:configD) {
    localStorage.setItem("ik_config", JSON.stringify(someNew))
}

export function getConfig():configD {
    let e = JSON.parse(localStorage.getItem("ik_config") || "{}")
    e  = {...defaultConfig,...e}
    return e
}