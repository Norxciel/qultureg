import { ObjectId } from "bson"

export const preferenceSchema = {
    name:"Preference",
    embedded:true,
    properties:{
        category:"string",
        name:"string"
    }
}

export function getAllPref(realm){
    return realm.objects("Preference")
}

export function setDummPrefs(realm){
    if(getAllPref(realm).length<1){
        realm.write(()=>{
            const prefs = [
                {_id:ObjectId, category:"Musique", name:"electro"},
                {_id:ObjectId, category:"Litterature", name:"fantastique"},
            ]

            prefs.map(item=>{
                realm.create("Preference", item)
            })
        })
    }
}