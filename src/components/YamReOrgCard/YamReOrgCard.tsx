import { Box, Button, Card, CardActions, CardContent, CardIcon, Spacer } from "react-neu";

import Label from "components/Label";
import React from "react";
import ValueText from "components/ValueText";
import styled from "styled-components";

const YamReOrgCard: React.FC = () => {
  return (
    <Card>
      <StyledCard>
        <Spacer />
        <CardIcon>👨‍🚀🚀</CardIcon>
        <CardContent>
          <Box alignItems="center" column minHeight={125} maxHeight={125}>
            <ValueText value="defi lion Re-Org" />
            <Label text="Defi lion's Re-Org is designed to attract talented builders while giving token holders full control." labelPosition="center" />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            full
            text="Info"
            href="https://yam.super.site/"
            variant="secondary"
          />
        </CardActions>
      </StyledCard>
    </Card>
  );
};
const StyledCard = styled.div`
 height:320px;
`;

export default YamReOrgCard;
