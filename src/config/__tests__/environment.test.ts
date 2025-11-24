import { getEnvironment, getBackendApiUrl } from '../environment';

describe('Environment Configuration', () => {
  const originalEnv = process.env.NEXT_PUBLIC_ENVIRONMENT;

  afterEach(() => {
    process.env.NEXT_PUBLIC_ENVIRONMENT = originalEnv;
  });

  describe('getEnvironment', () => {
    it('should return DEV when environment is not set', () => {
      delete process.env.NEXT_PUBLIC_ENVIRONMENT;
      expect(getEnvironment()).toBe('DEV');
    });

    it('should return DEV when environment is set to dev', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'dev';
      expect(getEnvironment()).toBe('DEV');
    });

    it('should return PROD when environment is set to prod', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'prod';
      expect(getEnvironment()).toBe('PROD');
    });

    it('should return PROD when environment is set to PROD', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'PROD';
      expect(getEnvironment()).toBe('PROD');
    });
  });

  describe('getBackendApiUrl', () => {
    it('should return DEV URL when environment is DEV', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'DEV';
      const url = getBackendApiUrl();
      expect(url).toBe('https://localhost:7170/api');
    });

    it('should return PROD URL when environment is PROD', () => {
      process.env.NEXT_PUBLIC_ENVIRONMENT = 'PROD';
      const url = getBackendApiUrl();
      expect(url).toBe('https://backend.softtek.com.br/api');
    });
  });
});
