import API from "./webapi.services"
import { Base_URL } from "./urls"

export const register = async (param) => {
    try {
        return await API.post(`https://silly-mangos-wash.loca.lt/users`, param).then(
            Response => {
                return Response.data;
            }, error => {
                console.log(error)
                return null
            }
        )
    } catch (error) {
        console.log(error)
        return null;
    }
}

function getUserAccount() {
    return API.get('https://silly-mangos-wash.loca.lt/');
}
console.log(getUserAccount())