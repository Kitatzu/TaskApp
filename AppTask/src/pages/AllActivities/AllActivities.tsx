import React, { useContext } from "react";
import style from "../AllActivities/AllActivities.module.css";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonButton,
} from "@ionic/react";
import ActivitiesContext from "../../context/ActivitiesContext";

const AllActivities: React.FC = () => {
  const activitiesContext = useContext(ActivitiesContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle> Todas las actividades </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {activitiesContext.activities.map((activity) => (
            <IonRow key={activity.id}>
              <IonCol className="ion-text-center">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle> {activity.hour} </IonCardTitle>
                    <IonCardSubtitle> {activity.title} </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p> {activity.description} </p>
                    <IonItem lines="none">
                      <IonButton className={style.FullWidth} fill="clear">
                        Completar Actividad
                      </IonButton>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
