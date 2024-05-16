import API from "./webapi.services"
import { Base_URL } from "./urls"

export const register = async (param) => {
    try {
        return await API.post(`${Base_URL}/register`, param).then(
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

export const login = async (param) => {
    try {
        return await API.post(`${Base_URL}/login`, param).then(
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