import Image from "next/image";
import React from "react";

export default function ChartCard({
	heading,
	count,
	men,
	women,
	chart,
	chartData,
}: {
	heading: string;
	count: number;
	men: number;
	women: number;
	chart: string;
	chartData: string;
}) {
	return (
		<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-md md:max-w-lg p-4 md:p-5 bg-[#FFF] border border-[#E0E0E0] rounded-[10px]">
			<div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
				<h1 className="text-[#161E54] text-base md:text-lg font-medium mb-2 md:mb-4 whitespace-nowrap">
					{heading}
				</h1>
				<h2 className="text-[#161E54] text-2xl md:text-4xl font-medium mb-2 md:mb-4">
					{count}
				</h2>
				<div className="text-xs text-[#686868] space-y-1">
					<p>{men} Men</p>
					<p>{women} Women</p>
				</div>
			</div>
			<div className="flex flex-col items-end gap-y-2 flex-shrink-0">
				<Image
					src={chart}
					alt="chart"
					width={120}
					height={90}
					className="w-20 h-16 md:w-28 md:h-20"
				/>
				<div className="bg-[#FFEFE7] px-2 py-1 flex items-center justify-center rounded-sm">
					<p className="text-[#303030] text-[10px] whitespace-nowrap">
						{chartData}
					</p>
				</div>
			</div>
		</div>
	);
}
