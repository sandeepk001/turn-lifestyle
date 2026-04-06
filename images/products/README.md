# Product Images Folder Structure

## 📁 Organization

Each product has its own folder with organized image files:

```
images/products/
├── premium-cotton-night-pant/
│   ├── main.jpg                 # Main product image
│   ├── gallery-1.jpg            # Gallery image 1
│   ├── gallery-2.jpg            # Gallery image 2
│   └── gallery-3.jpg            # Gallery image 3
├── classic-oversized-tshirt/
│   ├── main.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── gallery-3.jpg
└── ... (other product folders)
```

## 📸 Image Guidelines

### Recommended Image Specifications:
- **Format**: JPG or PNG (PNG for background-removed images)
- **Size**: 800x1000 pixels minimum (aspect ratio 4:5)
- **Quality**: High resolution, clear lighting
- **Background**: White or transparent (for "floating" effect)

### Naming Convention:
- `main.jpg` - Primary product image
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` - Additional views

## 🔄 How to Update

1. **Add your images** to the appropriate product folder
2. **Update the paths** in `index.html` JavaScript section (around line 400+)

### Example Update:
```javascript
// Change from:
mainImg: 'https://via.placeholder.com/400x500/f3f4f6/666?text=Premium+Cotton+Night+Pant',
gallery: [
    'https://via.placeholder.com/400x500/f3f4f6/666?text=Premium+Cotton+Night+Pant',
    'https://via.placeholder.com/400x500/f3f4f6/666?text=Night+Pant+View+2',
    'https://via.placeholder.com/400x500/f3f4f6/666?text=Night+Pant+View+3'
]

// To:
mainImg: 'images/products/premium-cotton-night-pant/main.jpg',
gallery: [
    'images/products/premium-cotton-night-pant/main.jpg',
    'images/products/premium-cotton-night-pant/gallery-1.jpg',
    'images/products/premium-cotton-night-pant/gallery-2.jpg'
]
```

## 📋 Current Product Folders

1. **premium-cotton-night-pant** - Premium Cotton Night Pant
2. **classic-oversized-tshirt** - Classic Oversized T-Shirt
3. **tailored-slim-fit-trousers** - Tailored Slim Fit Trousers
4. **luxury-lounge-night-pant** - Luxury Lounge Night Pant
5. **essential-crew-neck-tee** - Essential Crew Neck Tee
6. **premium-casual-shirt** - Premium Casual Shirt
7. **comfort-fit-chino-trousers** - Comfort Fit Chino Trousers
8. **minimalist-hoodie** - Minimalist Hoodie
9. **graphic-print-tshirt** - Graphic Print T-Shirt

## 🎯 Tips

- Use **background-removed PNG images** for the best "floating" effect
- Keep image sizes consistent across products
- Use natural lighting for best results
- Include multiple angles for the gallery (front, side, back, details)
