import Image from "next/image";
import Notification from "../../public/Notification.svg";
import SeventyFive from "../../public/75.svg";
import NinetyOne from "../../public/91.svg";
import TwentyFive from "../../public/25.svg";
import NinetySeven from "../../public/97.svg";
import Avatar from "../../public/Allura Avatar.png";

export default function RightInfo() {
	return (
		<div className="rounded-l-lg bg-stone-500 dark:bg-black text-black dark:text-white ml-5 px-5 my-5 py-5">
			<div className="flex flex-row justify-around items-center mb-[20rem]">
				<div>
					<Image src={Notification} alt="Bell Icon" />
				</div>
				<div>
					<div className="flex flex-row bg-slate-200 dark:bg-[#141414] px-1 py-1 gap-5 rounded-xl items-center">
						<div className="bg-blue-700 rounded-xl">
							<Image src={Avatar} alt="Trophy Icon" />
						</div>
						<div className="">
							<select className="text-sm rounded-lg bg-slate-200 dark:bg-[#1C1C1C] text-black dark:text-white block w-full p-2.5">
								<option value="Adeola Ayo" className="">
									Adeola Ayo
								</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			{/* <div>Calender</div> */}
			<div className="">
				<div className="max-w-sm rounded-2xl my-3 overflow-hidden shadow-lg shadow-slate-500 dark:shadow-none dark:bg-[#0D0D0D] px-6 py-4">
					<h1 className="text-sm mb-2 font-bold font-sans">
						Completion Progress
					</h1>
					<div className="flex flex-col bg-slate-200 dark:bg-[#1C1C1C] py-2 pr-5 pl-3 gap-5 rounded-xl mb-5">
						<div className="flex flex-row-reverse justify-around items-center">
							<div>
								<Image src={SeventyFive} alt="Percentage" />
							</div>
							<div>
								<p className="text-sm">Life Contingency</p>
								<p className="text-[#A1A1A1] font-light text-sm">Chapter 3</p>
							</div>
						</div>
						<div className="flex flex-row-reverse justify-around items-center">
							<div>
								<Image src={NinetyOne} alt="Percentage" />
							</div>
							<div>
								<p className="text-sm">Social Insurance</p>
								<p className="text-[#A1A1A1] font-light text-sm">Chapter 4</p>
							</div>
						</div>
						<div className="flex flex-row-reverse justify-around items-center">
							<div>
								<Image src={TwentyFive} alt="Percentage" />
							</div>
							<div>
								<p className="text-sm">Advanced Maths.</p>
								<p className="text-[#A1A1A1] font-light text-sm">Moduel 2</p>
							</div>
						</div>
						<div className="flex flex-row-reverse justify-around items-center">
							<div>
								<Image src={NinetySeven} alt="Percentage" />
							</div>
							<div>
								<p className="text-sm">Pension</p>
								<p className="text-[#A1A1A1] font-light text-sm">Chapter 5</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
