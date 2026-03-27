# GlowCard Component Integration & Enhanced Department Pages

## Overview
This documentation covers the integration of the GlowCard (spotlight-card) component and the creation of enhanced, React-based department pages for BMSCE.

## What Was Created

### 1. UI Components

#### GlowCard (spotlight-card.tsx)
A visually stunning component that highlights content with dynamic glow effects that follow the mouse cursor.

**Props:**
- `glowColor`: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'gold' (default: 'blue')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `width`: string | number (optional)
- `height`: string | number (optional)
- `customSize`: boolean (default: false)
- `className`: string (optional)
- `children`: ReactNode (required)

**Usage Example:**
```tsx
import { GlowCard } from '@/components/ui/spotlight-card';

<GlowCard glowColor="gold" size="md">
  <div>Your content here</div>
</GlowCard>
```

#### ImageCarousel (image-carousel.tsx)
Displays a rotating carousel of images with flip animation effects every 2-3 seconds.

**Props:**
- `images`: string[] (required) - Array of image URLs
- `interval`: number (default: 3000) - Duration between image changes in milliseconds
- `className`: string (optional)

**Usage Example:**
```tsx
import { ImageCarousel } from '@/components/ui/image-carousel';

<ImageCarousel 
  images={campusImages}
  interval={3000}
  className="h-96 rounded-xl"
/>
```

### 2. Department Components

#### DepartmentPage (department-page.tsx)
A reusable template component that provides:
- Department header with head profile and graduation styling
- Sidebar navigation for different sections (About, Programmes, Syllabus, Faculty, Research, Placements, Alumni)
- Dynamic content switching based on selected section
- Image carousel gallery
- Highlights section with GlowCard components
- Responsive design (sidebar + content on desktop, stacked on mobile)

**Props Interface:**
```typescript
interface DepartmentPageProps {
  departmentName: string;
  headName: string;
  headImage: string;
  headTitle: string;
  sections: DepartmentSection[];
  campusImages?: string[];
  highlights?: { title: string; description: string }[];
}
```

#### Specific Department Pages
8 fully implemented department pages with comprehensive content:

1. **Civil Engineering** (civil-engineering.tsx)
   - 16 sections: About, Programmes, Syllabus (organized by year), Faculty, Research, Placements, Alumni
   - Focus: Structural design, geotechnical engineering, sustainable infrastructure
   - Key highlights: Modern laboratories, 79+ years legacy, industry partnerships

2. **Mechanical Engineering** (mechanical-engineering.tsx)
   - 7 sections covering thermal systems, manufacturing, and automation
   - Focus: Thermodynamics, machine design, manufacturing technology
   - Key highlights: CAD/CAM lab, manufacturing facilities, automotive partnerships

3. **Electrical Engineering** (electrical-engineering.tsx)
   - 7 sections with power systems and control systems emphasis
   - Focus: Power generation, grid management, electrical machines
   - Key highlights: High voltage lab, smart grid research, power utility partnerships

4. **Computer Science & Engineering** (computer-science-engineering.tsx)
   - 7 sections including AI/ML, cloud computing, cybersecurity
   - Focus: Modern tech with specializations in multiple domains
   - Key highlights: GPU labs, cloud infrastructure, tech company partnerships

5. **Electronics & Instrumentation** (electronics-instrumentation.tsx)
   - 7 sections covering VLSI, embedded systems, IoT
   - Focus: Chip design, microelectronics, sensor integration
   - Key highlights: VLSI lab, IoT laboratory, semiconductor partnerships

6. **Machine Learning & AI** (machine-learning.tsx)
   - 7 sections on deep learning, NLP, computer vision, reinforcement learning
   - Focus: Cutting-edge AI research and applications
   - Key highlights: GPU computing, AI research center, tech collaborations

7. **Chemical Engineering** (chemical-engineering.tsx)
   - 7 sections covering chemical processes and materials
   - Focus: Process engineering, biotechnology, sustainability
   - Key highlights: Process labs, analytical equipment, pharmaceutical partnerships

8. **Aerospace Engineering** (aerospace-engineering.tsx)
   - 7 sections on aircraft design, propulsion, UAVs, space systems
   - Focus: Aerodynamics, structures, space technology
   - Key highlights: CFD laboratory, UAV lab, ISRO collaborations

### 3. Demo Page (demo-page.tsx)
A showcase page that demonstrates:
- All 8 departments in a grid with GlowCard components
- Campus image carousel
- Feature highlights section
- Call-to-action section

## File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── spotlight-card.tsx      (GlowCard component)
│   │   └── image-carousel.tsx      (Image carousel component)
│   └── departments/
│       ├── department-page.tsx     (Reusable template)
│       ├── civil-engineering.tsx
│       ├── mechanical-engineering.tsx
│       ├── electrical-engineering.tsx
│       ├── electronics-instrumentation.tsx
│       ├── computer-science-engineering.tsx
│       ├── chemical-engineering.tsx
│       ├── aerospace-engineering.tsx
│       ├── machine-learning.tsx
│       ├── demo-page.tsx
│       └── index.ts                (Component exports)
```

## Key Features

### 1. GlowCard Effects
- Dynamic mouse-tracking glow that follows cursor position
- Multiple color options (blue, purple, green, red, orange, gold)
- Customizable size and dimensions
- Smooth transitions and brightness effects
- GPU-optimized with `will-change` and `backface-visibility`

### 2. Image Carousel
- Automatic image rotation (configurable interval)
- Smooth flip animation between images
- Indicator dots showing current position
- Responsive sizing

### 3. Department Pages
- **Enhanced Content**: Each section includes:
  - About sections with vision and mission statements
  - Detailed curriculum organized by year/specialization
  - Faculty expertise areas
  - Active research areas with quantifiable highlights
  - Placement statistics with average packages
  - Notable alumni information

- **Visual Elements**:
  - Department head profile with GlowCard highlight
  - Multiple campus images in carousel
  - Key highlights in individual GlowCard boxes
  - Color-coded navigation sidebar
  - Smooth content transitions with animations

- **Responsive Design**:
  - Desktop: 280px sidebar + content area
  - Tablet: Adjusted spacing and font sizes
  - Mobile: Stacked layout with full-width content

## Color Scheme
- Primary accent: Gold (#c9a96e and variations)
- Background: Dark slate (#09090b, #111113)
- Text: White (#ffffff) and light gray (#e2e8f0)
- Glow colors: Blue (220°), Purple (280°), Green (120°), Red (0°), Orange (30°), Gold (40°)

## Integration with Existing Project

### Current Status
- All components are TypeScript-based and fully typed
- Tailwind CSS v4 integration with utility classes
- 'use client' directives for client-side interactivity
- No external dependencies beyond React and existing TailwindCSS

### Next Steps to Integrate
1. Create React routing to link department dropdown items to individual pages
2. Update the main navigation to route to department pages
3. Create an academics landing page that shows all departments
4. Integrate image carousel into the homepage hero section

## Customization Guide

### Changing Colors
To modify GlowCard highlight colors, update the `glowColorMap` in spotlight-card.tsx:
```typescript
const glowColorMap = {
  yourColor: { base: 30, spread: 200 } // base: hue angle, spread: hue range
};
```

### Updating Department Content
To edit any department information:
1. Open the corresponding tsx file (e.g., civil-engineering.tsx)
2. Modify the `sections` array with new content
3. Update `highlights` array for key points
4. Change `campusImages` array for gallery images
5. Update head profile with actual images and names

### Adding a New Department
1. Create a new file: `src/components/departments/your-department.tsx`
2. Use the department template from civil-engineering.tsx as a base
3. Update department name, head info, sections, and highlights
4. Export the component in `index.ts`
5. Add to department grid in demo-page.tsx

## Performance Considerations

### Optimizations Implemented
- GlowCard uses `requestAnimationFrame` for smooth 60fps animations
- CSS variables for efficient theme changes
- `will-change` on parallax elements
- `backface-visibility: hidden` for GPU acceleration
- Image carousel uses CSS transitions, not JS animations
- Lazy loading ready (implement with next/image if needed)

### Recommendations
- Use Unsplash/Pexels for high-quality images
- Implement Next.js Image component for further optimization
- Consider image lazy loading for carousel
- Use dynamic imports for department pages if route-based

## Browser Support
- Modern browsers with CSS Grid, Flexbox, CSS Variables
- Requires JavaScript for:
  - GlowCard pointer tracking
  - Image carousel rotation
  - Section switching in department pages

## Learning Resources

### Related Technologies
- **Tailwind CSS**: Utility-first CSS framework used throughout
- **React Hooks**: useState, useEffect for state management
- **TypeScript**: Type safety across all components
- **CSS Grid/Flexbox**: Responsive layout implementation

### Component Architecture
- Composable components with clear prop interfaces
- Reusable template pattern (DepartmentPage)
- Separation of concerns (UI components vs. department content)

## Notes for Future Enhancements

1. **Faculty Profiles**: Could add expandable faculty cards with research details
2. **Achievement Timeline**: Interactive timeline of department milestones
3. **Lab Virtual Tours**: 360° campus/lab images
4. **Student Testimonials**: Video/text testimonials in GlowCard components
5. **Real-time Placement Data**: Dashboard with placement statistics
6. **Research Publications**: Searchable database of faculty publications
7. **Alumni Directory**: Interactive alumni search and networking
8. **Event Calendar**: Upcoming seminars, workshops, and recruitment drives

---

**Created**: March 27, 2026
**Status**: Ready for integration into main application
**Next Action**: Link navigation routes to department pages and integrate with existing homepage
