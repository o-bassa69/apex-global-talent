import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-400 py-3 mb-6 overflow-x-auto scrollbar-none">
      <Link
        href="/"
        className="inline-flex items-center gap-1 hover:text-white transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <ChevronRight className="w-3 h-3 text-slate-400" />
            {isLast || !item.href ? (
              <span className="text-slate-200 font-semibold">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-white transition-colors text-slate-400"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
