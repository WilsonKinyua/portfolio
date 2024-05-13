"use client"
import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
export default function Projects() {
    const projects = [
        {
            title: 'Mount Kenya Wildlife Conservancy (MKWC)',
            type: 'Website / CMS',
            description: 'A non-profit trust dedicated to preserving the environment and the wildlife within. For 20 years, the MKWC has served as a beacon of conservation, preserving and protecting nature\'s beauty and wildlife for present and future generations.',
            image: '/img/projects/1.png',
            link: 'https://mountkenyawildlifeconservancy.org',
            imagePosition: 'left',
        },
        {
            title: 'QNET Say NO! campaign',
            type: 'Website',
            description: 'A website to mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.',
            image: '/img/projects/2.png',
            link: 'https://saynocampaign.org/',
            imagePosition: 'right',
        },
        {
            title: 'Third African Congress on Conservation Agriculture (3ACCA)',
            type: 'Web App / CMS',
            description: 'A Congress for building a Resilient Future in Africa through Conservation Agriculture and Sustainable Mechanisation.',
            image: '/img/projects/3.png',
            link: 'https://africacacongress.org/',
            imagePosition: 'left',
        },
        {
            title: 'Wilson Kinyua Portfolio',
            type: 'UI/UX Design(Figma)',
            description: 'A portfolio website to showcase my work and skills.',
            image: '/img/projects/6.png',
            link: 'https://www.figma.com/proto/qZamuTJoDF7IT96EL1iBcA?node-id=0-1&t=o97YJSuOXGST2RQG-6',
            imagePosition: 'right',
        },
        {
            title: 'Paya Finance',
            type: 'Mobile Application (IOS, Android)',
            description: 'Paya lets you open a bank account in minutes and send money to anyone in seconds. Pay bills, make purchases, and transfer money with the Paya app.',
            image: '/img/projects/4.png',
            link: 'https://play.google.com/store/apps/details?id=com.paya.paya&pcampaignid=web_share',
            imagePosition: 'left',
        },
        {
            title: 'The Newmark Group Limited',
            type: 'Website / CMS',
            description: 'A leading African Integrated Marketing Communications (IMC) firm that ranks among the fastest growing with a strong presence in the Multinational Brand segment of the market.',
            image: '/img/projects/5.png',
            link: 'https://newmark-imc.com/',
            imagePosition: 'right',
        },
    ]
    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center my-20">
                    <Card
                        className={`bg-transparent border-2 border-primary-foreground ${project.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2 order-1'}`}
                    >
                        <CardHeader>
                            <CardDescription>
                                <Image
                                    src={project.image}
                                    alt="Javascript"
                                    width={50}
                                    height={50}
                                    className={`w-full object-contain ${project.title === 'Paya Finance' ? 'h-96' : 'h-full'}`}
                                />
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <div
                        className={`${project.imagePosition === 'left' ? 'order-2' : 'order-1'}`}
                    >
                        <p className="text-primary uppercase">
                            {project.type}
                        </p>
                        <h4
                            className="lg:text-4xl text-2xl my-5 font-bold hover:text-primary transition duration-500"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h4>
                        <p className="leading-10">
                            {project.description}
                        </p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ArrowUpRight
                                            className="text-primary h-14 w-14 border-2 border-primary rounded-full p-2 my-5 hover:bg-primary hover:text-white transition duration-500"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    View Project
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            ))}
        </>
    )
}