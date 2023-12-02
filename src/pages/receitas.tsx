import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonNote, IonLabel, IonBadge, IonModal, IonButton, IonImg, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { getInboxItems } from '../utils/util';
import ReceitasDetailModal from './ReceitasDetailModal';
import './receitas.css';



interface Recipe {
  id: number;
  name: string;
  descrisao: string[];
  dados: string[];
  preco: string;
  image: string;
  loja:string;
}


const Receitas: React.FC = () => {

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
      <IonHeader translucent={ true }>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>carros</IonTitle>
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
                  <h2 >{ item.name }
                  </h2>
                  <h4>descrisao : <br />{  }</h4>
        <table>
          <tr>
            <th>
            <IonImg
                src={item?.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            </th>
            <th>
             dd
            </th>
          </tr>
          <tr> 
          <th>descrisao</th>
          </tr>
          <tr>
            <th> {item.descrisao}</th>
          </tr>
        </table>
               
                </IonLabel>
                { Badge &&
                  <IonBadge slot="end" style={{ fontSize: "0.7rem" }}>
                    {`${item.preco} preço`}
                  </IonBadge>
                }

                
              </IonItem>
            );
            })}
        </IonList>
      </IonContent>

      <ReceitasDetailModal itemSelected={itemSelected} onClose={handleCloseModal} />
    </IonPage>
  );
};

export default Receitas;