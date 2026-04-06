from fasthtml.common import *

# Create FastHTML app with static secret key for Vercel
app = FastHTML(secret_key="vercel-static-key-12345")

@app.get('/')
def get():
    return """
<!DOCTYPE html>
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
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Baggy Joggers</h3>
                    <p class="text-gray-600 text-sm mb-2">Hoodies</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹1,499</span>
                        <span class="text-yellow-500">★ 4.6</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Silk Night Pantaloon</h3>
                    <p class="text-gray-600 text-sm mb-2">Night Pants</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹1,799</span>
                        <span class="text-yellow-500">★ 4.9</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Vintage Crew Neck</h3>
                    <p class="text-gray-600 text-sm mb-2">T-Shirts</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹999</span>
                        <span class="text-yellow-500">★ 4.5</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Oxford Shirt</h3>
                    <p class="text-gray-600 text-sm mb-2">Shirts</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹2,199</span>
                        <span class="text-yellow-500">★ 4.8</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Stretch Chinos</h3>
                    <p class="text-gray-600 text-sm mb-2">Trousers</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹2,499</span>
                        <span class="text-yellow-500">★ 4.7</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4"></div>
                    <h3 class="font-bold text-lg mb-2">Street Hoodie</h3>
                    <p class="text-gray-600 text-sm mb-2">Hoodies</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">₹2,799</span>
                        <span class="text-yellow-500">★ 4.9</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black text-white py-16 px-6 md:px-12">
            <div class="max-w-7xl mx-auto text-center">
                <h3 class="text-3xl font-bold mb-4">TURN</h3>
                <p class="text-gray-400">Premium apparel with minimalist design</p>
                <div class="mt-8">
                    <a href="https://instagram.com/turn_lifestyle" class="text-white hover:text-gray-300 mx-4">Instagram</a>
                    <a href="https://wa.me/918549065824" class="text-white hover:text-gray-300 mx-4">WhatsApp</a>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
    """
