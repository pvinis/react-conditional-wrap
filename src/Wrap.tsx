import { PropsWithChildren } from "react"
import { getChildrenByTypeDeep } from "react-nanny"

interface WrapProps {
	if: boolean
}

/**
 * The outer component of this library.
 *
 * Everything between this component and Wrap.Content will be rendered only if the `if` value is true.
 */
export function Wrap({
	if: condition,
	children,
}: PropsWithChildren<WrapProps>): JSX.Element {
	if (condition) {
		return <>{children}</>
	}

	const wrapContentChildren = getChildrenByTypeDeep(children, Wrap.Content)
	if (wrapContentChildren.length === 0) {
		throw new Error("Wrap.Content is required")
	}
	if (wrapContentChildren.length > 1) {
		throw new Error("You can't have more than one Wrap.Content")
	}

	const actualWrapContent = wrapContentChildren[0]
	return <>{actualWrapContent}</>
}

/**
 * The inner component of this library.
 *
 * Everything inside this component will always be rendered.
 */
Wrap.Content = WrapContent
function WrapContent({ children }: PropsWithChildren): JSX.Element {
	return <>{children}</>
}
