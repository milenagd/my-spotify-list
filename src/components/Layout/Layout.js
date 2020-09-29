import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import CustomLink from '../CustomLink';
import { allRoutes } from '../../routes/allRoutes';
import { mapCountries } from '../../constants/countries';

const Title = styled.h1``;
const Layout = (props) => {
  const { url } = useRouteMatch();

  const handleTitle = () => {
    if (!props.title.includes('#country#')) return props.title;
    const country = sessionStorage.getItem('userMarket') || '';
    const countryName = mapCountries[country.toUpperCase()];
    return props.title.replace('#country#', countryName);
  };

  return (
    <Container maxWidth="md" fixed={true}>
      <Drawer variant="permanent" anchor={'left'}>
        <div>
          <Divider />
          <List>
            {allRoutes.map((item, index) => (
              <ListItem
                key={`drawer-item-${index}`}
                selected={item.path === url}
              >
                <CustomLink key={`drawer-link-${index}`} to={item.path}>
                  {item.label}
                </CustomLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main>
        <Title>{handleTitle()}</Title>
        {props.children}
      </main>
    </Container>
  );
};

export default Layout;
