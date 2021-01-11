import React from "react";
import styled from "styled-components";
import {
  useSidebarCtx,
  useSidebarCollapse,
  getSidebarContent,
} from "@mui-treasury/layout";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import {
  Box,
  List,
  Divider,
  IconButton,
  Avatar, } from "@material-ui/core";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";
// @ts-ignore
import Inbox from "@material-ui/icons/Inbox";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Send from "@material-ui/icons/Send";

const SidebarContent = getSidebarContent(styled);

const AppSidebar = () => {
  const googleStyles = useGoogleAvatarStyles({ avatarSize: 32, ringSize: 40 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 32 });

  const [index, setIndex] = React.useState(0);
  const { expanded } = useSidebarCtx();
  const { state } = useSidebarCollapse();
  const collapsed = !expanded && (state.collapsed as boolean);
  const commonProps = (i: number) => ({
    collapsed,
    selected: i === index,
    onClick: () => {
      setIndex(i);
    },
    dotOnCollapsed: true,
  });
  return (
    <>
      <Box  mt={1} className="text-center">
        <IconButton classes={avatarStyles}>
          <div className={googleStyles.root}>
            <Avatar
              alt="avatar"
              src="https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s64-c-mo"
            />
          </div>
        </IconButton>
      </Box>

      {!collapsed && (<Box ml={2} mt={1} maxWidth={240}>
        <div className="GmailSidebarItem-label text-center">test@getsirena.com</div>
      </Box>)}
      <SidebarContent>
        <Box maxWidth={240}>
          <List>
            <GmailSidebarItem
              color={"#da3125"}
              startIcon={<Inbox />}
              label={"Inbox"}
              amount={"1,198"}
              {...commonProps(0)}
              dotOnCollapsed={false}
            />
            <GmailSidebarItem
              startIcon={<InsertDriveFile />}
              label={"Drafts"}
              amount={"5"}
              {...commonProps(1)}
            />
            <GmailSidebarItem
              startIcon={<Send />}
              label={"Sent"}
              amount={"5"}
              {...commonProps(2)}
            />
          </List>
        </Box>
      </SidebarContent>
      <Divider />
    </>
  );
};

export default AppSidebar;
