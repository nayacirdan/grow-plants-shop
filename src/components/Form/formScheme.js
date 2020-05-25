import * as yup from "yup";

const only_letters_regex = /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ]+$/;
const formScheme = yup.object().shape({
    firstName: yup.string()
        .min(2, 'Min name length is 2 symbols')
        .matches(only_letters_regex, 'Name can contain only letters')
        .required('This field is required'),

    lastName: yup.string()
        .min(2, 'Min name length is 2 symbols')
        .matches(only_letters_regex, 'Last name can contain only letters')
        .required('This field is required'),

    address: yup.string()
        .required('This field is required'),

    mobileNumber: yup.number()
        .min(6)
        .required('Mobile is required')
})

export default formScheme;