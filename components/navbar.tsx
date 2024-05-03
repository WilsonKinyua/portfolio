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
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Separator } from "./ui/separator"
import SocialLinks from "./social-links"
import { pacifico } from "@/lib/fonts"
import { useEffect } from "react"
import Hire from "./forms/hire"
export default function Navbar() {
    const pathname = usePathname()

    // handle scroll
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (navbar) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 0) {
                    navbar.classList.add("navbar-glassmorphism");
                    navbar.classList.add("shadow-md");
                } else {
                    navbar.classList.remove("navbar-glassmorphism");
                    navbar.classList.remove("shadow-md");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-10 navbar">
            <div className="flex justify-between items-center py-5 container mx-auto">
                <Link href={"/"} className={`${pacifico.className} text-2xl`}>
                    <span className="text-primary">W</span>ilson <span className="text-primary">K</span>inyua
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="hidden lg:flex">
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
                            <Sheet>
                                <SheetTrigger>
                                    <Button
                                        className="font-semibold"
                                    >
                                        Hire Me
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    className="bg-secondary overflow-auto"
                                >
                                    <SheetHeader>
                                        <SheetDescription
                                            className="my-10"
                                        >
                                            <p className="leading-8">
                                                Have a project you'd like to discuss? I'd love to hear from you.
                                            </p>
                                            <Hire />
                                            <Separator
                                                className="my-10"
                                            />
                                            <p className="uppercase mb-5">Find me</p>
                                            <SocialLinks />
                                            <Separator
                                                className="my-10"
                                            />
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="lg:hidden flex">
                    <Sheet>
                        <SheetTrigger>
                            <Menu
                                size={24}
                                className="text-primary"
                            />
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="bg-secondary overflow-auto"
                        >
                            <SheetHeader>
                                <SheetDescription
                                    className="my-10"
                                >
                                    <p className="leading-8">
                                        Driven, innovative Software Engineer with more than 5 years of experience in the development of software and solutions. A conscientious person who pays attention to details.
                                    </p>
                                    <Separator
                                        className="my-10"
                                    />
                                    <ul
                                        className="grid grid-cols-3 gap-5 font-semibold"
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
                                    <p className="uppercase mb-5">Find me</p>
                                    <SocialLinks />
                                    <Separator
                                        className="my-10"
                                    />
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}