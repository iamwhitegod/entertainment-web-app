import React from "react";

import image from "../assets/thumbnails/112/regular/small.jpg";
import Bookmark from "../components/Bookmark";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Text from "../components/Text";
import InputField from "../components/InputField";
import SearchBar from "../components/SearchBar";
import Thumbnail from "../components/Thumbnail";
import { Stack } from "@mui/system";
import TrendingList from "../components/TrendingList";
import { useMovie } from "../contexts/movie";

function Docs() {
  const { trending } = useMovie();
  return (
    // <Stack spacing={3} direction="column">
    //   <Heading size={1}>Lorem ipsum dolor sit amet</Heading>
    //   <Heading size={2}>Consectetuer adipiscing elit</Heading>
    //   <Heading size={3}>Donec odio quisque volutpat mattis eros</Heading>
    //   <Heading size={4}>Nullam malesuada erat ut turpis</Heading>

    //   <Text className="desc-m">
    //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
    //     hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
    //     vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
    //     laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
    //     nibh. Nullam mollis. Ut justo. Suspendisse potenti.
    //   </Text>

    //   <Text className="desc-s">
    //     Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
    //     leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
    //     Suspendisse potenti.
    //   </Text>

    //   <Button className="btn">Login to account</Button>
    //   <Button className="btn btn--full">Login to account</Button>

    //   <InputField
    //     type="email"
    //     name="email"
    //     id="email"
    //     placeholder="Email address"
    //   />

    //   <SearchBar
    //     type="text"
    //     name="search"
    //     id="search"
    //     placeholder="Search for movies or TV series"
    //   />

    //   <Thumbnail src={image} alt={"cover"} />
    //   <Bookmark src={image} alt={"cover"} />
    // </Stack>

    <TrendingList movies={trending} />
  );
}

export default Docs;
