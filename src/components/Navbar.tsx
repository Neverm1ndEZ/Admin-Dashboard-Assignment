import React from "react";
import SearchInput from "./Search/SearchInput";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center h-24 border-b-2 border-[#F1F1F1] px-5 py-2 md:px-0 md:py-0">
			<div className="flex-grow">
				<SearchInput />
			</div>
			<div className="flex items-center gap-4 md:gap-6 lg:gap-8">
				<Image
					src="/bell.svg"
					alt="Notifications"
					width={28}
					height={28}
					className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
				/>
				<Image
					src="/chat.svg"
					alt="Messages"
					width={28}
					height={28}
					className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
				/>
				<div className="flex items-center gap-2 md:gap-3 md:pr-14">
					<div>
						<Image
							className="rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
							src="/avatar.png"
							alt="Rounded avatar"
							width={40}
							height={40}
						/>
					</div>
					<div className="flex items-center gap-1">
						<p className="text-[#161E54] font-medium hidden lg:block lg:text-sm">
							Admirra John
						</p>
						<Image
							src="/down-arrow.svg"
							alt="Down arrow"
							width={24}
							height={24}
							className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
