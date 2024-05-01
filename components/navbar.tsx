"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Separator } from "./ui/separator"
export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="flex justify-between items-center py-5">
            <Link href={"/"}>
                <Image
                    src="/img/logo.svg"
                    alt="Wilson Kinyua Logo"
                    width={130}
                    height={100}
                />
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="hidden md:flex">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} ${pathname === "/" ? "dark:text-primary text-primary" : ""}`}
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Services
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Resume
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Skills
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            className="bg-primary text-white font-semibold"
                        >
                            Hire Me
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="md:hidden flex">
                <Sheet>
                    <SheetTrigger>
                        <Menu
                            size={24}
                            className="text-primary"
                        />
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="bg-[#131313]"
                    >
                        <SheetHeader>
                            <SheetDescription
                                className="my-10"
                            >
                                <p className="leading-8">
                                    Driven, innovative Software Engineer with experience in the development of software and solutions. A conscientious person who pays attention to details.
                                </p>
                                <Separator
                                    className="my-10"
                                />
                                <ul
                                    className="grid grid-cols-3 gap-5"
                                >
                                    <li>
                                        <Link
                                            href="/"
                                            className={`${pathname === "/" ? "dark:text-primary text-primary" : ""}`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition duration-500 hover:text-primary"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition duration-500 hover:text-primary"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition duration-500 hover:text-primary"
                                        >
                                            Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition duration-500 hover:text-primary"
                                        >
                                            Skills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition duration-500 hover:text-primary"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <Separator
                                    className="my-10"
                                />

                                <Separator
                                    className="my-10"
                                />
                                <Button
                                    className="bg-primary text-white font-semibold w-full my-10"
                                >
                                    Hire Me
                                </Button>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}