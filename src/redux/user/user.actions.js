import { UserActionTypes } from './user.types'

export const setCurrentUser = (user) => {
    //vraca action objekat
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}