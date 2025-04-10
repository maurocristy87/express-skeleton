import { CreateUserService } from "@service/user/CreateUserService";
import { UserRepository } from "@repository/UserRepository";
import { User } from "@entity/User";

jest.mock("@repository/UserRepository", () => ({
    UserRepository: jest.fn().mockImplementation(() => ({
        findOneById: (id: number) => new User({ id, name: "test", email: "test@test.com" }),
        persist: (user: User) => {
            user.id = 1;
        },
    })),
}));

describe("Create User Service", () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);

    it("Success", () => {
        const spy = jest.spyOn(repository, "persist");
        const example = service.createUser({ name: "test", email: "test@test.com" });

        expect(spy).toHaveBeenCalledTimes(1);
        expect(example.id).toEqual(1);
        expect(example.name).toEqual("test");
        expect(example.email).toEqual("test@test.com");
    });
});
