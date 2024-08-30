"use client";
import React, { useState } from "react";
import { words } from "./data";
import Image from "next/image";

const SearchInput = () => {
	const [activeSearch, setActiveSearch] = useState<string[]>([]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value == "") {
			setActiveSearch([]);
			return false;
		}
		setActiveSearch(
			words.filter((w) => w.includes(e.target.value)).slice(0, 8),
		);
	};

	return (
		<form className="w-[343px] relative">
			<div className="relative">
				<input
					type="search"
					placeholder="Search"
					className="w-full p-4 rounded-[4px] border border-[#E0E0E0] bg-[#FAFAFA]"
					onChange={(e) => handleSearch(e)}
				/>
				<button className="absolute right-1 top-1/2 -translate-y-1/2 p-4">
					<Image src="/search.svg" alt="Search" width={24} height={24} />
				</button>
			</div>

			{activeSearch.length > 0 && (
				<div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
					{activeSearch.map((s, index) => (
						<span key={index}>{s}</span>
					))}
				</div>
			)}
		</form>
	);
};

export default SearchInput;
