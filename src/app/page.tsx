import LeftComponent from "@/components/Dashboard/LeftComponent";
import RightComponent from "@/components/Dashboard/RightComponent";

export default function Home() {
	return (
		<main className="p-4 lg:p-0">
			<h1 className="text-[#161E54] text-2xl font-medium mt-5 mb-3">
				Dashboard
			</h1>
			<div className="flex flex-col gap-4 md:flex-col lg:flex-row items-stretch lg:items-start justify-center">
				<LeftComponent />
				<RightComponent />
			</div>
		</main>
	);
}
