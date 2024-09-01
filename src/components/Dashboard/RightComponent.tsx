import React from "react";
import RecentActivity from "./RightComponent/RecentActivity";
import UpcomingSchedule from "./RightComponent/UpcomingSchedule";

export default function RightComponent() {
	return (
		<div className="space-y-5 ml-12 px-8 w-full">
			<RecentActivity />
			<UpcomingSchedule />
		</div>
	);
}
