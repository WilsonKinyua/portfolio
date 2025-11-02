import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LampDesk, Laptop, Phone, School, Sun, University, Warehouse } from "lucide-react"
import { Separator } from "./ui/separator"
export default function Experience() {
    return (
        <Tabs defaultValue="experience" className="w-full">
            <TabsList className="flex justify-between lg:py-10 py-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
                <div className="grid gap-5">
                    <div className="p-5">
                        <ol className="relative border-s-4 border-primary-foreground">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Laptop className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Belva Digital</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Senior Frontend Developer</span>
                                                <time className="block text-sm text-primary/90">Jan 2025 - Present</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led the development of scalable and responsive frontend applications using Next.js, Vue.js, TypeScript, and Tailwind CSS, enhancing user experience and improving page load times by 35%.
                                                </li>
                                                <li>
                                                    Collaborated with UI/UX designers using Figma to convert wireframes and prototypes into accessible, high-performance web interfaces.
                                                </li>
                                                <li>
                                                    Optimized frontend codebase and applied performance monitoring tools to resolve bottlenecks, resulting in a 25% boost in Lighthouse performance scores.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Phone className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Paya Finance (Ventures Ltd)</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Chief Technology Officer</span>
                                                <time className="block text-sm text-primary/90">Jan 2024 - Jun 2024</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led the development and launch of a new financial platform, increasing user engagement by 50% and contributing to 30% revenue growth.
                                                </li>
                                                <li>
                                                    Developed a comprehensive technical roadmap, ensuring scalability, security, and efficiency.
                                                </li>
                                                <li>
                                                    Directed and mentored a diverse team of engineers, fostering continuous learning and improvement.
                                                </li>
                                                <li>
                                                    Spearheaded R&D initiatives to keep the company at the forefront of industry trends.
                                                </li>
                                                <li>
                                                    Oversaw the entire product development lifecycle, ensuring high-quality deliverables.
                                                </li>
                                                <li>
                                                    Optimized operational processes, improving efficiency and reducing costs.
                                                </li>
                                                <li>
                                                    Established robust security protocols and compliance frameworks.
                                                </li>
                                                <li>
                                                    Negotiated and managed relationships with technology vendors and partners.
                                                </li>
                                                <li>
                                                    Supported business development efforts, contributing to a 30% revenue increase through new products and services.
                                                </li>
                                            </ol>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Senior Frontend Engineer (Android & iOS)</span>
                                                <time className="block text-sm text-primary/90">Oct 2023 - Dec 2023</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Developed user-centric mobile applications, improving customer retention rates by 20%.
                                                </li>
                                                <li>
                                                    Led seamless API integration with financial partners, enhancing system interoperability and data security.
                                                </li>
                                                <li>
                                                    Optimized mobile app performance, supporting a 50% increase in user base.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <School className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:lg:text-lg font-bold text-primary">Moringa School</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Senior Software Engineer</span>
                                                <time className="block text-sm text-primary/90">May 2022 - Sept 2023</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led classroom activities, ensuring student success and managing daily routines.
                                                </li>
                                                <li>
                                                    Maintained student tracking systems and developed plans for student success.
                                                </li>
                                                <li>
                                                    Handled disciplinary issues, fostering a positive learning environment.
                                                </li>
                                                <li>
                                                    Achieved mastery in technical mentorship, continuously improving classroom structure and curriculum.
                                                </li>
                                                <li>
                                                    Committed to personal professional growth through continuous learning.
                                                </li>
                                                <li>
                                                    Conducted extensive training sessions in frontend and backend development.
                                                </li>
                                                <li>
                                                    Designed and implemented a new software development curriculum, achieving a 90% job placement rate for graduates.
                                                </li>
                                                <li>
                                                    Initiated project-based learning, significantly improving students&apos; practical skills.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <LampDesk className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:lg:text-lg font-bold text-primary">Weza Prosoft Limited</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Full Stack Engineer</span>
                                                <time className="block text-sm text-primary/90">Jun 2021 - April 2022</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Developed a web application using Next.js and Django, enhancing user engagement by 25%.
                                                </li>
                                                <li>
                                                    Integrated automated testing frameworks, reducing bugs by 20%.
                                                </li>
                                                <li>
                                                    Implemented robust server-side applications using Python, Django, and Flask.
                                                </li>
                                                <li>
                                                    Designed and managed databases using PostgreSQL.
                                                </li>
                                                <li>
                                                    Automated deployment processes using CI/CD pipelines.
                                                </li>
                                                <li>
                                                    Built RESTful APIs to support front-end functionality.
                                                </li>
                                                <li>
                                                    Collaborated with product managers to align development initiatives with business objectives.
                                                </li>
                                            </ol>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Frontend Engineer</span>
                                                <time className="block text-sm text-primary/90">Oct 2020 - May 2021</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led the development of a scalable web application using Next.js, increasing system efficiency by 30%.
                                                </li>
                                                <li>
                                                    Implemented automated testing frameworks, reducing bugs by 20%.
                                                </li>
                                                <li>
                                                    Coordinated with product management, resulting in a 25% increase in customer satisfaction.
                                                </li>
                                                <li>
                                                    Championed a continuous learning culture, organizing monthly technical workshops.
                                                </li>
                                                <li>
                                                    Developed interactive web applications using JavaScript and React.js.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Laptop className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Brance Technologies</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Back End Developer</span>
                                                <time className="block text-sm text-primary/90">Aug 2018 - June 2020</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Launched a full-stack web application using PHP/Laravel, supporting over 2,000 users.
                                                </li>
                                                <li>
                                                    Automated deployment processes, reducing downtime by 40%.
                                                </li>
                                                <li>
                                                    Developed APIs, improving application functionality and user satisfaction.
                                                </li>
                                                <li>
                                                    Maintained server-side applications using Laravel PHP framework.
                                                </li>
                                            </ol>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Frontend Engineer</span>
                                                <time className="block text-sm text-primary/90">Feb 2018 - July 2018</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Developed responsive web pages using HTML, CSS, and Bootstrap.                                                </li>
                                                <li>
                                                    Utilized JavaScript and React.js to develop dynamic components.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                        </ol>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="education">
                <div className="p-5">
                    <ol className="relative border-s-4 border-primary-foreground">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                <University className="w-4 h-4 text-white" />
                            </span>
                            <Card className={`card-glassmorphism p-2`}>
                                <CardHeader>
                                    <CardDescription>
                                        <p className="flex items-center lg:text-lg font-bold text-primary">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
                                        <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                            <span>Bachelor of Science Information Technology</span>
                                            <time className="block text-sm text-primary/90">Jan 2018 - Dec 2021</time>
                                        </p>
                                        <Separator className="my-5 bg-primary" />
                                        <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                                            <li>
                                                Specialized in software development and network systems, achieving a comprehensive understanding of IT infrastructures.
                                            </li>
                                            <li>
                                                Participated in various tech-driven group projects, enhancing collaborative skills and technical knowledge.
                                            </li>
                                            <li>
                                                Graduated with honors, demonstrating strong academic performance and a commitment to the field of technology.
                                            </li>
                                        </ol>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                <School className="w-4 h-4 text-white" />
                            </span>
                            <Card className={`card-glassmorphism p-2`}>
                                <CardHeader>
                                    <CardDescription>
                                        <p className="flex items-center lg:text-lg font-bold text-primary">Moringa School</p>
                                        <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                            <span>Software Development <i>(advancing)</i></span>
                                            <time className="block text-sm text-primary/90">May 2021 - Dec 2021</time>
                                        </p>
                                        <Separator className="my-5 bg-primary" />
                                        <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                                            <li>
                                                Completed an intensive, project-based training program focusing on full-stack software development.
                                            </li>
                                            <li>
                                                Gained hands-on experience with modern web technologies and software engineering principles.
                                            </li>
                                            <li>
                                                Collaborated on multiple team projects, simulating real-world software development scenarios.- Completed an intensive, project-based training program focusing on full-stack software development. - Gained hands-on experience with modern web technologies and software engineering principles. - Collaborated on multiple team projects, simulating real-world software development scenarios.
                                            </li>
                                        </ol>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </li>
                    </ol>
                </div>
            </TabsContent>
        </Tabs>
    )
}