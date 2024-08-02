import "../index.css"
import Header from '../header'
import Footer from '../footer'

function AboutMe() {
    return (
        <div>
        <section className="bg-sky-950">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-100">Welcome To My Art World</h1> */}
                    <h3 className="inline-flex gap-3 max-w-2xl mb-6 font-light text-gray-50 lg:mb-8 md:text-xl lg:text-2xl">
                        Chapel Hill, NC 
                        <svg transform="translate(10,4)" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0H0V20H30V0Z" fill="#F0F0F0"/>
                        <path d="M30 2.49976H0V4.99951H30V2.49976Z" fill="#D80027"/>
                        <path d="M30 7.49994H0V9.9997H30V7.49994Z" fill="#D80027"/>
                        <path d="M30 12.4995H0V14.9992H30V12.4995Z" fill="#D80027"/>
                        <path d="M30 17.4996H0V19.9993H30V17.4996Z" fill="#D80027"/>
                        <path d="M15 0H0V10.7692H15V0Z" fill="#2E52B2"/>
                        <path d="M5.85111 4.41162L5.60953 5.15482H4.82812L5.46041 5.61389L5.21883 6.35703L5.85111 5.89795L6.48299 6.35703L6.24146 5.61389L6.87375 5.15482H6.09229L5.85111 4.41162Z" fill="#F0F0F0"/>
                        <path d="M6.09229 7.83676L5.85111 7.09363L5.60953 7.83676H4.82812L5.46041 8.2959L5.21883 9.03904L5.85111 8.5799L6.48299 9.03904L6.24146 8.2959L6.87375 7.83676H6.09229Z" fill="#F0F0F0"/>
                        <path d="M2.78766 7.83676L2.54643 7.09363L2.30484 7.83676H1.52344L2.15572 8.2959L1.91414 9.03904L2.54643 8.5799L3.17836 9.03904L2.93684 8.2959L3.569 7.83676H2.78766Z" fill="#F0F0F0"/>
                        <path d="M2.54643 4.41162L2.30484 5.15482H1.52344L2.15572 5.61389L1.91414 6.35703L2.54643 5.89795L3.17836 6.35703L2.93684 5.61389L3.569 5.15482H2.78766L2.54643 4.41162Z" fill="#F0F0F0"/>
                        <path d="M5.85111 1.72961L5.60953 2.47287H4.82812L5.46041 2.932L5.21883 3.67514L5.85111 3.216L6.48299 3.67514L6.24146 2.932L6.87375 2.47287H6.09229L5.85111 1.72961Z" fill="#F0F0F0"/>
                        <path d="M2.54643 1.72961L2.30484 2.47287H1.52344L2.15572 2.932L1.91414 3.67514L2.54643 3.216L3.17836 3.67514L2.93684 2.932L3.569 2.47287H2.78766L2.54643 1.72961Z" fill="#F0F0F0"/>
                        <path d="M9.15184 4.41162L8.91031 5.15482H8.12891L8.76113 5.61389L8.51967 6.35703L9.15184 5.89795L9.78383 6.35703L9.54225 5.61389L10.1745 5.15482H9.39312L9.15184 4.41162Z" fill="#F0F0F0"/>
                        <path d="M9.39312 7.83676L9.15184 7.09363L8.91031 7.83676H8.12891L8.76113 8.2959L8.51967 9.03904L9.15184 8.5799L9.78383 9.03904L9.54225 8.2959L10.1745 7.83676H9.39312Z" fill="#F0F0F0"/>
                        <path d="M12.6938 7.83676L12.4526 7.09363L12.211 7.83676H11.4297L12.0619 8.2959L11.8203 9.03904L12.4526 8.5799L13.0846 9.03904L12.843 8.2959L13.4753 7.83676H12.6938Z" fill="#F0F0F0"/>
                        <path d="M12.4526 4.41162L12.211 5.15482H11.4297L12.0619 5.61389L11.8203 6.35703L12.4526 5.89795L13.0846 6.35703L12.843 5.61389L13.4753 5.15482H12.6938L12.4526 4.41162Z" fill="#F0F0F0"/>
                        <path d="M9.15184 1.72961L8.91031 2.47287H8.12891L8.76113 2.932L8.51967 3.67514L9.15184 3.216L9.78383 3.67514L9.54225 2.932L10.1745 2.47287H9.39312L9.15184 1.72961Z" fill="#F0F0F0"/>
                        <path d="M12.4526 1.72961L12.211 2.47287H11.4297L12.0619 2.932L11.8203 3.67514L12.4526 3.216L13.0846 3.67514L12.843 2.932L13.4753 2.47287H12.6938L12.4526 1.72961Z" fill="#F0F0F0"/>
                        </svg>
                    </h3>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-zinc-300">My interest in art began when I visited the National Gallery of Art in Washington DC. I was inspired by the calming effect I had when looking at the art and aspire to recreate that effect. I studied Political Science at UNC Chapel Hill and work as a Software Engineer. For my next project I would like to do a portrait painting.</p>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-zinc-300">For inquiries email me at joshishaswat@gmail.com</p>
                    <a href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-sky-800">
                        Return to Store
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#sectionId" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-sky-800">
                        See Sold Works
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-3 lg:flex bg-clip-border">
                    <img src="https://res.cloudinary.com/doc2bxwod/image/upload/f_auto,q_auto/cgvstzozyrpbysbxqe0m" alt="mockup" className="rounded-lg" />
                </div>                
            </div>
        </section>

        <section id="sectionId" className="bg-white py-8 antialiased md:py-12">
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