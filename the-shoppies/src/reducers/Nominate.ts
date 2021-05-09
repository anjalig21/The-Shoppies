const Nomination = (state = JSON.parse(window.localStorage.getItem('nominations') as string) || [], action: any) => {
    switch(action.type) {
        case 'setNomination':
            return action.payload;
        default:
            return state;
    }
}

export default Nomination