export const state = () => ({
    url: 'http://localhost:1337',
    local: 'http://localhost:3000',
    contactForm: true,
})

export const mutations = {
    enable(state, val) {
        state.contactForm = val
    }   
}