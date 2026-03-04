"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function CatalogPage() {
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
            { name: "Features", id: "#features" },
            { name: "Pricing", id: "#pricing" },
            { name: "Docs", id: "#docs" },
          ]}
          button={{ text: "Launch Admin", href: "/admin" }}
          animateOnLoad={true}
        />
      </div>

      <div id="catalog-products" data-section="catalog-products">
        <ProductCardOne
          title="Complete Product Catalog"
          description="Explore our full collection of premium products with detailed imagery and specifications. Every item is carefully curated and professionally photographed."
          tag="All Products"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "prod-1",
              name: "Premium Product A",
              price: "$149.99",
              imageSrc: "http://img.b2bpic.net/free-photo/sustainability-concept-with-blank-geometric-forms-growing-plant_23-2148994248.jpg?_wi=3",
              imageAlt: "Premium product A",
            },
            {
              id: "prod-2",
              name: "Deluxe Item B",
              price: "$249.99",
              imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083956.jpg?_wi=3",
              imageAlt: "Deluxe item B",
            },
            {
              id: "prod-3",
              name: "Exclusive Collection C",
              price: "$199.99",
              imageSrc: "http://img.b2bpic.net/free-psd/cyber-monday-landing-page-template_23-2149839009.jpg?_wi=3",
              imageAlt: "Exclusive collection C",
            },
            {
              id: "prod-4",
              name: "Limited Edition D",
              price: "$299.99",
              imageSrc: "http://img.b2bpic.net/free-photo/sustainability-concept-with-blank-geometric-forms-growing-plant_23-2148994248.jpg?_wi=4",
              imageAlt: "Limited edition D",
            },
          ]}
        />
      </div>

      <div id="catalog-featured" data-section="catalog-featured">
        <ProductCardOne
          title="New Arrivals"
          description="Check out our latest additions to the catalog. Fresh inventory updated regularly with trending and exclusive items."
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          useInvertedBackground={true}
          products={[
            {
              id: "prod-5",
              name: "Premium Selection E",
              price: "$179.99",
              imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083956.jpg?_wi=4",
              imageAlt: "Premium selection E",
            },
            {
              id: "prod-6",
              name: "Signature Line F",
              price: "$219.99",
              imageSrc: "http://img.b2bpic.net/free-psd/cyber-monday-landing-page-template_23-2149839009.jpg?_wi=4",
              imageAlt: "Signature line F",
            },
            {
              id: "prod-7",
              name: "Exclusive Premium G",
              price: "$279.99",
              imageSrc: "http://img.b2bpic.net/free-photo/sustainability-concept-with-blank-geometric-forms-growing-plant_23-2148994248.jpg?_wi=5",
              imageAlt: "Exclusive premium G",
            },
          ]}
        />
      </div>

      <div id="catalog-bestsellers" data-section="catalog-bestsellers">
        <ProductCardOne
          title="Best Sellers"
          description="Discover what customers love most. These best-selling items are proven favorites with excellent reviews and consistent popularity."
          tag="Top Rated"
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          useInvertedBackground={false}
          products={[
            {
              id: "prod-8",
              name: "Customer Favorite H",
              price: "$189.99",
              imageSrc: "http://img.b2bpic.net/free-photo/yellow-model-career-kit-arrangement_23-2150083956.jpg?_wi=5",
              imageAlt: "Customer favorite H",
            },
            {
              id: "prod-9",
              name: "Best Seller I",
              price: "$239.99",
              imageSrc: "http://img.b2bpic.net/free-psd/cyber-monday-landing-page-template_23-2149839009.jpg?_wi=5",
              imageAlt: "Best seller I",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="CatalogOS"
          copyrightText="© 2025 CatalogOS | Professional Product Catalog Platform"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Bulk Import", href: "#" },
                { label: "Admin Dashboard", href: "#" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Support", href: "#" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}