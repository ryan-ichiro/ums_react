import axios from 'axios'
import { create } from 'zustand' 

const useUserStore = create((set) => ({
    /*** STATES ***/
    currentUser: undefined,

    /*** FUNCTIONS ***/
    getCurrentUser: () => {

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