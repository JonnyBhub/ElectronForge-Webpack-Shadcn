import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TypographyH2 } from "./ui/typography";

const App = () => {
  return (
    <>
      <div className="h-screen items-center justify-center grid grid-flow-row auto-rows-max">
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
      </div>
    </>
  );
};

export default App;
