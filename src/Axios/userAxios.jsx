import axios from 'axios'
import { userAPI } from '../Constants/Api'

const createUserInstance = () => {
    const userInstance = axios.create({
        baseURL: userAPI
    })

    return userInstance
}

export default createUserInstance