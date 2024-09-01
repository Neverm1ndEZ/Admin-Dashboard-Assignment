"use client";
import Image from "next/image";
import React from "react";

export const AnnouncementItem = ({
	title,
	timestamp,
}: {
	title: string;
	timestamp: string;
}) => (
	<div className="rounded-md border border-[#E0E0E0] bg-[#FAFAFA] px-4 py-3 flex justify-between items-center">
		<div className="space-y-1">
			<p className="text-[#303030] text-sm md:text-base">{title}</p>
			<p className="text-[#686868] text-[9px] md:text-[10px]">{timestamp}</p>
		</div>
		<div className="flex items-center gap-3 md:gap-5">
			<Image
				src="/pin.svg"
				width={20}
				height={20}
				alt="pin"
				className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
			/>
			<Image
				src="/dots.svg"
				width={20}
				height={20}
				alt="more options"
				className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
			/>
		</div>
	</div>
);

export default function Announcement({
	title = "Announcement",
	date = "Today, 13 Sep 2021",
	announcements = [] as { title: string; timestamp: string }[],
	onSeeAll = () => {},
}) {
	return (
		<div className="w-full max-w-[700px] bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl">
			<div className="p-4 md:p-5 space-y-3 md:space-y-4">
				<div className="flex items-center justify-between">
					<h1 className="text-[#161E54] text-base md:text-lg font-medium whitespace-nowrap">
						{title}
					</h1>
					<div className="flex items-center justify-between gap-2 px-2 py-1 border border-[#EFEFEF] rounded-sm">
						<p className="text-[#686868] text-xs whitespace-nowrap overflow-hidden text-ellipsis">
							{date}
						</p>
						<Image
							src="/light-arrow.svg"
							alt="arrow"
							className="w-4 h-4 flex-shrink-0"
							width={16}
							height={16}
						/>
					</div>
				</div>
				{announcements.map((announcement, index) => (
					<AnnouncementItem
						key={index}
						title={announcement.title}
						timestamp={announcement.timestamp}
					/>
				))}
			</div>

			<div className="bg-[#fff] border-t border-[#E0E0E0] p-2.5 rounded-b-xl">
				<button
					className="text-sm text-[#FF5151] font-medium w-full text-center"
					onClick={onSeeAll}
				>
					See All Announcements
				</button>
			</div>
		</div>
	);
}
