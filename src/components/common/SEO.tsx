import { useEffect } from "react";
import { BUSINESS_CONFIG } from "../../config/business";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
}

export default function SEO({
  title,
  description = BUSINESS_CONFIG.shortDescription,
  canonicalPath = "",
  ogType = "website"
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_CONFIG.name} Pallickal`
    : `${BUSINESS_CONFIG.name} — Expert Phone, Tablet & Laptop Repair in Pallickal, Kerala`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMetaTag = (nameAttr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", BUSINESS_CONFIG.name);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);

    // Update canonical link
    const currentUrl = window.location.origin + (canonicalPath || window.location.pathname);
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

  }, [fullTitle, description, canonicalPath, ogType]);

  return null;
}
