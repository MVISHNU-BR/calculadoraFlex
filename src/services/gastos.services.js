import API from "./webapi.services"
import { Base_URL } from "./urls"

// GET 
export const getGastos = async () => {
    try {
        return await API.get(`${Base_URL}/660/gastos`).then(
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
//POST
export const insertGasto = async (param) => {
    try {
        return await API.post(`${Base_URL}/660/gastos`, param).then(
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
//UPdate
export const updateGasto = async (param) => {
    try {
        return await API.put(`${Base_URL}/gastos/660/${param.id}`, param).then(
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
//delete
export const deleteGasto = async (id) => {
    try {
        return await API.delete(`${Base_URL}/gastos/660/${id}`).then(
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