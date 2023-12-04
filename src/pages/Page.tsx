import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonNavLink,IonButton, IonToolbar,IonicSlides  } from '@ionic/react';
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {  IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonImg, IonIcon } from '@ionic/react';
import { getInboxItems } from '../utils/util';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Receitas from './receitas';

interface Recipe {
  id: number;
  name: string;
  descrisao: string[];
  dados: string[];
  preco: string;
  image: string;
  loja:string;
}
interface page {
  itemSelected: Recipe | null;
  onClose: () => void;
}
const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

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
       

        <ExploreContainer name={name} />
        <h1>
          black friday
        </h1>    
        <Swiper
       spaceBetween={50}
       slidesPerView={3}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Adicione mais slides conforme necessário */}
    </Swiper>
        var c= {itemSelected?.id};

       if (c==2 && c==4) {
        <p>{itemSelected?.descrisao}</p>
       }
       
             

                
   <br /><br /><br /><br />
        <h1>proximos carros</h1>
        <p>premios ganhos </p>

       
        <IonNavLink routerDirection="forward" component={() => <Receitas />}>
          <IonButton>aqui</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Page;
