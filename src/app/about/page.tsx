"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
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
            { name: "Home", id: "/" },
            { name: "Catalog", id: "/catalog" },
            { name: "About Us", id: "/about" },
            { name: "Contact Us", id: "/contact" },
          ]}
          button={{ text: "Launch Admin", href: "/admin" }}
          animateOnLoad={true}
        />
      </div>

      <div id="about-main" data-section="about-main">
        <MetricSplitMediaAbout
          tag="Our Story"
          title="About Us"
          description="CatalogOS is a professional product catalog platform designed to help businesses showcase their products beautifully and manage them effortlessly. We combine elegance with power, simplicity with scale."
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
