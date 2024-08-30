import Image from "next/image";
import React from "react";

export default function Sidebar() {
	const menuItems = [
		{
			id: 1,
			name: "Dashboard",
			icons: "/dashboard.svg",
		},
		{
			id: 2,
			name: "Recruitment",
			icons: "/recruitment.svg",
		},
		{
			id: 3,
			name: "Schedule",
			icons: "/calendar.svg",
		},
		{
			id: 4,
			name: "Employee",
			icons: "/employee.svg",
		},
		{
			id: 5,
			name: "Department",
			icons: "/department.svg",
		},
	];

	const otherItems = [
		{
			id: 1,
			name: "Support",
			icons: "/support.svg",
		},
		{
			id: 2,
			name: "Settings",
			icons: "/settings.svg",
		},
	];

	return (
		<div className="flex flex-col justify-start items- bg-[#FAFAFA] w-[15.125rem] fixed h-screen gap-[39px] pt-5 border-r-2 border-[#F1F1F1]">
			<div className="p-2.5 mx-[50px]">
				<Image src="/logo.svg" alt="Logo" width={143} height={37} />
			</div>
			<div className="text-[#686868]">
				<h1 className="uppercase text-left pl-[30px] py-2.5 text-xs">
					Main Menu
				</h1>
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="flex items-center gap-6 pl-[30px] py-4 text-base"
					>
						<Image src={item.icons} alt={item.name} width={20} height={20} />
						<span>{item.name}</span>
					</div>
				))}
			</div>
			<div className="text-[#686868]">
				<h1 className="uppercase text-left pl-[30px] py-2.5 text-xs">Other</h1>
				{otherItems.map((item) => (
					<div
						key={item.id}
						className="flex items-center gap-6 pl-[30px] py-4 text-base"
					>
						<Image src={item.icons} alt={item.name} width={20} height={20} />
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
