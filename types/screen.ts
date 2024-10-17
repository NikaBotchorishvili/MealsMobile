import { NavigationProp } from "@react-navigation/native";

export type ScreenProps<T = {}> = T & { navigator: NavigationProp<any> };
