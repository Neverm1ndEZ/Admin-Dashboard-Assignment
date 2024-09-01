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
		<div className="flex items-center justify-between w-[312px] h-auto p-5 bg-[#FFF] border border-[#E0E0E0] rounded-[10px]">
			<div className="flex-shrink-0">
				<h1 className="text-[#161E54] text-lg font-medium mb-4 whitespace-nowrap">
					{heading}
				</h1>
				<h2 className="text-[#161E54] text-4xl font-medium mb-4">{count}</h2>
				<div className="text-xs text-[#686868] space-y-1">
					<p>{men} Men</p>
					<p>{women} Women</p>
				</div>
			</div>
			<div className="flex flex-col items-end gap-y-2 flex-shrink-0">
				<Image src={chart} alt="chart" width={120} height={90} />
				<div className="bg-[#FFEFE7] px-2 py-1 flex items-center justify-center rounded-sm">
					<p className="text-[#303030] text-[10px] whitespace-nowrap">
						{chartData}
					</p>
				</div>
			</div>
		</div>
	);
}
