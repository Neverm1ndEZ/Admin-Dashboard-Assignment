import React from "react";

export default function TopCard({
	rootBg,
	title,
	number,
	status,
	statusColor,
}: {
	rootBg: string;
	title: string;
	number: number;
	status: string;
	statusColor: string;
}) {
	return (
		<div
			className={`max-w-[350px] w-[204px] pl-5 py-3 pr-3 grid place-items-start gap-4 rounded-lg`}
			style={{ backgroundColor: rootBg }}
		>
			<h1 className="text-[#161E54] font-medium text-lg">{title}</h1>
			<h2 className="text-[#161E54] font-medium text-4xl">{number}</h2>
			<h3 className={`font-medium text-base`} style={{ color: statusColor }}>
				{status}
			</h3>
		</div>
	);
}
