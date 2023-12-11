import { IonButtons, IonContent, IonHeader,IonNavLink, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonThumbnail } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/ulojas';
//import ReceitasDetailModal from './lojaDetailModal';
import { Link } from 'react-router-dom';




interface Recipe {
    id: number;
    nome:string;
    image: string;
    morada: string;
    map: string;
}

const Lojas: React.FC = () => {

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
    
    <button>
       ver
    </button>
  };


  return (
    <IonPage>
      <IonHeader translucent={ true }>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Lojas</IonTitle>
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
  const pi = item.nome;

            return (
              <IonItem onClick={() => handleClickReceita(item)} key={ `item_${ index }`} detail={ false } lines="full" >
                <IonLabel>
                
                  <IonCard>
      <IonCardHeader>
        <IonCardTitle> {item.nome}</IonCardTitle>
       
      </IonCardHeader>
      
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
            <IonImg
                src={item.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            </IonThumbnail>
            <IonLabel>cidade </IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
            <IonImg
                src={item.map}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            </IonThumbnail>
            <IonLabel>mapa onde situa a loja </IonLabel>
          </IonItem>
          <IonCardSubtitle>{item.morada}</IonCardSubtitle>    

           
         
          <IonButton>
        <Link  to="/home">Ir para Outra Página</Link>
      </IonButton>    
        </IonList>
      </IonCardContent>
    </IonCard>
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

export default Lojas;