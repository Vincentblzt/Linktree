# Next.js Migration Guide

Convert this to a full Next.js + TypeScript project.

## Option 1: Use with Existing Create React App

No migration needed - the components work as-is with CRA. Just:

```bash
npm install tailwindcss -D
npx tailwindcss init -p
npm install @types/react @types/react-dom --save-dev
```

Then update your `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './styles/smartbio.css';
```

And use in your App.tsx:
```tsx
import { SmartBioDemo } from './components/SmartBioDemo';

function App() {
  return <SmartBioDemo />;
}
```

## Option 2: Migrate to Next.js 14+ (App Router)

### 1. Create Next.js Project

```bash
npx create-next-app@latest linktree --typescript --tailwind
cd linktree
```

### 2. Copy Component Files

Copy the following to your Next.js project:
```
src/
├── components/
│   └── smartbio/
│       ├── SmartBio.tsx
│       ├── SmartBioDemo.tsx
│       ├── ControlBar.tsx
│       ├── EditorPanel.tsx
│       ├── DeviceFrame.tsx
│       ├── Toast.tsx
│       └── index.ts
├── types/
│   └── smartbio.ts
├── utils/
│   └── toast.ts
└── app/
    ├── globals.css
    └── page.tsx
```

### 3. Update `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* Aurora Background Gradient */
  .aurora-bg {
    @apply relative bg-[#090918];
    background: 
      radial-gradient(circle at 15% 25%, rgba(6, 182, 212, 0.95) 0%, transparent 45%),
      radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.95) 0%, transparent 50%),
      radial-gradient(circle at 50% 75%, rgba(236, 72, 153, 0.85) 0%, transparent 55%),
      radial-gradient(circle at 90% 85%, rgba(59, 130, 246, 0.8) 0%, transparent 45%),
      #090918;
    background-blend-mode: screen, normal, normal, normal, normal;
  }

  .btn-dark-glass {
    @apply bg-gradient-to-b from-gray-700 to-gray-900 shadow-md;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .btn-light-glass {
    @apply bg-white border border-gray-200 shadow-sm;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  }

  .avatar-glow {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

body {
  font-family: 'Satoshi', 'Inter', sans-serif;
  user-select: none;
}
```

### 4. Create `app/page.tsx`

```tsx
import { SmartBioDemo } from '@/components/smartbio/SmartBioDemo';

export const metadata = {
  title: 'SmartBio - Link in Bio',
  description: 'Beautiful link-in-bio profiles with iPhone mockup',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <SmartBioDemo />
    </main>
  );
}
```

### 5. Update `next.config.js` (Optional)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;
```

### 6. Add FontAwesome to `app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartBio',
  description: 'Link in bio profiles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Satoshi Font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 7. Install Dependencies

```bash
npm install
```

### 8. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## File Comparison

### CRA Structure
```
src/
├── App.tsx
├── App.css
├── index.tsx
└── components/smartbio/...
```

### Next.js Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── smartbio/...
```

## Environment Variables (Optional)

Create `.env.local`:
```
NEXT_PUBLIC_SHARE_URL=https://yourdomain.com/profile
```

Use in component:
```tsx
const shareUrl = process.env.NEXT_PUBLIC_SHARE_URL || 'https://smarbio.ai/default';
<SmartBio initialConfig={config} shareUrl={shareUrl} />
```

## Deployment

### Vercel (Recommended)

```bash
git push origin main
# Connect to Vercel and deploy
```

### Other Platforms

```bash
npm run build
npm start
```

## TypeScript Configuration

Next.js automatically generates `tsconfig.json`. To customize:

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## API Routes (Optional)

Create `app/api/profile/[id]/route.ts`:

```tsx
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Fetch profile data from database
  const profile = await db.profiles.findOne({ id: params.id });
  return Response.json(profile);
}
```

Use in component:

```tsx
const data = await fetch(`/api/profile/${id}`).then(r => r.json());
```

## Performance Tips

1. **Image Optimization**: Use Next.js Image component
   ```tsx
   import Image from 'next/image';
   <Image src={config.avatar} alt="..." width={110} height={110} />
   ```

2. **Font Optimization**: Satoshi font is already preloaded via head

3. **Code Splitting**: Components are automatically code-split

4. **Caching**: Add to route handlers
   ```tsx
   export const revalidate = 3600; // 1 hour
   ```

## Troubleshooting

### Tailwind not working
- Ensure `globals.css` imports are present
- Rebuild: `npm run build`
- Clear `.next`: `rm -rf .next`

### Icons not showing
- Check FontAwesome CDN link in layout
- Verify classes like `fa-solid`, `fa-brands`

### Styling issues
- Ensure `tailwind.config.js` includes correct paths
- Check for conflicting CSS modules

## Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
