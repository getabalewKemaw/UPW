import React from "react";

export interface SocialLinkItem {
  id: string;
  label: string;
  href: string;
  urlText: string;
  icon: React.ReactNode;
}

export interface TopicChipItem {
  id: string;
  label: string;
}

export interface InteractiveMentionProps {
  label: string;
  href: string;
  urlText: string;
  icon?: React.ReactNode;
  showInlineIcon?: boolean;
}

export interface ProjectEvidence {
  liveUrl?: string;
  githubUrl?: string;
  metrics: string[];
  statusLabel?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & ML" | "Fullstack SaaS" | "Media & Streaming" | "Commerce & FinTech";
  badge: string;
  image: string;
  overview: string;
  problemStatement: string;
  solution: string;
  engineeringContributions: string[];
  qualityAndReliability: string[];
  technologies: string[];
  evidence: ProjectEvidence;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  skills?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  overview: string;
  deliverables: string[];
  trainingAndQuality?: string;
  technologies: string[];
  bookingTierId: string;
}

export interface BookingTier {
  id: string;
  title: string;
  duration: string;
  description: string;
  badge: string;
  deliverables: string[];
}

