import React from "react"

function Item(props) {
    console.log(props.item.id)
    return (
        <div>
            {props.item.name}
            {props.item.color}
            <button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
        </div>
    )
}

export default Item