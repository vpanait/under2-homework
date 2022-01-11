import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Link } from "../../atoms/Link"
import { BrandLogo } from "../../atoms/BrandLogo"

GlobalFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function GlobalFooter({ className = "", children }) {
    return (
        <footer className={`py-6 md:py-8 ${className}`}>
            <Container padding="none">
                <div className="col-span-full flex items-center justify-between">
                    <Link href="#" className="text-blue-700"><BrandLogo /></Link>

                    <div className="space-x-10 text-gray-700 hidden md:block">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Imprint</Link>
                        <Link href="#">Sitemap</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
