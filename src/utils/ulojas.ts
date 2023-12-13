import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

interface Recipe {
    id: number;
    nome:string;
    image: string;
    morada: string;
    map: string;
    lat:string;
    long:string;
}

const getInboxloja = (): Recipe[] => [
    {
            "id": 1,
            "nome":"car rent porto",
            "image": "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
            "morada": "Rua da Estação 75, 4300-171 Porto",
           "map":"https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&",
           "lat":"41.14845655684153",
           "long":"-8.586003225348938"
        },
        {
            "id": 2,
            "nome":"car rent viana do castelo",
            "image": "https://mundodeviagens.com/wp-content/uploads/2017/01/santaluzia.jpg",
            "morada": "R. da Presa 110, 4900-790 Viana do Castelo",
           "map":"https://cdn.discordapp.com/attachments/990703697820545094/1184460937386799174/image.png?ex=658c0e35&is=65799935&hm=bfa7f6b87f66a8f096ae8c2fefdbb5f3bfb5279972881c7b51dedfa4084a32f9&",
           "lat":"41.712357554774954",
           "long":"-8.807115924738794"
        },
        {
            "id": 3,
            "nome":"car rent braga",
            "image": "https://images.impresa.pt/expresso/2020-11-09-Braga--1-.jpg/original/mw-1920",
            "morada": "R. do Poente 70, 4715-213 Braga",
           "map":"https://cdn.discordapp.com/attachments/990703697820545094/1184461373732814928/image.png?ex=658c0e9d&is=6579999d&hm=b545ab3c44086860d3e523c049cf484f1aee8a1e9d17db14e0a274ce83d5e7b4&",
           "lat":"41.54855841839101",
           "long":"-8.42221417553693"
        },
        {
            "id": 4,
            "nome":"car rent povoa de varzim",
            "image": "https://www.cm-pvarzim.pt/content/uploads/2019/05/maxresdefault.jpg",
            "morada": "R. Dr. Artur Aires 13, 4490-144 Póvoa de Varzim",
           "map":"https://cdn.discordapp.com/attachments/990703697820545094/1184462275776614480/image.png?ex=658c0f74&is=65799a74&hm=f7a607cb0e58673507fc2c68163466a2adb5dbacbf3a955c38c52cb15e7208a7&",
           "lat":"41.38736163960422",
           "long":"-8.770258463061605"
        },
    ];       

    export {getInboxloja};