const trigger = (state = false, action: any) => {
    switch(action.type) {
        case 'setTrigger':
            return !state;
        default:
            return state;
    }
}

export default trigger