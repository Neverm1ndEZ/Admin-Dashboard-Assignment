import React from "react";

export default function RecentActivity() {
	return (
		<div className="w-full rounded-lg bg-[#161E54] bg-gradient-to-b from-black/20 to-black/20 text-white mx-auto">
			<div className="bg-[#1B204A] pl-6 py-2.5 pr-2.5 rounded-t-lg">
				<h1 className="text-lg font-medium">Recent Activity</h1>
			</div>
			<div className="my-6 ml-6 space-y-1">
				<p className="text-[10px]">10.40 AM, Fri 10 Sept 2021</p>
				<p className="text-lg font-medium">You Posted a New Job</p>
				<p className="text-sm break-words lg:max-w-[63%]">
					Kindly check the requirements and terms of work and make sure
					everything is right.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mx-6 py-6">
				<p className="text-sm mb-4 md:mb-0 lg:mb-0">
					Today you made 12 Activities
				</p>
				<button className="bg-[#FF5151] px-4 py-2.5 rounded mt-4 lg:mt-0">
					<span className="font-medium text-sm">See All Activity</span>
				</button>
			</div>
		</div>
	);
}
