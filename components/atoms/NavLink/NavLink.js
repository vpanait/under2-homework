import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"

NavLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function NavLink({ className = "", href, children }) {
    
    if (href) {
        return <Link href={href}>
            <a className={`font-semibold px-2 py-4 ${className}`}>
                {children}
            </a>
        </Link>
    }
}
