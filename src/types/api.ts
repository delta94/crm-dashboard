export interface ApiResponse {
  json?: any;
  error?: any;
}

export type GetItemsRequest = (offset: number, limit: number) => Promise<ApiResponse>;
