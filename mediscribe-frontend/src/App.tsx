function App() {
	return (
		<main className="min-h-screen px-6 py-12 text-slate-950">
			<div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
				<section className="grid w-full gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
					<div className="space-y-6">
						<span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
							MediScribe Frontend
						</span>
						<div className="space-y-4">
							<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
								Tailwind v4 is now wired into this Vite app.
							</h1>
							<p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
								The old init command is not required here.
								Styles now compile through the official Tailwind
								Vite plugin and the global CSS entry imports
								Tailwind directly.
							</p>
						</div>

						<div className="flex flex-wrap gap-3 text-sm font-medium">
							<span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700">
								React 19
							</span>
							<span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-teal-800">
								Tailwind 4
							</span>
							<span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sky-800">
								Vite Plugin Enabled
							</span>
						</div>
					</div>

					<aside className="rounded-[1.5rem] bg-slate-950 p-6 text-sm text-slate-100 shadow-inner">
						<p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">
							Next commands
						</p>
						<div className="space-y-3 font-mono">
							<div className="rounded-xl bg-white/5 px-4 py-3">
								pnpm dev
							</div>
							<div className="rounded-xl bg-white/5 px-4 py-3">
								pnpm build
							</div>
						</div>
						<p className="mt-6 leading-6 text-slate-300">
							Start adding utility classes in your React
							components. If you later want custom theme tokens,
							add them directly in CSS with Tailwind v4 theme
							directives.
						</p>
					</aside>
				</section>
			</div>
		</main>
	);
}

export default App;
