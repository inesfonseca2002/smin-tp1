import { IonButtons, IonContent, IonHeader,IonNavLink, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/lojas';
//import ReceitasDetailModal from './lojaDetailModal';




interface Recipe {
    id: number;
    nome:string;
    image: string;
    morada: string;
    map: string;
}

const lojas: React.FC = () => {

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
    setItemSelected(null);//id receita esta feito ou nao
    
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
          <IonTitle>lojas</IonTitle>
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
              <IonItem onClick={() => handleClickReceita(item)} key={ `item_${ index }`} detail={ true } lines="full" detailIcon={ checkmark }>
                <IonLabel>
                  <h2>{ item.nome }
                  </h2>
                  <h4>{ item.morada }</h4>
                  <IonNavLink >
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                    {`${item.image} cidade `}
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

export default lojas;