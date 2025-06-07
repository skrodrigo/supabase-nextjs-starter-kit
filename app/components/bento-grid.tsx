import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function BentoGrid() {
    return (
        <section className="py-10 bg-zinc-50">
            <div className="mx-auto container px-6 max-w-7xl">
                <div className="flex justify-center mb-8">
                    <Badge variant="secondary" className="mb-2 border border-zinc-200">
                        Funcionalidades
                    </Badge>
                </div>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Funcionalidades</h2>
                    <p className="text-muted-foreground">Aqui estão as funcionalidades que você pode utilizar para melhorar sua experiência.</p>
                </div>
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <p className="font-medium">Advanced tracking system</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps..</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">


                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <Image
                                    src="/mail2.webp"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929}
                                />
                                <Image
                                    src="/mail2.webp"
                                    className=" dark:hidden"
                                    alt="payments illustration light"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">Advanced UX, Instantly locate all your assets.</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <Image
                                        src="/origin-cal.webp"
                                        className="hidden dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/origin-cal.webp"
                                        className=" dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group p-6 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">Advanced UX, Instantly locate all your assets.</p>

                        <div className="flex justify-center gap-6">
                            <div className="inset--none dark:inset--white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 -lg ring dark:-white/5 dark:ring-black">
                                <span className="absolute right-2 top-1 block text-sm">fn</span>
                                <Globe className="mt-auto size-4" />
                            </div>
                            <div className="inset--none dark:inset--white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 -lg ring dark:-white/5 dark:ring-black">
                                <span>K</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="group relative sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <p className="font-medium">Advanced tracking system</p>
                            <p className="text-muted-foreground mt-2 max-w-sm text-sm">Quick AI lives a single hotkey away apps..</p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/linear.svg"
                                        alt="Linear logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                                        alt="Netlify logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <img
                                        className="m-auto size-8 invert dark:invert-0"
                                        src="https://oxymor-ns.tailus.io/logos/github.svg"
                                        alt="github logo"
                                        width="32"
                                        height="32"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
