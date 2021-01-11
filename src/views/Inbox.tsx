import React from 'react';
import styled from "styled-components";
import {
  getContent,
  getDrawerSidebar,
} from "@mui-treasury/layout";
import AppHeader from "../components/Inbox/AppHeader";
import AppSidebar from "../components/Inbox/AppSidebar";
import AppFooter from "../components/Inbox/AppFooter";
import AppContent from "../components/Inbox/AppContent";
import AppSubSidebar from "../components/Inbox/AppSubSidebar";
import CustomTrigger from "../components/Inbox/CustomTrigger";

const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);

function Inbox() {
  return (
    <>
      <AppHeader />
      <DrawerSidebar sidebarId={"primarySidebar"}>
        <AppSidebar />
      </DrawerSidebar>
      <Content>
        <AppContent />
      </Content>
      <DrawerSidebar sidebarId={"secondarySidebar"}>
        <AppSubSidebar />
      </DrawerSidebar>
      <CustomTrigger />
      <AppFooter />
    </>
  );
}

export default Inbox;
