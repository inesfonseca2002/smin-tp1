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
            "loja":"teste"

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
            "loja":"teste"
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
            "loja":"teste"
        },
        
    ];       

    export {getInboxItems};