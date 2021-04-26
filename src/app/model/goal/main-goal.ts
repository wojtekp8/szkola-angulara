import { Goal } from './goal'
import { Priority } from './priority.enum';
import { Subgoal } from './sub-goal'

export class MainGoal extends Goal<Priority> {
    subgoals: Subgoal[];
    achieve(): void {
        // 'Mark as achieve' + 'Mark all subgoals as achieved'
    }
}
