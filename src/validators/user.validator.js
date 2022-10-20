import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ\d]{3,20}$/).required().messages({
        'string.pattern.base': 'No special symbols allowed. Length 3-20'
    }),
    password: Joi.string().min(8).max(20).required()
});

export {
    userValidator
};
