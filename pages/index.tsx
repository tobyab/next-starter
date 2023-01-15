import type { NextPage } from "next"
import Head from "next/head"
import Counter from "../components/counter"

const Home: NextPage = () => {
    return (
        <div className="grid h-screen place-items-center">
            <Head>
                <title>Next starter</title>
                <meta name="description" content="Next.js, Tailwind and Typescript starter" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="space-y-4">
                <h1 className="text-4xl font-semibold">Hello, world</h1>
                <h2>Next.js, TypeScript and Tailwind are all ready to go!</h2>
                <Counter/>
            </div>
        </div>
    )
}

export default Home
