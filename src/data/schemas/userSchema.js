import { ObjectID } from "bson";

export const userSchema = {
	name: "User",
	properties: {
		_id: "objectId",
		firstname: "string",
		lastname: "string",
		pseudo: "string",
		email: "string",
		password: "string",
		preferences: { type: "list", objectType: "Preference" },
	},
	primary_key: "_id",
};

export function getAllUsers(realm, verbose = false) {
	verbose
		? console.log(
				"userSchema::getAllUsers>Récupération de tous les utilisateurs..."
		  )
		: null;
	return realm.objects("User");
}

export function getUserByID(realm, user_id) {
	return realm.objectForPrimaryKey("User", user_id);
}

export function getUserByPseudo(realm, pseudo) {
	const users = getAllUsers(realm);
	return users.filtered(`pseudo =='${pseudo}'`);
}

export function getUserByMailPwd(realm, mail, pwd) {
	const users = getAllUsers(realm);
	return users.filtered(`email =='${mail}' && password =='${pwd}'`);
}

export function createUser(realm, user, verbose=false) {
	realm.write(() => {
		realm.create("User", user);
	});
	verbose?console.log("userSchema::createUser> Utilisateur crée ! "):null;
}

export function setDummUser(realm) {
	if (getAllUsers(realm).length < 1) {
		const dummy = {
            _id: ObjectID(),
            firstname: "Benjamin",
            lastname: "RAULT",
            pseudo: "norxciel",
            email: "b_rault@outlook.fr",
            password: "password",
            preferences: [
                { category: "Musique", name: "electro" },
                { category: "Litterature", name: "fantastique" },
            ],
        };
        createUser(realm, dummy)
        console.log("userSchema::setDummUser> user set up!");
	}
}

export function resetUsers(realm){
    realm.write(()=>{
        realm.delete(realm.objects('User'))
    })
}