import { jsPDF } from "jspdf";
import { siteConfig } from "@/lib/site-config";
import { resultSites } from "@/lib/data/results";
import { processSteps } from "@/lib/data/content";

const ink = "#111827";
const accent = "#FF6F91";
const soft = "#F8F5F6";

const CEO = {
  name: "April Grace Degracia",
  title: "Founder & CEO",
  photo: "/images/april-portrait.jpg",
  bio: "SEO specialist and organic growth expert. 5+ years helping ecommerce, SaaS, health, and lifestyle brands grow visibility on Google — and get named in AI search.",
};

const ALL_SERVICES = [
  "SEO Services — technical, on-page & growth systems",
  "AI SEO / GEO — AI Overviews, ChatGPT, Perplexity",
  "Website Development — fast, conversion-focused sites",
  "Local SEO — Maps & local pack visibility",
  "Technical SEO — crawl, index, Core Web Vitals",
  "Content Marketing — briefs, writing & refreshes",
  "Lead Generation — organic funnels to pipeline",
  "White Label SEO — agency delivery under your brand",
];

function loadImageAsDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas unavailable"));
        return;
      }
      ctx.drawImage(img, 0, 0);
      const isPng = src.toLowerCase().includes(".png");
      resolve(canvas.toDataURL(isPng ? "image/png" : "image/jpeg", 0.92));
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/** Circular-cropped portrait as PNG data URL for jsPDF */
async function loadCircularPortrait(src: string, size = 512): Promise<string> {
  const dataUrl = await loadImageAsDataUrl(src);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas unavailable"));
        return;
      }
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2 - h * 0.05, w, h);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => reject(new Error("Failed to crop portrait"));
    img.src = dataUrl;
  });
}

function paintBackground(doc: jsPDF, pageW: number, pageH: number) {
  doc.setFillColor(ink);
  doc.rect(0, 0, pageW, pageH, "F");
  doc.setFillColor(80, 40, 55);
  doc.circle(pageW - 40, 80, 120, "F");
  doc.circle(60, pageH - 60, 100, "F");
}

function brandHeader(doc: jsPDF, margin: number, y = 52) {
  doc.setTextColor(accent);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("RANKEDBYAPRIL", margin, y);
}

function pageFooter(
  doc: jsPDF,
  pageW: number,
  pageH: number,
  page: number,
  total: number
) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 125, 135);
  doc.text(
    `${siteConfig.email}  ·  ${siteConfig.url.replace(/^https?:\/\//, "")}`,
    48,
    pageH - 28
  );
  doc.text(`${page} / ${total}`, pageW - 48, pageH - 28, { align: "right" });
}

/**
 * Full company brochure (A4, multi-page) for WhatsApp / email —
 * includes CEO photo, all services, results, process, and contact.
 */
export async function downloadBrochurePdf() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;

  let portraitUrl: string | null = null;
  let flyerUrl: string | null = null;
  try {
    portraitUrl = await loadCircularPortrait(CEO.photo, 640);
  } catch {
    /* continue without photo */
  }
  try {
    flyerUrl = await loadImageAsDataUrl("/whatsapp-brochure-v2.png");
  } catch {
    /* optional */
  }

  const totalPages = flyerUrl ? 4 : 3;

  // ─── PAGE 1: Cover + CEO ─────────────────────────────────────────
  paintBackground(doc, pageW, pageH);
  brandHeader(doc, margin);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  const headline = doc.splitTextToSize(
    "SEO that grows visibility, traffic & revenue",
    pageW - margin * 2 - (portraitUrl ? 150 : 0)
  );
  doc.text(headline, margin, 96);

  doc.setTextColor(200, 205, 215);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Shopify  ·  Health  ·  Beauty  ·  SaaS", margin, 150);

  if (portraitUrl) {
    const photoSize = 118;
    const px = pageW - margin - photoSize;
    const py = 72;
    doc.setFillColor(accent);
    doc.circle(px + photoSize / 2, py + photoSize / 2, photoSize / 2 + 3, "F");
    doc.addImage(portraitUrl, "PNG", px, py, photoSize, photoSize);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(CEO.name, px + photoSize / 2, py + photoSize + 16, { align: "center" });
    doc.setTextColor(accent);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(CEO.title, px + photoSize / 2, py + photoSize + 28, {
      align: "center",
    });
  }

  const stats = [
    { value: "5+", label: "years growing\norganic visibility" },
    { value: "30+", label: "brands &\npublications" },
    { value: "250M+", label: "combined\norganic views*" },
  ];
  let x = margin;
  const statY = 210;
  stats.forEach((stat) => {
    doc.setTextColor(accent);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(stat.value, x, statY);
    doc.setTextColor(180, 185, 195);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(stat.label.split("\n"), x, statY + 16);
    x += 160;
  });

  const aboutY = 280;
  doc.setFillColor(soft);
  doc.roundedRect(margin, aboutY, pageW - margin * 2, 130, 14, 14, "F");
  doc.setTextColor(ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(`Meet ${CEO.name}`, margin + 22, aboutY + 28);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 65, 75);
  const bioLines = doc.splitTextToSize(CEO.bio, pageW - margin * 2 - 44);
  doc.text(bioLines, margin + 22, aboutY + 48);
  doc.setTextColor(accent);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(
    `${CEO.title}  ·  ${siteConfig.address.city}, ${siteConfig.address.state}`,
    margin + 22,
    aboutY + 110
  );

  const ctaY = aboutY + 150;
  doc.setFillColor(accent);
  doc.roundedRect(margin, ctaY, pageW - margin * 2, 52, 12, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(
    "Free mini audit — share your site + target keyword",
    margin + 22,
    ctaY + 32
  );

  doc.setTextColor(200, 205, 215);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(siteConfig.email, margin, ctaY + 80);
  doc.text(`WhatsApp / phone: ${siteConfig.phone}`, margin, ctaY + 98);
  doc.text(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state}, ${siteConfig.address.country}`,
    margin,
    ctaY + 116
  );

  pageFooter(doc, pageW, pageH, 1, totalPages);

  // ─── PAGE 2: Services + Results ──────────────────────────────────
  doc.addPage();
  paintBackground(doc, pageW, pageH);
  brandHeader(doc, margin);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("What we take off your plate", margin, 90);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(180, 185, 195);
  doc.text("Full-stack organic growth — not random blog posts.", margin, 110);

  let sy = 140;
  ALL_SERVICES.forEach((item) => {
    doc.setFillColor(accent);
    doc.circle(margin + 6, sy - 3, 3.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(item, margin + 20, sy);
    sy += 22;
  });

  const resY = sy + 24;
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Selected results*", margin, resY);

  doc.setFillColor(soft);
  const cardTop = resY + 16;
  const featured = resultSites.slice(0, 6);
  const cardH = 28 + featured.length * 28;
  doc.roundedRect(margin, cardTop, pageW - margin * 2, cardH, 12, 12, "F");

  let ry = cardTop + 22;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(120, 125, 135);
  doc.text("BRAND", margin + 16, ry);
  doc.text("KEYWORDS", margin + 200, ry);
  doc.text("TRAFFIC", margin + 300, ry);
  doc.text("GROWTH", margin + 400, ry);
  ry += 14;
  doc.setDrawColor(220, 220, 225);
  doc.setLineWidth(0.5);
  doc.line(margin + 12, ry, pageW - margin - 12, ry);
  ry += 16;

  featured.forEach((site) => {
    doc.setTextColor(ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(site.domain, margin + 16, ry);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(60, 65, 75);
    doc.text(site.keywords, margin + 200, ry);
    doc.text(site.traffic, margin + 300, ry);
    doc.setTextColor(accent);
    doc.setFont("helvetica", "bold");
    doc.text(site.trafficGrowth || site.keywordsGrowth || "—", margin + 400, ry);
    ry += 26;
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(140, 145, 155);
  const disclaimer = doc.splitTextToSize(
    "*Snapshots from third-party SEO tools. Results vary by market and execution.",
    pageW - margin * 2
  );
  doc.text(disclaimer, margin, pageH - 48);

  pageFooter(doc, pageW, pageH, 2, totalPages);

  // ─── PAGE 3: Process + Contact ───────────────────────────────────
  doc.addPage();
  paintBackground(doc, pageW, pageH);
  brandHeader(doc, margin);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("How we work", margin, 90);

  let py = 118;
  processSteps.slice(0, 6).forEach((step) => {
    doc.setTextColor(accent);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(step.number, margin, py);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(step.title, margin + 28, py);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(180, 185, 195);
    const desc = doc.splitTextToSize(step.description, pageW - margin * 2 - 28);
    doc.text(desc, margin + 28, py + 14);
    py += 14 + desc.length * 11 + 14;
  });

  const bandY = Math.min(py + 10, pageH - 160);
  doc.setFillColor(accent);
  doc.roundedRect(margin, bandY, pageW - margin * 2, 100, 14, 14, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Let's get you ranked.", margin + 22, bandY + 28);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    "Email your website + target keyword for a free mini audit.",
    margin + 22,
    bandY + 48
  );
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(siteConfig.email, margin + 22, bandY + 70);
  doc.text(siteConfig.phone, margin + 22, bandY + 86);

  pageFooter(doc, pageW, pageH, 3, totalPages);

  // ─── PAGE 4: Shareable flyer (visual, includes CEO photo) ────────
  if (flyerUrl) {
    doc.addPage();
    doc.setFillColor(ink);
    doc.rect(0, 0, pageW, pageH, "F");
    const maxW = pageW - margin * 2;
    const maxH = pageH - margin * 2;
    const imgRatio = 1080 / 1920;
    let drawH = maxH;
    let drawW = drawH * imgRatio;
    if (drawW > maxW) {
      drawW = maxW;
      drawH = drawW / imgRatio;
    }
    const dx = (pageW - drawW) / 2;
    const dy = (pageH - drawH) / 2;
    doc.addImage(flyerUrl, "PNG", dx, dy, drawW, drawH);
  }

  doc.save("rankedbyapril-brochure.pdf");
}
