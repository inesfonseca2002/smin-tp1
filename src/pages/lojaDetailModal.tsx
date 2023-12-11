import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
interface ReceitasDetailModalProps {
  item: Recipe | null;
  onClose: () => void;
}

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


const ReceitasDetailModal: React.FC<ReceitasDetailModalProps> = ({ item, onClose }) => {
  return (

    <IonModal isOpen={item !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>car</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {item?.loja === `car rent porto`}{
    <IonCard>
    <IonImg
  src={item?.image}
  alt="The Wisconsin State Capitol building in Madison, WI at night"
></IonImg>
<IonCardHeader>
<IonCardTitle>{ item?.name }</IonCardTitle>
<IonCardSubtitle>{item?.descrisao}</IonCardSubtitle>

<IonCardHeader  >{item?.preco} euros </IonCardHeader>
</IonCardHeader>

<IonCardContent></IonCardContent>
</IonCard>
  }
      </IonContent>
      <IonButtons slot="end">
            {/* <IonButton onClick={ () => item?.done = true}>feito </IonButton> */}
          </IonButtons>
    </IonModal>
  );
};

export default ReceitasDetailModal;
