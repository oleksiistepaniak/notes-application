const CONSTANTS = {
    MIN_TITLE_LENGTH: 1,
    MAX_TITLE_LENGTH: 20,
    MIN_DESCRIPTION_LENGTH: 5,
    MAX_DESCRIPTION_LENGTH: 255,
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 20,
    MIN_USER_AGE_VALUE: 6,
    MAX_USER_AGE_VALUE: 130,
    EMAIL_REGEXP: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_REGEXP: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
}

module.exports = CONSTANTS;