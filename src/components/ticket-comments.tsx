"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type Comment = {
    id: number
    author: string
    avatarUrl?: string
    content: string
    createdAt: string
}

type TicketCommentsProps = {
    comments: Comment[]
    onSubmit?: (content: string) => void
}

export function TicketComments({ comments, onSubmit }: TicketCommentsProps) {
    const [content, setContent] = useState("")

    const handleSubmit = () => {
        if (!content.trim()) return
        onSubmit?.(content)
        setContent("")
    }

    return (
        <Card className="bg-muted/40">
            <CardHeader>
                <CardTitle className="text-base">Comments</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No comments yet.</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex items-start gap-3">
                            <Avatar className="h-8 w-8">
                                {comment.avatarUrl ? (
                                    <AvatarImage src={comment.avatarUrl} alt={comment.author} />
                                ) : (
                                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                                )}
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium text-foreground">{comment.author}</p>
                                <p className="text-xs text-muted-foreground">{comment.createdAt}</p>
                                <p className="text-sm text-foreground mt-1 whitespace-pre-line">{comment.content}</p>
                            </div>
                        </div>
                    ))
                )}

                {/* Comment form */}
                <div className="space-y-2 pt-4 border-t border-border">
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write a comment..."
                        className="min-h-[80px]"
                    />
                    <div className="flex justify-end">
                        <Button onClick={handleSubmit} disabled={!content.trim()}>
                            Add Comment
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
