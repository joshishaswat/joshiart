import "../index.css"
import Header from '../header'
import Footer from '../footer'

function AboutMe() {
    return (
        <div>
        <section className="bg-slate-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-100">Welcome To My Art World</h1>
                <h3 className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400">Chapel Hill, NC</h3>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">My work revolves around impressionistic, contemporary and figurative art.</p>
                <a href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Return to Store
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    See Sold Works
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://res.cloudinary.com/doc2bxwod/image/upload/f_auto,q_auto/cgvstzozyrpbysbxqe0m" alt="mockup" />
            </div>                
            </div>
        </section>
        <section className="bg-white py-8 antialiased md:py-12">
            <div>
                <h2 className="text-stone-950 text-l font-semibold text-center mb-8">Sold Works</h2>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
            
                <div className="rounded-lg border-gray-200 bg-white p-2 shadow-md">
                    <div className="h-56 w-full">
                    <a>
                        <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721334606/winter_cabin_lake_1_hug0wn.png" alt="" />
                    </a>
                    </div>
            
                    <div className="pt-3">
                    <a className="text-lg font-semibold leading-tight text-gray-900">Winter House with Lake</a>
            
                    <div className="mb-1 flex items-center justify-between gap-4">
                        <p className="text-sm py-0.5 pt-3 text-xs font-semibold">8in X 12in</p>
                    </div>
            
                    <div className="mb-12 flex items-center justify-between gap-4">
                        <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
                    </div>
            
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-l font-extrabold leading-tight text-gray-900">SOLD</p>
            
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    )
}

function SoldItems() {

}

export default function About() {
    return (
        <html lang="en">
            <body>
            <Header />
            <AboutMe />
            <Footer />
            </body>
        </html>
    )
}