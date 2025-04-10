export class Game {
    id: number;
    name: string;
    description: string;

    constructor(options?: Partial<Game>) {
        Object.assign(this, options);
    }
}
