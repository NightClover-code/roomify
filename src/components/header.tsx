import React from "react";
import { Button } from "./ui/button";
// import { Menu, MenuItem, MenuList, MenuButton } from "@shadcn/ui";
import Link from "next/link";
import Image from "next/image";
import Logo from "./common/logo";

export default function Header({}) {
  return (
    <header className="flex w-full items-center justify-between bg-white px-12 py-4 shadow-sm">
      <Logo />

      <div>
        <Button>Sign In</Button>
        {/* {isLoggedIn ? (
          <Menu>
            <MenuButton className="flex items-center space-x-2">
              <img
                src={user.image || "/default-avatar.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span>{user.name}</span>
            </MenuButton>
            <MenuList>
              <MenuItem onSelect={() => alert("Profile")}>Profile</MenuItem>
              <MenuItem onSelect={() => alert("Settings")}>Settings</MenuItem>
              <MenuItem onSelect={() => alert("Logout")}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button variant="outline" onClick={() => alert("Login")}>
            Login
          </Button>
        )} */}
      </div>
    </header>
  );
}
