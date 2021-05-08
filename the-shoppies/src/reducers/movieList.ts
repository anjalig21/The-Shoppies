const movieList = (state = [], action: any) => {
    switch(action.type) {
        case 'setList':
            return action.payload;
        default:
            return state;
    }
}

export default movieList