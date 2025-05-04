"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Script from "next/script";

// FAQ data
const faqs = [
    {
        question: "What services do you offer as a Software Engineer?",
        answer: "I offer a comprehensive range of software engineering services including frontend development with React.js and Next.js, backend development with Node.js, Python, and PHP, mobile app development, UI/UX design, and technical mentorship. My focus is on delivering high-quality, scalable, and maintainable solutions."
    },
    {
        question: "How many years of experience do you have in software development?",
        answer: "I have over 6 years of professional experience in software development, working across various industries and technologies. During this time, I've led projects that significantly improved business metrics, such as developing a financial mobile app that increased customer retention by 20%."
    },
    {
        question: "What technologies and programming languages do you specialize in?",
        answer: "I specialize in modern web technologies including JavaScript, TypeScript, React.js, Next.js, Node.js, Python, PHP, and Laravel. I'm also experienced in mobile development frameworks and UI/UX design tools like Figma."
    },
    {
        question: "Can you help with both frontend and backend development?",
        answer: "Yes, I'm a full-stack developer with expertise in both frontend and backend development. I can architect complete solutions from database design to user interface implementation, ensuring seamless integration between all system components."
    },
    {
        question: "Do you provide ongoing maintenance and support after project completion?",
        answer: "Absolutely. I believe in building long-term relationships with clients and providing continuous support. I offer ongoing maintenance, bug fixes, feature enhancements, and performance optimization to ensure your software remains effective and up-to-date."
    },
    {
        question: "How do you approach project deadlines and communication?",
        answer: "I maintain transparent communication throughout the project lifecycle with regular updates. I'm committed to meeting deadlines by carefully planning project milestones, identifying potential roadblocks early, and maintaining efficient workflows."
    },
    {
        question: "Are you available for freelance or contract work?",
        answer: "Yes, I'm available for freelance and contract opportunities. I can work remotely or on-site depending on the project requirements and can adjust to different time zones for effective collaboration."
    }
];

export default function FAQ() {
    return (
        <div className="my-10">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base leading-7">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* FAQ Structured Data for SEO */}
            <Script id="faq-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />
        </div>
    );
}