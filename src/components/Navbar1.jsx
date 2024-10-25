import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <>
            <div className="flex flex-col min-h-dvh">
      <header className="bg-background border-b">
        <div className="container flex items-center justify-between h-14 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                {/* <MenuIcon className="h-6 w-6" /> */}
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      </div>
        </>
    )
}