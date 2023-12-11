import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

interface Recipe {
    id: number;
    name: string;
    descrisao: string[];
    dados: string[];
    preco: string;
    prec:string;
    image: string;
    loja:string;

}

const getInboxItems = (): Recipe[] => [
    {
            "id": 1,
            "name": "BMW_x5",
            "descrisao": [
            "4 lugares /", 
            "quilometragem ilimitada/ ",
           
               "2 malas / ",
            "deposito cheio /",
            "combustivel = diesel / ",
            ],
            "dados": [
                "6 anos /",
                "motor tipo 2 /",
                "tração dianteira / ",
                "transmissão manual /"
            ],
            "preco": "20",
            "prec":"10",
            "image": "https://www.automaistv.com.br/wp-content/uploads/2019/05/bmw_x5_xdrive40i_8.jpg",
            "loja":"car rent porto",

        },
        {
            "id": 2,
            "name": "audi  rs_5",
            "descrisao": [
            "2 lugares  /",
            "quilometragem ilimitada / ",
            "1 malas  /",
            "deposito cheio / ",
            "combustivel = gasolio / ",
            ],
            "dados": [
                "3 anos /",
                "motor tipo 1 /",
                "tração dianteira / ",
                "transmissão automatica / "
            ],
            "preco": "50",
            "prec":"10",
            "image": "https://garagem360.com.br/wp-content/uploads/2021/06/audi_rs_5_coupe_203-scaled.jpeg",
            "loja":"car rent porto"

        },
        {
            "id": 3,
            "name": "jeep ault  ",
            "descrisao": [
            "5 lugares  / ",
            "quilometragem ilimitada / ",
            "4 malas / ",
            "deposito cheio /  ",
            "combustivel = gasolinha / ",
            ],
            "dados": [
                "8 anos / ",
                "motor tipo 4 /",
                "tração todas / ",
                "transmissão manual /"
            ],
            "preco": "40",
            "prec":"10",
            "image": "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imp4djNsdDJxNW9vLVNURFZUTFBUIn0.KQ1scCmbqUvb3fBi_BbfU7XJMAaRNinvILsmHzzW_-s/image;s=320x240",
            "loja":"car rent povoa de varzim"
        },
        {
            "id": 4,
            "name": "ford pity",
            "descrisao": [
            "2 lugares /",
            "quilometragem ilimitada / ",
            "1 malas /  ",
            "deposito cheio / ",
            "combustivel = diesel / ",
            ],
            "dados": [
                "12 anos /",
                "motor tipo 3",
                "tração dianteira ",
                "transmissão manual"
            ],
            "preco": "20",
            "prec":"10",
            "image": "https://cdn.autopapo.com.br/box/uploads/2021/01/16191145/ford-maverick-gt-v8-de-frente-fazendo-curva.jpg",
            "loja":"car rent braga"
        },
        {
            "id": 5,
            "name": "renult clio  ",
            "descrisao": [
            "4 lugares  / ",
            "quilometragem ilimitada / ",
            "5 malas / ",
            "deposito cheio /  ",
            "combustivel = gasoleo / ",
            ],
            "dados": [
                "3 anos / ",
                "motor tipo 2 /",
                "tração todas / ",
                "transmissão dianteira /"
            ],
            "preco": "35",
            "prec":"10",
            "image": "https://live.staticflickr.com/65535/48753266391_e2aacdd080_o.jpg",
            "loja":"car rent povoa de varzim"
        },
        {
            "id": 6,
            "name": "bugatti chiron",
            "descrisao": [
            "2 lugares  / ",
            "quilometragem ilimitada / ",
            "1 malas / ",
            "deposito cheio /  ",
            "combustivel = gasolinha / ",
            ],
            "dados": [
                "1 anos / ",
                "motor tipo 1 /",
                "tração traseira / ",
                "transmissão automatica /"
            ],
            "preco": "70",
            "prec":"10",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FoS20162016_0624_132444AA_%2827785299372%29.jpg/1200px-FoS20162016_0624_132444AA_%2827785299372%29.jpg",
            "loja":"car rent viana do castelo"
        },
        {
            "id": 7,
            "name": "jeep ault  ",
            "descrisao": [
            "2 lugares  / ",
            "quilometragem ilimitada / ",
            "2 malas / ",
            "deposito cheio /  ",
            "combustivel = eletrico / ",
            ],
            "dados": [
                "4 anos / ",
                "motor tipo 7 /",
                "tração dianteira / ",
                "transmissão automatica /"
            ],
            "preco": "30",
            "prec":"10",
            "image": "https://cdn.discordapp.com/attachments/990703697820545094/1183845210036387892/500-figurini-colorizer-Passion-Red-desktop-680x430_3.png?ex=6589d0c4&is=65775bc4&hm=ca8fc0c6949e2838668d57ad4a0112a9d142be3c9df31e986dba8ce5cfc0f406&",
            "loja":"car rent braga"
        },
        {
            "id": 8,
            "name": "toyota yaris ",
            "descrisao": [
            "5 lugares  / ",
            "quilometragem ilimitada / ",
            "3 malas / ",
            "deposito cheio /  ",
            "combustivel = gasolinha / ",
            ],
            "dados": [
                "3 anos / ",
                "motor tipo 4 /",
                "tração todas / ",
                "transmissão manual /"
            ],
            "preco": "50",
            "prec":"10",
            "image": "https://d2v9mob6nwdg55.cloudfront.net/vo/imagenes/h_img_110_45150_2372800_1659088519.jpg",
            "loja":"car rent viana do castelo"
        },
    ];       

    export {getInboxItems};