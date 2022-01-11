import React from "react"
import PropTypes from "prop-types"

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function Container({ className = "", children, padding = "md" }) {
    
    const variants = {
        padding: {
            md: "py-16 md:py-32",
            mdTopOnly: "pt-16 md:pt-32",
            none: ""
        }
    }

    const paddingClassName = variants.padding[padding]
    
    return (
        <div className={`grid mx-auto md:grid-cols-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1156px] box-content gap-6 ${paddingClassName} ${className}`}>
            {children}
        </div>
    )
}
