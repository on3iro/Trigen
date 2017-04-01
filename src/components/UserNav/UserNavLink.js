import styled from 'styled-components';

import NavLink from 'components/NavLink';


const UserNavLink = styled(NavLink)`
  .profile {
    background-image: url(${props => props.icon});
    background-position: 0px;
  }

  &:hover .profile,
  &.active .profile {
    background-position: -25px;
  }

  .accounts {
    background-image: url(${props => props.icon});
  }

  &:hover .accounts,
  &.active .accounts {
    background-position: -25px;
  }

  .logout {
    background-image: url(${props => props.icon});
  }

  &:hover .logout,
  &.active .logout {
    background-position: -20px;
  }
`;

export default UserNavLink;
