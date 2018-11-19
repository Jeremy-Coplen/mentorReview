//import axios

//frontend
let item = {
    name: "ball",
    color: "red"
}

//using req.body to send info back to server
axios.post("someapi/item", {item})

//using req.query to send info back to server
axios.get("someapi/item?color=red")

//using req.params to send info back to server
axios.delete("someapi/item/64")

//backend

let items = [
    {
        id: 63,
        name: "fork",
        color: "silver"
    },
    {
        id: 64,
        name: "paper towels",
        color: "white"
    },
    {
        id: 65,
        name: "bike",
        color: "red"
    },
    {
        id: 66,
        name: "towel",
        color: "red"
    }
]

let id = 67

app.post("someapi/item")
app.get("someapi/item")
app.delete("someapi/item/:itemId")

function addItem(req, res) {
    //const {item} = req.body.item
    const item = req.body.item
    items.push(item)
    id++
    res.status(200).send(items)
}

function getItem(req, res) {
    //const {color} = req.query.color
    const color = req.query.color
    res.status(200).send(items.filter(item => item.color === color))
}

function deleteItem(req, res) {
    //const {itemid} = req.params
    const itemId = req.params.itemId
    //find index and splice
    const index = items.findIndex(item => item.id === itemId)

    if(index === -1) {
        res.sendStatus(500)
    }
    else {
        items.splice(index, 1)
        res.status(200).send(items)
    }

    //filter and resign array 
    let newItems = items.filter(item => item.id !== itemId)

    if(newItems.length === items.length) {
        res.sendStatus(500)
    }
    else {
        items = newItems
        res.status(200).send(items)
    }
}