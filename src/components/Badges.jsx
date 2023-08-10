import Image from "next/image";
import Strength from "../../public/Strength.svg";
import YinYang from "../../public/YinYang.svg";
import Chemistry from "../../public/Chemistry.svg";
import Circuit from "../../public/Circuit.svg";

export default function Badges() {
	return (
		<div>
			<div className="max-w-2xl flex flex-row justify-evenly gap-y-5 rounded-2xl my-3 overflow-hidden dark:bg-[#0D0D0D] px-6 py-4">
				<div className="gap-x-5">
					<Image src={Strength} alt="Trophy Icon" />
				</div>
				<div className="gap-y-5">
					<Image src={YinYang} alt="Trophy Icon" />
				</div>
				<div className="gap-y-5">
					<Image src={Chemistry} alt="Trophy Icon" />
				</div>
				<div className="gap-y-5">
					<Image src={Circuit} alt="Trophy Icon" />
				</div>
			</div>
		</div>
	);
}
