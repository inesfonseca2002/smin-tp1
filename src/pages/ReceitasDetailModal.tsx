import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';

interface ReceitasDetailModalProps {
  itemSelected: Recipe | null;
  onClose: () => void;
}

interface Recipe {
  id: number;
  name: string;
  descrisao: string[];
  dados: string[];
  preco: string;
  image: string;
  loja:string;
}



const ReceitasDetailModal: React.FC<ReceitasDetailModalProps> = ({ itemSelected, onClose }) => {
  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.dados}</p>
        <IonImg
                src={itemSelected?.image}
                alt="The Wisconsin State Capito/l building in Madison, WI at night"
            ></IonImg>
        <p>{itemSelected?.loja}</p>
      </IonContent>
      <IonButtons slot="end">
            {/* <IonButton onClick={ () => itemSelected?.done = true}>feito </IonButton> */}
          </IonButtons>
    </IonModal>
  );
};

export default ReceitasDetailModal;
