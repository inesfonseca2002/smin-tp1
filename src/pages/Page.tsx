import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/util';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

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
       <h1>proximos carros</h1> <br /><br />
          <Swiper>
          <SwiperSlide><img src="https://auto-drive.pt/wp-content/uploads/2021/04/Jaguar-F-Type-R-Dynamic-Black.jpg" alt="erro" />jaguar</SwiperSlide>
          <SwiperSlide><img src="data:image/jpeg;base64,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" alt="" />tesla</SwiperSlide>
          <SwiperSlide><img src="https://www.jornaldosclassicos.com/wp-content/uploads/2023/02/Header_PontiacFirebirdTransAmRamAirIV.jpg" alt="" />pontiac</SwiperSlide>
          </Swiper>
              <br /><br /><br /><br />
        <h1>premios ganhos</h1> 
       <table>
        <tr>
          <td><img src="https://www.pngall.com/wp-content/uploads/5/Gold-Trophy-PNG-Image.png" alt="erro" />Carro do Ano na Europa</td>
          <td><img src="https://i.pinimg.com/originals/4f/94/46/4f94467fd40da7cc76e2a5afe9467034.png" alt="erro" />Carro do Ano Mundial</td>
        </tr>
        <tr>
          <td><img src="https://ae01.alicdn.com/kf/H825dfe7dc5c74cbb94f58342ac3292c4E.jpg_640x640Q90.jpg_.webp" alt="erro" />Carro Verde do Ano</td>
          <td><img src="https://p.turbosquid.com/ts-thumb/8O/WzDmNM/1C/f12020formula1grandprixtrophy3dmodel001/jpg/1671656565/600x600/fit_q87/33997264a3a6adb114cd26c05b035cc240c12d68/f12020formula1grandprixtrophy3dmodel001.jpg" alt="erro" />Os 10 Melhores Motores e Sistemas de Propulsão da Wards</td>
          </tr>
       </table>

     <h2>loja +prox</h2>
    
      </IonContent>
    </IonPage>
  );
};

export default Page;
