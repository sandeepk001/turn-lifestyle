from fasthtml.common import *

# Create FastHTML app with static secret key for Vercel
app = FastHTML(secret_key="vercel-static-key-12345")

# Product data
products = [
    {
        'id': 'np-01',
        'name': 'Noir Enchanté Premium Night Gown',
        'category': 'Night Pants',
        'price': '₹1,299',
        'rating': 4.9,
        'description': 'A masterpiece of loungewear comfort. Crafted from premium 100% long-staple cotton, this night gown offers a weightless feel with a sophisticated, draped silhouette.',
        'colors': ['#1a1a1a', '#2c3e50', '#7f8c8d'],
        'mainImg': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'ts-01',
        'name': 'Oversized Boxy Essential Tee',
        'category': 'T-Shirts',
        'price': '₹899',
        'rating': 4.8,
        'description': 'The foundation of the modern wardrobe. Features a dropped shoulder design and heavyweight 240 GSM fabric that holds its shape wash after wash.',
        'colors': ['#ffffff', '#000000', '#f5f5dc'],
        'mainImg': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'tr-01',
        'name': 'Urban Multi-Pocket Cargo Trousers',
        'category': 'Trousers',
        'price': '₹1,899',
        'rating': 4.7,
        'description': 'Utility meets luxury. These cargos feature precision tailoring and functional storage, finished with custom TURN-lifestyle hardware and reinforced seams.',
        'colors': ['#3d3d3d', '#4b5320'],
        'mainImg': 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'bp-01',
        'name': 'Shadow Street Baggy Joggers',
        'category': 'Hoodies',
        'price': '₹1,499',
        'rating': 4.6,
        'description': 'Designed for the motion of modern life. These joggers provide a relaxed baggy fit without compromising on aesthetic precision or premium feel.',
        'colors': ['#000000', '#f3f4f6'],
        'mainImg': 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'ps-01',
        'name': 'Luxe Silk Night Pantaloon',
        'category': 'Night Pants',
        'price': '₹1,799',
        'rating': 4.9,
        'description': 'Indulgent nightwear crafted from silk-blend fabric. Features elasticated waist with adjustable drawstring and side pockets for practical luxury.',
        'colors': ['#2c3e50', '#8b4513', '#4a5568'],
        'mainImg': 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'ct-01',
        'name': 'Vintage Wash Crew Neck',
        'category': 'T-Shirts',
        'price': '₹999',
        'rating': 4.5,
        'description': 'Timeless crew neck with vintage wash treatment. Pre-shrunk fabric ensures consistent fit while the wash adds character to each piece.',
        'colors': ['#f5f5dc', '#1a1a1a', '#8b7355'],
        'mainImg': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'cs-01',
        'name': 'Minimalist Oxford Shirt',
        'category': 'Shirts',
        'price': '₹2,199',
        'rating': 4.8,
        'description': 'Understated elegance in premium oxford cotton. Clean lines and precise tailoring make this a versatile piece for any occasion.',
        'colors': ['#ffffff', '#1a1a1a', '#4169e1'],
        'mainImg': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'cc-01',
        'name': 'Tailored Stretch Chinos',
        'category': 'Trousers',
        'price': '₹2,499',
        'rating': 4.7,
        'description': 'Modern chinos with stretch comfort. Premium fabric with subtle sheen, featuring slanted pockets and back welt pockets for a refined look.',
        'colors': ['#8b7355', '#2f4f4f', '#000000'],
        'mainImg': 'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800'
        ]
    },
    {
        'id': 'mh-01',
        'name': 'Urban Street Hoodie',
        'category': 'Hoodies',
        'price': '₹2,799',
        'rating': 4.9,
        'description': 'Street-ready hoodie with premium French terry fabric. Features kangaroo pocket, adjustable hood, and ribbed cuffs for authentic style.',
        'colors': ['#1a1a1a', '#4a5568', '#dc143c'],
        'mainImg': 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
        'gallery': [
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800'
        ]
    }
]

@app.get('/')
def get():
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TURN Lifestyle - Premium Apparel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; }
        .hero-text { font-size: 3rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; }
        @media (min-width: 768px) { .hero-text { font-size: 5rem; } }
        @media (min-width: 1024px) { .hero-text { font-size: 7rem; } }
        @media (min-width: 1280px) { .hero-text { font-size: 9rem; } }
    </style>
</head>
<body class="bg-white text-gray-900">
    <div class="min-h-screen">
        <!-- Header -->
        <header class="fixed top-0 left-0 right-0 z-50 h-20 bg-white/70 backdrop-blur-xl border-b border-gray-200 px-6 md:px-12 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                    <span class="text-white font-black text-sm">T</span>
                </div>
                <h1 class="text-2xl font-black tracking-tighter uppercase">TURN</h1>
            </div>
            <div class="flex items-center gap-3">
                <button class="p-2.5 rounded-full hover:bg-gray-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <button class="p-2.5 rounded-full hover:bg-gray-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>
                <button class="ml-2 hidden sm:flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold uppercase">
                    Contact
                </button>
            </div>
        </header>

        <!-- Hero -->
        <section class="pt-32 pb-20 px-6 md:px-12 bg-gray-50">
            <div class="max-w-7xl mx-auto text-center">
                <h2 class="hero-text mb-4">Style Revolved.</h2>
                <p class="text-gray-600 max-w-lg mx-auto">Premium minimalist apparel designed for turn-lifestyle.</p>
            </div>
        </section>

        <!-- Products -->
        <section class="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Premium Night Gown</h3>
                    <p class="text-gray-600 text-sm mb-2">Night Pants</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹1,299</span>
                        <span class="text-yellow-500">★ 4.9</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Oversized Tee</h3>
                    <p class="text-gray-600 text-sm mb-2">T-Shirts</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹899</span>
                        <span class="text-yellow-500">★ 4.8</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Cargo Trousers</h3>
                    <p class="text-gray-600 text-sm mb-2">Trousers</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹1,899</span>
                        <span class="text-yellow-500">★ 4.7</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black text-white py-16 px-6 md:px-12">
            <div class="max-w-7xl mx-auto text-center">
                <h3 class="text-3xl font-bold mb-4">TURN</h3>
                <p class="text-gray-400">Premium apparel with minimalist design</p>
            </div>
        </footer>
    </div>
</body>
</html>"""
    
    return HTMLResponse(html_content)

# Vercel handler
handler = app
