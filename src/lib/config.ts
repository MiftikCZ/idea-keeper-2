export interface configD {
    theme: string,
    addTheme:string,
    customCss:string,
    user:string,
    hue:number,

    useNeonText:string,
    useCommands:string,
    showDateInTodos: string, 
    bgColor?: string,
    useBgImage: string,

    bgOverlay?: string,
    bgImage: string,
    bgBlend: string
}

export enum configDNames {
    theme = "Theme",
    user = "Name",
    customCss = "Custom CSS",
    addTheme = "Additional styles",
    hue = "Theme hue",

    useNeonText = "Neon text",
    useCommands = "Commands",
    useBgImage = "Use wallpaper",
    showDateInTodos = "Show date",

    bgColor = "Background",
    bgImage = "Background image",
    bgOverlay = "Overlay color",
    bgBlend = "Overlay filter",
}


export enum themesNames {
    basic = "Default",
    catppuccin = "Catppuccin",
    gruvbox = "Gruvbox",
    nord = "Nord",
    evaforest = "Everforest",
    transparent = "Transparent",
    dracula = "Dracula",
    superdark = "Super dark",
    catppuccin_mocha = "Mocha mauve"
}


export enum bgOverlayNames {
    multiply = "multiply",
    overlay = "add",
    normal = "no filter"
}

export const configDArray = {
    theme:["choose", "vyber",["basic","superdark", "catppuccin", "catppuccin_mocha","gruvbox","dracula","nord","evaforest","transparent"], themesNames],
    user: ["write_string", "text"],
    customCss: ["write_area", "css"],
    addTheme: ["write_string", "eg: catppuccin, transparent"],
    useCommands: ["check"],
    showDateInTodos: ["check"],
    useNeonText: ["check"], 
    hue: ["write_range", "0-360"],

    bgColor: ["write_string", "HEX color"],
    useBgImage: ["check"],

    bgOverlay: ["write_string", "HEX color"],
    bgImage: ["write_image", "full link"],
    bgBlend: ["choose", "vyber", ["normal","multiply","overlay"], bgOverlayNames],
}

export const defaultConfig:configD = {
    theme: "transparent",
    addTheme: "",
    customCss: "",
    user: "Tučňák 🐧",
    hue: 120,
    useNeonText: "false",
    useCommands: "false",
    showDateInTodos: "false",

    useBgImage: "true",
    bgOverlay: "#888",
    // author: Vitalii Khodzinskyi, not sure if it has copyright
    bgImage: "https://images.unsplash.com/photo-1675849324506-b64b8b2a92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    bgBlend: "multiply",
}


export function setConfig(someNew:configD) {
    localStorage.setItem("ik_config", JSON.stringify(someNew))
}

export function getConfig():configD {
    let e = JSON.parse(localStorage.getItem("ik_config") || "{}")
    e  = {...defaultConfig,...e}
    return e
}
