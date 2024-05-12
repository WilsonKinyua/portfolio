"use client"
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { sendEmail } from "@/lib/actions";
export default function Hire() {
    const [transition, startTransition] = useTransition();
    const [formState, setFormState] = useState({
        fullName: '',
        emailAddress: '',
        message: '',
    });
    const [error, setError] = useState({
        fullName: false,
        emailAddress: false,
        message: false,
    });
    return (
        <form
            className="mt-5 space-y-2"
            onSubmit={(e) => {
                e.preventDefault();
                if (!formState.fullName) {
                    setError({ ...error, fullName: true });
                    toast({
                        description: "Please fill in your full name",
                        variant: "destructive",
                    });
                    return false;
                } else if (!formState.emailAddress) {
                    setError({ ...error, emailAddress: true });
                    toast({
                        description: "Please fill in your email address",
                        variant: "destructive",
                    });
                    return false;
                } else if (!formState.message) {
                    setError({ ...error, message: true });
                    toast({
                        description: "Please fill in your message",
                        variant: "destructive",
                    });
                    return false;
                }

                startTransition(async () => {
                    const sendNotification = await sendEmail(formState.fullName, formState.emailAddress, formState.message);
                    if (sendNotification.error) {
                        toast({
                            title: "Error",
                            description: "An error occurred while sending your message. Please try again later.",
                            variant: "destructive",
                        });
                        return;
                    }
                    setFormState({
                        fullName: '',
                        emailAddress: '',
                        message: '',
                    });
                    setError({
                        fullName: false,
                        emailAddress: false,
                        message: false,
                    });
                    toast({
                        title: "Message Sent",
                        description: "Thank you for reaching out to me. I will get back to you as soon as possible.",
                    })
                });
            }}
        >
            <div className='space-y-4'>
                <Label htmlFor="fullName" className='font-semibold'>Full Name{" "}<span className="text-primary">*</span></Label>
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Tery Humfy D. Tawez"
                    onChange={(e) => {
                        setFormState({ ...formState, fullName: e.target.value });
                    }}
                    className={error.fullName ? 'border-primary' : ''}
                    value={formState.fullName}
                    disabled={transition}
                />
                {error.fullName && <p className="text-primary text-sm">Please fill in your full name</p>}
            </div>
            <div className='space-y-4'>
                <Label htmlFor="emailAddress" className='font-semibold'>Email Address{" "}<span className="text-primary">*</span></Label>
                <Input
                    id="emailAddress"
                    type="email"
                    placeholder="tery@humfy.com"
                    onChange={(e) => {
                        setFormState({ ...formState, emailAddress: e.target.value });
                    }}
                    className={error.emailAddress ? 'border-primary' : ''}
                    value={formState.emailAddress}
                    disabled={transition}
                />
                {error.emailAddress && <p className="text-primary text-sm">Please fill in your email address</p>}
            </div>
            <div className='space-y-4 mt-4 pb-6'>
                <Label htmlFor="message" className='font-semibold'>Message{" "}<span className="text-primary">*</span></Label>
                <Textarea
                    id="message"
                    placeholder="Write your message..."
                    onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                    }}
                    className={error.message ? 'border-primary' : ''}
                    value={formState.message}
                    disabled={transition}
                />
                {error.message && <p className="text-primary text-sm">Please fill in your message</p>}
            </div>
            <Button
                variant={"default"}
                className="w-full"
                type='submit'
                disabled={transition}
            >
                Hit Me Up {transition && <Loader size={20} className="animate-spin ml-2" />}
            </Button>
        </form>
    )
}