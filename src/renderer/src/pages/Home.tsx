import React from "react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { TypographyH2 } from "../components/ui/typography";

const Home = () => (
  <>
    <div className="mx-auto">
      <TypographyH2 header="Hello there" />
    </div>
    <div className="grid-rows-2 rounded-md grid-flow-col p-5  bg-gray-200">
      <div className="space-x-7">
        <Button>I'm tasty</Button>
        <Button>I'm not</Button>
      </div>
      <div className="w-full max-w-sm items-center p-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </div>
  </>
);

export default Home;
