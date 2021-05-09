const changeState = (state = false, action: any) => {
    switch(action.type) {
        case 'setChangeBool':
            return !state;
        default:
            return state;
    }
}

export default changeState