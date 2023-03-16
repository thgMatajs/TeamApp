import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Groups } from "../screens/Groups"
import { Players } from "../screens/Players"
import { NewGroup } from "../screens/NewGroup"

export enum RouteName {
    Groups = "groups",
    Players = "players",
    NewGroup = "newGroup"
}

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name={RouteName.Groups}
                component={Groups}
            />

            <Screen
                name={RouteName.Players}
                component={Players}
            />

            <Screen
                name={RouteName.NewGroup}
                component={NewGroup}
            />

        </Navigator>
    )
}