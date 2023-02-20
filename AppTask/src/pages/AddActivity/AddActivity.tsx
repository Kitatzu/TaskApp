import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonDatetime,
  IonButton,
} from "@ionic/react";
import ActivitiesContext, {
  ActivityType,
} from "../../context/ActivitiesContext";

const AddActivity: React.FC = () => {
  const history = useHistory();

  const titleInput = useRef<HTMLIonInputElement>(null);
  const descriptionInput = useRef<HTMLIonInputElement>(null);
  const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);

  const activitiesContext = useContext(ActivitiesContext);

  const addActivity = () => {
    const title = titleInput.current?.value as string;
    const description = descriptionInput.current?.value as string;
    const activityType = activityTypeInput.current?.value as ActivityType;
    const startDate = new Date(hourInput.current?.value as string);
    const startHour = startDate.getHours() + ":" + startDate.getMinutes();

    if (title && description && activityType && startHour) {
      activitiesContext.addActivity(
        title,
        description,
        startHour,
        activityType
      );
      history.push("/activities");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle> Agregar Actividad </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonSegment ref={activityTypeInput}>
                <IonSegmentButton value="work">
                  <IonLabel> Trabajo </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="hobby">
                  <IonLabel> Hobby </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="rest">
                  <IonLabel> Descanso </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Nombre Actividad </IonLabel>
                <IonInput type="text" ref={titleInput}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Descripción </IonLabel>
                <IonInput type="text" ref={descriptionInput}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> </IonLabel>
                <IonDatetime
                  ref={hourInput}
                  display-format="h:mm A"
                  picker-format="h:mm A"
                  value={new Date().toString()}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton onClick={addActivity} expand="block" fill="outline">
                Agregar Actividad
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AddActivity;
