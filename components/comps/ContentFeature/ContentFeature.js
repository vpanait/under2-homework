import React from "react"
import PropTypes from "prop-types"
import { Heading } from "../../atoms/Heading"
import { TextBlock } from "../../atoms/TextBlock"
import { TextLink } from "../../atoms/TextLink"

ContentFeature.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function ContentFeature({ className = "", heading, content, linkLabel, linkHref }) {
    return (
        <div className={`` + className}>
            <Heading size="sm">{heading}</Heading>
            <TextBlock size="sm" theme="subtle">{content}</TextBlock>
            <TextLink href={linkHref}>{linkLabel}</TextLink>
        </div>
    )
}
