const express = require("express")

const app = express()
app.use(express.json())

const port = 3005

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

app.get("/api/items", (req, res) => {
    res.status(200).send(items)
})
app.post("/api/item", (req, res) => {
    let item = req.body.item
    item.id = id
    items.push(item)
    id++
    res.status(200).send(items)
})
app.get("/api/item", (req, res) => {
    console.log("hit")
    const color = req.query.color
    res.status(200).send(items.filter(item => item.color === color))
})
app.delete("/api/item/:id", (req, res) => {
    const itemId = Number(req.params.id)
    //find index and splice
    const index = items.findIndex(item => item.id === itemId)
    console.log(index)

    if(index === -1) {
        res.sendStatus(500)
    }
    else {
        items.splice(index, 1)
        res.status(200).send(items)
    }

    //filter and resign array 
    // let newItems = items.filter(item => item.id !== itemId)

    // if(newItems.length === items.length) {
    //     res.sendStatus(500)
    // }
    // else {
    //     items = newItems
    //     res.status(200).send(items)
    // }
})

app.listen(port, () => console.log(`listening on port ${port}`))