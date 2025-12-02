// components/requests/request-comments-dialog.tsx
"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

interface Comment {
  id: string
  content: string
  createdAt: string
  user: {
    id: string
    name: string | null
    image: string | null
  }
}

interface RequestCommentsDialogProps {
  requestId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function RequestCommentsDialog({ requestId, open, onOpenChange }: RequestCommentsDialogProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/requests/${requestId}/comments`)
      if (!response.ok) throw new Error("Failed to fetch comments")
      const data = await response.json()
      setComments(data)
    } catch (error) {
      console.error("Error fetching comments:", error)
      toast({
        title: "Error",
        description: "Failed to load comments",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (open) {
      fetchComments()
    }
  }, [open, requestId])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to comment",
        variant: "destructive",
      })
      return
    }

    if (!newComment.trim()) return

    setIsSubmitting(true)

    try {
      const response = await fetch(`/api/requests/${requestId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newComment }),
      })

      if (!response.ok) throw new Error("Failed to post comment")

      setNewComment("")
      fetchComments()
      toast({
        title: "Success",
        description: "Comment posted successfully",
      })
    } catch (error) {
      console.error("Error posting comment:", error)
      toast({
        title: "Error",
        description: "Failed to post comment",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          <DialogDescription>Share your thoughts or ask questions about this request</DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : comments.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 pb-4 border-b last:border-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.user.image || undefined} />
                  <AvatarFallback className="text-xs">
                    {comment.user.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{comment.user.name || "Anonymous"}</span>
                    <span className="text-xs text-muted-foreground">{getTimeAgo(comment.createdAt)}</span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSubmitComment} className="flex gap-2 pt-4 border-t">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={2}
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting || !newComment.trim()} size="icon">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}