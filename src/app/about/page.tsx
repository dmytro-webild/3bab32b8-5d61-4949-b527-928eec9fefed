"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function AboutPage() {
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

      <div id="about-main" data-section="about-main">
        <MetricSplitMediaAbout
          tag="Our Story"
          title="Building the Future of Product Catalogs"
          description="CatalogOS was founded with a simple mission: to empower businesses of all sizes to showcase their products beautifully and manage them effortlessly. We believe that catalog management shouldn't be complicated. That's why we built a platform that combines elegance with power, simplicity with scale."
          imageSrc="http://img.b2bpic.net/free-photo/saas-concept-collage_23-2149399295.jpg?_wi=2"
          imageAlt="CatalogOS platform overview"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          metrics={[
            { value: "5+", title: "Years of platform development" },
            { value: "2,500+", title: "Businesses trust CatalogOS" },
          ]}
        />
      </div>

      <div id="about-testimonials" data-section="about-testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Don't take our word for it. Here's what industry leaders think about CatalogOS and how it's transformed their businesses."
          tag="Success Stories"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "test-1",              name: "Sarah Mitchell",              role: "CEO, Fashion Collective",              testimonial: "We migrated from multiple tools to CatalogOS and cut our inventory management time by 60%. The team loves the intuitive admin panel.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg?_wi=3",              imageAlt: "Sarah Mitchell"},
            {
              id: "test-2",              name: "David Kumar",              role: "Founder, TechGear Store",              testimonial: "The bulk import feature is a game-changer. We onboarded 8,000 products in a single afternoon. Performance is flawless.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg?_wi=3",              imageAlt: "David Kumar"},
            {
              id: "test-3",              name: "Elena Rodriguez",              role: "Operations Director, Luxury Goods Co",              testimonial: "CatalogOS gives us the minimal aesthetic we love with enterprise-grade power underneath. Exactly what we needed.",              imageSrc: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg?_wi=3",              imageAlt: "Elena Rodriguez"},
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
