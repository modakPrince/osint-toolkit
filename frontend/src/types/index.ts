export interface Module {
  id: string;
  title: string;
  description: string;
  path: string;
}

export interface UserInput {
  query: string;
  options?: Record<string, any>;
}

export interface Result {
  success: boolean;
  data: any;
  error?: string;
}