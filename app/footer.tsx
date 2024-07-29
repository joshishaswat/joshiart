export default function Footer() {
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