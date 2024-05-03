import { galada } from "@/lib/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary-foreground py-5">
            <div className="container max-auto">
                <div className="lg:flex justify-between lg:text-left text-center font-semibold">
                    <p>
                        Copyright © {new Date().getFullYear()}, <Link href={"/"} className={`${galada.className} text-primary`}>Wilson Kinyua.</Link> All Rights Reserved
                    </p>
                    <div>
                        <ul className="lg:flex hidden space-x-5">
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
                    </div>
                </div>
            </div>
        </footer>
    )
}