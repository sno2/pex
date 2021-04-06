export interface PaginatedOpts {
  per_page?: number;
  page?: number;
}

export type PaginatedData<F extends [string, unknown]> = {
  total_results: number;
  page: number;
  per_page: number;
  next_page: string;
} & Record<F[0], F[1][]>;
