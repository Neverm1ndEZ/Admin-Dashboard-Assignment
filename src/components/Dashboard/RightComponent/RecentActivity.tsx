import React from "react";

export default function RecentActivity() {
	return (
		<div className="w-[567px] rounded-lg bg-[#161E54] bg-gradient-to-b from-black/20 to-black/20  text-white">
			<div className="bg-[#1B204A] pl-6 py-2.5 pr-2.5 rounded-t-lg">
				<h1 className="text-lg font-medium">Recent Activity</h1>
			</div>
			<div className="my-[26px] ml-6 space-y-[6px] w-[65%]">
				<p className="text-[10px] text">10.40 AM, Fri 10 Sept 2021</p>
				<p className="text-lg font-medium">You Posted a New Job</p>
				<p className="text-sm">
					Kindly check the requirements and terms of work and make sure
					everything is right.
				</p>
			</div>
			<div className="flex items-center justify-between mx-6 py-[26px]">
				<p className="text-sm">Today you makes 12 Activity</p>
				<button className="bg-[#FF5151] px-4 py-2.5 rounded">
					<span className="font-medium text-sm">See All Activity</span>
				</button>
			</div>
		</div>
	);
}
