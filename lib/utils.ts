//shadcn
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//dayjs(日付の表示形式変換)
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

//shadcn
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

//dayjs
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
    return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};
