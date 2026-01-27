# Animator-Tale Portfolio - Complete Customization Guide

Welcome! This guide will help you customize every aspect of your portfolio website, including colors, links, images, and content details.

---

## Table of Contents

1. [Color Customization](#color-customization)
2. [Images & Assets](#images--assets)
3. [Text & Content](#text--content)
4. [Navigation Links](#navigation-links)
5. [Social Media & Contact Links](#social-media--contact-links)
6. [Project Gallery](#project-gallery)
7. [Awards & Recognition](#awards--recognition)
8. [Typography & Fonts](#typography--fonts)

---

## Color Customization

### Location
All color settings are centralized in: **`client/src/index.css`** (lines 6-22)

### Available Colors

The portfolio uses a **HSL (Hue, Saturation, Lightness)** color system. This makes it easy to adjust colors while maintaining consistency.

#### Primary Colors

```css
--color-background: hsl(260 20% 4%);        /* Dark purple-tinted background */
--color-foreground: hsl(260 20% 90%);       /* Light text color */
--color-primary: hsl(190 100% 50%);         /* Bright cyan/blue accent */
--color-secondary: hsl(320 100% 60%);       /* Magenta/pink accent */
--color-accent: hsl(50 100% 60%);           /* Yellow accent */
```

### How to Change Colors

**HSL Format Breakdown:**
- **Hue** (0-360°): The color itself (0°=red, 120°=green, 240°=blue)
- **Saturation** (0-100%): Color intensity (0%=gray, 100%=full color)
- **Lightness** (0-100%): Brightness (0%=black, 100%=white)

**Example: Change Primary Color from Cyan to Orange**

Find this line in `client/src/index.css`:
```css
--color-primary: hsl(190 100% 50%);  /* Cyan */
```

Change to:
```css
--color-primary: hsl(30 100% 50%);   /* Orange */
```

### Color Adjustment Tips

| Color Desired | HSL Value | Usage |
|---|---|---|
| **Red** | `hsl(0 100% 50%)` | Warnings, highlights |
| **Green** | `hsl(120 100% 50%)` | Success, positive actions |
| **Purple** | `hsl(270 100% 50%)` | Premium feel |
| **Teal** | `hsl(180 100% 40%)` | Modern, cool tone |
| **Gold** | `hsl(40 100% 60%)` | Luxury, premium |

### Where Colors Are Used

- **Primary Color** (`--color-primary`): Buttons, links, hover states, main accents
- **Secondary Color** (`--color-secondary`): Alternative highlights, borders
- **Accent Color** (`--color-accent`): Call-to-action elements, special highlights
- **Background**: Page background and dark areas
- **Foreground**: Text color
- **Muted**: Subtle text, secondary information

---

## Images & Assets

### Image Locations

All images are stored in: **`client/public/`**

### Key Images to Replace

#### 1. Hero Background Image
- **File**: `client/public/hero-bg.png`
- **Location in Code**: `client/src/components/hero.tsx` (line 39)
- **Size Recommendation**: 1920×1080px or larger
- **Purpose**: Full-screen background on homepage

**How to replace:**
1. Save your new image as `hero-bg.png` in `client/public/`
2. The website will automatically use the new image

#### 2. Artist/About Section Image
- **File**: `client/public/artist.png`
- **Location in Code**: `client/src/pages/home.tsx` (line 55)
- **Size Recommendation**: 800×1000px (3:4 aspect ratio)
- **Purpose**: Portrait image in the "About" section

**How to replace:**
1. Save your new image as `artist.png` in `client/public/`
2. Changes apply immediately

#### 3. Social Media & Metadata Images
- **File**: `client/public/` (as referenced in `client/index.html`)
- **Current**: Uses `hero-bg.png` for social preview
- **Location**: `client/index.html` (lines 11 & 18)

**To change social preview image:**

Find these lines in `client/index.html`:
```html
<meta property="og:image" content="/hero-bg.png" />
<meta name="twitter:image" content="/hero-bg.png" />
```

Replace with your image filename:
```html
<meta property="og:image" content="/your-image.png" />
<meta name="twitter:image" content="/your-image.png" />
```

---

## Text & Content

### Hero Section
**File**: `client/src/components/hero.tsx`

#### Change Main Title
- **Find**: Line 45-47
- **Current**: "KAIZEN STUDIOS"
- **How to change**: Modify the `GlitchText` component text values

```tsx
<GlitchText text="YOUR_NAME" size="xl" className="..." />
<GlitchText text="STUDIOS" size="lg" className="..." />
```

#### Change Hero Subtitle
- **Find**: Line 49-54
- **Current**: "Crafting immersive worlds and fluid motion..."
- **How to change**:

```tsx
<motion.p ... className="...">
  Your custom subtitle text here.
  Add more details about your work.
</motion.p>
```

### About Section
**File**: `client/src/pages/home.tsx` (lines 47-88)

#### Change About Title
```tsx
<h2 className="text-3xl md:text-5xl font-display">
  <span className="text-primary">YOUR_FIRST</span> <br/>
  YOUR_LAST
</h2>
```

#### Change About Description
```tsx
<p className="text-muted-foreground font-sans text-lg leading-relaxed">
  Your story goes here. Describe your artistic journey, style, and what makes your work unique.
</p>
```

#### Change Tools List
```tsx
<div className="grid grid-cols-2 gap-4 font-mono text-sm text-white/70">
  <div className="border-l-2 border-primary/30 pl-3">
    <span className="block text-xs text-primary mb-1">TOOLS</span>
    Clip Studio, After Effects, Blender  {/* Change this */}
  </div>
  <div className="border-l-2 border-secondary/30 pl-3">
    <span className="block text-xs text-secondary mb-1">FOCUS</span>
    Character Acting, FX Animation  {/* And this */}
  </div>
</div>
```

### Contact/CTA Section
**File**: `client/src/pages/home.tsx` (lines 108-130)

#### Change Main CTA Heading
```tsx
<h2 className="text-4xl md:text-7xl font-display uppercase leading-tight">
  Let's Create <br/> <span className="...">Together</span>
</h2>
```

#### Change CTA Description
```tsx
<p className="text-muted-foreground font-mono">
  Your availability message here.
</p>
```

#### Change Contact Email
```tsx
<Button 
  ... 
  onClick={() => window.location.href = "mailto:your-email@example.com"}
>
  INITIATE CONTACT
</Button>
```

---

## Navigation Links

### Main Navigation
**File**: `client/src/pages/home.tsx` (lines 18-24)

The navigation has 4 main sections. To modify them:

```tsx
const NavLinks = () => (
  <>
    <button onClick={() => scrollToSection('about')} ...>ABOUT</button>
    <button onClick={() => scrollToSection('work')} ...>WORK</button>
    <button onClick={() => scrollToSection('awards')} ...>AWARDS</button>
    <button onClick={() => scrollToSection('contact')} ...>CONTACT</button>
  </>
);
```

### Add/Remove Navigation Links

**To add a new link:**
1. Add a new section ID in HTML (e.g., `id="services"`)
2. Add the button to NavLinks with matching ID:

```tsx
<button onClick={() => scrollToSection('services')} ...>SERVICES</button>
```

**To remove a link:**
- Delete the corresponding `<button>` line from NavLinks

### Modify Navigation Styling

Navigation styling is in the `<nav>` element (lines 138-165). To change:

- **Font Size**: Change `text-xs` to larger/smaller
- **Spacing**: Modify `gap-6` value
- **Color**: Adjust `hover:text-primary` and `text-white`

---

## Social Media & Contact Links

### Add Social Media Icons
**File**: `client/src/components/hero.tsx` (lines 87-89, currently commented)

Social media icons are available through the `lucide-react` library. To add them:

1. First, add social links to the hero section. Find the NavButton area:

```tsx
<motion.div 
  className="mt-12 flex flex-wrap justify-center gap-6"
>
  <NavButton icon={<FolderOpen size={18} />} label="Work" ... />
  {/* Add social icons here */}
</motion.div>
```

2. Add social buttons using imported icons:

```tsx
<NavButton 
  icon={<Mail size={18} />} 
  label="Email" 
  onClick={() => window.location.href = "mailto:your@email.com"} 
/>
<NavButton 
  icon={<Github size={18} />} 
  label="GitHub" 
  onClick={() => window.open("https://github.com/yourprofile")} 
/>
<NavButton 
  icon={<Twitter size={18} />} 
  label="Twitter" 
  onClick={() => window.open("https://twitter.com/yourprofile")} 
/>
<NavButton 
  icon={<Instagram size={18} />} 
  label="Instagram" 
  onClick={() => window.open("https://instagram.com/yourprofile")} 
/>
```

### Main Contact Email
**File**: `client/src/pages/home.tsx` (line 125)

```tsx
onClick={() => window.location.href = "mailto:contact@kaizen.studio"}
```

Change `contact@kaizen.studio` to your email address.

### Update Website Metadata
**File**: `client/index.html`

Replace portfolio information for SEO and social sharing:

```html
<title>YOUR_NAME | Anime Animator Portfolio</title>
<meta name="description" content="Your custom portfolio description here." />

<meta property="og:title" content="YOUR_NAME | Animator Portfolio" />
<meta property="og:description" content="Your description for social sharing." />

<meta name="twitter:title" content="YOUR_NAME | Animator Portfolio" />
<meta name="twitter:description" content="Your description for Twitter." />
```

---

## Project Gallery

### Location
**File**: `client/src/components/gallery.tsx` (lines 18-43)

### Adding/Editing Projects

The gallery displays projects from the `projects` array. Each project has:

```tsx
{
  id: 1,
  title: "PROJECT_NAME",
  category: "Animation Type",
  image: "https://image-url.com/image.jpg",
  year: "2025",
  description: "Project description here."
}
```

### Edit Existing Project

Find the project in the array and modify:

```tsx
{
  id: 1,
  title: "NEON GENESIS",                          // Your project name
  category: "Character Animation",                 // What you did
  image: "https://images.unsplash.com/...",      // Image URL or local path
  year: "2025",                                    // Year completed
  description: "Your project description..."      // What the work involved
}
```

### Add New Project

Add a new object to the `projects` array:

```tsx
{
  id: 5,
  title: "NEW PROJECT NAME",
  category: "Your Role",
  image: "https://your-image-url.com/image.jpg",
  year: "2025",
  description: "Description of your work on this project."
}
```

### Using Local Images

Instead of URLs, you can use local images:

```tsx
image: "/project-image.jpg",  // Place image in client/public/
```

### Image Tips for Gallery

- **Recommended Size**: 1920×1080px (16:9 aspect ratio)
- **Format**: JPG for photos, PNG for graphics
- **Optimization**: Compress images to reduce load time
- **External URLs**: Use high-quality image hosting (Unsplash, Pexels, etc.)

---

## Awards & Recognition

### Location
**File**: `client/src/components/awards.tsx` (lines 10-16)

### Edit Awards List

The awards are defined in the `awards` array:

```tsx
const awards: Award[] = [
  { 
    id: 1, 
    title: "Best Visual Effects",           // Award name
    organization: "Anime Awards 2024",      // Organization
    year: "2024"                            // Year
  },
  // Add more awards...
];
```

### Add New Award

Add a new object to the array:

```tsx
{ 
  id: 5, 
  title: "Your Award Name",
  organization: "Award Ceremony Name",
  year: "2025"
}
```

### Change Section Title

**File**: Line 24
```tsx
<h2 className="text-4xl md:text-6xl font-display text-white mb-4">
  RECOGNITION
</h2>
```

### Change Section Subtitle

**File**: Line 25
```tsx
<p className="text-muted-foreground font-mono">
  INDUSTRY AWARDS & HONORS
</p>
```

---

## Typography & Fonts

### Current Fonts
**File**: `client/index.html` (lines 18-19)

The portfolio uses three custom Google Fonts:

- **Russo One**: Display font (headings)
- **Saira**: Main text font (body)
- **Space Mono**: Code/monospace font (details)

### Change Fonts

To use different fonts from Google Fonts:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace the existing font links in `client/index.html`

**Example: Change heading font to "Orbitron"**

Replace:
```html
<link href="https://fonts.googleapis.com/css2?family=Russo+One&..." rel="stylesheet">
```

With:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&..." rel="stylesheet">
```

Then update the CSS in `client/src/index.css`:
```css
--font-display: "Orbitron", sans-serif;
```

### Font Usage Classes

| Font Type | CSS Variable | Usage |
|---|---|---|
| Display/Headings | `--font-display` | `h1, h2, h3, h4, h5, h6` |
| Body Text | `--font-sans` | Paragraph text |
| Code/Details | `--font-mono` | Technical info, monospace |

### Change Font Sizes

Modify in component files or use Tailwind classes:

```tsx
// In any component
<h1 className="text-2xl md:text-4xl lg:text-6xl">Large Heading</h1>
<p className="text-sm md:text-base lg:text-lg">Body text with responsive sizing</p>
```

**Common Tailwind Size Classes**:
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`

---

## Quick Reference: File Locations

| What to Change | File | Lines |
|---|---|---|
| **Colors** | `client/src/index.css` | 6-22 |
| **Hero Title** | `client/src/components/hero.tsx` | 45-47 |
| **Hero Subtitle** | `client/src/components/hero.tsx` | 49-54 |
| **About Section** | `client/src/pages/home.tsx` | 47-88 |
| **Contact Email** | `client/src/pages/home.tsx` | 125 |
| **Projects** | `client/src/components/gallery.tsx` | 18-43 |
| **Awards** | `client/src/components/awards.tsx` | 10-16 |
| **Navigation** | `client/src/pages/home.tsx` | 18-24 |
| **Images (Hero)** | `client/public/hero-bg.png` | - |
| **Images (About)** | `client/public/artist.png` | - |
| **Website Title/Meta** | `client/index.html` | 7-21 |
| **Fonts** | `client/index.html` & `client/src/index.css` | 18-19 & 24-28 |

---

## Testing Your Changes

After making changes:

1. **Save the file** (Ctrl+S)
2. **Check the browser** - Most changes update automatically
3. **Hard refresh** (Ctrl+Shift+R or Cmd+Shift+R) if changes don't appear
4. **Mobile test** - Resize browser to test responsive design

---

## Common Customization Tasks

### Task: Change Brand Colors to Purple Theme

1. Open `client/src/index.css`
2. Update colors:
```css
--color-primary: hsl(270 100% 60%);      /* Purple instead of Cyan */
--color-secondary: hsl(310 100% 60%);    /* Deeper Purple */
--color-accent: hsl(280 100% 70%);       /* Light Purple */
```

### Task: Add GitHub Link

1. Open `client/src/components/hero.tsx`
2. Import Github icon (already imported on line 3)
3. Add button in the NavButton area:

```tsx
<NavButton 
  icon={<Github size={18} />} 
  label="GitHub" 
  onClick={() => window.open("https://github.com/YOUR_USERNAME")} 
/>
```

### Task: Update All Social Links

1. Add multiple NavButtons in the hero section
2. Point each to your actual social profiles:

```tsx
onClick={() => window.open("https://twitter.com/YOUR_HANDLE")}
onClick={() => window.open("https://instagram.com/YOUR_HANDLE")}
onClick={() => window.open("https://linkedin.com/in/YOUR_PROFILE")}
```

### Task: Change Portfolio Website Title Everywhere

1. `client/index.html` - Change in `<title>` and all `<meta>` tags
2. `client/src/components/hero.tsx` - Update "KAIZEN STUDIOS"
3. `client/src/pages/home.tsx` - Update logo text "KZN"

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Colors don't change | Use HSL format: `hsl(hue saturation% lightness%)` |
| Images not showing | Check file is in `client/public/` folder |
| Changes not appearing | Hard refresh browser (Ctrl+Shift+R) |
| Text cut off on mobile | Check responsive classes (md:, lg:) |
| Email link not working | Ensure format is `mailto:email@example.com` |

---

## Need More Help?

- Check component files for comments explaining sections
- Use browser DevTools (F12) to inspect elements
- Review Tailwind CSS documentation for styling classes
- Look at existing components as examples

**Happy customizing!** 🎨

