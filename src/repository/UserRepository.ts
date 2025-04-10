import { singleton } from "tsyringe";
import { User } from "@entity/User";

@singleton()
export class UserRepository {
    private users: User[] = [];

    public persist(user: User): void {
        user.id = this.users.length + 1;
        this.users.push(user);
    }

    public findAll(): User[] {
        return this.users;
    }

    public find(id: number): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    public remove(user: User): void {
        const index = this.users.indexOf(user);
        if (index > -1) this.users.splice(index, 1);
    }
}
