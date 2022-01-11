import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Link } from "../../atoms/Link"
import { NavLink } from "../../atoms/NavLink"
import { Button } from "../../atoms/Button/Button"
import { BrandLogo } from "../../atoms/BrandLogo"
import { MenuIcon } from "../../atoms/MenuIcon"

GlobalNavigation.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function GlobalNavigation({ className = "", children }) {
    return (
        <nav className={`bg-gray-100 py-6 md:py-8 ${className}`}>
            <Container padding="none">
                <div className="col-span-full flex justify-between items-center">
                    <Link href="#" className="text-blue-700"><BrandLogo /></Link>
                    
                    <div className="p-4 md:hidden">
                        <MenuIcon className="h-6 w-6" />
                    </div>

                    <div className="space-x-10 hidden md:block">
                        <NavLink href="#">Platform</NavLink>
                        <NavLink href="#">Resources</NavLink>
                        <NavLink href="#">Contact</NavLink>
                        <Button href="#">Schedule a demo</Button>
                    </div>
                </div>
            </Container>
        </nav>
    )
}
