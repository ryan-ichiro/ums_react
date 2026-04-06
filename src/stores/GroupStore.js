import { create } from "zustand";
import useLoadingStore from "./LoadingStore";
import axios from "axios";

const useGroupStore = create((set, get) => ({
    // === STATES ==================
    selectedGroup: undefined,
    groups: undefined, // [{}]
    // === SETTERS ==================
    setSelectedGroup: (group, loadGroup = false) => {
        set(() => ({ selectedGroup: group }))
        if (loadGroup) get().loadGroupById(group.id)
    },
    // === GETTERS ==================
    getSelectedGroup: () => { return get().selectedGroup },
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
    loadGroupById: async (id) => {
        try {
            useLoadingStore.getState().setLoadingTrue()

            await axios.get(`/group/${id}`).then((res) => {
                set(() => ({ selectedGroup: res.data }))
                return res.data
            })

        } catch (error) {
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