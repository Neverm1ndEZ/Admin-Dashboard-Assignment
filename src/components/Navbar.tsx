import React from "react";
import SearchInput from "./Search/SearchInput";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center h-24 border-b-2 border-[#F1F1F1]">
			<div>
				<SearchInput />
			</div>
			<div className="pr-[50px] py-[24px] flex gap-[30px]">
				<Image src="/bell.svg" alt="Notifications" width={24} height={24} />
				<Image src="/chat.svg" alt="Messages" width={24} height={24} />
				<div className="flex items-center justify-between gap-3">
					<div>
						<Image
							className="rounded-full"
							width={40}
							height={40}
							src="/avatar.png"
							alt="Rounded avatar"
						/>
					</div>
					<div className="flex items-center justify-between gap-1">
						<p className="text-[#161E54] font-medium text-base">Admirra John</p>
						<Image
							src="/down-arrow.svg"
							alt="Down arrow"
							width={24}
							height={24}
							className="cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
