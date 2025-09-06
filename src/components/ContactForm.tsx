"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { spaceClass } from "@/lib/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
const ContactForm = () => {
    const t = useTranslations('form')
    const common = useTranslations()

    const formSchema = z.object({
        fullName: z.string().min(2, {
            message: t('your_name_min'),
        }),
        phoneNumber: z
            .string()
            .min(6, {
                message: t('phone_min'),
            })
            .regex(/^\+(\d{1,3})[-\s]?(\d{6,12})$/, {
                message: t('phone_format'),
            }),
        email: z.string().email({
            message: t('invalid_email'),
        }),
        projectType: z.string().min(2, {
            message: t('company_name_min'),
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            projectType: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: common('contact_message')
        });
        form.reset()
    }


    return (
        <div className="bg-[var(--dark-red)]">
            <div className="container mx-auto lg:p-6 !text-white">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-20 p-3 relative pb-24">
                            <div className="flex flex-col gap-10 text-3xl font-bold lg:w-4/5">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder={t('your_name')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder={t('email')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder={t('phone_number')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="projectType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger aria-invalid={!!form.formState.errors.projectType} >
                                                        <SelectValue placeholder={t('project_type')} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>{t("project_type")}</SelectLabel>
                                                            <SelectItem value="two_d_animation">{common("project_types.two_d_animation")}</SelectItem>
                                                            <SelectItem value="three_d_animation">{common("project_types.three_d_animation")}</SelectItem>
                                                            <SelectItem value="media_production">{common("project_types.media_production")}</SelectItem>
                                                            <SelectItem value="creative_solutions">{common("project_types.creative_solutions")}</SelectItem>
                                                            <SelectItem value="film_making_production">{common("project_types.film_making_production")}</SelectItem>

                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    variant="link"
                                    size="lg"
                                    className="justify-center w-full"
                                >
                                    {common('submit')}
                                </Button>
                            </div>
                            <div className="bg-[url('/images/contact_bg.webp')] bg-contain bg-no-repeat bg-center">
                                <div className="w-1/2 mx-auto text-end">
                                    <div className="text-7xl">{t('contact')}</div>
                                    <div className="text-7xl relative after:absolute after:top-1/2 after:start-10 after:w-32 after:h-1 after:bg-white">{t('us')}</div>
                                </div>
                                <p className={`mt-24 text-center ${spaceClass}`}>{t('description')}</p>
                            </div>
                            <Image src="/images/character.webp" className="absolute bottom-0 left-2/5" width={200} height={220} alt="Character" />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default ContactForm;
