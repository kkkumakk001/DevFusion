import Image from "next/image";
import { formatDate } from "@/lib/utils";

type Props = {
    date: string;
};

export default function Date({ date }: Props) {
    return (
        <div className="flex gap-2 items-center">
            <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
            {formatDate(date)}
        </div>
    );
}
