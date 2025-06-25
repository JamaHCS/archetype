export interface ApiResponse<T> {
  success: boolean;
  errors: unknown;
  message: string;
  data: T
  status: number;
  version: string;
}
