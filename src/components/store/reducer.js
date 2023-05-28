
export const initialState = {
    data: [],
    report:null,
    type:0
};
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.value
            };
        case 'SET_REPORT':
            return {
                ...state,
                report: action.value
            };
            case 'SET_TYPE':
            return {
                ...state,
                type: action.value
            };
        default:
            return state;
    }
};

export default reducer;