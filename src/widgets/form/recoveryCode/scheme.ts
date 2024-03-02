import * as Yup from 'yup';

export const CodeSchema = Yup.object().shape({
  code: Yup.string().length(6, 'Неверный код').required(),
});
