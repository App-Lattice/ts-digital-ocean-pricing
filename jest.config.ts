import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: false,
  transformIgnorePatterns: [],
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
};

export default config;
