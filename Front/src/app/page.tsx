import Image from "next/image";

export default function Home() {
	return (
		<main>
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
							viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">Tailwind Snippets</span>
					</a>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a className="mr-5 hover:text-gray-900">First Link</a>
						<a className="mr-5 hover:text-gray-900">Second Link</a>
						<a className="mr-5 hover:text-gray-900">Third Link</a>
						<a className="mr-5 hover:text-gray-900">Fourth Link</a>
					</nav>
					<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
						Button
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</header>

			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Before they sold out
							<br className="hidden lg:inline-block" />
							readymade gluten
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Button
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Button
							</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600"
						/>
					</div>
				</div>
			</section>

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
						Raw Denim Heirloom Man Braid
						<br className="hidden sm:block" />
						Selfies Wayfarers
					</h1>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24">
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
									Shooting Stars
								</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
								<a className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24">
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
									The Catalyzer
								</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
								<a className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24">
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow pl-6">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-2">
									Neptune
								</h2>
								<p className="leading-relaxed text-base">
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
								<a className="mt-3 text-indigo-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
								viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<span className="ml-3 text-xl">Tailwind Snippets</span>
						</a>
						<p className="mt-2 text-sm text-gray-500">
							Air plant banjo lyft occupy retro adaptogen indego
						</p>
					</div>
					<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										First Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Second Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Third Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Fourth Link
									</a>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										First Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Second Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Third Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Fourth Link
									</a>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										First Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Second Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Third Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Fourth Link
									</a>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										First Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Second Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Third Link
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Fourth Link
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div className="bg-gray-100">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-gray-500 text-sm text-center sm:text-left">
							© 2021 Tailwind Snippets —
							<a
								href="https://twitter.com/knyttneve"
								rel="noopener noreferrer"
								className="text-gray-600 ml-1"
								target="_blank">
								@knyttneve
							</a>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<a className="text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<path
										stroke="none"
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</footer>
		</main>
	);
}
