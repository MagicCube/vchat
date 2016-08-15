export default {
    user: null,
    loggedIn()
    {
        return this.user !== null;
    },
    async login(name, password) {
        this.user = {
            name
        };
        return true;
    }
};
