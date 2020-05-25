import React from "react";
import reducer from "./reducer";
import ActionsConst from "../actionConstatns/actionConstans";

const productList=[
    {
        title: "Zamioculcas Zamiifolia",
        price: "8",
        imgUrl: "img/zamioculcas_zamiifolia.jpg",
        vendorCode: "P01",
        color: "green"
    },
    {
        title: "Anthurium",
        price: "20",
        imgUrl: "img/anthurium.jpg",
        vendorCode: "P02",
        color: "red",
        cartCounter: 1,
        bought: false,
        isFavourite: false
    }
]

describe('reducers testing', () => {
    const lsPlants = `[
        {
            "title": "Zamioculcas Zamiifolia",
            "price": "8",
            "imgUrl": "img/zamioculcas_zamiifolia.jpg",
            "vendorCode": "P01", "color": "green"
        },
        {
            "title": "Anthurium",
            "price": "20",
            "imgUrl": "img/anthurium.jpg",
            "vendorCode": "P02",
            "color": "red",
            "cartCounter": 1,
            "bought": false,
            "isFavourite": false
        }
    ]`;

    test('gets ifo from localStorage', () => {


        const store = reducer({
            modal: {},
            productList: [],
        }, {type: ActionsConst.GET_PRODUCTS_FROM_LS, payload: lsPlants})


        expect(store.productList).toEqual(productList);
    })

    test('change favourites property to opposite', ()=>{
        const product= {
            "title": "Anthurium",
            "price": "20",
            "imgUrl": "img/anthurium.jpg",
            "vendorCode": "P02",
            "color": "red",
            "cartCounter": 1,
            "bought": false,
            "isFavourite": false
        }
        const store=reducer({
            modal: {},
            productList: productList,
        },{type:ActionsConst.TOGGLE_FAVOURITES, payload:product})

        expect(store.productList).toEqual([
            {
                title: "Zamioculcas Zamiifolia",
                price: "8",
                imgUrl: "img/zamioculcas_zamiifolia.jpg",
                vendorCode: "P01",
                color: "green"
            },
            {
                title: "Anthurium",
                price: "20",
                imgUrl: "img/anthurium.jpg",
                vendorCode: "P02",
                color: "red",
                cartCounter: 1,
                bought: false,
                isFavourite: true
            }
        ]);
    })
})

