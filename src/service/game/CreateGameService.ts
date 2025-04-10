import { inject, singleton } from "tsyringe";
import { GameRepository } from "@repository/GameRepository";
import { Game } from "@entity/Game";

export interface CreateGameDto {
    name: string;
    description: string;
}

@singleton()
export class CreateGameService {
    constructor(@inject(GameRepository) private gameRepository: GameRepository) {}

    public createGame({ name, description }: CreateGameDto): Game {
        const game = new Game({
            name,
            description,
        });

        this.gameRepository.persist(game);

        return game;
    }
}
