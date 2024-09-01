"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Sidebar() {
	const [selectedItem, setSelectedItem] = useState<string | null>("1main");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const menuItems = [
		{ id: 1, name: "Dashboard", icons: "/dashboard.svg" },
		{ id: 2, name: "Recruitment", icons: "/recruitment.svg" },
		{ id: 3, name: "Schedule", icons: "/calendar.svg" },
		{ id: 4, name: "Employee", icons: "/employee.svg" },
		{ id: 5, name: "Department", icons: "/department.svg" },
	];

	const otherItems = [
		{ id: 1, name: "Support", icons: "/support.svg" },
		{ id: 2, name: "Settings", icons: "/settings.svg" },
	];

	const MenuItem = ({ item, isOther }: { item: any; isOther?: boolean }) => {
		const isSelected = selectedItem === item.id + (isOther ? "other" : "main");

		return (
			<div
				className={`flex items-center gap-6 pl-[30px] py-4 text-base cursor-pointer transition-colors duration-200 ease-in-out ${
					isSelected ? "text-[#FF5151]" : "text-[#686868] hover:text-[#FF5151]"
				}`}
				onClick={() => setSelectedItem(item.id + (isOther ? "other" : "main"))}
			>
				<div className="relative w-5 h-5">
					<Image
						src={item.icons}
						alt={item.name}
						layout="fill"
						className={`${isSelected ? "filter-red" : ""}`}
					/>
				</div>
				<span className="hidden lg:block">{item.name}</span>
			</div>
		);
	};

	return (
		<>
			{/* Hamburger Icon */}
			<div className="fixed top-7 left-5 md:left-24 z-50 lg:hidden">
				<Image
					src={isSidebarOpen ? "/close.svg" : "/hamburger.svg"}
					width={32}
					height={32}
					alt="Menu"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				/>
			</div>

			{/* Sidebar Overlay for small screens */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 z-40 bg-black bg-opacity-80 md:hidden"
					onClick={() => setIsSidebarOpen(false)}
				></div>
			)}

			{/* Main Sidebar */}
			<div
				className={`fixed h-screen bg-[#FAFAFA] border-r-2 border-[#F1F1F1] transition-transform duration-300 ease-in-out ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0 md:w-[5.625rem] lg:w-[15.125rem] z-50`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Sidebar content */}
				<div className="flex flex-col justify-start items-center gap-[39px] pt-5">
					{/* Logos */}
					<div className="flex items-center lg:p-2.5 lg:mx-[50px]">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={143}
							height={37}
							className="hidden lg:block"
						/>
						<Image
							src="/tab-logo.svg"
							alt="Logo"
							width={32}
							height={32}
							className="block lg:hidden"
						/>
					</div>

					{/* Main Menu */}
					<div className="w-full">
						<h1 className="uppercase text-center lg:text-left lg:pl-[30px] py-2.5 text-xs text-[#686868]">
							Main Menu
						</h1>
						{menuItems.map((item) => (
							<MenuItem key={item.id} item={item} />
						))}
					</div>

					{/* Other Menu */}
					<div className="w-full">
						<h1 className="uppercase text-center lg:text-left lg:pl-[30px] py-2.5 text-xs text-[#686868]">
							Other
						</h1>
						{otherItems.map((item) => (
							<MenuItem key={item.id} item={item} isOther={true} />
						))}
					</div>

					{/* Global styles for filter effect */}
					<style jsx global>{`
						.filter-red {
							filter: invert(40%) sepia(75%) saturate(4000%) hue-rotate(335deg)
								brightness(100%) contrast(100%);
						}
					`}</style>
				</div>
			</div>
		</>
	);
}
