export class AuthenticationAPI {

    constructor(request) {
        this.request = request;
    }

    async apiLogin(email, password) {
        const response = await this.request.post('/api/verifyLogin', {
            form: {
                email,
                password
            }
        });

        return response;
    }
}