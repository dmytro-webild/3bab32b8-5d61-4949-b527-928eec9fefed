"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
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
            { name: "Home", id: "/" },
            { name: "Catalog", id: "/catalog" },
            { name: "About Us", id: "/about" },
            { name: "Contact Us", id: "/contact" },
          ]}
          button={{ text: "Launch Admin", href: "/admin" }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-main" data-section="contact-main">
        <ContactCenter
          tag="Contact Us"
          title="Get in Touch"
          description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          onSubmit={(email) => console.log("Contact email:", email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="CatalogOS"
          copyrightText="© 2025 CatalogOS | Professional Product Catalog Platform"
          columns={[
            {
              title: "Product",              items: [
                { label: "Catalog", href: "/catalog" },
                { label: "Features", href: "/about" },
                { label: "Admin Dashboard", href: "/admin" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Support", href: "/contact" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
