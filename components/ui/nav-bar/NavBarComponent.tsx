"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { configuration } from "../../flowbite-config";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
  name: string,
  path: string,
  active: boolean
}

export default function NavBarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);

  const pathName = usePathname();
  return (
    <Navbar theme={configuration.navbar} fluid rounded className="w-full">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="amazom.png" className="w-28 " alt="" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="text-pink-600 font-medium">
          Login
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {menu.map((item, index) => (
          <Navbar.Link
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathName}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
