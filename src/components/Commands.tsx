interface propsD {
    input: string
}

export default function ({input}: propsD) {
    return <>
        <div class="commands">
            <div class="list">
                ... commands here ...
            </div>
        </div>
    </>
}