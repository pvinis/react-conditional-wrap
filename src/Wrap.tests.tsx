import { render, screen } from "@testing-library/react"
import { Wrap } from "./Wrap"

describe("Wrap component", () => {
	it("renders content with wrappers when condition is true", () => {
		render(
			<Wrap if={true}>
				<div data-testid="wrapper">
					<Wrap.Content>
						<div data-testid="content">Pavlos</div>
					</Wrap.Content>
				</div>
			</Wrap>,
		)

		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
		expect(screen.getByTestId("content")).toBeInTheDocument()
	})

	it("renders content without wrappers when condition is true", () => {
		render(
			<Wrap if={false}>
				<div data-testid="wrapper">
					<Wrap.Content>
						<div data-testid="content">pvinis</div>
					</Wrap.Content>
				</div>
			</Wrap>,
		)

		expect(screen.queryByTestId("wrapper")).not.toBeInTheDocument()
		expect(screen.getByTestId("content")).toBeInTheDocument()
	})

	it("throws error when no Wrap.Content is present", () => {
		// Suppressing console.error to avoid noise in test output
		const originalError = console.error
		console.error = jest.fn()

		expect(() => {
			render(
				<Wrap if={false}>
					<div>Missing Wrap.Content</div>
				</Wrap>,
			)
		}).toThrow("Wrap.Content is required")

		console.error = originalError
	})

	it("throws error when more than one Wrap.Content is present", () => {
		// Suppressing console.error to avoid noise in test output
		const originalError = console.error
		console.error = jest.fn()

		expect(() => {
			render(
				<Wrap if={false}>
					<Wrap.Content>
						<div>Content 1</div>
					</Wrap.Content>
					<Wrap.Content>
						<div>Content 2</div>
					</Wrap.Content>
				</Wrap>,
			)
		}).toThrow("You can't have more than one Wrap.Content")

		console.error = originalError
	})
})
