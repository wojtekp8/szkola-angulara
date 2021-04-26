import { Goal } from './goal';
import { Order } from './order.enum';

export class Subgoal extends Goal<Order> {
    achieve(): void {
        // 'Mark as achieve'
    }
}
