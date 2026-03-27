# Quick Setup & Usage Guide

## Installation & Setup

### Prerequisites
Your project already has:
- ✅ Next.js 16.2.1
- ✅ React 19.2.4
- ✅ TypeScript 5
- ✅ Tailwind CSS 4
- ✅ PostCSS configured

**No additional dependencies needed!**

## How to Use the Components

### 1. Using GlowCard in Your Pages

```tsx
'use client';

import { GlowCard } from '@/components/ui/spotlight-card';

export default function YourPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Gold highlight for important items */}
      <GlowCard glowColor="gold">
        <h3 className="text-lg font-bold">Featured Item</h3>
      </GlowCard>

      {/* Blue for regular sections */}
      <GlowCard glowColor="blue">
        <p>Regular content section</p>
      </GlowCard>

      {/* Custom size */}
      <GlowCard customSize width={300} height={400}>
        <img src="image.jpg" alt="Custom sized content" />
      </GlowCard>
    </div>
  );
}
```

### 2. Using ImageCarousel

```tsx
'use client';

import { ImageCarousel } from '@/components/ui/image-carousel';

export default function GalleryPage() {
  const campusPhotos = [
    'https://images.unsplash.com/photo-1...',
    'https://images.unsplash.com/photo-2...',
    // ... more images
  ];

  return (
    <ImageCarousel 
      images={campusPhotos}
      interval={3000}
      className="h-96 rounded-lg shadow-lg"
    />
  );
}
```

### 3. Using Department Pages

```tsx
'use client';

import { CivilEngineeringPage } from '@/components/departments';

export default function CivilPage() {
  return <CivilEngineeringPage />;
}
```

## Integrating with Next.js App Router

### Step 1: Create New Route for Departments

Create file: `src/app/departments/civilian/page.tsx`

```tsx
import { CivilEngineeringPage } from '@/components/departments';

export const metadata = {
  title: 'Civil Engineering - BMSCE',
  description: 'Department of Civil Engineering',
};

export default function Page() {
  return <CivilEngineeringPage />;
}
```

### Step 2: Create Routes for All Departments

```
src/app/
├── page.tsx (home)
└── departments/
    ├── civil/page.tsx
    ├── mechanical/page.tsx
    ├── electrical/page.tsx
    ├── electronics/page.tsx
    ├── cse/page.tsx
    ├── chemical/page.tsx
    ├── aerospace/page.tsx
    └── ml-ai/page.tsx
```

### Step 3: Update Navigation Links

Update your main navigation to point to new routes:

```typescript
// In your navigation component
const academicsMenu = [
  { label: 'Civil Engineering', href: '/departments/civil' },
  { label: 'Mechanical Engineering', href: '/departments/mechanical' },
  // ... other departments
];
```

## Customizing Department Content

### Edit Department Information

File: `src/components/departments/civil-engineering.tsx`

```tsx
// Update department head information
const headName = "Prof. Dr. Your Name";
const headImage = "https://your-image-url.com/photo.jpg";

// Add more sections
const sections = [
  {
    id: 'about',
    title: 'About Department',
    content: 'Your content here...'
  },
  // Add more sections
];

// Update highlights
const highlights = [
  {
    title: 'Your Highlight',
    description: 'Description of the highlight'
  },
  // More highlights
];
```

## Styling & Customization

### Change Accent Colors

Update the CSS in `spotlight-card.tsx` to change the glowing effect colors:

```typescript
const glowColorMap = {
  customColor: { base: 50, spread: 150 } // hue value and spread range
};
```

### Modify Responsive Breakpoints

Edit breakpoints in `department-page.tsx`:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Adjust lg to md or xl based on your needs */}
</div>
```

### Change Color Scheme

All colors use CSS custom properties and Tailwind classes:
- Gold accent: `text-yellow-400`, `bg-yellow-500`
- Dark background: `bg-slate-900`
- Text: `text-slate-300`

Update these in `department-page.tsx` for consistent theming.

## Real Images

Replace placeholder Unsplash images with actual campus photos:

```tsx
// In department component
campusImages={[
  '/images/campus-1.jpg',
  '/images/campus-2.jpg',
  '/images/campus-3.jpg',
  '/images/campus-4.jpg'
]}

// Or use real URLs
campusImages={[
  'https://your-domain.com/images/campus-1.jpg',
  // ...
]}
```

## Performance Tips

1. **Image Optimization**: Use Next.js Image component
```tsx
import Image from 'next/image';

<Image 
  src={image} 
  alt="Campus" 
  width={800} 
  height={600}
  quality={85}
/>
```

2. **Lazy Loading**: Wrap department pages in Suspense
```tsx
import { Suspense } from 'react';

<Suspense fallback={<DepartmentSkeleton />}>
  <CivilEngineeringPage />
</Suspense>
```

3. **Code Splitting**: Use dynamic imports for heavy components
```tsx
const CivilPage = dynamic(() => 
  import('@/components/departments').then(m => m.CivilEngineeringPage)
);
```

## Testing the Components

### Test GlowCard Locally

```tsx
// Create test-glow-card.tsx
'use client';
import { GlowCard } from '@/components/ui/spotlight-card';

export default function TestPage() {
  return (
    <div className="bg-slate-900 min-h-screen p-8">
      <div className="grid grid-cols-4 gap-6">
        {['blue', 'purple', 'green', 'red', 'orange', 'gold'].map(color => (
          <GlowCard key={color} glowColor={color as any} size="md">
            <div className="flex items-center justify-center h-full">
              <span className="capitalize">{color}</span>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
```

### Test Department Page

Visit: `http://localhost:3000/departments/civil`

Verify:
- [ ] Header displays with glow effect
- [ ] Sidebar navigation is clickable
- [ ] Content switches smoothly when clicking sections
- [ ] Image carousel auto-rotates every 3 seconds
- [ ] Glow effect follows mouse movement
- [ ] Mobile responsiveness (resize browser)

## Troubleshooting

### GlowCard not showing glow effect
- Ensure CSS is compiled (`npm run build`)
- Check browser console for errors
- Verify dark background for visibility
- Check `z-index` doesn't conflict with other elements

### Carousel not rotating images
- Verify images are accessible (check network tab)
- Ensure interval value is in milliseconds (3000 = 3 seconds)
- Check component is marked with 'use client'

### Styles not applying
- Clear `.next` folder: `rm -r .next`
- Rebuild: `npm run dev`
- Check Tailwind config includes src folder
- Verify no conflicting CSS class names

## File Checklist

✅ Created:
- `src/components/ui/spotlight-card.tsx` - GlowCard component
- `src/components/ui/image-carousel.tsx` - Carousel component
- `src/components/departments/department-page.tsx` - Template
- `src/components/departments/civil-engineering.tsx` - Dept page
- `src/components/departments/mechanical-engineering.tsx` - Dept page
- `src/components/departments/electrical-engineering.tsx` - Dept page
- `src/components/departments/electronics-instrumentation.tsx` - Dept page
- `src/components/departments/computer-science-engineering.tsx` - Dept page
- `src/components/departments/chemical-engineering.tsx` - Dept page
- `src/components/departments/aerospace-engineering.tsx` - Dept page
- `src/components/departments/machine-learning.tsx` - Dept page
- `src/components/departments/demo-page.tsx` - Demo/showcase
- `src/components/departments/index.ts` - Exports

## Next Steps

1. **Create department routes** in `src/app/departments/`
2. **Update navigation** to link to department pages
3. **Add department pages** to academic menu dropdowns
4. **Test each page** in browser and on mobile
5. **Replace images** with actual campus photos
6. **Update department info** with real data
7. **Add SEO metadata** to each route
8. **Deploy and test** in production

---

**Last Updated**: March 27, 2026
**Status**: Ready to integrate
**Support**: Check COMPONENT_INTEGRATION.md for detailed docs
