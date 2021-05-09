const Nomination = (state = [], action: any) => {
    switch(action.type) {
        case 'setNomination':
            return action.payload;
        default:
            return state;
    }
}

export default Nomination