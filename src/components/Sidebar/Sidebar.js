import React from 'react';
import styled from 'styled-components';

import SubMenu from './SubMenu';
import { SidebarData } from './SidebarData';

const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-direction: column;
`;

const AvatarContent = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ccc;
`;

const AvatarName = styled.span`
  color: ${(props) => props.theme.text.primary};
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarNav>
        <AvatarContent>
          <Avatar
            src="https://avatars0.githubusercontent.com/u/6078720?s=200&v=4"
            alt="profile picture"
          />
          <AvatarName>Murilo Oliveira</AvatarName>
        </AvatarContent>

        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
