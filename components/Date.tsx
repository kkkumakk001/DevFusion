import { formatDate } from "@/lib/utils";
import { ClockIcon } from "@radix-ui/react-icons";

type Props = {
    date: string;
};

export default function Date({ date }: Props) {
    return (
        <div className="flex gap-2 items-center">
            <ClockIcon width={16} height={16} />
            {formatDate(date)}
        </div>
    );
}
