"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Welcome to Your Catalog"
          description="Browse our complete product collection with high-quality images and detailed information. Start exploring now."
          tag="Shop Now"
          imageSrc="http://img.b2bpic.net/free-vector/ecommerce-email-template_52683-49444.jpg"
          imageAlt="Product catalog showcase"
          background={{ variant: "glowing-orb" }}
          testimonials={[
            {
              name: "Alex Chen",              handle: "Founder, RetailFlow",              testimonial: "CatalogOS transformed how we manage our products. Simple and powerful.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg?_wi=1",              imageAlt: "Alex Chen portrait"
            },
            {
              name: "Maria Santos",              handle: "Operations Manager, StyleHub",              testimonial: "Incredibly intuitive interface. Our team got up to speed in minutes.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg?_wi=1",              imageAlt: "Maria Santos portrait"
            },
            {
              name: "James Wilson",              handle: "CTO, Digital Ventures",              testimonial: "Production-ready from day one. Exactly what we needed.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg?_wi=1",              imageAlt: "James Wilson portrait"
            },
          ]}
          buttons={[
            { text: "Browse Catalog", href: "/catalog" },
            { text: "Learn More", href: "/about" },
          ]}
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
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
