import { configD, getConfig } from "../lib/config"

interface d {
    getConfig: Function | any,
}

export default function({}:any) {
  let config:configD = getConfig()
    return <>
    <link rel="stylesheet" href={"./themes/" + config.theme + ".css"} />
      <style>
        {config.customCss} :root {"{"}
        --hue: {config.hue};
        {"}"}
        {config.useBgImage == "true" ? `
        :root {
          --background-overlay: ${config.bgOverlay};
          --background: url("${config.bgImage}"); 
          --background-blend-mode: ${config.bgBlend};
        }
        ` : `
        :root {
          ${config.bgColor && `--background: ${config.bgColor};
          --background-overlay: ${config.bgColor};`}
        }
        `}
        {config.useNeonText == "true" && `
        .todo .body {
          background: linear-gradient(45deg,
            hsl(calc(var(--hue) - 40), 50%, 75%),
            hsl(calc(var(--hue) + 40), 50%, 75%));
          /* text-shadow: #fff1 3px 3px 3px; */
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        `}
      </style>
      {config.addTheme.replace(/\ /gi, "").split(",").map((e:string) => {
        return <link rel="stylesheet" href={"./themes/" + e + ".css"} />
      })}
    </>
  }