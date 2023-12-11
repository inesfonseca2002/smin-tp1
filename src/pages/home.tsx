import { IonButtons, IonContent, IonHeader, IonMenuButton,IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/util';

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


const Home: React.FC = () => {

  const [ Badge, setBadge ] = useState(true);
  const [itemSelected, setItemSelected] = useState<Recipe| null>(null);

  const inboxItems = getInboxItems();

  const handleClickReceita = async (item : Recipe) => {
    var pass ="";
    setItemSelected(item)//useefect
     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${pass} times`;
  });
	}

  const handleCloseModal = () => {
    setItemSelected(null);
  };

  return (
    <IonPage>
      <IonHeader translucent={ true }>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">fdfd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        { inboxItems.map((item, index) => {

            return (
              <IonItem onClick={() => handleClickReceita(item)} key={ `item_${ index }`} detail={ false } lines="full" >
                <IonLabel>
                {item?.loja === 'car rent porto' && (
  <IonCard>
    <IonImg src={item?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
    <IonCardHeader>
      <IonCardTitle>{item?.name}</IonCardTitle>
      <IonCardSubtitle>{item?.descrisao}</IonCardSubtitle>
      <IonCardHeader>{item?.preco} euros </IonCardHeader>
    </IonCardHeader>
    <IonCardContent></IonCardContent>
  </IonCard>
)}
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                   
                  </IonBadge>
                }

              </IonItem>
            );
            })}
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Home;