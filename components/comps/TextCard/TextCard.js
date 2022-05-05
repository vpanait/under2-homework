import React from "react";
import PropTypes from "prop-types";
import { Card } from "components/atoms/Card";
import { TextLink } from "components/atoms/TextLink";

TextCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function TextCard({ className = "", article }) {
  return (
    <Card
      className={`p-2 md:p-2 flex items-center justify-center w-full aspect-video ${className}`}
    >
      <div>
        <img src={article.coverImage} className="w-full object-contain" />
        <TextLink
          key={article._id}
          size="lg"
          href="#"
          className="w-full mt-4 block"
        >
          {article.heading}
        </TextLink>
        <div className="w-full mt-4">{article.publishDate}</div>
      </div>
    </Card>
  );
}
