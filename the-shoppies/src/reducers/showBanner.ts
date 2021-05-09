const showBanner = (state = false, action: any) => {
    switch(action.type) {
        case 'setBanner':
            return action.payload;
        default:
            return state;
    }
}

export default showBanner