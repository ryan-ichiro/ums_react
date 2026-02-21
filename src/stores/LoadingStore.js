import { create } from "zustand";

const useLoadingStore = create((set, get) => ({
    loadingVal: 0,

    setLoadingTrue: () => {
        set((state) => ({ loadingVal: state.loadingVal + 1 }))
    },

    setLoadingFalse: () => {
        set((state) => ({ loadingVal: state.loadingVal === 0 ? 0 : state.loadingVal - 1}))
    }
}))

export default useLoadingStore