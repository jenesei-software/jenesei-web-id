import { authApi } from "../auth";

export interface LoginRequest {
  token: string;
}

export interface LoginResponse {
  refreshToken: string;
  token: string;
  refreshDurationMs: number;
  tokenDurationMs: number;
}

export type AuthEndpoints = typeof authApi.endpoints;
