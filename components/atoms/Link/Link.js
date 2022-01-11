import React from "react"
import PropTypes from "prop-types"
import NextLink from "next/link"

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function Link({ className = "", href, children }) {
    return (
        <NextLink href={href}>
            <a className={`${className}`}>
                {children}
            </a>
        </NextLink>
    )
}
