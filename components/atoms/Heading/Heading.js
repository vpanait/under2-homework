import React from "react"
import PropTypes from "prop-types"

Heading.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

const variants = {
    sizes: {
        lg: "text-2xl md:text-[40px] mb-6 leading-snug md:leading-tight",
        sm: "text-[20px] md:text-[24px] mb-6 leading-snug md:leading-tight",
    },
    themes: {
        normal: "text-gray-900",
        subtle: "text-gray-700",
    }
}

export function Heading({ className = "", as = "h1", children, size = "lg", theme = "normal" }) {

    const Elem = as
    const sizeClassName = variants.sizes[size]
    const themeClassName = variants.themes[theme]
    
    return (
        <Elem className={`font-semibold ${sizeClassName} ${themeClassName} ${className}`}>
           {children} 
        </Elem>
    )
}
