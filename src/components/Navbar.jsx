import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tools & Technologies", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-20 py-5">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-gray-800 hover:text-[25px] transition-all"
        >
          ishani-kundu.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-800 hover:text-[16px] hover:opacity-80 transition-all"
            >
              {item.name}
            </a>
          ))}
          
        </nav>

        {/* Mobile Navigation Menu */}
          <Sheet
            className="md:hidden"
            open={isOpen} 
            onOpenChange={(open) => setIsOpen(open)} 
          >
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="shadow-sm bg-gradient-to-b from-gray-400 to-gray-700">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-gray-600 transition-colors py-4 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </SheetContent>
          </Sheet>
      </div>
    </header>
  );
}
