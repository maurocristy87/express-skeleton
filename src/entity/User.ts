export class User {
    id: number;
    name: string;
    email: string;

    constructor(options?: Partial<User>) {
        Object.assign(this, options);
    }
}
