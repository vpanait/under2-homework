import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "../../atoms/Container";
import { Heading } from "../../atoms/Heading";
import { LogoCard } from "../../comps/LogoCard";
import { TextLink } from "../../atoms/TextLink";
import { TextCard } from "components/comps/TextCard";

import latestArticles from "../../../content/latest-articles.json";

Newsletter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function Newsletter({ className = "" }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [company, setCompany] = useState(null);

  const doSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    fetch("https://under2.free.beeceptor.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, company }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(">>>data :", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className={` ${className}`}>
      <Container>
        <div className="col-span-full">
          <Heading className="">Newsletter</Heading>
          <form>
            <label className="block">
              First Name:
              <input
                type="text"
                name="name"
                className="border"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="block">
              Last Name:
              <input
                type="text"
                name="name"
                className="border"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="block">
              Email:
              <input
                type="text"
                name="name"
                className="border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block">
              Company:
              <input
                type="text"
                name="name"
                className="border"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" onClick={doSubmit} />
          </form>
        </div>
      </Container>
    </section>
  );
}
