import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';

interface ReceitasDetailModalProps {
  itemSelected: Recipe | null;
  onClose: () => void;
}

interface Recipe {
    id: number;
    nome:string;
    image: string;
    morada: string;
    map: string;
}



const ReceitasDetailModal: React.FC<ReceitasDetailModalProps> = ({ itemSelected, onClose }) => {
  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.nome}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.instructions}</p>
        <IonImg
                src={itemSelected?.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
      </IonContent>
      <IonButtons slot="end">
            {/* <IonButton onClick={ () => itemSelected?.done = true}>feito </IonButton> */}
          </IonButtons>
    </IonModal>
  );
};

export default ReceitasDetailModal;
