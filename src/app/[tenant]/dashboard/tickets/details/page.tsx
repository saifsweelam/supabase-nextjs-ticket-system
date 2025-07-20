import { useURL } from "@/services/client/urlProvider";
import { redirect } from "next/navigation";

export default function Page() {
    const { getPath } = useURL();
    redirect(getPath("/dashboard/tickets"));
}