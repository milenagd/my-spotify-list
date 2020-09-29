import React, { Component } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import Loader from '../components/Loader';
import { getProfile } from '../services/getProfile';
import { mapCountries } from '../constants/countries';

const UserAvatar = styled(Avatar)`
  width: 6.5rem;
  height: 6.5rem;
`;

const WrapperUserInfo = styled.div`
  width: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid;
`;

const Info = styled.span`
  width: 50%;
  padding: 0.5rem;
  font-weight: bold;
`;

const Value = styled.span`
  width: 50%;
  padding: 0.5rem;
`;

const WrapperPaper = styled(Paper)`
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class Profile extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await getProfile();

    sessionStorage.setItem('userID', data.id);
    sessionStorage.setItem('userMarket', data.country);

    this.setState({ data });
  }

  render() {
    if (isEmpty(this.state.data)) {
      return <Loader />;
    }
    return (
      <WrapperPaper elevation={3}>
        <UserAvatar
          alt={`picture of user ${get(this.state.data, 'name')}`}
          src={get(this.state.data, 'userImage.url', '')}
        ></UserAvatar>
        <WrapperUserInfo>
          <UserInfo>
            <Info>Name</Info>
            <Value>{get(this.state.data, 'name')}</Value>
          </UserInfo>
          <UserInfo>
            <Info>Date of Birth</Info>
            <Value>{get(this.state.data, 'birthdate')}</Value>
          </UserInfo>
          <UserInfo>
            <Info>Country</Info>
            <Value>
              {mapCountries[get(this.state.data, 'country', '').toUpperCase()]}
            </Value>
          </UserInfo>
          <UserInfo>
            <Info>Email</Info>
            <Value>{get(this.state.data, 'email')}</Value>
          </UserInfo>
        </WrapperUserInfo>
      </WrapperPaper>
    );
  }
}

export default Profile;
