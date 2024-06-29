export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./jest.setup.ts"],
	testMatch: ["**/*.tests.tsx"],
}
