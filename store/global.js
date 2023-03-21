export const state = () => ({
    path : '/'
    
 })

export const mutations = {
    set_path(state, data) {
    state.path = data
    }
}