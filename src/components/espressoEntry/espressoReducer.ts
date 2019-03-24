import Espresso, { NEW_ESPRESSO } from '../../types/espresso';

const initialState = NEW_ESPRESSO;

const ACTIONS = {
    GRIND: 'GRIND',
    TAMP: 'TAMP',
    PRESSURE: 'PRESSURE',
    SHOT_TIME: 'SHOT_TIME',
    WEIGHT_OUT: 'WEIGHT_OUT',
    NOTES: 'NOTES',
};

interface ReducerAction {
    type: string,
    payload: any
}


const reducer = (state:Espresso = initialState, action:ReducerAction) => {
    switch (action.type) {
        case ACTIONS.GRIND:
            return {
                ...state,
                grind: action.payload
            };
        case ACTIONS.TAMP:
            return {
                ...state,
                tamp: action.payload
            };
        case ACTIONS.PRESSURE:
            return {
                ...state,
                pressure: action.payload
            };
        case ACTIONS.SHOT_TIME:
            return {
                ...state,
                shotTime: action.payload
            };
        case ACTIONS.WEIGHT_OUT:
            return {
                ...state,
                weightOut: action.payload
            };
        case ACTIONS.NOTES:
            return {
                ...state,
                notes: action.payload
            };
        default:
            return state;
    }
};

export { ACTIONS };
export default reducer;


