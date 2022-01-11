import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"

TextLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

const variants = {
    sizes: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-base lg:text-[20px]",
    }
}

export function TextLink({ className = "", href, size = "md", children }) {
    
    const sizeClassName = variants.sizes[size]

    if (href) {
        return <Link href={href}>
            <a className={`underline underline-offset-8 decoration-2 decoration-gray-200 ${sizeClassName} ${className}`}>
                {children}
            </a>
        </Link>
    }
}
