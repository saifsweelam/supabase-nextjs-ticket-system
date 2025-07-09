"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreateTicketForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
    assignee: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Ticket submitted:", form)
  }

  return (
    <Card className="bg-muted/40 w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Create New Ticket</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              required
              placeholder="Short summary of the issue"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              required
              placeholder="Detailed description of the problem"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          {/* Priority & Assignee (responsive row) */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={form.priority}
                onValueChange={(value) => handleChange("priority", value)}
              >
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 space-y-2">
              <Label htmlFor="assignee">Assignee</Label>
              <Input
                id="assignee"
                placeholder="e.g. alice@example.com"
                value={form.assignee}
                onChange={(e) => handleChange("assignee", e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit">Submit Ticket</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
