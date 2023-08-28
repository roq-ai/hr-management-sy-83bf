import { PayrollInterface } from 'interfaces/payroll';
import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  hire_date: any;
  job_title: string;
  department: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  performance_evaluation_performance_evaluation_employee_idToemployee?: PerformanceEvaluationInterface[];
  performance_evaluation_performance_evaluation_evaluator_idToemployee?: PerformanceEvaluationInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    payroll?: number;
    performance_evaluation_performance_evaluation_employee_idToemployee?: number;
    performance_evaluation_performance_evaluation_evaluator_idToemployee?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  job_title?: string;
  department?: string;
}
