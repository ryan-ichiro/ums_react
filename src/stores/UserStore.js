import axios from 'axios'
import { create } from 'zustand'
import useLoadingStore from './LoadingStore'

const useUserStore = create((set) => ({
    // === STATES ==================
    currentUser: undefined,
    loggedIn: false,
    loginMessage: undefined,
    registerMessage: undefined,
    registerCode: undefined,

    // === SETTERS ==================

    setRegisterMessage: (message) => { set(() => ({ registerMessage: message })) },
    setRegisterCode: (code) => { set(() => ({ registerCode: code })) },

    // === FUNCTIONS ==================
    getCurrentUser: () => {

    },

    loginUser: (requestObj) => {
        try {
            useLoadingStore.getState().setLoadingTrue()
            let res
            setTimeout(async () => {
                try {
                    res = await axios.post(`/authorization/login`, requestObj)

                    set(() => ({ loginMessage: res.data.message }))
                    if (res.data.code === 1) {
                        set(() => ({ 
                            loggedIn: true,
                            currentUser: res.data.user
                         }))
                    } else {
                        set(() => ({ loggedIn: false }))
                    }
                    useLoadingStore.getState().setLoadingFalse()
                } catch (error) {
                    useLoadingStore.getState().setLoadingFalse()
                    set(() => ({ loginMessage: "Error in logging in. Please try again." }))
                    console.log(error)
                }
            }, 1000);
        } catch (error) {
            useLoadingStore.getState().setLoadingFalse()
        } finally {
            // useLoadingStore.getState().setLoadingFalse()
        }
    },

    createNewUser: async (requestObj, verified = false) => {
        try {
            let res
            useLoadingStore.getState().setLoadingTrue()
            setTimeout(async () => {
                try {
                    requestObj.verified = verified
                    res = await axios.post(`/authorization/register`, requestObj)


                    set(() => ({
                        registerCode: res.data.code,
                        registerMessage: res.data.message
                    }))

                    useLoadingStore.getState().setLoadingFalse()
                } catch (error) {
                    useLoadingStore.getState().setLoadingFalse()
                    set(() => ({
                        registerCode: 3,
                        registerMessage: "An error occured in registering account."
                    }))
                }
            }, 1000);

            return res
        } catch (error) {
            set(() => ({
                registerCode: 3,
                registerMessage: "An error occured in registering account."
            }))
        } finally {

        }
    },

    updateUser: () => {

    },
}))

export default useUserStore