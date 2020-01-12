export default {
    state: {
        services: []
    },
    mutattions: {
        setServices(state, services) {
            state.services = services
        }

    },
    getters: {
        serviceList(state) {
            return state.services;
        }
    },

}