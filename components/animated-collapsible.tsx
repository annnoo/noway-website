"use client"

import React, { JSX, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { IconJarLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";

interface ExpandableContainerProps {
  title: JSX.Element | string;
  children: any;
  className?: string | null;
  defaultOpen?: boolean;
}

export function ExpandableContainer({ title, children, className, defaultOpen }: ExpandableContainerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn(className)}>
      <CollapsibleTrigger className="flex justify- items-center w-full">
        {title}
        <ChevronRight
          style={{
            transform: isOpen ? `rotate(90deg)` : "none",
            marginLeft: "8px"
          }}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-2 mt-2 border-t-2 transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
