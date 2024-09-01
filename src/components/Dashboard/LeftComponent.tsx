"use client";
import Announcement from "./LeftComponent/Annoucement";
import ChartCard from "./LeftComponent/ChartCard";
import TopCard from "./LeftComponent/TopCard";

export default function LeftComponent() {
	const topCardData = [
		{
			id: 1,
			rootBg: "#FFEFE7",
			title: "Available Position",
			number: 24,
			status: "4 Urgently needed",
			statusColor: "#FF5151",
		},
		{
			id: 2,
			rootBg: "#E8F0FB",
			title: "Job Open",
			number: 10,
			status: "4 Active hiring",
			statusColor: "#3786F1",
		},
		{
			id: 3,
			rootBg: "#FDEBF9",
			title: "New Employees",
			number: 24,
			status: "4 Department",
			statusColor: "#EE61CF",
		},
	];

	const chartCardData = [
		{
			id: 1,
			heading: "Total Employees",
			count: 216,
			men: 120,
			women: 96,
			chart: "/2-chart-card.svg",
			chartData: "+2% Past month",
		},
		{
			id: 2,
			heading: "Talent Request",
			count: 16,
			men: 6,
			women: 10,
			chart: "/5-chart-card.svg",
			chartData: "+5% Past month",
		},
	];

	const announcements = [
		{
			title: "Outing schedule for every department",
			timestamp: "5 Minutes ago",
		},
		{ title: "Meeting HR Department", timestamp: "Yesterday, 12:30 PM" },
		{
			title: "IT Department need two more talents for UX/UI Designer position",
			timestamp: "Yesterday, 09:15 AM",
		},
	];

	return (
		<div className="space-y-5">
			{/* Stack for mobile, align in row for larger screens */}
			<div className="flex flex-col md:flex-row items-center md:justify-center gap-3.5">
				{topCardData.map((card) => (
					<TopCard
						key={card.id}
						rootBg={card.rootBg}
						title={card.title}
						number={card.number}
						status={card.status}
						statusColor={card.statusColor}
					/>
				))}
			</div>
			{/* Stack chart cards for mobile */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-4">
				{chartCardData.map((card) => (
					<ChartCard
						key={card.id}
						heading={card.heading}
						count={card.count}
						men={card.men}
						women={card.women}
						chart={card.chart}
						chartData={card.chartData}
					/>
				))}
			</div>
			{/* Announcement section remains stacked */}
			<Announcement
				title="Company Announcements"
				date="14 Sep 2021"
				announcements={announcements}
				onSeeAll={() => console.log("See all clicked")}
			/>
		</div>
	);
}
