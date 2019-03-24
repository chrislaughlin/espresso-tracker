import Grind from './grind';
import Tamp from './tamp';
import Pressure from './pressure';


const NEW_ESPRESSO = {
    grind: {
        grindLevel: 5,
        grindWeight: 18
    },
    tamp: Tamp.LEVEL,
    pressure: Pressure.MEDIUM,
    shotTime: 0,
    weightOut: 40,
    notes: []
};

export default interface Espresso {
    grind: Grind,
    tamp: Tamp,
    pressure: Pressure,
    shotTime: number,
    weightOut: number
    notes: Array<string>
}

export {
    NEW_ESPRESSO
}
