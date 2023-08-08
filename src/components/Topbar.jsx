"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Topbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<button
					className="p-2 rounded-lg hover:ring-2 hover:ring-gray-300 bg-slate-200 dark:bg-slate-400"
					onClick={() => setTheme("light")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			);
		} else {
			return (
				<button
					className="p-2 rounded-lg hover:ring-2 bg-slate-300 hover:ring-gray-300"
					onClick={() => setTheme("dark")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</button>
			);
		}
	};

	return (
		<div className="flex items-center justify-around max-w-2xl mx-auto px-4 mt-5">
			<div className="max-w-lg ">
				<div className="relative flex w-full h-12 focus-within:shadow-lg bg-[#fff] dark:bg-[#0D0D0D] overflow-hidden rounded-full">
					<div className="flex items-center mx-3 h-full w-12">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<input
						className="peer h-full w-screen outline-none text-sm bg-[#fff] dark:bg-[#0D0D0D] pr-2"
						type="text"
						id="search"
						placeholder="Search Courses, Documents, Activities... "
					/>
				</div>
			</div>
			{renderThemeChanger()}
		</div>
	);
};

export default Topbar;
