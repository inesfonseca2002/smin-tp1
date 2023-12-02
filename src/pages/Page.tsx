import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonNavLink,IonButton, IonToolbar,IonSlides, IonSlide  } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import Receitas from './receitas';


const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <h1>
          black friday
        </h1>             <br /><br /><br /><br />
        <h1>proximos carros</h1>
        <p>premios ganhos </p>

        <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
        <IonNavLink routerDirection="forward" component={() => <Receitas />}>
          <IonButton>aqui</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Page;
