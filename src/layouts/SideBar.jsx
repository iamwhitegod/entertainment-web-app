import React from "react";
import { Stack, Avatar } from "@mui/material";

import Logo from "../components/Logo";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <Stack
        direction="column"
        // justifyContent="space-evenly"
        spacing={10}
        alignItems="center"
        className=" w-fit h-[95vh] max-h-[960px] bg-semiDarkBlue px-[32px] py-[40px] rounded-[20px] sticky top-[16px]"
      >
        <Link to="home">
          <Logo />
        </Link>

        <Stack flexGrow={1}>
          <Stack
            spacing={4}
            direction="column"
            justifyContent="center"
            className="sidebar__list"
          >
            <Link to="home">
              <Icon name="icon-nav-home" size={20} />
            </Link>

            <Link to="movies">
              <Icon name="icon-nav-movies" size={20} />
            </Link>

            <Link to="tvseries">
              <Icon name="icon-nav-tv-series" size={20} />
            </Link>

            <Link to="bookmarked">
              <Icon name="icon-bookmark-full" size={20} />
            </Link>
          </Stack>
        </Stack>

        {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        <Avatar>MK</Avatar>
      </Stack>
    </>
  );
}

export default SideBar;
