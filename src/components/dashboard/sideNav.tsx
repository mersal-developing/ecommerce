"use client";

import {
  Badge,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import Link from "next/link";
import { NavItems } from "@/lib/navigationLinks";
import clsx from "clsx";

function SideNav({ show }: { show: boolean }) {
  const [isSubLinksOpen, setIsOpenSubLinks] = useState(false);

  const toggleProducts = () => {
    setIsOpenSubLinks(!isSubLinksOpen);
  };

  return (
    <aside
      className={clsx(
        "sticky h-screen inset-y-0 left-0 z-10 w-72 flex-col border-r bg-background sm:flex hidden",
        {
          '!flex': show,
        }
      )}
    >
      <div className=" border-r bg-muted/40 md:block h-full">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">MM</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {NavItems.map((item, i) =>
                item.subItems ? (
                  <div key={item.name}>
                    <div
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer"
                      onClick={toggleProducts}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                      {isSubLinksOpen ? (
                        <ChevronUp className="h-4 w-4 ml-auto" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      )}
                    </div>
                    {isSubLinksOpen && (
                      <div className="pl-8">
                        {item.subItems.map((subItem, v) => (
                          <Link
                            key={v}
                            href={subItem.link ? subItem.link : ""}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <subItem.icon className="h-4 w-4" />

                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : !item.hide ? (
                  <Link
                    key={i}
                    href={item.link ? item.link : ""}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                    {item.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ) : (
                  <></>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
