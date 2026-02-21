import axios from 'axios'
import { create } from 'zustand'
import useLoadingStore from './LoadingStore'

const useUserStore = create((set) => ({
    /*** STATES ***/
    currentUser: undefined,
    loggedIn: false,
    loginMessage: undefined,

    /*** FUNCTIONS ***/
    getCurrentUser: () => {

    },

    loginUser: (requestObj) => {
        try {
            useLoadingStore.getState().setLoadingTrue()

            setTimeout(async () => {
                let res = await axios.post(`/loginUser`, requestObj)

                set(() => ({ loginMessage: res.data.message }))
                if (res.data.code === 1) {
                    set(() => ({ loggedIn: true }))
                } else {
                    set(() => ({ loggedIn: false }))
                }
                useLoadingStore.getState().setLoadingFalse()

            }, 1000);
        } catch (error) {
            useLoadingStore.getState().setLoadingFalse()
        } finally {
            // useLoadingStore.getState().setLoadingFalse()
        }
    },

    createNewUser: async () => {
        try {
            let requestObj = {
                firstName: "Ryan",
                lastName: "Teranishi",
                username: "The Shotei Ohani",
                password: 'password',
                email: 'randomEmail@email.com'
            }
            let res = await axios.post(`/userInfo`, requestObj)
        } catch (error) {

        }
    },

    updateUser: () => {

    },
}))

export default useUserStore