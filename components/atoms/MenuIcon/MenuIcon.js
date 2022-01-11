import React from "react"
import PropTypes from "prop-types"

MenuIcon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function MenuIcon({ className = "", children }) {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="19"
      viewBox="0 0 28 19"
      className={className}
    >
        <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
        >
            <g stroke="currentColor" strokeWidth="3" transform="translate(-410 -32)">
            <g transform="translate(395 16)">
                <g transform="translate(17 17)">
                <path d="M0 8.5L24 8.5"></path>
                <path d="M0 0.5L24 0.5"></path>
                <path d="M0 16.5L24 16.5"></path>
                </g>
            </g>
            </g>
        </g>
    </svg>
    )
}
