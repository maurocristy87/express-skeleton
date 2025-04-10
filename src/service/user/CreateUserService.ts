import { inject, singleton } from "tsyringe";
import { User } from "@entity//User";
import { UserRepository } from "@repository/UserRepository";
import { ServiceException } from "@exception/ServiceException";

export interface CreateUserDto {
    name: string;
    email: string;
}

@singleton()
export class CreateUserService {
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    public createUser({ name, email }: CreateUserDto): User {
        if (!name || !email) throw new ServiceException("Name and email are required");

        const user = new User({
            name,
            email,
        });

        this.userRepository.persist(user);

        return user;
    }
}
