export class Pokemon {
    id: number;
    name: string;
    url: string;

    serialize(y: any): Pokemon {
        Object.assign(this, y);
        return this;
    }
    
}
