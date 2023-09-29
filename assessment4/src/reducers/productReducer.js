
const productReducer = (state, action ) => {
    switch(action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return action.payload;
        default:
            return state;
    }
}