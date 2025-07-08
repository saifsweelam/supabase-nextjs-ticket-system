import { TicketCard } from "@/components/ticket-card";
import { TicketComments } from "@/components/ticket-comments";

const comments = [
    {
        id: 1,
        author: "Dave",
        createdAt: "2027-01-01",
        content: "This is a comment from Dave",
    },
    {
        id: 2,
        author: "Alice",
        createdAt: "2027-01-02",
        content: "This is a comment from Alice",
    },
];

export type TicketDetailsPageProps = Readonly<{
    params: Promise<{
        id: string;
    }>;
}>;
export default async function TicketDetailsPage(props: TicketDetailsPageProps) {
    const params = await props.params;
    return (
        <>
            <TicketCard
                id={parseInt(params.id)}
                status="open"
                author="AuthorName"
                date="December 10th 2025"
                title="Ticket title should be here"
                details="Some details about the ticket should be here."
            />
            <TicketComments comments={comments} />
        </>
    );
}