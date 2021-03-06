const express = require('express');

var app = express();
const port = process.env.PORT || 9000;

const products = [
    {
        "title" : "Zamioculcas Zamiifolia",
        "price" : "8",
        "imgUrl": "img/zamioculcas_zamiifolia.jpg",
        "vendorCode": "P01",
        "color" : "green"
    },
    {
        "title" : "Anthurium",
        "price" : "20",
        "imgUrl": "img/anthurium.jpg",
        "vendorCode": "P02",
        "color" : "red"
    },
    {
        "title" : "Chinese Money Plant",
        "price" : "14",
        "imgUrl": "img/chinese_money_plant.jpg",
        "vendorCode": "P03",
        "color" : "green"
    },
    {
        "title" : "Bromeliad",
        "price" : "16",
        "imgUrl": "img/bromeliad.jpg",
        "vendorCode": "P04",
        "color" : "pink"
    },
    {
        "title" : "Calathea Sanderiana",
        "price" : "16",
        "imgUrl": "img/calathea_sanderiana.jpg",
        "vendorCode": "P05",
        "color" : "dark-green"
    },
    {
        "title" : "Succulents",
        "price" : "3",
        "imgUrl": "img/succulent.jpg",
        "vendorCode": "P06",
        "color" : "green"
    },
    {
        "title" : "Tradescantia Sitara",
        "price" : "8",
        "imgUrl": "img/tradescantia_sitara.jpg",
        "vendorCode": "P07",
        "color" : "violet"
    },
    {
        "title" : "Devil's Ivy",
        "price" : "15",
        "imgUrl": "img/devil's_ivy.jpg",
        "vendorCode": "P08",
        "color" : "green"
    },
    {
        "title" : "Calathea Triostar",
        "price" : "20",
        "imgUrl": "img/calathea_triostar.jpg",
        "vendorCode": "P09",
        "color" : "red"
    },
    {
        "title" : "Rubber Plant",
        "price" : "8",
        "imgUrl": "img/rubber_plant.jpg",
        "vendorCode": "P10",
        "color" : "green"
    }
]

app.get('/products', (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;

    const responseBody = {
        data: products.slice((page - 1) * pageSize, page * pageSize),
        page,
        pageSize,
        totalPages: Math.ceil(products.length / pageSize)
    }

    res.send(responseBody);
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Started server at port: ${port}`);
});