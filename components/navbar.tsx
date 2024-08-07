import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";


export function Navbar() {

  return (
    <nav className="sticky top-0 w-full flex justify-between px-12 py-6">
      <h2>
        iKen.GG
      </h2>
      <div></div>
      <div className="">
        <Input className="w-80" />
      </div>
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>
    </nav>
  )
}