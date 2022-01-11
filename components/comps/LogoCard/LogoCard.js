import React from "react"
import PropTypes from "prop-types"
import { Card } from "../../atoms/Card"

LogoCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function LogoCard({ className = "", src, alt, height, width }) {
    return (
        <Card className={`p-5 md:p-8 flex items-center justify-center w-full aspect-video ${className}`}>
            <img src={src} alt={alt} width={width} height={height} className="h-2/3 w-2/3 object-contain" />
        </Card>
    )
}
