"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { SiteNav } from "@/components/layout/site-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/** Drawer navigation for viewports too narrow for the rail. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-brand-ink-muted hover:text-brand-ink lg:hidden"
        >
          <Menu aria-hidden />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-brand-surface border-brand-line w-64"
      >
        <SheetHeader>
          <SheetTitle className="text-brand-ink">Sections</SheetTitle>
        </SheetHeader>
        <SiteNav
          variant="stacked"
          className="px-2 pb-4"
          onNavigate={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
