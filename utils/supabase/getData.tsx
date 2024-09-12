import { supabase } from "@/utils/supabase/supabase";
import { Dispatch, SetStateAction, ReactElement } from "react";

export default async function getData(bookmarkList: Dispatch<SetStateAction<Array<ReactElement>>>) {
    const bookmarks = [];
    try {
        let { data: bookmarks, error } = await supabase.from("bookmarkArticle").select("*");
        if (error) {
            console.log(error);
        }

        if (bookmarks != null) {
            for (let index = 0; index < bookmarks.length; index++) {
                bookmarks
                    .push
                    // <li className="flex items-center justify-between py-2" key={bookmarks[index]["id"]}>
                    //     {/* <Task
                    //         bookmarkList={bookmarkList}
                    //         id={tasks[index]["id"]}
                    //         text={tasks[index]["text"] ?? ""}
                    //         update_at={tasks[index]["update_at"] ?? ""}
                    //     ></Task> */}
                    // </li>
                    ();
            }
            // bookmarkList(bookmarks);
        }
    } catch (error) {
        console.log(error);
    }
}
