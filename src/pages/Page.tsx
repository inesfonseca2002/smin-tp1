import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from "react";
import { getInboxcars } from '../utils/util';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { Geolocation } from '@capacitor/geolocation';


interface Recipe {
  id: number;
  name: string;
  descrisao: string[];
  dados: string[];
  preco: string;
  image: string;
  loja:string;
}
const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);
  };
  
  const [ Badge, setBadge ] = useState(true);
  const [itemSelected, setItemSelected] = useState<Recipe| null>(null);

  const inboxItems = getInboxcars();
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
          <IonTitle>teste</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
         {itemSelected?.name}     
       {
       (itemSelected?.id==2 || itemSelected?.id==4) && 
        <p>{itemSelected.preco}</p>
       }
       <br /><br />
       <h1 >proximos carros</h1> <br /><br />
          <Swiper>
          <SwiperSlide><img src="https://cdn.discordapp.com/attachments/990703697820545094/1184176710409789490/pontiac_2.png?ex=658b0580&is=65789080&hm=153637afe4f59ddc0e094d54066949fc3d38f07b69a0d331b22367742d1148b0&" alt="erro" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn.discordapp.com/attachments/990703697820545094/1184176709780656128/pontiac_1.png?ex=658b0580&is=65789080&hm=9059e6c49341ebfb093cbca207f024ad108ce6c511391bf88d3b5e8a2dff800c&" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn.discordapp.com/attachments/990703697820545094/1184176709185052793/pontiac.png?ex=658b0580&is=65789080&hm=b46b9f258688a3d96b815077e7060800110cbce0f964d206e7ab836e598573bf&" alt="" /></SwiperSlide>
          </Swiper>
              <br /><br /><br /><br />
        <h1>premios ganhos</h1> 
        <IonCard>
      <img alt="Silhouette of mountains" src="https://www.pngall.com/wp-content/uploads/5/Gold-Trophy-PNG-Image.png" />
      <IonCardHeader>
        <IonCardTitle>Carro do Ano na Europa</IonCardTitle>
      </IonCardHeader>
    </IonCard>
    <IonCard>
      <img alt="Silhouette of mountains" src="https://i.pinimg.com/originals/4f/94/46/4f94467fd40da7cc76e2a5afe9467034.png" />
      <IonCardHeader>
        <IonCardTitle>Carro do Ano Mundial</IonCardTitle>
      </IonCardHeader>
    </IonCard>
    <IonCard>
      <img alt="Silhouette of mountains" src="https://ae01.alicdn.com/kf/H825dfe7dc5c74cbb94f58342ac3292c4E.jpg_640x640Q90.jpg_.webp" />
      <IonCardHeader>
        <IonCardTitle>Carro Verde do Ano</IonCardTitle>
      </IonCardHeader>
    </IonCard>
    <IonCard>
      <img alt="Silhouette of mountains" src="https://p.turbosquid.com/ts-thumb/8O/WzDmNM/1C/f12020formula1grandprixtrophy3dmodel001/jpg/1671656565/600x600/fit_q87/33997264a3a6adb114cd26c05b035cc240c12d68/f12020formula1grandprixtrophy3dmodel001.jpg" />
      <IonCardHeader>
        <IonCardTitle>Os 10 Melhores Motores e Sistemas de Propulsão da Wards</IonCardTitle>
      </IonCardHeader>
    </IonCard>

     <h2>loja +prox</h2>
   
      </IonContent>
    </IonPage>
  );
};

export default Page;
