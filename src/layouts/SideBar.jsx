import React from "react";
import { Stack, Avatar } from "@mui/material";

import Logo from "../components/Logo";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/auth";

function SideBar() {
  const { logoutUser } = useUser();
  return (
    <>
      <Stack
        direction={{ xs: "row", md: "column" }}
        spacing={{ xs: 2, sm: 4, md: 10 }}
        alignItems="center"
        className="w-full md:w-fit h-[72px] md:h-[95vh] max-h-[960px] bg-semiDarkBlue px-[16px] sm:px-[32px] py-[40px] rounded-[20px] md:sticky top-[16px]"
      >
        <Link to="home">
          <Logo />
        </Link>

        <Stack flexGrow={1}>
          <Stack
            spacing={{ xs: 3, sm: 4 }}
            direction={{ xs: "row", md: "column" }}
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
              <Icon name="icon-nav-bookmark" size={20} />
            </Link>
          </Stack>
        </Stack>

        {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
        <Avatar onClick={() => logoutUser()}>MK</Avatar>
      </Stack>
    </>
  );
}

export default SideBar;
