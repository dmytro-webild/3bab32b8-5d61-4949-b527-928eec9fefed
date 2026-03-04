"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
  const handleContactSubmit = (data: Record<string, string>) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="blurBottom"
      cardStyle="layered-gradient"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CatalogOS"
          navItems={[
            { name: "Public", id: "/" },
            { name: "Catalog", id: "/catalog" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Launch Admin", href: "/admin" }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactSplitForm
          title="Get Started Today"
          description="Join hundreds of successful catalog businesses. Fill out the form and our team will contact you within 24 hours to set up your account."
          inputs={[
            { name: "companyName", type: "text", placeholder: "Company Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your catalog business and what you're looking for...",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/she-is-always-available-customers_329181-15144.jpg"
          imageAlt="Contact us illustration"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Request Demo"
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="contact-faq" data-section="contact-faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about CatalogOS features, pricing, and deployment."
          faqsAnimation="slide-up"
          useInvertedBackground={true}
          textPosition="left"
          faqs={[
            {
              id: "faq-1",              title: "How does the bulk image import work?",              content: "Simply upload a ZIP file with your folder structure. Each folder becomes a product, subfolders become categories. The system automatically extracts, organizes, and optimizes all images. You can preview before confirming import."},
            {
              id: "faq-2",              title: "Can I have unlimited category nesting?",              content: "Yes! CatalogOS supports unlimited hierarchical levels. Create parent categories, subcategories, and deeper nested structures as needed. The breadcrumb navigation automatically adjusts."},
            {
              id: "faq-3",              title: "What about e-commerce and checkout?",              content: "Built-in shopping cart and checkout system. Admin can toggle e-commerce on/off, choose payment methods (Stripe, manual, cash-on-delivery). Everything is optional and configurable."},
            {
              id: "faq-4",              title: "How secure is the admin panel?",              content: "Enterprise-grade security with session-based authentication, rate limiting, and role-ready structure for future multi-admin support. All admin routes are protected."},
            {
              id: "faq-5",              title: "Is the platform scalable?",              content: "Absolutely. Handles 10,000+ products seamlessly. CDN-ready, database optimized, and built with production deployment in mind. Scales from startups to enterprises."},
            {
              id: "faq-6",              title: "What integrations are supported?",              content: "Stripe for payments, multiple image CDN providers, and a clean API for custom integrations. Multi-language and multi-admin support are planned."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="CatalogOS"
          copyrightText="© 2025 CatalogOS | Professional Product Catalog Platform"
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "/#features" },
                { label: "Catalog", href: "/catalog" },
                { label: "Bulk Import", href: "#" },
                { label: "Admin Dashboard", href: "/admin" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Support", href: "/contact" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
