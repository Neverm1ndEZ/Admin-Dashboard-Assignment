import LeftComponent from "@/components/Dashboard/LeftComponent";
import RightComponent from "@/components/Dashboard/RightComponent";

export default function Home() {
	return (
		<main className="">
			<h1 className="text-[#161E54] text-2xl font-medium mt-5 mb-3">
				Dashboard
			</h1>
			<div className="flex items-start justify-center">
				<LeftComponent />
				<RightComponent />
			</div>
		</main>
	);
}
