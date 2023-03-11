export interface configD {
    theme: string,
    addTheme:string,
    customCss:string,
    user:string,
    useNeonText:string
    hue:number,

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
    useNeonText = "Neonový text",
    hue = "Odstín",

    bgColor = "Pozadí",
    useBgImage = "Obrázek na pozadí",
    bgImage = "Obrázek na pozadí",
    bgOverlay = "Barva překrytí",
    bgBlend = "Filtr překrytí"
}


export enum themesNames {
    basic = "Výchozí",
    catppuccin = "Catppuccin",
    gruvbox = "Gruvbox"
}


export enum bgOverlayNames {
    multiply = "vynásobit",
    overlay = "přidat",
    normal = "žádný filtr"
}

export const configDArray = {
    theme:["choose", "vyber",["basic", "catppuccin","gruvbox"], themesNames],
    user: ["write_string", "text"],
    customCss: ["write_area", "css"],
    addTheme: ["write_string", "napište názvy motivů, oddělujte čárkou"],
    useNeonText: ["check"], 
    hue: ["write_range", "0-360"],

    bgColor: ["write_string", "použij HEX barvu"],
    useBgImage: ["check"],
    
    bgOverlay: ["write_string", "použij HEX barvu"],
    bgImage: ["write_image", "napiš celý odkaz"],
    bgBlend: ["choose", "vyber", ["normal","multiply","overlay"], bgOverlayNames]
}

export const defaultConfig:configD = {
    theme: "basic",
    addTheme: "[]",
    customCss: "",
    user: "Kubík",
    useNeonText: "false",
    hue: 120,

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