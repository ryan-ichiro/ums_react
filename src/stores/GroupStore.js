import { create } from "zustand";
import useLoadingStore from "./LoadingStore";
import axios from "axios";

const useGroupStore = create((set, get) => ({
    // === STATES ==================
    currentGroup: undefined,
    groups: undefined, // [{}]
    // === SETTERS ==================

    // === GETTERS ==================
    getCurrentGroup: () => { return get().currentGroup },
    // === FUNCTIONS ==================
    loadGroups: async () => {
        try {
            useLoadingStore.getState().setLoadingTrue()
            
            let res = await axios.get(`/group`)

            set(() => ({ groups: res.data }))
        } catch (error) {

        } finally {
            useLoadingStore.getState().setLoadingFalse()
        }
    },
    createGroup: async (requestObj) => {
        try {
            useLoadingStore.getState().setLoadingTrue()

            let res = await axios.put(`/group`, requestObj)
        } catch (error) {

        } finally {
            useLoadingStore.getState().setLoadingFalse()
        }
    }
}))

export default useGroupStore