"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Resource } from "@/app/resources/data";
import { getFileIcon } from "@/app/resources/utils";

type ResourceGridCardProps = {
  resource: Resource;
  userRating: number;
  onRate: (rating: number) => void;
  onPreview: () => void;
};

export function ResourceGridCard({
  resource,
  userRating,
  onRate,
  onPreview,
}: ResourceGridCardProps) {
  const FileIcon = getFileIcon(resource.type);

  // Small helper: open signed URL in new tab and attempt to trigger download
  const handleDownload = async () => {
    const url = resource.downloadUrl ?? null;
    if (!url) {
      // fallback UX: tell user to refresh or contact admin
      alert("Download not available right now. Try refreshing the page.");
      return;
    }

    try {
      // open in new tab
      window.open(url, "_blank", "noopener,noreferrer");

      // Also attempt programmatic download (some browsers will block cross-origin downloads, but it's ok)
      const a = document.createElement("a");
      a.href = url;
      // filename fallback
      a.download = resource.fileName ?? resource.title ?? "resource";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to start download. Open the link in a new tab or try again.");
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              {/* FileIcon is a component returned by getFileIcon */}
              <FileIcon className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="outline">{resource.type}</Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {resource.rating}
          </div>
        </div>

        <h3 className="font-semibold mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {resource.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="secondary">{resource.subject}</Badge>
            <Badge variant="secondary">{resource.semester}</Badge>
          </div>
          <div className="flex flex-wrap gap-1">
            {(resource.tags ?? []).slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <span className="text-sm text-muted-foreground mr-2">Rate:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => onRate(star)} className="transition-colors hover:scale-110">
              <Star
                className={cn(
                  "h-4 w-4",
                  star <= userRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            {resource.downloads ?? 0}
          </div>
          <span>{resource.size}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{resource.uploadedBy}</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" onClick={onPreview}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
