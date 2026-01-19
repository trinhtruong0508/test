# Advertorial Page Template - Configuration Examples

## Complete Configuration Reference

This file shows all available configuration options for each section of the advertorial page template.

## Template: page.advertorial.json

### Section Order

The sections appear in this order by default:
1. advertorial-header
2. advertorial-main
3. advertorial-products
4. advertorial-cta

You can reorder these in the Shopify theme customizer.

---

## Advertorial Header Section

### Available Settings

```javascript
{
  "show_featured_image": true,          // Show/hide hero image
  "featured_image": "",                  // Image URL/picker
  "headline": "Your Main Headline",      // H1 title
  "subheadline": "Supporting text...",   // Subtitle
  "show_author": true,                   // Show/hide author info
  "author_image": "",                    // Author photo
  "author_name": "Expert Name",          // Author name
  "publish_date": "January 2026"         // Publish date
}
```

### Example Configurations

**Minimal Setup:**
```json
{
  "show_featured_image": false,
  "headline": "Quick Product Review",
  "show_author": false
}
```

**Full Setup:**
```json
{
  "show_featured_image": true,
  "featured_image": "hero-image.jpg",
  "headline": "The Complete Guide to Better Sleep",
  "subheadline": "Discover the science-backed method that helped 10,000+ people",
  "show_author": true,
  "author_image": "author.jpg",
  "author_name": "Dr. Sarah Johnson",
  "publish_date": "January 15, 2026"
}
```

---

## Advertorial Main Content Section

### Available Block Types

#### 1. Text Block

```json
{
  "type": "text",
  "settings": {
    "heading": "Section Heading",
    "content": "<p>Your rich text content here</p>"
  }
}
```

**Use for:**
- Introductions
- Main body paragraphs
- Explanations and details
- Stories and case studies

#### 2. Image Block

```json
{
  "type": "image",
  "settings": {
    "image": "image-url.jpg",
    "image_caption": "Descriptive caption"
  }
}
```

**Use for:**
- Product photos
- Before/after images
- Infographics
- Visual demonstrations

#### 3. Quote Block

```json
{
  "type": "quote",
  "settings": {
    "quote": "This changed my life completely!",
    "citation": "Jane Doe, Verified Customer"
  }
}
```

**Use for:**
- Customer testimonials
- Expert quotes
- Statistical highlights
- Social proof

#### 4. List Block

```json
{
  "type": "list",
  "settings": {
    "list_title": "Key Benefits",
    "list_items": "Benefit 1||Benefit 2||Benefit 3"
  }
}
```

**Use for:**
- Benefits lists
- Features
- Steps/instructions
- Comparisons

**Note:** Separate list items with `||`

#### 5. Spacer Block

```json
{
  "type": "spacer",
  "settings": {
    "spacer_height": 50  // pixels: 20-200
  }
}
```

**Use for:**
- Visual breaks
- Separating sections
- Improving readability

### Example Content Structure

```json
{
  "blocks": {
    "intro": {
      "type": "text",
      "settings": {
        "heading": "The Problem Everyone Faces",
        "content": "<p>Millions struggle with...</p>"
      }
    },
    "testimonial": {
      "type": "quote",
      "settings": {
        "quote": "Life-changing results!",
        "citation": "Sarah M."
      }
    },
    "benefits": {
      "type": "list",
      "settings": {
        "list_title": "Why It Works",
        "list_items": "Proven results||Natural ingredients||No side effects"
      }
    }
  },
  "block_order": ["intro", "testimonial", "benefits"]
}
```

---

## Advertorial Products Section

### Section Settings

```json
{
  "section_title": "Our Recommendations",
  "section_description": "Products we personally tested and recommend"
}
```

### Product Block Settings

```json
{
  "type": "product",
  "settings": {
    "product": "",                        // Product handle/ID
    "custom_description": "",             // Override product description
    "button_text": "View Product",        // CTA button text
    "show_badge": true,                   // Show/hide badge
    "badge_text": "Best Seller",          // Badge content
    "show_rating": true,                  // Show/hide rating
    "rating_count": "1,234"              // Number of reviews
  }
}
```

### Example Product Configurations

**Simple Product Card:**
```json
{
  "type": "product",
  "settings": {
    "product": "premium-mattress",
    "button_text": "Shop Now",
    "show_badge": false,
    "show_rating": true,
    "rating_count": "456"
  }
}
```

**Featured Product with Badge:**
```json
{
  "type": "product",
  "settings": {
    "product": "sleep-supplement",
    "custom_description": "Our #1 recommended supplement for better sleep quality",
    "button_text": "Try It Risk-Free",
    "show_badge": true,
    "badge_text": "Editor's Choice",
    "show_rating": true,
    "rating_count": "2,891"
  }
}
```

---

## Advertorial CTA Section

### All Settings

```json
{
  "cta_title": "Ready to Get Started?",
  "cta_description": "Join thousands of happy customers",
  "show_benefits": true,
  "benefit_1": "Free shipping worldwide",
  "benefit_2": "30-day money-back guarantee",
  "benefit_3": "24/7 customer support",
  "benefit_4": "Secure checkout",
  "button_text": "Shop Now",
  "button_link": "/collections/all",
  "show_guarantee": true,
  "guarantee_text": "100% Satisfaction Guaranteed"
}
```

### Example CTA Configurations

**Minimal CTA:**
```json
{
  "cta_title": "Get Yours Today",
  "show_benefits": false,
  "button_text": "Shop Now",
  "button_link": "/products/featured-product",
  "show_guarantee": false
}
```

**Full-Featured CTA:**
```json
{
  "cta_title": "Transform Your Life Today",
  "cta_description": "Limited time offer - Save 20% on your first order",
  "show_benefits": true,
  "benefit_1": "✓ Free 2-day shipping",
  "benefit_2": "✓ 60-day trial period",
  "benefit_3": "✓ Lifetime warranty",
  "benefit_4": "✓ Free returns",
  "button_text": "Claim Your Discount",
  "button_link": "/collections/sale",
  "show_guarantee": true,
  "guarantee_text": "Risk-Free 60-Day Money-Back Guarantee"
}
```

---

## Color Customization

Edit `assets/advertorial.css` to change colors:

```css
/* Primary Colors */
.btn-primary { background-color: #007bff; }  /* Blue */
.btn-success { background-color: #28a745; }  /* Green */

/* Accents */
.product-badge { background: #dc3545; }      /* Red badge */
.cta-button { color: #667eea; }             /* Purple CTA */

/* Gradients */
.advertorial-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## Typography Customization

```css
/* Fonts */
.advertorial-page {
  font-family: 'Your Font', sans-serif;
}

/* Sizes */
.advertorial-headline { font-size: 2.5rem; }
.text-content { font-size: 1.125rem; }
```

---

## Responsive Breakpoints

Default breakpoints in the template:

- Mobile: `max-width: 768px`
- Tablet: `769px - 1024px`
- Desktop: `min-width: 1025px`

---

## Tips for Best Results

1. **Headlines**: Keep under 60 characters for best impact
2. **Images**: Use high-quality images (1200px width minimum)
3. **Products**: Feature 2-4 products maximum per page
4. **Lists**: Keep lists to 3-7 items for scannability
5. **CTAs**: Use action words (Get, Try, Discover, Shop)
6. **Colors**: Ensure good contrast for accessibility

---

## Testing Checklist

- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify product images load
- [ ] Test CTA buttons
- [ ] Proofread all content
- [ ] Check page load speed
- [ ] Verify responsive design
- [ ] Test with screen reader

---

For more information, see README.md and QUICK_START.md
