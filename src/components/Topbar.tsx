import { getConfig } from "../lib/config"

interface mainD {
    howmuch: number,
    isInSettings?: boolean
}

export default function ({ howmuch, isInSettings }: mainD) {
    return <div class="topbar">
        <div class="first" style={
            isInSettings ? `display: flex; align-items: center;` : ""
        }>
            {howmuch > 0.1 ? <>
                <span class="select">{howmuch.toLocaleString()}</span> {
                    howmuch == 1 ? "idea" :
                        howmuch < 5 ? "ideas" : "ideas"
                }
            </> : <>
                {isInSettings ? <>
                <span class="settings">Settings</span>
                </> : <>
                Idea Keeper <span class="version">2</span>
                </>}
                
            </>}
        </div>
        <a href={isInSettings ? "./" : "./settings.html"} class="second">
            <span class="material-symbols-outlined icon">{isInSettings ? "home" : "settings"}</span>
        </a>
    </div>
}