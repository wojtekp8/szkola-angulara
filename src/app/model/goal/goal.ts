import { IGoalable } from './i-goalable'

export abstract class Goal<MyType> implements IGoalable<MyType> {
    name: string;
    deadline: Date;
    priority: MyType;
    protected editName(newName: string): void {
        this.name = newName;
    }
    abstract achieve(): void;
}
