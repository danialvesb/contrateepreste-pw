import Vue from 'vue'

export default {
    state: {
        categories: [],
    },
    mutations: {
        setCategories(state, data) {
            state.categories = data
        },

        addCategory(state, data) {
            state.categories.push(data);
        },

        removeCategory(state, id) {
            const record = state.categories.findIndex(element => element.id == id)
            state.categories.splice(record, 1)
        },

        updateCategory(state, category) {
            const record = state.categories.findIndex(element => element.id == category.id)
            state.categories[record] = category
        }


    },
    getters: {
        categoriesList(state) {
            return state.categories;
        },
        categoriesListSelectedOptions(state) {

            return  state.categories.map( category => {
                return {
                    item: category.id.toString(10),
                    name: category.title
                }
            })
        }
    },
    actions: {
        loadCategories({ commit }) {
            Vue.prototype.$http.get('api/services/categories').then( resp => {
                const data = resp.data
                commit('setCategories', data);
            } ).catch(err => {
                alert(err)
            })
        },
        addCategory({ commit }, category) {
            let categoryJson = JSON.stringify(category);
            console.log(categoryJson)
            Vue.prototype.$http.post('api/services/categories', categoryJson).then( res => {
                const data = res.data

                if(data) {
                    commit('addCategory', categoryJson)
                }
            }).catch(err => {
                alert(err)
            })
        },
        removeCategory({ commit }, id) {
            Vue.prototype.$http.delete(`api/services/categories/${id}`).then(resp => {
                const data = resp.data

                if(data) {
                    commit('removeCategory', id)
                }
            }).catch(err => {
                alert(JSON.stringify(err))
            } )

        },
        updateCategory({ commit }, category) {
            Vue.prototype.$http.put(`api/services/categories/${category.id}`, category).then( resp => {
                const data = resp.data;

                if(data)
                    commit('updateCategory', category)
            }).catch( err => {
                alert(err)
            })
        },

    }
}