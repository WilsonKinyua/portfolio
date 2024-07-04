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
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="p-5">
                        <ol className="relative border-s-4 border-primary-foreground">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <LampDesk className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:lg:text-lg font-bold text-primary">Weza Prosoft Limited</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Software Engineer</span>
                                                <time className="block text-sm text-primary/90">Oct 2020 - Now</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led the development and deployment of a scalable web application using Next.js, resulting in a 30% increase in system efficiency and significantly enhancing user engagement.
                                                </li>
                                                <li>
                                                    Implemented automated testing frameworks that reduced bugs by 20% and streamlined the release cycle, enhancing product reliability.
                                                </li>
                                                <li>
                                                    Coordinated with product management to align development initiatives with business goals, resulting in a 25% increase in customer satisfaction through targeted feature enhancements.
                                                </li>
                                                <li>
                                                    Championed a continuous learning culture within the team, organizing monthly technical workshops that contributed to a 15% improvement in team skill levels.
                                                </li>
                                                <li>
                                                    Diagnosed software issues, identified root causes, and proposed effective solutions to ensure the smooth operation of the software.
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
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Paya Ventures Ltd</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>SoftwareEngineer/CTO</span>
                                                <time className="block text-sm text-primary/90">Feb 2023 - Feb 2024</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Developed user-centric mobile applications for Android and iOS, resulting in a
                                                    20% improvement in customer retention rates through enhanced user experience
                                                    and functionality.
                                                </li>
                                                <li>
                                                    Led seamless API integration with financial partners, enhancing system
                                                    interoperability and data security, thereby fostering user trust and compliance
                                                    with financial regulations.
                                                </li>
                                                <li>
                                                    Spearheaded compliance initiatives to meet standards set by the Central Bank of
                                                    Kenya, ensuring legal compliance and fostering trust with stakeholders.
                                                </li>
                                                <li>
                                                    Optimized mobile app performance, achieving faster load times and scalability,
                                                    supporting a 50% increase in user base.
                                                </li>
                                                <li>
                                                    Conducted user experience research and feedback sessions, integrating findings
                                                    into development processes to align with user needs and expectations.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <School className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Moringa School</p>
                                            <p className="flex items-center justify-between my-5 font-semibold text-xs">
                                                <span>SoftwareEngineer</span>
                                                <time className="block text-sm text-primary/90">May 2022 - Sep 2023</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Led the design and delivery of a comprehensive software development curriculum, enhancing the technical proficiency of over 200 students.
                                                </li>
                                                <li>
                                                    Provided personalized mentorship and conducted weekly progress reviews, contributing to a 90% success rate of students entering the tech industry.
                                                </li>
                                                <li>
                                                    Initiated and led project-based learning approaches, significantly improving practical skills and problem-solving abilities among students.
                                                </li>
                                                <li>
                                                    Fostered a collaborative learning environment that encouraged innovation and the practical application of skills, resulting in three student-led projects being adopted by local businesses.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                        </ol>
                    </div>
                    <div className="p-5">
                        <ol className="relative border-s-4 border-primary-foreground">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Laptop className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Brance Technologies</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Full Stack Engineer</span>
                                                <time className="block text-sm text-primary/90">Jan 2022 - Mar 2022</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Engineered and launched a full-stack web application using PHP/Laravel, serving as the cornerstone for the company’s operations and supporting over 2,000 active users.
                                                </li>
                                                <li>
                                                    Automated deployment processes using CI/CD principles, resulting in a 40% reduction in downtime and enhanced deployment efficiency.
                                                </li>
                                                <li>
                                                    Developed and integrated APIs that enhanced application functionality and user satisfaction through improved service delivery.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Warehouse className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Premiersoft Technologies</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Full Stack Engineer</span>
                                                <time className="block text-sm text-primary/90">Oct 2020 - Mar 2021</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Owned the full project lifecycle of a web application from architecture to deployment, ensuring robustness and scalability.
                                                </li>
                                                <li>
                                                    Implemented a microservices architecture that enhanced the modularity and scalability of the application, enabling easier updates and maintenance.
                                                </li>
                                                <li>
                                                    Conducted comprehensive performance optimizations post-deployment, ensuring sustained application performance under increased load conditions.
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Sun className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Korean Kenya Solar Limited</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Full Stack Engineer</span>
                                                <time className="block text-sm text-primary/90">Sep 2020 - Oct 2020</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Involved in developing and implementing the web application using RESTful APIs (Laravel + Angular)
                                                </li>
                                                <li>
                                                    Took full-service ownership constantly monitoring web transactions, error rates and data quality to identify, and prioritize problems
                                                </li>
                                                <li>
                                                    Collaborated with the design team on developing microservices
                                                </li>
                                                <li>
                                                    Wrote technical documents and user guides
                                                </li>
                                            </ol>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary animate-bounce">
                                    <Sun className="w-4 h-4 text-white" />
                                </span>
                                <Card className={`card-glassmorphism p-2`}>
                                    <CardHeader>
                                        <CardDescription>
                                            <p className="flex items-center lg:text-lg font-bold text-primary">Web Cloud Ltd Kenya</p>
                                            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
                                                <span>Frontend Engineer</span>
                                                <time className="block text-sm text-primary/90">Jan 2020 - Feb 2020</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Designed and implemented high-performance web services, significantly
                                                    enhancing the scalability and responsiveness of business applications.                                                </li>
                                                <li>
                                                    Established Continuous Integration Testing frameworks, ensuring high-quality
                                                    software delivery and reducing regression issues.
                                                </li>
                                                <li>
                                                    Collaborated closely with cross-functional teams to define and achieve project
                                                    objectives, leading to the successful launch of three major project deliverables.
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
                                            <span>Software Development</span>
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