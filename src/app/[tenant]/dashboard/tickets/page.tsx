import { Tickets } from "@/components/tickets";
import { FileText } from "lucide-react";

export default function TicketsPage() {
    return (
        <>
            <div className="items-center justify-center min-h-[60vh] hidden md:flex">
                <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
                        <FileText className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">No Ticket Selected</h2>
                    <p className="text-muted-foreground max-w-md">
                        Select a ticket from the sidebar to view its details and manage it here.
                    </p>
                </div>
            </div>
            <div className="md:hidden">
                <Tickets />
            </div>
        </>
    )
}