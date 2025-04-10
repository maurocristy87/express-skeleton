import { Request, Response } from "express";
import { singleton, inject } from "tsyringe";
import { CreateUserDto, CreateUserService } from "@service/user/CreateUserService";
import { UserRepository } from "@repository/UserRepository";
import { NotFoundException } from "@exception/NotFoundException";

@singleton()
export class UserController {
    constructor(
        @inject(CreateUserService) private service: CreateUserService,
        @inject(UserRepository) private repository: UserRepository,
    ) {}

    public createUser(req: Request, res: Response) {
        const dto: CreateUserDto = req.body;
        const user = this.service.createUser(dto);
        res.status(201).send(user);
    }

    public getUsers(req: Request, res: Response) {
        const users = this.repository.findAll();
        res.status(200).send(users);
    }

    public getUserById(req: Request, res: Response) {
        const user = this.repository.find(parseInt(req.params.id));
        if (!user) throw new NotFoundException("User not foud");
        res.status(200).send(user);
    }
}
