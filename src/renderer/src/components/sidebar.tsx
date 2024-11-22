import React from "react";
import { Outlet } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Sidebar = () => (
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent side={"left"} className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
          </ul>
          <Outlet />
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default Sidebar;
