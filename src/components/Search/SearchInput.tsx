"use client";
import React, { useState } from "react";
import { words } from "./data";
import Image from "next/image";

const SearchInput = () => {
	const [activeSearch, setActiveSearch] = useState<string[]>([]);
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setActiveSearch([]);
			return;
		}
		setActiveSearch(
			words.filter((w) => w.includes(e.target.value)).slice(0, 8),
		);
	};

	return (
		<form className="relative md:pl-14 lg:pl-0 md:w-[343px]">
			{/* For screens below md, show search icon only */}
			<div className="relative pl-8 md:hidden">
				<button className="p-4" onClick={() => setIsInputVisible(true)}>
					<Image src="/search.svg" alt="Search" width={24} height={24} />
				</button>
			</div>

			{/* For screens md and above, show input box and search icon */}
			<div
				className={`relative ${isInputVisible ? "block" : "hidden"} md:block`}
			>
				<input
					type="search"
					placeholder="Search"
					className="w-full md:px-4 md:py-2 lg:p-4 rounded-[4px] border border-[#E0E0E0] bg-[#FAFAFA]"
					onChange={(e) => handleSearch(e)}
				/>
				<button className="absolute right-1 top-1/2 -translate-y-1/2 p-4">
					<Image src="/search.svg" alt="Search" width={24} height={24} />
				</button>
			</div>

			{/* Mobile search box */}
			{isInputVisible && (
				<div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
					<input
						type="search"
						placeholder="Search"
						className="w-full px-4 py-2 rounded-[4px] border border-[#E0E0E0] bg-[#FAFAFA]"
						onChange={(e) => handleSearch(e)}
					/>
					{activeSearch.length > 0 && (
						<div className="bg-slate-800 text-white w-full rounded-xl mt-2">
							{activeSearch.map((s, index) => (
								<span key={index} className="block py-1">
									{s}
								</span>
							))}
						</div>
					)}
					<button
						className="absolute top-2 right-2"
						onClick={() => setIsInputVisible(false)}
					>
						<Image src="/close.svg" alt="Close" width={24} height={24} />
					</button>
				</div>
			)}
		</form>
	);
};

export default SearchInput;
