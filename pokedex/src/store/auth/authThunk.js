import { loginWithEmailAndPassword } from "../../config/firebaseConfig"
import { isLoading, setUser  } from "./authSlice"

const user = {
    name: 'Messi',
    lastName: 'Messi',
    password: 'password'
}

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading())

        const loginResponse = await loginWithEmailAndPassword(email, password)
        console.log(loginResponse)
        const { user } = loginResponse
        dispatch(setUser(user))
    }
}