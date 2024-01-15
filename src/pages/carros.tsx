import { IonButtons, IonContent, IonHeader, IonMenuButton,IonPage, IonTitle, IonToolbar, IonList, IonNote, IonItem,IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
//import { getInboxcars } from '../utils/util';
import CarrosDetailModal from './carrosDetailModal';
import './receitas.css';

import { pricetag } from 'ionicons/icons';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';



interface Recipe {
  id: number;
  name: string;
  descrisao: string[];
  dados: string[];
  preco: string;
  image: string;
  loja:string;
}


const Carros: React.FC = () => {
  const [Badge, setBadge] = useState(true);
  const [lojaSelected, setlojaSelected] = useState<Recipe | null>(null);
  const [carros, setcarros] = useState<Recipe[]>([]);
  useEffect(() => {
    const fetchcarros = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/carros');
        const data = await response.json();
        setcarros(data);
      } catch (error) {
        console.error(`erro ao buscar lojas `)
      };

    };

    fetchcarros();
  }, []);



  const [carselected, setcarselected] = useState<Recipe| null>(null);
  
  //const inboxcars = getInboxcars();

  const handleClickReceita = async (car : Recipe) => {
    var pass ="";
    setcarselected(car)//useefect
     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${pass} times`;
  });
	}

  const handleCloseModal = () => {
    setcarselected(null);
  };

  return (
    <IonPage>
      <IonHeader translucent={ true }>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>carros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">fdfd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        { carros.map((car: Recipe, index: any) => {

            return (
              <IonItem onClick={() => handleClickReceita(car)} key={ `car_${ index }`} detail={ false } lines="full" >
                <IonLabel>
                  <IonCard>
                  <IonImg
                src={car.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
      <IonCardHeader>
        <IonCardTitle>{ car.name }</IonCardTitle>
        <IonCardSubtitle>{car.descrisao}</IonCardSubtitle>
       
        <IonCardHeader  > {car.preco} euros por dia</IonCardHeader>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                   
                  </IonBadge>
                }
                  {car?.name === 'car rent porto' && (
  <IonCard>
    <IonImg src={car?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
    <IonCardHeader>
      <IonCardTitle>{car?.name}</IonCardTitle>
      <IonCardSubtitle>{car?.descrisao}</IonCardSubtitle>
      <IonCardHeader>{car?.preco} euros </IonCardHeader>
    </IonCardHeader>
    <IonCardContent></IonCardContent>
  </IonCard>
)}

              </IonItem>
            );
            })}
        </IonList>
      </IonContent>

      < CarrosDetailModal carselected={carselected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Carros;