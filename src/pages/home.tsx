import { IonButtons, IonContent, IonHeader, IonMenuButton,IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxcars } from '../utils/util';
import { IonSelect, IonSelectOption } from '@ionic/react';

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
  const [carlogSelected, setcarlogSelected] = useState<Recipe| null>(null);
  const [showCard, setShowCard] = useState(false);
  const inboxcarlogs = getInboxcars();
  const [showCard2, setShowCard2] = useState(false);
  const inboxcarlogs2 = getInboxcars();
  const [showCard3, setShowCard3] = useState(false);
  const inboxcarlogs3 = getInboxcars();
  const [showCard4, setShowCard4] = useState(false);
  const inboxcarlogs4 = getInboxcars();
  const handleClickReceita = async (carlog : Recipe) => {
    var pass ="";
    setcarlogSelected(carlog)//useefect
     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${pass} times`;
  });
	}

  const handleCloseModal = () => {
    setcarlogSelected(null);
  };
 
  return (
    
    <IonPage>
    <IonHeader translucent={true}>
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
        <IonButton id="meuBotao" color="primary"onClick={() => setShowCard(!showCard)}>
          <IonLabel>car rent porto</IonLabel>
        </IonButton>
        <IonButton id="meuBotao2" color="primary"onClick={() => setShowCard2(!showCard2)}>
          <IonLabel>car rent viana do castelo</IonLabel>
        </IonButton>
        <IonButton id="meuBotao3" color="primary"onClick={() => setShowCard(!showCard3)}>
          <IonLabel>car rent braga</IonLabel>
        </IonButton>
        <IonButton id="meuBotao3" color="primary"onClick={() => setShowCard(!showCard4)}>
          <IonLabel>car rent povoa de varzim</IonLabel>
        </IonButton>
  
        {inboxcarlogs.map((carlog, index) => (
          <IonItem onClick={() => handleClickReceita(carlog)} key={`carlog_${index}`} detail={false} lines="full">
            <IonLabel>
              {showCard  && carlog?.loja === 'car rent porto' && (
                <IonCard>
                  <IonImg src={carlog?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <IonCardHeader>
                    <IonCardTitle>{carlog?.name}</IonCardTitle>
                    <IonCardSubtitle>{carlog?.descrisao}</IonCardSubtitle>
                    <IonCardHeader>{carlog?.preco} euros </IonCardHeader>
                  </IonCardHeader>
                  <IonCardContent></IonCardContent>
                </IonCard>
              )}
               {showCard2  && carlog?.loja === 'car rent viana do castelo' && (
                <IonCard>
                  <IonImg src={carlog?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <IonCardHeader>
                    <IonCardTitle>{carlog?.name}</IonCardTitle>
                    <IonCardSubtitle>{carlog?.descrisao}</IonCardSubtitle>
                    <IonCardHeader>{carlog?.preco} euros </IonCardHeader>
                  </IonCardHeader>
                  <IonCardContent></IonCardContent>
                </IonCard>
              )}
               {showCard3  && carlog?.loja === 'car rent braga' && (
                <IonCard>
                  <IonImg src={carlog?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <IonCardHeader>
                    <IonCardTitle>{carlog?.name}</IonCardTitle>
                    <IonCardSubtitle>{carlog?.descrisao}</IonCardSubtitle>
                    <IonCardHeader>{carlog?.preco} euros </IonCardHeader>
                  </IonCardHeader>
                  <IonCardContent></IonCardContent>
                </IonCard>
              )}
               {showCard4  && carlog?.loja === 'car rent povoa de varzim' && (
                <IonCard>
                  <IonImg src={carlog?.image} alt="The Wisconsin State Capitol building in Madison, WI at night" />
                  <IonCardHeader>
                    <IonCardTitle>{carlog?.name}</IonCardTitle>
                    <IonCardSubtitle>{carlog?.descrisao}</IonCardSubtitle>
                    <IonCardHeader>{carlog?.preco} euros </IonCardHeader>
                  </IonCardHeader>
                  <IonCardContent></IonCardContent>
                </IonCard>
              )}
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonPage>
  );
};

export default Home;