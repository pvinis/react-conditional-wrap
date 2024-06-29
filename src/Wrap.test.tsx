import { render } from "@testing-library/react"
import { Wrap } from "./Wrap"

describe("Wrap component", () => {
	it("renders children when condition is true", () => {
		const { getByTestId } = render(
			<Wrap if={true}>
				<div data-testid="child">Hello World</div>
			</Wrap>,
		)

		const childElement = getByTestId("child")
		expect(childElement).toBeInTheDocument()
	})

	xit("renders WrapContent when condition is false and only one Wrap.Content is present", () => {
		const { getByText } = render(
			<Wrap if={false}>
				<Wrap.Content>
					<div>Hello Content</div>
				</Wrap.Content>
			</Wrap>,
		)

		const contentElement = getByText("Hello Content")
		expect(contentElement).toBeInTheDocument()
	})

	xit("throws error when no Wrap.Content is present and condition is false", () => {
		// Suppressing console.error to avoid noise in test output
		const originalError = console.error
		console.error = jest.fn()

		expect(() => {
			render(
				<Wrap if={false}>
					<div>Incorrect Content</div>
				</Wrap>,
			)
		}).toThrow("Wrap.Content is required")

		console.error = originalError
	})

	xit("throws error when more than one Wrap.Content is present and condition is false", () => {
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
