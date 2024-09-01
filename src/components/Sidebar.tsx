"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Sidebar() {
	const [selectedItem, setSelectedItem] = useState<string | null>(null);

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

	const MenuItem = ({ item, isOther }: { item: any; isOther?: boolean }) => {
		const isSelected = selectedItem === item.id + (isOther ? "other" : "main");

		return (
			<div
				key={item.id}
				className={`flex items-center gap-6 pl-[30px] py-4 text-base cursor-pointer transition-colors duration-200 ease-in-out
					${isSelected ? "text-[#FF5151]" : "text-[#686868] hover:text-[#FF5151]"}`}
				onClick={() => setSelectedItem(item.id + (isOther ? "other" : "main"))}
			>
				<div className="relative w-5 h-5">
					<Image
						src={item.icons}
						alt={item.name}
						layout="fill"
						className={`${isSelected ? "filter-red" : "hover:filter-red"}`}
					/>
				</div>
				<span>{item.name}</span>
			</div>
		);
	};

	return (
		<div className="flex flex-col justify-start items-start bg-[#FAFAFA] w-[15.125rem] fixed h-screen gap-[39px] pt-5 border-r-2 border-[#F1F1F1]">
			<div className="p-2.5 mx-[50px]">
				<Image src="/logo.svg" alt="Logo" width={143} height={37} />
			</div>
			<div className="w-full">
				<h1 className="uppercase text-left pl-[30px] py-2.5 text-xs text-[#686868]">
					Main Menu
				</h1>
				{menuItems.map((item) => (
					<MenuItem key={item.id} item={item} />
				))}
			</div>
			<div className="w-full">
				<h1 className="uppercase text-left pl-[30px] py-2.5 text-xs text-[#686868]">
					Other
				</h1>
				{otherItems.map((item) => (
					<MenuItem key={item.id} item={item} isOther={true} />
				))}
			</div>
			<style jsx global>{`
				.filter-red {
					filter: invert(40%) sepia(75%) saturate(4000%) hue-rotate(335deg)
						brightness(100%) contrast(100%);
				}
			`}</style>
		</div>
	);
}
