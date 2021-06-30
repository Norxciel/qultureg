import Realm from "realm";
import { userSchema as User } from "./schemas/userSchema";
import { preferenceSchema as Pref } from "./schemas/preferenceSchema";

const DATABASE_NAME = "QultureG_DB";

export async function getRealm() {
	const options = {
		path: DATABASE_NAME,
		schema: [User, Pref],
		schemaVersion: 2,
	};

	console.log("getRealm::getRealm>Connexion à la base de données...");

	return Realm.open(options)
		.then((realm) => {
			console.log("getRealm::getRealm>Connexion réussie!");
			return realm;
		})
		.catch((err) => {
			console.error(
				"getRealm::getRealm> Erreur lors de la connexion à la base de données. \n" +
					err
			);
		});
}
