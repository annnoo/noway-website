"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { calgary } from "@/lib/fonts"

const calg2ary = calgary;

export function NavBar() {
  return (
    <NavigationMenu className="bg-background ">
      <NavigationMenuList>

        <NavigationMenuItem className="mt-0">
          <NavigationMenuLink className={cn(calg2ary.className, navigationMenuTriggerStyle(), "text-2xl", "line-clamp-none", "m-auto", "font-bold", "leading-none")} href="https://noway.gg">
            Noway4U
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            World Map
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/accounts">
            Accounts
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
