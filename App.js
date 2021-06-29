import React from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { themes } from "./src/components/themes/themes";

import Navigator from "./src/components/navigation/navigator";

export default function App() {
	return (
		<PaperProvider theme={themes.dark}>
			<Navigator />
		</PaperProvider>
	);
}
