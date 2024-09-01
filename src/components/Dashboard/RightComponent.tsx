import React from "react";
import RecentActivity from "./RightComponent/RecentActivity";
import UpcomingSchedule from "./RightComponent/UpcomingSchedule";

export default function RightComponent() {
	return (
		<div className="flex flex-col md:flex-row lg:flex-col gap-5  lg:px-8 w-full">
			<RecentActivity />
			<UpcomingSchedule />
		</div>
	);
}
