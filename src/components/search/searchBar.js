import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<Searchbar
			placeholder="Recherche..."
			onChangeText={onChangeSearch}
			value={searchQuery}
			style={{
				width: "90%",
			}}
		/>
	);
};

export default SearchBar;
