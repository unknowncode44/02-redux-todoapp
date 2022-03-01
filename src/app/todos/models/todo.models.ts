export class Todo {
    public id: number;
    public text: string;
    public complete: boolean;

    constructor ( text: string) {

        this.text = text;

        this.id = Math.random();

        this.complete = false;

    }

    
}