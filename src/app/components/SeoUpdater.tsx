import { useEffect } from "react";
import { useLocation } from "react-router";
import type { SeoPage } from "@/seo/seoRoutes";
import { defaultSeo, seoPages, siteUrl, structuredData } from "@/seo/seoRoutes";

const createOrUpdateMeta = (attrKey: string, attrValue: string, content: string) => {
  if (!content) return;
  const selector = `meta[${attrKey}="${attrValue}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrKey, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const updateCanonicalLink = (href: string) => {
  let link = document.head.querySelector("link[rel='canonical']");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const setStructuredData = () => {
  const selector = "script[type='application/ld+json'][data-schema='organization']";
  let script = document.head.querySelector(selector);

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-schema", "organization");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(structuredData);
};

const getSeoForPath = (pathname: string): SeoPage => {
  const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return seoPages.find((page: SeoPage) => page.path === normalized) || defaultSeo;
};

export const SeoUpdater = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const pageUrl = `${siteUrl}${seo.path}`;

    document.title = seo.title;
    createOrUpdateMeta("name", "description", seo.description);
    createOrUpdateMeta("name", "keywords", seo.keywords);
    createOrUpdateMeta("property", "og:title", seo.title);
    createOrUpdateMeta("property", "og:description", seo.description);
    createOrUpdateMeta("property", "og:url", pageUrl);
    createOrUpdateMeta("property", "og:image", seo.image);
    createOrUpdateMeta("property", "og:site_name", "Hemmings Anytime");
    createOrUpdateMeta("name", "twitter:title", seo.title);
    createOrUpdateMeta("name", "twitter:description", seo.description);
    createOrUpdateMeta("name", "twitter:image", seo.image);
    createOrUpdateMeta("name", "twitter:card", "summary_large_image");

    if (seo.noIndex) {
      createOrUpdateMeta("name", "robots", "noindex, nofollow");
    } else {
      createOrUpdateMeta("name", "robots", "index, follow");
    }

    updateCanonicalLink(pageUrl);
    setStructuredData();
  }, [pathname]);

  return null;
};
