// app/resources/data.ts

// (Move the resources, subjects, semesters, and fileTypes arrays from page.tsx here)

// ADD 'export' HERE
// app/resources/data.ts

export const resources = [
  {
    id: 1,
    title: "Advanced Calculus Complete Notes",
    description: "Comprehensive notes covering limits, derivatives, integrals, and series with solved examples.",
    subject: "Mathematics",
    semester: "Semester 3",
    faculty: "Dr. Smith",
    type: "PDF",
    size: "2.4 MB",
    downloads: 234,
    rating: 4.8,
    uploadedBy: "Sarah Chen",
    timeAgo: "2 hours ago",
    tags: ["calculus", "mathematics", "derivatives", "integrals"],
    fileName: null,       // <-- added
    downloadUrl: null,    // <-- added
  },
  {
    id: 2,
    title: "Physics Lab Manual - Mechanics",
    description: "Complete lab manual with experiments, procedures, and analysis for mechanics course.",
    subject: "Physics",
    semester: "Semester 2",
    faculty: "Prof. Johnson",
    type: "DOCX",
    size: "1.8 MB",
    downloads: 156,
    rating: 4.6,
    uploadedBy: "Mike Johnson",
    timeAgo: "5 hours ago",
    tags: ["physics", "lab", "mechanics", "experiments"],
    fileName: null,
    downloadUrl: null,
  },
  {
    id: 3,
    title: "Organic Chemistry Reaction Mechanisms",
    description: "Visual guide to organic chemistry reactions with step-by-step mechanisms.",
    subject: "Chemistry",
    semester: "Semester 4",
    faculty: "Dr. Davis",
    type: "PPT",
    size: "5.2 MB",
    downloads: 89,
    rating: 4.9,
    uploadedBy: "Emma Davis",
    timeAgo: "1 day ago",
    tags: ["chemistry", "organic", "reactions", "mechanisms"],
    fileName: null,
    downloadUrl: null,
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    description: "Complete implementation guide with code examples in Python and Java.",
    subject: "Computer Science",
    semester: "Semester 3",
    faculty: "Prof. Wilson",
    type: "PDF",
    size: "3.1 MB",
    downloads: 312,
    rating: 4.7,
    uploadedBy: "Alex Kumar",
    timeAgo: "2 days ago",
    tags: ["programming", "algorithms", "data-structures", "python"],
    fileName: null,
    downloadUrl: null,
  },
  {
    id: 5,
    title: "Linear Algebra Video Lectures",
    description: "Complete video series covering matrices, eigenvalues, and vector spaces.",
    subject: "Mathematics",
    semester: "Semester 2",
    faculty: "Dr. Brown",
    type: "MP4",
    size: "1.2 GB",
    downloads: 78,
    rating: 4.5,
    uploadedBy: "Lisa Wang",
    timeAgo: "3 days ago",
    tags: ["mathematics", "linear-algebra", "matrices", "videos"],
    fileName: null,
    downloadUrl: null,
  },
  {
    id: 6,
    title: "Biology Lab Images Collection",
    description: "High-resolution microscopy images for cell biology and anatomy studies.",
    subject: "Biology",
    semester: "Semester 1",
    faculty: "Dr. Garcia",
    type: "ZIP",
    size: "45 MB",
    downloads: 67,
    rating: 4.4,
    uploadedBy: "Tom Rodriguez",
    timeAgo: "1 week ago",
    tags: ["biology", "microscopy", "cells", "anatomy"],
    fileName: null,
    downloadUrl: null,
  },
];

export const subjects = ["All Subjects", "Mathematics", "Physics", "Chemistry", "Computer Science", "Biology"];
export const semesters = ["All Semesters", "Semester 1", "Semester 2", "Semester 3", "Semester 4"];
export const fileTypes = ["All Types", "PDF", "DOCX", "PPT", "MP4", "ZIP"];

// keep this — it will now include fileName/downloadUrl because resources[] contains them
export type Resource = (typeof resources)[0];
