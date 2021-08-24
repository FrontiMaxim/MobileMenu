const reducerActive = (state = false, action) => {
    switch (action.type) {
        case 'СHANGE':
            return !state;
        default:
            return state;
    }
};

export default reducerActive;