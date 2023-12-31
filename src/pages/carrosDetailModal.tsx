import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';

interface CarrosDetailModalProps {
  carselected: Recipe | null;
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



const CarrosDetailModal: React.FC<CarrosDetailModalProps> = ({ carselected, onClose }) => {
  return (
    
    <IonModal isOpen={carselected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{carselected?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonImg
                src={carselected?.image}
                alt="The Wisconsin State Capito/l building in Madison, WI at night"
            ></IonImg>
                    <h5>dados do veiculo</h5>
        <p>{carselected?.dados}</p>
        <h5>loja que tem o carro</h5>
        <p>{carselected?.loja}</p>
      </IonContent>
      <IonButtons slot="end">
            {/* <IonButton onClick={ () => carselected?.done = true}>feito </IonButton> */}
          </IonButtons>
    </IonModal>
  );
};

export default CarrosDetailModal;
