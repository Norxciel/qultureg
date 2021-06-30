import { DefaultTheme } from "react-native-paper"

export const themes = {
    dark:{
        ...DefaultTheme,
        colors:{
            ...DefaultTheme.colors,
            // Ajouter les couleurs du thème principal
            primary:"#1D2942"
        }
    }
}