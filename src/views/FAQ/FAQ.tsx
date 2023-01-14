import React, { useMemo } from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Card, CardContent, Container, Spacer } from "react-neu";
import { useLocation } from "react-router-dom";

import ExternalLink from "components/ExternalLink";
import Page from "components/Page";
import PageHeader from "components/PageHeader";

import Question from "./components/Question";

const FAQ: React.FC = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");

  const activeSlug = useMemo(() => {
    if (pathArr.length > 2) {
      return pathArr[2];
    }
  }, [pathArr]);

  return (
    <Page>
      <PageHeader icon="📖" subtitle="Learn about defi lion" title="FAQ" />
      <Container>
        <Card>
          <CardContent>
            <Question active={activeSlug === "defi-lion-protocol"} question="What is the defi lion protocol?" slug="defi-lion-protocol">
              <span>
                Defi lion is a decentralized cryptocurrency that uses a rebasing mechanism to raise funds for a treasury managed by the community. The
                community can then use those funds via defi lion governance to build out the protocol.
              </span>
            </Question>

            <Question active={activeSlug === "defi-lion-token"} question="What is defi lion?" slug="defi-lion-token">
              <span>
                DEFI LION is a community run Decentralized Autonomous Organization (DAO) innovating at the intersection of decentralized governance and
                programmable finance. DEFI LION is the governance token for the defi lion protocol. Using token voting, defi lion holders have direct influence over the
                DEFI LION treasury and direction of the protocol. Governance discussions take place on Discord and the{" "}
                <ExternalLink href="https://forum.defilion.finance/">defi lion Governance Forum</ExternalLink>.
              </span>
            </Question>

            <Question active={activeSlug === "treasury"} question="How does defi lion have a treasury?" slug="treasury">
              <span>
                Before the defi lion community voted to disable the rebasing / elastic supply function, every positive rebase, the treasury mints 5% of the
                rebase amount and sells APTSELON to the APTELON/APT Liquidswap pool. The ETH acquired through this action is sent to the treasury which is
                managed by DEFI-LION holders. The current treasury value can be seen on defilion.finance.
              </span>
            </Question>

            <Question
              active={activeSlug === "what-happened-to-rebase"}
              question="What happened with rebasing function of defi lion?"
              slug="what-happened-to-rebase"
            >
              <span>
                December 29th, 2020 the defi lion community has voted to disable the rebasing / elastic supply function of defi lion and the scaling factor of defi lion
                has been fixed at 2.50. defi lion initially as an experiment has evolved into a launch pad for DeFi projects supported by a community
                governed treasury. defi lion is currently developing multiple projects including Umbrella (Smart Contract Insurance), Degenerative.Finance
                (Synthetics) and defi lion DAO Set (Set Protocol DAO Investment fund). All of which will generate revenue for defi lion. For most current
                projects, please visit us in discord.
              </span>
            </Question>

            <Question active={activeSlug === "govlp"} question="Can LPs participate in governance?" slug="govlp">
              <span>
                Only LPs that are staked in the Incentivizer contract can participate in governance. Voting power is determined by distributing the
                voting power of defi lion held in the APTELON/APT LiquidSwap pool, but distributed to only defi lion Incentivizer stakers. This was done to mitigate
                flashloan threats in voting, so the Incentivizer contract keeps a record of the necessary values at needed block heights to facilitate
                those mitigations.
              </span>
            </Question>

            <Question active={activeSlug === "farming"} question="Can I farm defi lion?" slug="farming">
              <span>
                Currently check the <RouterLink to="/farm">Farm</RouterLink> page to know if you are able to farm.
              </span>
            </Question>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

const RouterLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.primary.light};
  &:hover {
    color: ${(props) => props.theme.colors.primary.light};
  }
`;

export default FAQ;
