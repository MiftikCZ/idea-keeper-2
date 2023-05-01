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
    theme: "basic",
    addTheme: "",
    customCss: "",
    user: "Tučňák 🐧",
    hue: 120,
    useNeonText: "false",
    useCommands: "false",
    showDateInTodos: "false",

    useBgImage: "false",
    bgImage: "https://miftikcz.github.io/griddy-startpage/assets/wal1.jpg",
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