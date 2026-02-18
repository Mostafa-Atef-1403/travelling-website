// importing Btn Props
import { ButtonProps } from "@/types/types";

import Image from "next/image";

const Btn = ({ text, icon, style, type, full }: ButtonProps) => {
  return (
    <button
      type={type || `button`}
      className={`cursor-pointer flexCenter gap-3 border rounded-full ${style} ${full ? "w-full" : ""}`}
    >
      {icon && <Image src={icon} alt="btn-icon" width={24} height={24} />}{" "}
      <label className="cursor-pointer bold-16 whitespace-nowrap">{text}</label>
    </button>
  );
};

export default Btn;
