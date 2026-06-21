import type { LucideIcon } from "lucide-react";
import {
  Search,
  Smartphone,
  Monitor,
  BarChart3,
  Video,
  Mail,
  Sparkles,
  Target,
  MapPin,
  Briefcase,
  TrendingUp,
  PenTool,
  Star,
  Award,
  Megaphone,
} from "lucide-react";

/**
 * Maps each service slug to a clean Lucide icon.
 * Single source of truth so the home page and services page stay consistent.
 */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  seo: Search,
  "social-media-marketing": Smartphone,
  "web-design-development": Monitor,
  "ppc-advertising": BarChart3,
  "video-editing": Video,
  "email-marketing": Mail,
  "content-creation": Sparkles,
  "lead-generation": Target,
  "local-seo": MapPin,
  "linkedin-branding": Briefcase,
  cro: TrendingUp,
  "graphic-design": PenTool,
  "online-reputation": Star,
  "influencer-marketing": Award,
  aso: Megaphone,
};

export function getServiceIcon(slug: string): LucideIcon {
  return SERVICE_ICONS[slug] ?? Sparkles;
}
