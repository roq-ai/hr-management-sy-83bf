import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  score: yup.number().integer().required(),
  comments: yup.string().nullable(),
  period: yup.string().required(),
  employee_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
