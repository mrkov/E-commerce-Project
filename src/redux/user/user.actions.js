export const setCurrentUser = (user) => {
    //vraca action objekat
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}