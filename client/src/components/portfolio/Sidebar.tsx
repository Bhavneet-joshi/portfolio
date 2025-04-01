import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-full md:w-20 bg-white flex flex-row md:flex-col justify-around items-center p-4 border-b md:border-r md:border-b-0 border-gray-200", className)}>
      <div className="flex md:h-full flex-row md:flex-col justify-between items-center w-full">
        <a 
          href="#about" 
          className="nav-item md:rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-0 md:mb-8 md:writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          About
        </a>
        <a 
          href="#portfolio" 
          className="nav-item md:rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-0 md:mb-8 md:writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Portfolio
        </a>
        <a 
          href="#research" 
          className="nav-item md:rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-0 md:mb-8 md:writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Research
        </a>
        <a 
          href="#clients" 
          className="nav-item md:rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide md:writing-mode-vertical"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Clients
        </a>
      </div>
    </div>
  );
}
