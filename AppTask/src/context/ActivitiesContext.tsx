import React from "react";

export type ActivityType = "work" | "hobby" | "rest";

export interface Activity {
  id: string;
  title: string;
  description: string;
  hour: string;
  activityType: ActivityType;
  completed: boolean;
}

export interface ActivitiesContextModel {
  activities: Activity[];
  addActivity: (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => void;
  completeActivity: (activityId: string) => void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({
  activities: [],
  addActivity: () => {},
  completeActivity: () => {},
});

export default ActivitiesContext;
