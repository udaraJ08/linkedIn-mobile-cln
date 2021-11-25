import { ABOUT_LISTEN, DESIGNATION_LISTEN, PROFILE_IMAGE_LISTEN } from "./const";

const initialState = {
    image: "",

    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobileNo: "",
    aboutMe: "",

    designation: "",
    education: [],
    skills: []
}

const tourReducer = (state = initialState, action) => {

    const { type } = action;

    switch (type) {
        case PROFILE_IMAGE_LISTEN: {
            const { data } = action;

            return {
                ...state,
                image: data
            }
        }
        case ABOUT_LISTEN: {
            const { firstName, lastName, dob, email, mobileNo, aboutMe } = action.data;

            return {
                ...state,
                firstName,
                lastName,
                dob,
                email,
                mobileNo,
                aboutMe
            }
        }
        case DESIGNATION_LISTEN: {
            const { designation, education, skills } = action.data

            return {
                ...state,
                designation,
                education,
                skills
            }
        }
        default: return state;
    }
}

export default tourReducer;