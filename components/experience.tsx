import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LampDesk, Laptop, Phone, School, Sun, Warehouse } from "lucide-react"
import { Separator } from "./ui/separator"
export default function Experience() {
    return (
        <Tabs defaultValue="experience" className="w-full">
            <TabsList className="flex justify-between py-10">
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
                                            <p className="flex items-center text-lg font-bold text-primary">Weza Prosoft Limited</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>Software Engineer</span>
                                                <time className="block text-sm text-primary/90">Oct 2020 - PRESENT</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                                                <li>
                                                    Using web frameworks such as next js or laravel etc to create and deploy the web application.
                                                </li>
                                                <li>
                                                    Develop new features and infrastructure in order to meet quickly changing business and project needs.
                                                </li>
                                                <li>
                                                    Maintain high standards of code quality and smart application design to ensure application performance, uptime, and scale.
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
                                            <p className="flex items-center text-lg font-bold text-primary">Paya Ventures Ltd</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>CTO/Software Engineer</span>
                                                <time className="block text-sm text-primary/90">Feb 2023 - Feb 2024</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Develop and maintain the mobile application for Paya. Through this, I was able to ensure that the application is user-friendly, easy to use, and meets the needs of Paya's customers.
                                                </li>
                                                <li>
                                                    Work on API integration: Work on the integration of APIs from different partners, such as ChoiceBank, TransUnion, and Mono. Was able to work with these partners to ensure that the integration is seamless.
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
                                            <p className="flex items-center text-lg font-bold text-primary">Moringa School</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>Technical Mentor/Trainer</span>
                                                <time className="block text-sm text-primary/90">May 2022 - Sep 2023</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Facilitating daily standups, and lab classes, and providing technical mentorship to students in a classroom setting.
                                                </li>
                                                <li>
                                                    Supporting student growth through labs and practice sessions, and providing timely and effective feedback on their work and assessments.
                                                </li>
                                                <li>
                                                    Supporting student development through one-on-one mentoring.
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
                                            <p className="flex items-center text-lg font-bold text-primary">Brance Technologies</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>Full Stack Developer</span>
                                                <time className="block text-sm text-primary/90">Jan 2022 - Mar 2022</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
                                                <li>
                                                    Design and implement scalable web services, applications, and APIs using Javascript and Laravel.
                                                </li>
                                                <li>
                                                    Structure system requirements and suggest a testing and development roadmap.
                                                </li>
                                                <li>
                                                    Set up Continuous Integration Testing and testing to guard against regression of the codebase.
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
                                            <p className="flex items-center text-lg font-bold text-primary">Premiersoft Technologies</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>Full Stack Developer</span>
                                                <time className="block text-sm text-primary/90">Oct 2020 - Mar 2021</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Develop and implement the company's web application using PHP/Laravel
                                                </li>
                                                <li>
                                                    Develop new features and infrastructure development in support of rapidly emerging businesses and
                                                    project requirements
                                                </li>
                                                <li>
                                                    Ensure application performance, uptime, and scale, maintaining high standards of code quality and
                                                    thoughtful application design
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
                                            <p className="flex items-center text-lg font-bold text-primary">Korean Kenya Solar Limited</p>
                                            <p className="flex items-center justify-between my-5 font-semibold">
                                                <span>Full Stack Developer</span>
                                                <time className="block text-sm text-primary/90">Sep 2020 - Oct 2020</time>
                                            </p>
                                            <Separator className="my-5 bg-primary" />
                                            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm italic">
                                                <li>
                                                    Involved in developing and implementing the web application using RESTful APIs (Laravel
                                                    +Angular)
                                                </li>
                                                <li>
                                                    Took full-service ownership constantly monitoring web transactions, error rates, and data quality
                                                    to identify, and prioritize problems
                                                </li>
                                                <li>
                                                    Collaborated with the design team on developing micro-services
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
            <TabsContent value="education">Make changes to your account here.</TabsContent>
        </Tabs>
    )
}