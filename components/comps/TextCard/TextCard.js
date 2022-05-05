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
      className={`p-2 md:py-4 flex items-center justify-center w-full aspect-video ${className}`}
    >
      <div>
        <img src={article.coverImage} className="w-full object-contain" />
        <div className="w-full mt-2  text-gray-400">{article.publishDate}</div>
        <TextLink
          key={article._id}
          size="lg"
          href="#"
          className="w-full"
        >
          {article.heading}
        </TextLink>
      </div>
    </Card>
  );
}
