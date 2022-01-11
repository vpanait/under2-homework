import React from "react"
import PropTypes from "prop-types"

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function Card({ className = "", children }) {
    return (
        <div className={`shadow ${className}`}>
            {children}
        </div>
    )
}
