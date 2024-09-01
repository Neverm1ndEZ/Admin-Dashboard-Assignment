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

	const handleClose = () => {
		setIsInputVisible(false);
		setActiveSearch([]);
	};

	return (
		<div className="relative md:w-[343px] pl-14 lg:pl-0">
			{/* For screens below md, show search icon only */}
			<div className="relative md:hidden">
				<button className="p-4" onClick={() => setIsInputVisible(true)}>
					<Image src="/search.svg" alt="Search" width={24} height={24} />
				</button>
			</div>

			{/* For screens md and above, show input box and search icon */}
			{!isInputVisible ? (
				<div className="relative hidden md:block">
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
			) : (
				<div className="absolute top-16 left-1/2 -translate-x-1/2 w-full md:w-[343px] p-4 text-white rounded-xl flex flex-col gap-2">
					<input
						type="search"
						placeholder="Search"
						className="w-full px-4 py-2 rounded-[4px] border border-[#E0E0E0] bg-[#FAFAFA]"
						onChange={(e) => handleSearch(e)}
					/>
					{activeSearch.length > 0 && (
						<div className="text-white w-full rounded-xl mt-2">
							{activeSearch.map((s, index) => (
								<span key={index} className="block py-1">
									{s}
								</span>
							))}
						</div>
					)}
					{/* Close button only visible on small screens */}
					{isInputVisible && (
						<button
							className="absolute top-6 right-6 lg:hidden"
							onClick={handleClose}
						>
							<Image src="/close.svg" alt="Close" width={24} height={24} />
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchInput;
