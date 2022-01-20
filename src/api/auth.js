export default function (instance) {
    return {
        signIn(payload) {
            return instance.post('/auth', payload)
        },
        signUp(payload) {
            return instance.post('/register', payload)
        }
    }
}