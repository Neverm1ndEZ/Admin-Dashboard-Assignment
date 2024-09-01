"use client";
import Image from "next/image";
import React from "react";

const AnnouncementItem = ({
	title,
	timestamp,
}: {
	title: string;
	timestamp: string;
}) => (
	<div className="rounded-md border border-[#E0E0E0] bg-[#FAFAFA] px-4 py-3 flex justify-between items-center">
		<div className="space-y-[6px]">
			<p className="text-[#303030] text-base">{title}</p>
			<p className="text-[#686868] text-[10px]">{timestamp}</p>
		</div>
		<div className="flex items-center gap-5">
			<Image
				src="/pin.svg"
				width={20}
				height={20}
				alt="pin"
				className="flex-shrink-0"
			/>
			<Image
				src="/dots.svg"
				width={20}
				height={20}
				alt="more options"
				className="flex-shrink-0"
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
		<div className="w-[640px] bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl">
			<div className="p-5 space-y-4">
				<div className="flex items-center justify-between">
					<h1 className="text-[#161E54] text-lg font-medium whitespace-nowrap">
						{title}
					</h1>
					<div className="w-[145px] px-1.5 border border-[#EFEFEF] rounded-sm flex items-center justify-between">
						<p className="text-[#686868] text-xs p-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
							{date}
						</p>
						<Image
							src="/light-arrow.svg"
							width={20}
							height={20}
							alt="arrow"
							className="flex-shrink-0"
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

			<div className="bg-[#fff] border-t border-[#E0E0E0] p-2.5">
				<button
					className="text-sm text-[#FF5151] font-medium w-full text-center"
					onClick={onSeeAll}
				>
					See All Announcement
				</button>
			</div>
		</div>
	);
}
