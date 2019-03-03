import Grind from './grind';
import Tamp from './tamp';
import Pressure from './pressure';


const NEW_ESPRESSO = {
    grind: {
        grindSetting: 0,
        grindWeight: 0
    },
    tamp: Tamp.LEVEL,
    flushed: true,
    pressure: Pressure.MEDIUM,
    notes: ''
};

export default interface Espresso {
    grind: Grind,
    tamp: Tamp,
    flushed: boolean,
    pressure: Pressure,
    notes: string
}

export {
    NEW_ESPRESSO
}
