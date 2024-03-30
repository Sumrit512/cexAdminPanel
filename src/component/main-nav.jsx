"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"



export function MainNav({
  className,
  ...props
}) {
  const pathname = usePathname();
  const params = useParams();

 const routes = [
    {
      href: `/`,
      label: 'Overview',
      active: pathname === `/`,
    },
    {
      href: `/users`,
      label: 'Users',
      active: pathname === `/users`,
    },
    {
      href: `/orders`,
      label: 'Orders',
      active: pathname === `/orders`,
    },
    {
      href: `/trades`,
      label: 'Trades',
      active: pathname === `/trades`,
    },
    {
      href: `/kyc`,
      label: 'KYC',
      active: pathname === `/kyc`,
    },
    {
      href: `/support`,
      label: 'Support',
      active: pathname === `/support`,
    },
    {
      href: `/tokens`,
      label: 'Tokens',
      active: pathname === `/tokens`,
    },
    {
      href: `/wallets`,
      label: 'Wallets',
      active: pathname === `/wallets`,
    },
    {
      href: `/withdrawals`,
      label: 'Withdrawals',
      active: pathname === `/withdrawals`,
    },
    {
      href: `/settings`,
      label: 'Settings',
      active: pathname === `/settings`,
    },
  ]

  return (
    <nav
      className={cn("md:flex items-center space-x-4 lg:space-x-6 hidden ", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};
