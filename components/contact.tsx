import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Button } from "./ui/button";
import { Send } from "lucide-react";
export default function Contact() {
    const [formState, setFormState] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState({
        fullName: false,
        emailAddress: false,
        message: false,
    });
    return (
        <form
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

                toast({
                    title: "Message Sent",
                    description: "Thank you for reaching out to me. I will get back to you as soon as possible.",
                })
            }}
        >
            <div className="grid lg:grid-cols-2 gap-5">
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
                    />
                    {error.emailAddress && <p className="text-primary text-sm">Please fill in your email address</p>}
                </div>
                <div className='space-y-4'>
                    <Label htmlFor="phoneNumber" className='font-semibold'>Phone Number</Label>
                    <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+254 712 345 678"
                        onChange={(e) => {
                            setFormState({ ...formState, phoneNumber: e.target.value });
                        }}
                    />
                </div>
                <div className='space-y-4'>
                    <Label htmlFor="subject" className='font-semibold'>Subject</Label>
                    <Input
                        id="subject"
                        type="text"
                        placeholder="I have a project for you"
                        onChange={(e) => {
                            setFormState({ ...formState, subject: e.target.value });
                        }}
                    />
                </div>
            </div>
            <div className='space-y-4 mt-4'>
                <Label htmlFor="message" className='font-semibold'>Message{" "}<span className="text-primary">*</span></Label>
                <Textarea
                    id="message"
                    placeholder="Write your message..."
                    onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                    }}
                    className={error.message ? 'border-primary' : ''}
                />
                {error.message && <p className="text-primary text-sm">Please fill in your message</p>}
            </div>
            <Button
                variant={"default"}
                className="lg:w-auto w-full mt-10"
                type='submit'
            >
                Send Message <Send size={18} className="ml-2" />
            </Button>
        </form>
    )
}