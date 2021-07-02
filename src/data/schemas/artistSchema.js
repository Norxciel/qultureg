import { ObjectId } from "bson";

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

// ======================================== FAKE ENTRIES =============================================

export function addDummyArtist(realm){
	const dummy = {
		_id:ObjectId(),
		groupname:"AC/DC",
		bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas pretium elit sit amet tristique. Praesent posuere urna mi, ut gravida purus consequat et. Donec mattis faucibus magna, a commodo lectus vulputate vel. Sed ac felis commodo, aliquam enim ac, hendrerit augue. Fusce ullamcorper a dolor ornare molestie. Donec sit amet turpis vulputate, fringilla turpis eget, ullamcorper augue. Proin ac diam sed sapien faucibus pretium. Morbi varius efficitur vulputate. Fusce consectetur fringilla justo, vitae tincidunt magna varius vitae. Morbi nec ullamcorper erat"
		+"Etiam id posuere nisl, sit amet ultrices sem. Nullam dapibus sollicitudin nisi, eu iaculis erat faucibus sagittis. Praesent iaculis velit congue tempor tempus. Mauris ut dapibus ex, at lacinia felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquam felis metus. Mauris scelerisque lectus metus, quis suscipit erat elementum ut."
		+"Duis bibendum metus ante, in mollis elit fermentum vel. Sed pulvinar in leo et pulvinar. In hac habitasse platea dictumst. Donec a neque fermentum, semper enim lobortis, ornare justo. Nulla facilisi. Pellentesque ac nibh libero. Nam elit eros, sodales in viverra quis, semper maximus elit. In hac habitasse platea dictumst. Vestibulum sit amet vulputate lacus. Donec et posuere neque. Maecenas sollicitudin malesuada mi, ut fermentum risus cursus vitae."
		+"Nam lacus lectus, volutpat eget ornare sit amet, dictum non nulla. Etiam vel ex at velit pellentesque porta. Aliquam semper libero purus, vitae tempor ex efficitur at. Cras in arcu ac purus consectetur molestie. Ut vulputate nisi turpis, eget hendrerit ex tristique ut. Proin et orci viverra, efficitur metus vel, eleifend tortor. Fusce id nibh non ex eleifend volutpat. Etiam venenatis velit dolor, vel tempor elit suscipit sed. Duis rhoncus vulputate justo, in viverra turpis blandit ac. Vestibulum posuere, elit sed tempor auctor, nulla quam ornare dolor, a aliquet purus risus vel leo. Curabitur quis iaculis mi, eu accumsan mauris."
		+"Maecenas turpis urna, aliquam a consequat at, cursus eget ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sagittis at ligula tincidunt euismod. Integer vehicula varius metus, sed finibus est bibendum sed. Fusce urna justo, laoreet sed eleifend ac, rutrum eu orci. Aliquam vehicula elementum mi, in lobortis dui egestas id. Aliquam pulvinar convallis iaculis. Proin commodo, magna egestas tristique venenatis, metus neque rutrum ex, vel ullamcorper justo velit id ante. Aenean efficitur egestas nunc, eu euismod elit fermentum eleifend. Suspendisse vitae aliquam sapien, sed scelerisque ligula. Nullam sollicitudin ante leo, vel rutrum justo dapibus eget. Suspendisse potenti. In tincidunt vehicula nisi sit amet blandit.",
		email:"acdc.pro@outlook.com",
		password:"pwd",
		type:[{category:"Musique", name="Rock"}]
	}
	realm.write(()=>{
		createArtist(realm, dummy)
	})
}