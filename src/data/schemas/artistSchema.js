import { ObjectID } from "bson";

export const artistSchema = {
	name: "Artist",
	properties: {
		_id: "objectId",
		groupname: "string",
		bio: "string",
		email: "string",
		password: "string",
		type: { type: "list", objectType: "Preference" },
	},
	primary_key: "_id",
};

// =================================== CRUD ===================================

// CREATE
export function createArtist(realm, artist, verbose = false) {
	realm.write(() => {
		realm.create("Artist", artist);
	});
	verbose ? console.log("artistSchema::createArtist>Artiste crée !") : null;
}

// READ (ALL)
export function getAllArtists(realm, verbose = false) {
	verbose
		? console.log(
				"artistSchema::getAllArtists>Récupération de tous les utilisateurs."
		  )
		: null;
	return realm.objects("Artist");
}

// READ (ID)
export function getArtistByID(realm, artistID, verbose = false) {
	verbose
		? console.log(
				"artistSchema::getArtistByID>Récupération d'un utilisateurs par ID."
		  )
		: null;
	return realm.objectForPrimaryKey("Artist", artistID);
}

// UPDATE (ID)
export function updateArtistByID(realm, artistID, newArtist){
    const artist = getArtistByID(realm, artistID)
    realm.write(()=>{
        artist = newArtist
    })
    console.log("artistSchema::updateArtistByID>Mise à jour d'un artiste");
}

// DELETE (ID)
export function deleteArtistByID(realm, artistID){
    const artist = getArtistByID(realm, artistID)
    realm.write(()=>{
        realm.delete(artist)
    })
    artist = null
    console.log("artistSchema::deleteArtistByID>Suppression d'un artiste");
}