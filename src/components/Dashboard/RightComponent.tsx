import React from "react";
import RecentActivity from "./RightComponent/RecentActivity";
import UpcomingSchedule from "./RightComponent/UpcomingSchedule";

export default function RightComponent() {
	return (
		<div className="space-y-5 mx-12 w-full">
			<RecentActivity />
			<UpcomingSchedule />
		</div>
	);
}
