import {
    ABOUT_LISTEN,
    DESIGNATION_LISTEN,
    PROFILE_IMAGE_LISTEN,
    USER_REGISTER_LISTEN,
    USER_REGISTER_SUCCESS
} from './const'

export const profileImageListen = (data) => {
    return {
        type: PROFILE_IMAGE_LISTEN,
        data
    }
}

export const aboutListen = (data) => {

    return {
        type: ABOUT_LISTEN,
        data
    }
}

export const designationListen = (data) => {

    return {
        type: DESIGNATION_LISTEN,
        data
    }
}

export const userRegisterListen = (user) => {
    return {
        type: USER_REGISTER_LISTEN,
        user,
    }
}

export const userRegisterSuccess = (data) => {

    return {
        type: USER_REGISTER_SUCCESS
    }
}