export default {
    state: {
        services: [],
    },
    mutations: {
        setServices(state, data) {
            state.services = data
        }

    },
    getters: {
        serviceList(state) {
            return state.services;
        }
    },

}