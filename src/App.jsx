import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import InputField from "./components/InputField";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Heading size={1}>Lorem ipsum dolor sit amet</Heading>
      <Heading size={2}>Consectetuer adipiscing elit</Heading>
      <Heading size={3}>Donec odio quisque volutpat mattis eros</Heading>
      <Heading size={4}>Nullam malesuada erat ut turpis</Heading>

      <Text className="desc-m">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </Text>

      <Text className="desc-s">
        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
        leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
        Suspendisse potenti.
      </Text>

      <Button className="btn">Login to account</Button>
      <Button className="btn btn--full">Login to account</Button>

      <InputField
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
      />
    </div>
  );
}

export default App;