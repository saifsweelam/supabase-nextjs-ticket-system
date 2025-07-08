import Link from "next/link";

const tickets = [
    {
        id: 1,
        title: "Write Supabase Book",
        status: "Not started",
        author: "Chayan",
    },
    {
        id: 2,
        title: "Read more Packt Books",
        status: "In progress",
        author: "David",
    },
    {
        id: 3,
        title: "Make videos for the YouTube Channel",
        status: "Done",
        author: "David",
    },
];

export function Tickets() {
    return (
        <>
            {tickets.map((ticket) => (
                <Link
                    href={`/dashboard/tickets/details/${ticket.id}`}
                    key={ticket.id}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                >
                    <div className="flex w-full items-center gap-2">
                        <span>#{ticket.id}</span>{" "}
                        <span className="ml-auto text-xs">{ticket.status}</span>
                    </div>
                    <span className="font-medium">{ticket.title}</span>
                    <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                        {ticket.author}
                    </span>
                </Link>
            ))}
        </>
    )
}