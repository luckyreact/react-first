import React from 'react'

function MemoComponent(props) {
    console.log("momo component")

    return (
        <div>
            <p>Momo</p>
             <h1>{props.name}</h1>
        </div>
    )
}

export default React.memo(MemoComponent);