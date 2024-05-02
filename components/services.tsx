import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleCheck, Code, Component, Globe, Phone, TabletSmartphone, Users, Wallet } from "lucide-react";
export default function Services() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <Globe
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        Web Development
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Modern and mobile-ready website
                    that will help you reach all of your
                    marketing.
                </CardContent>
            </Card>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <Component
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        UI/UX Design
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Create intuitive interfaces and
                    delightful user experiences by blending
                    aesthetics with usability.
                </CardContent>
            </Card>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <TabletSmartphone
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        APP DEVELOPMENT
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Modern and mobile-ready application
                    that will help you reach all
                    of your marketing.
                </CardContent>
            </Card>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <Code
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        API design / Integration
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Developing a highly secure,
                    fast and scalable APIs both
                    REST and GraphQL.
                </CardContent>
            </Card>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <Wallet
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        Payment Integration
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Automate the process of payments
                    to allow users pay right on your platform
                </CardContent>
            </Card>
            <Card className='text-center'>
                <CardHeader>
                    <CardTitle>
                        <Users
                            size={40}
                            className="text-primary mx-auto"
                        />
                    </CardTitle>
                    <CardDescription
                        className="text-white uppercase font-bold pt-5"
                    >
                        Mentorship
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Finds great joy in sharing my knowledge
                    with others. As a technical mentor this
                    allows me to give back to the community.
                </CardContent>
            </Card>
        </div>
    )
}