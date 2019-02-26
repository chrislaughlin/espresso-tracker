import Grind from './grind';
import Tamp from './tamp';
import Pressure from './pressure';

export default interface Espresso {
    grind: Grind,
    tamp: Tamp,
    flushed: boolean,
    pressure: Pressure,
    notes: string
}


