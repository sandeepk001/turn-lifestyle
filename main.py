from fasthtml.common import *
from fasthtml.ft import *

app, rt = fastapp()

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

def Header():
    return Header(
        Nav(
            Div(
                A(
                    Div(
                        Span('T', cls='text-white font-black text-sm'),
                        cls='w-9 h-9 bg-black rounded-full flex items-center justify-center'
                    ),
                    Span('TURN', cls='text-2xl font-black tracking-tighter uppercase'),
                    cls='flex items-center gap-2 cursor-pointer group',
                    href='/'
                ),
                Ul(
                    Li(A('Collection', href='#collection', cls='text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition')),
                    Li(A('About Label', href='#about', cls='text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition')),
                    cls='hidden lg:flex items-center gap-10'
                ),
                Div(
                    Button(
                        Svg(cls='w-5 h-5', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                            Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z')
                        ),
                        cls='p-2.5 rounded-full hover:bg-gray-100 transition'
                    ),
                    Button(
                        Svg(cls='w-5 h-5', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                            Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z')
                        ),
                        cls='p-2.5 rounded-full hover:bg-gray-100 transition relative'
                    ),
                    Button(
                        Svg(cls='w-3.5 h-3.5', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                            Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z')
                        ),
                        Span('Contact'),
                        cls='ml-2 hidden sm:flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition shadow-xl shadow-black/10'
                    ),
                    cls='flex items-center gap-3'
                ),
                cls='flex items-center justify-between'
            ),
            cls='fixed top-0 left-0 right-0 z-50 h-20 bg-white/70 backdrop-blur-xl border-b border-neutral-100 px-6 md:px-12 flex items-center justify-between'
        )
    )

def Hero():
    return Section(
        Div(
            Div(
                Button(
                    Svg(cls='w-4 h-4 md:w-6 md:h-6', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                        Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M15 19l-7-7 7-7')
                    ),
                    cls='absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-white/90 backdrop-blur shadow-2xl rounded-full border border-neutral-100 hover:scale-110 active:scale-95 transition opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300'
                ),
                Div(id='heroProducts', cls='flex gap-2 md:gap-4 lg:gap-10 items-end justify-center h-full w-full'),
                Button(
                    Svg(cls='w-4 h-4 md:w-6 md:h-6', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                        Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M9 5l7 7-7 7')
                    ),
                    cls='absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-white/90 backdrop-blur shadow-2xl rounded-full border border-neutral-100 hover:scale-110 active:scale-95 transition opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 duration-300'
                ),
                cls='flex gap-2 md:gap-4 lg:gap-10 items-end justify-center mb-12 md:mb-20 h-48 md:h-72 lg:h-[500px] w-full relative group'
            ),
            Div(
                H2('Style Revolved.', cls='text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-black tracking-tighter uppercase leading-none italic'),
                P('Premium minimalist apparel designed for turn-lifestyle.', cls='text-neutral-400 max-w-lg mx-auto text-sm md:text-base lg:text-lg font-medium italic tracking-tight'),
                cls='text-center space-y-4 px-4'
            ),
            cls='max-w-7xl mx-auto flex flex-col items-center relative'
        ),
        cls='pt-32 pb-20 px-6 md:px-12 bg-[#FDFDFD] relative overflow-hidden hero-section'
    )

def ProductCard(product):
    return Div(
        Div(
            Img(src=product['mainImg'], alt=product['name'], cls='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'),
            Button(
                Svg(cls='w-5 h-5', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                    Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z')
                ),
                cls='absolute top-3 right-3 p-2 rounded-lg shadow-sm transition-all z-20 bg-white/90 backdrop-blur-sm hover:bg-black hover:text-white'
            ),
            cls='relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 mb-4'
        ),
        Div(
            Div(
                H3(product['name'], cls='font-bold text-lg leading-tight'),
                Span(product['price'], cls='font-bold text-lg'),
                cls='flex justify-between items-start mb-1'
            ),
            Div(
                Span('★', cls='text-orange-400'),
                Span(str(product['rating']), cls='font-medium text-black'),
                Span('•'),
                Span(product['category'].lower(), cls='capitalize'),
                cls='flex items-center gap-1.5 text-sm text-gray-500'
            ),
            cls='px-2'
        ),
        cls='group cursor-pointer bg-white rounded-[2rem] p-4 border border-gray-100 hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/5'
    )

def CategoryFilters():
    return Section(
        Div(
            Div(
                Button('All', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-black text-white shadow-lg scale-105'),
                Button('Night Pants', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-neutral-50 text-neutral-400 hover:bg-neutral-100'),
                Button('T-Shirts', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-neutral-50 text-neutral-400 hover:bg-neutral-100'),
                Button('Trousers', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-neutral-50 text-neutral-400 hover:bg-neutral-100'),
                Button('Shirts', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-neutral-50 text-neutral-400 hover:bg-neutral-100'),
                Button('Hoodies', cls='category-btn px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap bg-neutral-50 text-neutral-400 hover:bg-neutral-100'),
                cls='flex gap-1 md:gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0'
            ),
            Div(
                Svg(cls='w-3 h-3 md:w-3.5 md:h-3.5', fill='none', stroke='currentColor', viewBox='0 0 24 24')(
                    Path(stroke_linecap='round', stroke_linejoin='round', stroke_width='2', d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z')
                ),
                Span('Refine Collection'),
                cls='flex items-center gap-2 md:gap-4 text-neutral-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest'
            ),
            cls='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'
        ),
        cls='sticky top-20 z-40 bg-white/80 backdrop-blur-md py-4 md:py-6 px-4 md:px-12 border-b border-neutral-100 category-filters'
    )

def Footer():
    return Footer(
        Div(
            Div(
                H3('TURN', cls='text-5xl font-black tracking-tighter italic uppercase'),
                P('Handcrafted in Bangalore. We prioritize craftsmanship over trends.', cls='text-neutral-500 leading-relaxed text-lg italic max-w-sm'),
                cls='space-y-10'
            ),
            Div(
                H4('Navigation', cls='text-[10px] font-black uppercase text-neutral-700 tracking-[0.4em]'),
                Div(
                    A('Collection', href='#collection', cls='hover:text-neutral-400 transition w-fit text-left text-2xl font-light italic'),
                    A('Instagram', href='https://instagram.com/turn_lifestyle', cls='hover:text-neutral-400 transition w-fit text-left text-2xl font-light italic'),
                    A('WhatsApp', href='https://wa.me/918549065824', cls='hover:text-neutral-400 transition w-fit text-left text-2xl font-light italic'),
                    cls='flex flex-col gap-4 text-2xl font-light italic'
                ),
                cls='flex flex-col gap-8'
            ),
            Div(
                H4('Support', cls='text-[10px] font-black uppercase text-neutral-700 tracking-[0.4em]'),
                Button('Contact Us', href='#contact', cls='w-full py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest hover:bg-neutral-200 transition shadow-2xl active:scale-95'),
                cls='space-y-10'
            ),
            cls='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 items-start'
        ),
        cls='bg-neutral-950 text-white py-24 px-6 md:px-12 rounded-t-[4rem]'
    )

@rt('/')
def get():
    return Title('TURN Lifestyle - Premium Apparel'), Body(
        Header(),
        Hero(),
        CategoryFilters(),
        Section(
            Div(
                *[ProductCard(product) for product in products],
                cls='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 product-grid'
            ),
            id='collection',
            cls='max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20 min-h-[60vh]'
        ),
        Footer(),
        cls='min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden'
    )

# Vercel handler
handler = app
