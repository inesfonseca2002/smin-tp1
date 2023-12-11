import { IonButtons, IonContent, IonHeader, IonMenuButton,IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/util';
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
 /* most(pi) {
    // Navegar para a página Detalhes e passar os parâmetros usando queryParams
  
      };
*/
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
        { inboxItems.map((item, index) => {

            return (
              <IonItem onClick={() => handleClickReceita(item)} key={ `item_${ index }`} detail={ false } lines="full" >
                <IonLabel>
                  <IonCard>
                  <IonImg
                src={item.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
      <IonCardHeader>
        <IonCardTitle>{ item.name }</IonCardTitle>
        <IonCardSubtitle>{item.descrisao}</IonCardSubtitle>
        <IonIcon icon={pricetag}></IonIcon>
        <IonCardHeader  >{item.preco} euros </IonCardHeader>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                   
                  </IonBadge>
                }
                  {item?.name === 'car rent porto' && (
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

              </IonItem>
            );
            })}
        </IonList>
      </IonContent>

      < CarrosDetailModal itemSelected={itemSelected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Carros;