import "./index.css"
import {BuyButtonComponent1, BuyButtonComponent2, BuyButtonComponent3, BuyButtonComponent4} from './stripeButton'
import Header from './header'
import Footer from './footer'

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
            <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721781261/lone_jellyfish-min_ndwfvl.png" alt="" />
          </a>
        </div>
        <div className="pt-3">

          <a className="text-lg font-semibold leading-tight text-gray-900">Lone Jellyfish</a>

          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm py-0.5 pt-3 text-xs font-semibold">12in X 16in</p>
          </div>

          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-l font-extrabold leading-tight text-gray-900">$65.00</p>

            <BuyButtonComponent4 />
          </div>
        </div>
      </div>

      <div className="rounded-lg border-gray-200 bg-white p-2 shadow-md">
        <div className="h-56 w-full">
          <a>
            <img className="mx-auto h-full" src="https://res.cloudinary.com/doc2bxwod/image/upload/v1721334767/Sail_ximuxd.png" alt="" />
          </a>
        </div>
        <div className="pt-3">

          <a className="text-lg font-semibold leading-tight text-gray-900">Dark Sailboat</a>

          <div className="mb-1 flex items-center justify-between gap-4">
            <p className="text-sm py-0.5 pt-3 text-xs font-semibold">16in X 12in</p>
          </div>

          <div className="mb-12 flex items-center justify-between gap-4">
            <p className="py-0.5 pt-0 text-xs font-semibold">Acrylic painting</p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-l font-extrabold leading-tight text-gray-900">$45.00</p>

            <BuyButtonComponent1 />
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

            <BuyButtonComponent2 />
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

            <BuyButtonComponent3 />
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

          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
	)
}

export default function Home() {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
      </head>
      <body>
        <Header />
        <Body />
        <Footer />
      </body>
    </html>
    )
}
