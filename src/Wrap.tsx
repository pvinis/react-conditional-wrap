import { PropsWithChildren } from "react"
import { getChildrenByTypeDeep } from "react-nanny"

interface WrapProps {
	if: boolean
}

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

Wrap.Content = WrapContent
function WrapContent({ children }: PropsWithChildren): JSX.Element {
	return <>{children}</>
}

