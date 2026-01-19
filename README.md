# Shopify Advertorial Page

A customizable advertorial page template for Shopify stores. An advertorial combines advertising and editorial content to create engaging, story-driven product promotions.

## Features

- 🎨 **Customizable Layout**: Fully customizable through Shopify's theme editor
- 📱 **Responsive Design**: Mobile-friendly and adapts to all screen sizes
- 🧩 **Modular Content Blocks**: Multiple content block types including text, images, quotes, videos, and CTAs
- 🎯 **SEO Friendly**: Proper semantic HTML structure
- ⚡ **Performance Optimized**: Lazy loading images and efficient CSS

## Installation

### Upload to Shopify Theme

1. Log in to your Shopify admin panel
2. Go to **Online Store** → **Themes**
3. Click **Actions** → **Edit code**
4. Upload the files:
   - `templates/page.advertorial.liquid` → Templates folder
   - `sections/advertorial-content.liquid` → Sections folder
   - `assets/advertorial.css` → Assets folder

### Create an Advertorial Page

1. Go to **Online Store** → **Pages**
2. Click **Add page**
3. Enter your page title and content
4. In the **Template** dropdown, select **page.advertorial**
5. Click **Save**

## Usage

### Customize Your Advertorial Page

1. Go to **Online Store** → **Themes** → **Customize**
2. Navigate to your advertorial page
3. Click on the **Advertorial Content** section
4. Customize the following settings:
   - **Banner Image**: Upload a hero banner image
   - **Headline**: Main headline for your advertorial
   - **Subheadline**: Supporting text for context

### Available Content Blocks

#### Text Block
Add rich text content with optional heading. Perfect for storytelling and detailed product information.

#### Image Block
Display images with optional captions. Images are lazy-loaded for better performance.

#### Quote Block
Highlight customer testimonials or key statements with an eye-catching design.

#### Call-to-Action (CTA) Block
Drive conversions with a prominent call-to-action button linking to products or collections.

#### Video Block
Embed YouTube or Vimeo videos to showcase products or tell your brand story.

### Adding Content Blocks

1. In the theme customizer, click **Add block**
2. Choose from: Text, Image, Quote, CTA, or Video
3. Fill in the block settings
4. Drag to reorder blocks as needed
5. Click **Save**

## File Structure

```
.
├── assets/
│   └── advertorial.css          # Styling for the advertorial page
├── sections/
│   └── advertorial-content.liquid  # Main content section with blocks
└── templates/
    └── page.advertorial.liquid     # Page template
```

## Customization

### Styling

The CSS file (`assets/advertorial.css`) contains all styles for the advertorial page. You can customize:

- Colors and gradients
- Typography (fonts, sizes, weights)
- Spacing and layout
- Responsive breakpoints
- Button styles

### Adding New Block Types

To add custom block types:

1. Edit `sections/advertorial-content.liquid`
2. Add a new `{% when 'block_type' %}` case in the blocks loop
3. Add corresponding settings in the `{% schema %}` section
4. Style the new block in `assets/advertorial.css`

## Best Practices

### Content Strategy

- **Start with a Hook**: Use an engaging headline and banner image
- **Tell a Story**: Use text blocks to create a narrative around your product
- **Show, Don't Tell**: Include images and videos to demonstrate benefits
- **Social Proof**: Add quote blocks with customer testimonials
- **Clear CTA**: End with a strong call-to-action

### SEO Tips

- Use descriptive page titles
- Write compelling meta descriptions
- Include relevant keywords naturally in your content
- Use alt text for all images
- Keep URLs short and descriptive

### Performance

- Compress images before uploading (recommended: under 200KB)
- Use web-optimized video platforms (YouTube, Vimeo)
- Test page speed with Google PageSpeed Insights
- Enable lazy loading (already implemented)

## Examples

### Example 1: Product Launch Advertorial
```
1. Banner Image (product hero shot)
2. Text Block (introducing the problem)
3. Image Block (product in action)
4. Text Block (solution explanation)
5. Quote Block (customer testimonial)
6. CTA Block (shop now)
```

### Example 2: Brand Story Advertorial
```
1. Banner Image (brand lifestyle shot)
2. Text Block (origin story)
3. Video Block (behind the scenes)
4. Text Block (brand values)
5. Image Block (team photo)
6. CTA Block (explore collection)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This theme code is provided as-is for use in Shopify stores.

## Support

For issues or questions about this advertorial page template, please refer to the Shopify Theme Documentation or contact your developer.

## Changelog

### Version 1.0.0
- Initial release
- Responsive advertorial page template
- 5 content block types (text, image, quote, CTA, video)
- Customizable through theme editor
- Mobile-optimized design