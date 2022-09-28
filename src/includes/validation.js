import { alpha_spaces as alphaSpaces, confirmed, email, max, max_value as maxVal, min, min_value as minVal, not_one_of as excluded, required } from '@vee-validate/rules';
import { configure, defineRule, ErrorMessage, Field as VeeField, Form as VeeForm, validate } from "vee-validate";


export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('tos', required)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('email', email)
        defineRule('min_value', minVal)
        defineRule('max_value', maxVal)
        defineRule('passwords_mismatch', confirmed)
        defineRule('excluded', excluded)
        defineRule('country_excluded', excluded)
        // 不接受空格
        defineRule('alpha_spaces', alphaSpaces)

        configure({
            generateMessage:(ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required.`,
                    min: `The field ${ctx.field} is too short.`,
                    max: `The field ${ctx.field} is too long.`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and symbol.`,
                    email: `The field ${ctx.field} must be a valid email.`,
                    min_value: `The field ${ctx.field} is too low.`,
                    max_value: `The field ${ctx.field} is too high`,
                    excluded:`you are not allowed to use this value for the field ${ctx.field}.`,
                    country_excluded: `Due to restrictions, we don't accept users from this location.`,
                    passwords_mismatch:"The passwords don't match.",
                    tos:'You must accept the Terms of Service.'
                }
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${context.field} is invalid.`

                return message
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        })
    }
}