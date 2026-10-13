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
