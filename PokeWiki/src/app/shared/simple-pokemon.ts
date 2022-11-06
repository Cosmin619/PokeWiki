export class SimplePokemon{
    name: string;
    url: string;

    serialize(y: any): SimplePokemon {
        Object.assign(this, y);
        return this;
    }
}