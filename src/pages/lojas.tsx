import { IonButtons, IonContent, IonHeader,IonNavLink, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonThumbnail } from '@ionic/react';
import { checkmark, pieChart } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxloja } from '../utils/ulojas';
//import ReceitasDetailModal from './lojaDetailModal';
import { Link } from 'react-router-dom';




interface Recipe {
  id: number;
  nome:string;
  image: string;
  morada: string;
  map: string;
  lat:string;
  long:string;
}

const Lojas: React.FC = () => {

  const [ Badge, setBadge ] = useState(true);
  const [lojaSelected, setlojaSelected] = useState<Recipe| null>(null);

  const inboxlojas = getInboxloja();

  const handleClickReceita = async (loja : Recipe) => {
    var pass ="";
    setlojaSelected(loja)//useefect
     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${pass} times`;
  });
	}

  const handleCloseModal = () => {
    setlojaSelected(null);
    
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
          
        { inboxlojas.map((loja: Recipe, index: any) => {
  const pi = loja.nome;

            return (
              <IonItem onClick={() => handleClickReceita(loja)} key={ `loja_${ index }`} detail={ false } lines="full" >
                <IonLabel>
                
                  <IonCard>
      <IonCardHeader>
        <IonCardTitle> {loja.nome}</IonCardTitle>
       
      </IonCardHeader>
      
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
            <IonImg
                src={loja.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            </IonThumbnail>
            <IonLabel>cidade </IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
            <IonImg
                src={loja.map}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            </IonThumbnail>
            <IonLabel>mapa onde situa a loja </IonLabel>
          </IonItem>
          <IonCardSubtitle>{loja.morada}</IonCardSubtitle>   
         
          <IonButton >
          <Link to={`/carros/${pi}`}>Ir para a página de Carros</Link>
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