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
    theme = "Motiv",
    user = "Jméno",
    customCss = "Vlastní CSS",
    addTheme = "Další styly",
    hue = "Odstín",

    useNeonText = "Neonový text",
    useCommands = "Příkazy",
    useBgImage = "Obrázek na pozadí",
    showDateInTodos = "Zobrazit datum",

    bgColor = "Pozadí",
    bgImage = "Obrázek na pozadí",
    bgOverlay = "Barva překrytí",
    bgBlend = "Filtr překrytí",
}


export enum themesNames {
    basic = "Výchozí",
    catppuccin = "Catppuccin",
    gruvbox = "Gruvbox",
    nord = "Nord",
    evaforest = "Příroda",
    transparent = "Průhledné",
    dracula = "Dracula",
    superdark = "Super Tmavý"
}


export enum bgOverlayNames {
    multiply = "vynásobit",
    overlay = "přidat",
    normal = "žádný filtr"
}

export const configDArray = {
    theme:["choose", "vyber",["basic","superdark", "catppuccin","gruvbox","dracula","nord","evaforest","transparent"], themesNames],
    user: ["write_string", "text"],
    customCss: ["write_area", "css"],
    addTheme: ["write_string", "Názvy dalších, oddělujte čárkou"],
    useCommands: ["check"],
    showDateInTodos: ["check"],
    useNeonText: ["check"], 
    hue: ["write_range", "0-360"],

    bgColor: ["write_string", "použij HEX barvu"],
    useBgImage: ["check"],

    bgOverlay: ["write_string", "použij HEX barvu"],
    bgImage: ["write_image", "napiš celý odkaz"],
    bgBlend: ["choose", "vyber", ["normal","multiply","overlay"], bgOverlayNames],
}

export const defaultConfig:configD = {
    theme: "basic",
    addTheme: "",
    customCss: "",
    user: "Vrabčák",
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