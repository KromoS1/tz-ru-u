import * as Yup from 'yup';

export const PhoneSchema = Yup.object().shape({
  phone: Yup.string()
    .min(7, 'Несуществующий номер телефона')
    .required()
    .matches(/^[0-9]+$/, 'Несуществующий номер телефона'),
});
