import Image from "next/image";
import React from "react";
import { AnnouncementItem } from "../LeftComponent/Annoucement";

export default function UpcomingSchedule() {
	const announcements = [
		{
			title: "Interview with candidates",
			timestamp: "Today, 10:30 AM",
		},
		{
			title: "Short meeting with product designer from IT Department",
			timestamp: "Today - 09.15 AM",
		},
		{
			title: "Sort Front-end developer candidates",
			timestamp: "Today - 11.30 AM",
		},
	];

	return (
		<div className="bg-[#FFFFFF] w-full rounded-xl border border-[#E0E0E0] flex flex-col mx-auto">
			<div className="p-5 space-y-3 flex-grow overflow-hidden">
				<div className="flex items-center justify-between">
					<h1 className="text-[#161E54] text-base md:text-lg font-medium whitespace-nowrap">
						Upcoming Schedule
					</h1>
					<div className="w-[60%] max-w-[145px] px-1.5 border border-[#EFEFEF] rounded-sm flex items-center justify-between">
						<p className="text-[#686868] text-xs whitespace-nowrap overflow-hidden text-ellipsis">
							Today, 13 Sep 2021
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
				<div>
					<p className="text-[#686868] text-xs">Priority</p>
				</div>
				<AnnouncementItem
					title="Review candidate applications"
					timestamp="Today - 11:30 AM"
				/>
				<div>
					<p className="text-[#686868] text-xs">Other</p>
				</div>
				<div className="overflow-y-auto max-h-20 lg:max-h-[12.75rem] pr-2 space-y-2">
					{announcements.map((announcement, index) => (
						<AnnouncementItem
							key={index}
							title={announcement.title}
							timestamp={announcement.timestamp}
						/>
					))}
				</div>
			</div>
			<div className="bg-[#fff] border-t border-[#E0E0E0] p-2.5 flex justify-center items-center rounded-b-xl">
				<button className="text-sm text-[#FF5151] font-medium w-[48%] text-center">
					Create a New Schedule
				</button>
			</div>
		</div>
	);
}
