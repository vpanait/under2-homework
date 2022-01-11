import React from "react"
import PropTypes from "prop-types"

TextBlock.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

const variants = {
    sizes: {
        md: "text-base mb-6 leading-relaxed md:leading-loose",
        sm: " text-sm mb-6 leading-relaxed md:leading-loose",
    },
    themes: {
        normal: "text-gray-900",
        subtle: "text-gray-500",
    }
}

export function TextBlock({ className = "", as = "p", size = "md", children, theme = "normal" }) {
    
    const Elem = as
    const sizeClassName = variants.sizes[size]
    const themeClassName = variants.themes[theme]
    
    return (
        <Elem className={`${sizeClassName} ${themeClassName} ${className}`}>
           {children} 
        </Elem>
    )
}
