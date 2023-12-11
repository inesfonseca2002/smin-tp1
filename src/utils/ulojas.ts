import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

interface Recipe {
    id: number;
    nome:string;
    image: string;
    morada: string;
    map: string;
}

const getInboxItems = (): Recipe[] => [
    {
            "id": 1,
            "nome":"car rent porto",
            "image": "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
            "morada": "Rua da Estação 75, 4300-171 Porto",
           "map":"https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&"

        },
        {
            "id": 2,
            "nome":"car rent viana do castelo",
            "image": "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
            "morada": "Rua da Estação 75, 4300-171 Porto",
           "map":"https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&"

        },
        {
            "id": 3,
            "nome":"car rent braga",
            "image": "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
            "morada": "Rua da Estação 75, 4300-171 Porto",
           "map":"https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&"

        },
        {
            "id": 4,
            "nome":"car rent povoa de varzim",
            "image": "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_148234274.jpg",
            "morada": "Rua da Estação 75, 4300-171 Porto",
           "map":"https://cdn.discordapp.com/attachments/1019019692528111657/1180174662592909392/image.png?ex=657c764e&is=656a014e&hm=5f15899b1b970ec724fa1b20d335c72508cfc05c594716bb6518a54dd03fb5cc&"

        },
    ];       

    export {getInboxItems};