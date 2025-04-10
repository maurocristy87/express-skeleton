import { singleton } from "tsyringe";
import { Game } from "@entity/Game";

@singleton()
export class GameRepository {
    private games: Game[] = [];

    public persist(game: Game): void {
        game.id = this.games.length + 1;
        this.games.push(game);
    }

    public findAll(): Game[] {
        return this.games;
    }

    public find(id: number): Game | undefined {
        return this.games.find((game) => game.id === id);
    }

    public remove(game: Game): void {
        const index = this.games.indexOf(game);
        if (index > -1) this.games.splice(index, 1);
    }
}
