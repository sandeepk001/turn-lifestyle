# TURN Lifestyle - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Product Images**
   - Place your product images in `public/images/products/`
   - Update image paths in `src/data/products.ts` to match your actual image files
   - Recommended: Use background-removed PNG images for the "floating" effect
   - Image naming convention: `product-name.jpg`, `product-name-alt1.jpg`, etc.

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization

### Adding Products
Edit `src/data/products.ts` and add new product objects:
```typescript
{
  id: '10',
  name: 'Your Product Name',
  category: 'T-Shirts', // Must match one of the CATEGORIES
  price: 1299,
  rating: 4.8,
  description: 'Product description...',
  colors: ['#000000', '#ffffff'],
  mainImg: '/images/products/your-image.jpg',
  gallery: [
    '/images/products/your-image.jpg',
    '/images/products/your-image-alt1.jpg',
    '/images/products/your-image-alt2.jpg',
  ],
}
```

### Updating Contact Information
- **WhatsApp Number**: Update in `src/components/ProductModal.tsx` (line 35) and `src/components/Footer.tsx`
- **Instagram Handle**: Update in `src/components/ProductModal.tsx` (line 39) and `src/components/Footer.tsx`
- **Email**: Update in `src/components/Footer.tsx`

### Changing Featured Products
Edit `src/data/products.ts` and modify the `FEATURED_PRODUCTS` export to select different products for the hero carousel.

### Adding Categories
1. Update the `category` type in `src/data/products.ts`
2. Add the new category to the `CATEGORIES` array
3. Create products with the new category

## Features

✅ **Responsive Design** - Mobile-first approach, works on all devices
✅ **Hero Carousel** - Auto-rotating featured products with manual controls
✅ **Search Functionality** - Real-time product search overlay
✅ **Category Filtering** - Filter products by category
✅ **Wishlist** - Save favorite products (client-side only)
✅ **WhatsApp Integration** - Direct inquiry via WhatsApp with pre-filled message
✅ **Instagram Link** - Connect to your Instagram profile
✅ **Inquiry Form** - Collect customer information (console log only - implement backend)
✅ **Smooth Scrolling** - Elegant navigation between sections
✅ **Product Modal** - Detailed product view with image gallery

## Next Steps

1. **Replace Placeholder Images**: Add your actual product photos
2. **Implement Form Backend**: Connect the inquiry form to your email service or database
3. **Analytics**: Add Google Analytics or similar tracking
4. **SEO**: Update metadata in `src/app/layout.tsx`
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Static Export (Optional)
Add to `next.config.js`:
```javascript
output: 'export',
```
Then run:
```bash
npm run build
```

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
