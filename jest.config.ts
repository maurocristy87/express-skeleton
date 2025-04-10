import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "^@controller/(.*)$": "<rootDir>/src/controller/$1",
        "^@entity/(.*)$": "<rootDir>/src/entity/$1",
        "^@exception/(.*)$": "<rootDir>/src/exception/$1",
        "^@repository/(.*)$": "<rootDir>/src/repository/$1",
        "^@service/(.*)$": "<rootDir>/src/service/$1",
    },
    moduleFileExtensions: ["ts", "js"],
};
export default config;
