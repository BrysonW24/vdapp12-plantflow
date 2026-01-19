import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  AssetDetails: {
    id: string;
    name: string;
    status: string;
    hireEnds?: string;
    location?: string;
  };
  Notifications: undefined;
  ComponentShowcase: undefined;
  Debug: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Assets: undefined;
  Contracts: undefined;
  Calendar: undefined;
  Returns: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
