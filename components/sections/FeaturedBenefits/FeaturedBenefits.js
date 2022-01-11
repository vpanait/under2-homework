import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { ContentFeature } from "../../comps/ContentFeature"

FeaturedBenefits.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function FeaturedBenefits({ className = "", padding }) {
    return (
        <section className={` ${className}`}>
            <Container className="gap-12" padding={padding}>
                <div className="md:col-span-4">
                    <ContentFeature
                        heading="Featured Benefit"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…"
                        linkHref="#" 
                        linkLabel="view more"
                    />
                </div>
                <div className="md:col-span-4">
                    <ContentFeature
                        heading="Featured Benefit"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…"
                        linkHref="#" 
                        linkLabel="view more"
                    />
                </div>
                <div className="md:col-span-4">
                    <ContentFeature
                        heading="Featured Benefit"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…"
                        linkHref="#" 
                        linkLabel="view more"
                    />
                </div>
            </Container>
        </section>
    )
}
