import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  days_taken: yup.number().integer().required(),
  employee_id: yup.string().nullable().required(),
});
