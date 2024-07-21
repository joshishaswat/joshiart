import "./index.css"

function Header() {
	return (
	<div>
		<div>
			<nav className="border-gray-200 bg-slate-100">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a className="flex font-bold items-center space-x-3 rtl:space-x-reverse text-stone-950">
						<p>joshiart</p>
					</a>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
							<li>
								<a href="https://www.instagram.com/shasjoshi/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
									<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fill-rule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clip-rule="evenodd"></path>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
	)
}

function Body() {
	return (		
<section className="bg-white py-8 antialiased md:py-12">
	<div>
		<h2 className="text-stone-950 text-l font-semibold text-center mb-8">Free Shipping! </h2>
	</div>
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">

      <div className="rounded-lg border-gray-200 bg-white p-2 shadow-md">
        <div className="h-56 w-full">
          <a>
            <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721334767/Sail_ximuxd.png" alt="" />
          </a>
        </div>
        <div className="pt-3">

          <a className="text-lg font-semibold leading-tight text-gray-900">Dark Sailboat</a>

          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm py-0.5 pt-3 text-xs font-semibold">8in X 12in</p>
          </div>

          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-l font-extrabold leading-tight text-gray-900">$45.00</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-small font-normal text-gray-950 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-gray-200 bg-white p-2 shadow-md">
        <div className="h-56 w-full">
          <a>
            <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721334238/winter_cabin_wjg4wo.png" alt="" />
          </a>
        </div>

        <div className="pt-3">
          <a className="text-lg font-semibold leading-tight text-gray-900">Winter House</a>

          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm py-0.5 pt-3 text-xs font-semibold">8in X 12in</p>
          </div>

          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-l font-extrabold leading-tight text-gray-900">$35.00</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-small font-normal text-gray-950 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-gray-200 bg-white p-2 shadow-md">
        <div className="h-56 w-full">
          <a>
            <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721334797/tree_1_ym6udi.png" alt="" />
          </a>
        </div>

        <div className="pt-3">

          <a className="text-lg font-semibold leading-tight text-gray-900">Prairie Landscape</a>

          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm py-0.5 pt-3 text-xs font-semibold">8in X 12in</p>
          </div>

          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-l font-extrabold leading-tight text-gray-900">$30.00</p>

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-small font-normal text-gray-950 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Buy
            </button>
          </div>
        </div>
      </div>
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

            <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-small font-normal text-gray-950 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
	)
}

function Footer() {
	return (
	<div>
		<footer className="shadow-sm">
    		<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      		<span className="text-sm text-stone-950 sm:text-center">© 2024 joshiart™. All Rights Reserved.
    		</span>
    		<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-stone-950 sm:mt-0">
        		<li>
            		<a href="#" className="hover:underline me-4 md:me-6">joshishaswat@gmail.com</a>
        		</li>
        		<li>
            		<a href="#" className="hover:underline me-4 md:me-6">(919) 904-5109</a>
        		</li>
    		</ul>
    		</div>
		</footer>
	</div>
	)
}

export default function Home() {
  return (
	<div>
	<div>
		<Header />
	</div>
	<div>
		<Body />
	</div>
	<div>
		<Footer />
	</div>
	</div>
    )
}
