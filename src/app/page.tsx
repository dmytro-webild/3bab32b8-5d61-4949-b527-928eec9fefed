"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";

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
            { name: "Public", id: "/" },
            { name: "Catalog", id: "/catalog" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Launch Admin", href: "/admin" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Image-First Product Catalog Platform"
          description="Build a professional, scalable catalog with image browsing, admin dashboard, and optional e-commerce. Upload bulk images, organize hierarchically, and manage everything from one powerful platform."
          tag="Platform Launch"
          imageSrc="http://img.b2bpic.net/free-vector/ecommerce-email-template_52683-49444.jpg"
          imageAlt="Product catalog grid showcase"
          background={{ variant: "glowing-orb" }}
          testimonials={[
            {
              name: "Alex Chen",              handle: "Founder, RetailFlow",              testimonial: "CatalogOS transformed how we manage 10,000+ products. The bulk import saved us weeks of work.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg?_wi=1",              imageAlt: "Alex Chen portrait"},
            {
              name: "Maria Santos",              handle: "Operations Manager, StyleHub",              testimonial: "The admin dashboard is incredibly intuitive. Our team got up to speed in minutes, not days.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg?_wi=1",              imageAlt: "Maria Santos portrait"},
            {
              name: "James Wilson",              handle: "CTO, Digital Ventures",              testimonial: "Finally, a catalog platform that doesn't sacrifice performance or flexibility. Production-ready from day one.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg?_wi=1",              imageAlt: "James Wilson portrait"},
          ]}
          buttons={[
            { text: "Start Free Trial", href: "#" },
            { text: "View Demo", href: "#" },
          ]}
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Everything You Need to Scale"
          description="A complete solution for modern product catalog management"
          tag="Core Features"
          tagAnimation="slide-up"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Image-First Grid Layout",              description: "Beautiful, responsive grid-based product browsing optimized for mobile and desktop. High-speed image loading with CDN-ready architecture.",              imageSrc: "http://img.b2bpic.net/free-vector/simple-ux-storyboard_742173-4525.jpg?_wi=1",              imageAlt: "Product grid layout showcase"},
            {
              id: 2,
              title: "Powerful Admin Dashboard",              description: "Shopify-like admin interface with secure authentication, category management, product editing, and real-time analytics.",              imageSrc: "http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg",              imageAlt: "Admin dashboard interface"},
            {
              id: 3,
              title: "Bulk Image Import (ZIP)",              description: "Automatically extract, organize, and import hundreds of images at once. Folder structure becomes products and categories instantly.",              imageSrc: "http://img.b2bpic.net/free-vector/concept-transfer-files-landing-page_52683-26836.jpg",              imageAlt: "Bulk upload interface"},
            {
              id: 4,
              title: "Hierarchical Organization",              description: "Unlimited category nesting levels. Organize products by parent-child relationships with seamless breadcrumb navigation.",              imageSrc: "http://img.b2bpic.net/free-vector/simple-ux-storyboard_742173-4525.jpg?_wi=2",              imageAlt: "Category hierarchy structure"},
          ]}
          animationType="blur-reveal"
          useInvertedBackground={false}
          buttons={[{ text: "Explore All Features", href: "#" }]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Sample Product Gallery"
          description="Browse our curated product showcase featuring premium items with high-quality imagery."
          tag="Gallery"
          textboxLayout="default"
          gridVariant="bento-grid"
          animationType="slide-up"
          useInvertedBackground={true}
          products={[
            {
              id: "prod-1",              name: "Premium Product A",              price: "$149.99",              imageSrc: "http://img.b2bpic.net/free-photo/sustainability-concept-with-blank-geometric-forms-growing-plant_23-2148994248.jpg?_wi=1",              imageAlt: "Premium product A"},
            {
              id: "prod-2",              name: "Deluxe Item B",              price: "$249.99",              imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083956.jpg?_wi=1",              imageAlt: "Deluxe item B"},
            {
              id: "prod-3",              name: "Exclusive Collection C",              price: "$199.99",              imageSrc: "http://img.b2bpic.net/free-psd/cyber-monday-landing-page-template_23-2149839009.jpg?_wi=1",              imageAlt: "Exclusive collection C"},
            {
              id: "prod-4",              name: "Limited Edition D",              price: "$299.99",              imageSrc: "http://img.b2bpic.net/free-photo/sustainability-concept-with-blank-geometric-forms-growing-plant_23-2148994248.jpg?_wi=2",              imageAlt: "Limited edition D"},
            {
              id: "prod-5",              name: "Premium Selection E",              price: "$179.99",              imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083956.jpg?_wi=2",              imageAlt: "Premium selection E"},
            {
              id: "prod-6",              name: "Signature Line F",              price: "$219.99",              imageSrc: "http://img.b2bpic.net/free-psd/cyber-monday-landing-page-template_23-2149839009.jpg?_wi=2",              imageAlt: "Signature line F"},
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Built for Scale"
          title="Catalog Platform Designed for Modern Businesses"
          description="CatalogOS combines the simplicity of Yupoo with enterprise-grade features. Whether you're running a boutique fashion store or managing 50,000+ SKUs, our platform scales effortlessly."
          imageSrc="http://img.b2bpic.net/free-photo/saas-concept-collage_23-2149399295.jpg?_wi=1"
          imageAlt="CatalogOS platform overview"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          metrics={[
            { value: "10,000+", title: "Products supported seamlessly" },
            { value: "99.9%", title: "Uptime guaranteed" },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Our Impact & Scale"
          description="The results speak for themselves. See how CatalogOS powers modern catalog businesses."
          tag="Statistics"
          textboxLayout="default"
          animationType="scale-rotate"
          useInvertedBackground={false}
          metrics={[
            {
              id: "metric-1",              value: "500M+",              title: "Images served monthly",              items: ["CDN-optimized delivery", "Sub-100ms load times", "Mobile-first performance"],
            },
            {
              id: "metric-2",              value: "2,500+",              title: "Active catalog businesses",              items: ["From boutiques to enterprises", "Multiple industries served", "Global customer base"],
            },
            {
              id: "metric-3",              value: "99.9%",              title: "Platform uptime SLA",              items: ["Enterprise-grade infrastructure", "Redundant systems", "24/7 monitoring"],
            },
            {
              id: "metric-4",              value: "60%",              title: "Average time saved weekly",              items: ["Automated bulk imports", "Streamlined admin workflows", "No manual data entry"],
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by Industry Leaders"
          description="Real feedback from real customers using CatalogOS to transform their businesses."
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "test-1",              name: "Sarah Mitchell",              role: "CEO, Fashion Collective",              testimonial: "We migrated from multiple tools to CatalogOS and cut our inventory management time by 60%. The team loves the intuitive admin panel.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg?_wi=2",              imageAlt: "Sarah Mitchell"},
            {
              id: "test-2",              name: "David Kumar",              role: "Founder, TechGear Store",              testimonial: "The bulk import feature is a game-changer. We onboarded 8,000 products in a single afternoon. Performance is flawless.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg?_wi=2",              imageAlt: "David Kumar"},
            {
              id: "test-3",              name: "Elena Rodriguez",              role: "Operations Director, Luxury Goods Co",              testimonial: "CatalogOS gives us the minimal aesthetic we love with enterprise-grade power underneath. Exactly what we needed.",              imageSrc: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg?_wi=2",              imageAlt: "Elena Rodriguez"},
            {
              id: "test-4",              name: "Michael Chen",              role: "Head of E-commerce, RetailNet",              testimonial: "The hierarchical category system is brilliant. Customers love the clean navigation. Conversion rates are up 35%.",              imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3797.jpg",              imageAlt: "Michael Chen"},
            {
              id: "test-5",              name: "Jessica Thompson",              role: "Product Manager, StyleHub",              testimonial: "Admin dashboard feels like Shopify but optimized for catalog businesses. Support team is incredibly responsive.",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-office-engages-communication-virtual-presentation-talking_482257-133582.jpg",              imageAlt: "Jessica Thompson"},
            {
              id: "test-6",              name: "Robert Schmidt",              role: "CTO, Digital Marketplace",              testimonial: "The architecture is clean and scalable. API is well-documented. Integration was seamless. Highly recommended.",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-leader-meeting-with-his-team_1262-2160.jpg",              imageAlt: "Robert Schmidt"},
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
