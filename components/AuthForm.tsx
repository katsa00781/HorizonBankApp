'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUp, signIn, getLoggedInUser } from '@/lib/actions/user.actions';




const AuthForm = ({ type }: { type: string }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    

    const formSchema = authFormSchema(type);
    const router = useRouter();
    

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setisLoading(true);
        try {
            // Sign up with Appwrite & create plaid token

            if (type === 'sign-up') {
                const newUser = await signUp(data);

                setUser(newUser);
                }

            if (type === 'sign-in') {
                const response = await signIn({
                 email: data.email,
                password: data.password,
                })

                   if(response) router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setisLoading(false);
        }
    }


    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                </Link>
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-600'>
                        {/*  feltétel ? = ha igaz := ha hamis  */}
                        {user
                            ? 'Felhasználó'
                            : type === 'sign-in'
                                ? 'Bejelentkezés'
                                : 'Regisztráció'}
                        <p className='text-16 font-normal text-gray-600'>
                            {user
                                ? "Már van felhasználói fiókod."
                                : "Kérlek add meg az adataidat."}
                        </p>
                    </h1>
                </div>
            </header>
            {user
                ? (
                    <div className=' flex flex-col gap-4'>
                        {/* PlaidLink */}
                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                                {type === 'sign-up' && (
                                    <>
                                        <div className='flex gap-4'>
                                            <CustomInput
                                                control={form.control}
                                                name="firstName"
                                                placeholder="Vezetéknév"
                                                label="Vezetéknév" />
                                            <CustomInput
                                                control={form.control}
                                                name="lastName"
                                                placeholder="Keresztnév"
                                                label="Keresztnév" />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomInput
                                                control={form.control}
                                                name="address"
                                                placeholder="Add meg a címedet"
                                                label="Cím" />
                                            <CustomInput
                                                control={form.control}
                                                name="city"
                                                placeholder="Add meg a városod"
                                                label="Város" />

                                        </div>

                                        <div className='flex gap-4'>
                                            <CustomInput
                                                control={form.control}
                                                name="state"
                                                placeholder="pl: Tolna"
                                                label="megye" />
                                            <CustomInput
                                                control={form.control}
                                                name="postalCode"
                                                placeholder="pl.: 1100"
                                                label="irányítószám" />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomInput
                                                control={form.control}
                                                name="birthDate"
                                                placeholder="ÉÉÉÉ-HH-NN"
                                                label="Születési adata" />
                                            <CustomInput
                                                control={form.control}
                                                name="taj"
                                                placeholder="xxx-xxx-xxx"
                                                label="TAJ szám" />
                                        </div>
                                    </>
                                )}



                                <CustomInput
                                    control={form.control}
                                    name="email"
                                    placeholder="Add meg a felhasználónevedet"
                                    label="Felhasználónév" />

                                <CustomInput
                                    control={form.control}
                                    name="password"
                                    placeholder="Add meg a jelszavad"
                                    label="Jelszó" />

                                <div className='flex flex-col gap-4'>
                                    <Button type="submit" className='form-btn' disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> &nbsp;
                                                Bejelentkezés...
                                            </>
                                        )
                                            : type === 'sign-in' ? 'Bejelentkezés' : 'Regisztráció'
                                        }
                                    </Button>
                                </div>


                            </form>
                        </Form>

                        <footer className='flex justify-center gap-1'>
                            <p className='text-14 font-normal text-gray-600'>
                                {type === 'sign-in'
                                    ? 'Még nincs felhasználói fiókod?'
                                    : 'Van felhasználói fiókod?'}
                            </p>

                            <Link href={type === "sign-in" ? '/sign-up' : '/sign-in'} className="form-link">
                                {type === 'sign-in' ? 'Regisztráció' : 'Bejelentkezés'}
                            </Link>


                        </footer>
                    </>

                )}
        </section>
    )
}

export default AuthForm