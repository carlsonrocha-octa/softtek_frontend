/**
 * Environment configuration
 * Manages environment variables and provides configuration values
 */
export type Environment = 'DEV' | 'PROD';

/**
 * Gets the current environment from environment variables
 * Defaults to 'DEV' if not specified
 */
export const getEnvironment = (): Environment => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT?.toUpperCase();
  return env === 'PROD' ? 'PROD' : 'DEV';
};

/**
 * Backend API base URLs for each environment
 */
const BACKEND_URLS: Record<Environment, string> = {
  DEV: 'https://localhost:7170/api',
  PROD: 'https://backend.softtek.com.br/api',
};

/**
 * Gets the backend API base URL based on the current environment
 * @returns The backend API base URL
 */
export const getBackendApiUrl = (): string => {
  const environment = getEnvironment();
  return BACKEND_URLS[environment];
};

/**
 * Configuration object with all environment-dependent values
 */
export const config = {
  environment: getEnvironment(),
  apiBaseUrl: getBackendApiUrl(),
  isDevelopment: getEnvironment() === 'DEV',
  isProduction: getEnvironment() === 'PROD',
};

