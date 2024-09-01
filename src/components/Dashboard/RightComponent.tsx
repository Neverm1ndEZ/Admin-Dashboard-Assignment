import React from "react";
import RecentActivity from "./RightComponent/RecentActivity";
import UpcomingSchedule from "./RightComponent/UpcomingSchedule";

export default function RightComponent() {
	return (
		<div className="flex md:flex-row lg:flex-col gap-5 lg:ml-12 lg:px-8 w-full">
			<RecentActivity />
			<UpcomingSchedule />
		</div>
	);
}
