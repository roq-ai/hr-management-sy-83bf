import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  employee_id: string;
  evaluator_id: string;
  evaluation_date: any;
  score: number;
  comments?: string;
  period: string;
  created_at?: any;
  updated_at?: any;

  employee_performance_evaluation_employee_idToemployee?: EmployeeInterface;
  employee_performance_evaluation_evaluator_idToemployee?: EmployeeInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  evaluator_id?: string;
  comments?: string;
  period?: string;
}
