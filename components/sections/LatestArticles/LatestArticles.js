import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../atoms/Container";
import { Heading } from "../../atoms/Heading";
import { LogoCard } from "../../comps/LogoCard";
import { TextLink } from "../../atoms/TextLink";
import { TextCard } from "components/comps/TextCard";

import latestArticles from "../../../content/latest-articles.json";

LatestArticles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function LatestArticles({ className = "", partners }) {
  return (
    <section className={` ${className}`}>
      <Container>
        <div className="col-span-full">
          <Heading className="">Latest Articles</Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 my-8 md:my-16">
            {latestArticles?.map((article) => {
              return <TextCard key={article._id} article={article} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
