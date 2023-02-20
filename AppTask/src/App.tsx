import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { apps, addCircle } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";
import { ActivitiesContextProvider } from "./context/ActivitiesContextProvider";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="AppTask">
        <IonHeader>
          <IonToolbar>
            <IonTitle> Menu de Inicio </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon color="medium" slot="start" icon={apps} />
                <IonLabel> Todas las Actividades </IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem routerLink="/add" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={addCircle} />
                <IonLabel> Agregar Actividad </IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivitiesContextProvider>
        <IonRouterOutlet id="AppTask">
          <Route path="/activities" component={AllActivities} exact />
          <Route path="/add" component={AddActivity} exact />
          <Redirect to="/activities" />
        </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
