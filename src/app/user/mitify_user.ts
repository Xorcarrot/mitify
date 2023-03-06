export class MitifyUser {
    mitify_user = {
        'email': '',
        'password': '',
    };

    constructor(email: string, password: string) {
        this.mitify_user.email = email;
        this.mitify_user.password = password;
    }
}