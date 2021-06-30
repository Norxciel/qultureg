import Realm from "realm";
import { userSchema as User } from "./schemas/userSchema";
import { preferenceSchema as Pref } from "./schemas/preferenceSchema";

const DATABASE_NAME = "QultureG_DB";

export async function getRealm(verbose=false) {
	const options = {
		path: DATABASE_NAME,
		schema: [User, Pref],
		schemaVersion: 2,
	};

	verbose?console.log("getRealm::getRealm>Connexion à la base de données..."):null;

	return Realm.open(options)
		.then((realm) => {
			verbose?console.log("getRealm::getRealm>Connexion réussie!"):null;
			return realm;
		})
		.catch((err) => {
			console.error(
				"getRealm::getRealm> Erreur lors de la connexion à la base de données. \n" +
					err
			);
		});
}
