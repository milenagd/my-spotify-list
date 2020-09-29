import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const WrapperCard = styled(CardActionArea)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

const CardImage = styled.img`
  width: 7rem;
`;

const FullCard = styled(Card)`
  width: 100%;
`;

const CustomCard = (props) => (
  <FullCard>
    <WrapperCard href={props.content.href}>
      <CardContent>
        <Typography component="h5" variant="h5">
          {props.content.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {props.content.artist}
        </Typography>
      </CardContent>
      <CardImage
        src={props.content.images[0].url}
        alt={`${props.content.name} album cover`}
      />
    </WrapperCard>
  </FullCard>
);

export default CustomCard;
