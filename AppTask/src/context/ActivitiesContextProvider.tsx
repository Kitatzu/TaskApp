import React, { useState, ReactNode } from "react";
import ActivitiesContext, {
  Activity,
  ActivitiesContextModel,
  ActivityType,
} from "./ActivitiesContext";

interface Props {
  children: ReactNode;
}

export function ActivitiesContextProvider({ children }: Props) {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => {
    const newActivity: Activity = {
      id: Math.random().toString(),
      title,
      description,
      hour,
      activityType,
      completed: false,
    };

    setActivities((currentActivities) => {
      return [...currentActivities, newActivity];
    });
  };

  const completeActivity = (activityId: string) => {
    setActivities((currentActivities) => {
      const updatedActivities = [...currentActivities];
      const findIndex = activities.findIndex((ac) => ac.id === activityId);
      const updateActivity = {
        ...updatedActivities[findIndex],
        completed: true,
      };
      updatedActivities[findIndex] = updateActivity;
      return updatedActivities;
    });
  };

  const activitiesContext: ActivitiesContextModel = {
    activities,
    addActivity,
    completeActivity,
  };

  return (
    <ActivitiesContext.Provider value={activitiesContext}>
      {children}
    </ActivitiesContext.Provider>
  );
}
