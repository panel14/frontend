export default function (instance) {
    return {
        signIn() {
            return instance.post('/signin')
        },
        signUp() {
            return instance.post('/signup')
        }
    }
}