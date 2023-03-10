interface d {
    getConfig: Function | any,
}

export default function({getConfig}:d) {
    return <>
      <style>
        {getConfig().customCss} :root {"{"}
        --hue: {getConfig().hue};
        {"}"}
        {getConfig().useNeonText == "true" && `
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
      <link rel="stylesheet" href={"./themes/" + getConfig().theme + ".css"} />
      {getConfig().addTheme.replace(/\ /gi, "").split(",").map((e:string) => {
        return <link rel="stylesheet" href={"./themes/" + e + ".css"} />
      })}
    </>
  }