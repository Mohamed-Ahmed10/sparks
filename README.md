# **Sparks**

This site was created by **Eng. Mohamed Ahmed** as a modern web application. This document provides a comprehensive guide for developers working on this project.

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **UI**: shadcn/ui with Tailwind CSS
- **Components**: Radix UI Primitives
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React & React Icons
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with CSS Variables

## 📁 Project Structure

```
sparks/
├── public/                  # Static assets
│   ├── images/             # Image assets
│   │   └── All static images
│   ├── videos/             # Video assets
│   │   └── All static videos
│   ├── logo.png            # Default logo
│   └── logo-2.png          # Alternative logo
│
├── src/
│   ├── actions/            # Server actions
│   │   └── set-language-actions.ts
│   │
│   ├── app/                # App router pages
│   │   ├── page.tsx        # Home page
│   │   └── not-found.tsx   # 404 page
│   │
│   ├── components/         # Reusable components
│   │   └── ui/             # UI components
│   │
│   ├── contexts/           # React contexts
│   │   └── DirectionContextProvider.tsx
│   │
│   ├── i18n/               # Internationalization
│   │   └── request.ts
│   │
│   ├── lib/                # Utility functions
│   │   ├── fonts.ts        # Font configurations
│   │   └── utils.ts        # Helper functions
│   │
│   └── layout/             # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Nav.tsx
│
├── messages/               # Translation files
│   ├── en.json
│   └── ar.json
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🌍 Internationalization

- Supports English (en) and Arabic (ar)
- Translation files are located in `/messages`
- Uses `next-intl` for i18n routing and translations

## 🛠️ Getting Started

1. **Prerequisites**

   - Node.js 18+
   - npm or yarn

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Styling

- Uses Tailwind CSS for utility-first styling
- Custom animations with Framer Motion
- Responsive design with mobile-first approach

## 🧪 Testing

Run the linter:

```bash
npm run lint
```

## 📦 Dependencies

### Main Dependencies

- `next`: 15.4.6
- `react`: 19.1.0
- `tailwindcss`: 4.1.12
- `framer-motion`: 12.23.12
- `next-intl`: 4.3.5

### Development Dependencies

- `@types/node`: 24.3.0
- `@types/react`: 19.0.0
- `eslint`: 9.x
- `typescript`: 5.x

---

Created with ❤️ by **Eng. Mohamed Ahmed**

### **2️⃣ Translation Support**

- Uses **[Next intl](https://next-intl.dev/)** for multi-language support.
- To add translations, create a JSON file inside:

  ```sh
  /messages/en.json
  /messages/ar.json
  ```

  The configuration is located at:

  ```sh
  /next.config.ts
  src/i18n/request.ts
  ```

- **All paths in translation files follow the camelCase convention.**

---

### **3️⃣ Styling Framework**

- Uses **[Tailwind CSS 4](https://tailwindcss.com/)** for styling.
- All main colors you will find all as a css variables at

```sh
src/app/globals.css
```

---

### **4️⃣ Assets Management**

- All assets are stored inside the **public folder** in snake_case:
  - **Images** → `.webp` format.
  - **icons** → `.SVG` format.

---

### **5️⃣ Environment Configuration**

- The project has **environment file** for setting up the production domain:

  ```sh
  src/environments/environment.ts
  ```

- The domain is retrieved dynamically through a **getter function**.

---

### **6️⃣ Core Services**

- Located in the `app/core/` folder.
- Includes API services inside:

  ```sh
  src/app/core/services/api
  ```

- Other important services:
  - **`TranslateHelperService`** → Helps manage RTL support.

---

### **7️⃣ Component Structure**

- Inside the `(views)` folder, all views .
- **Home View:** Since the home page contains many components, the folders inside it are components rather than views.
- **Shared components** used throughout the project are located in:

  ```sh
  src/components
  ```

- If a shared component is used only within a specific view, you will find a `shared` folder inside that view’s directory, e.g.,

  ```sh
  src/app/views/about/shared/
  ```

---

## **📌 Additional Notes**

### **📝 File Structure Consistency**

- If you want to **edit any component**, follow the **file path**—you will find the folder structure **the same across all components**.
- This ensures **consistency** and makes it easier to navigate the project.

## **✅ Best Practices & Guidelines**

### **Project Structure**

- Follow the established Next.js 13+ App Router structure
- Keep components in `/src/components` unless they are page-specific
- Place page-specific components in a `components` folder within the respective route folder
- Use the `app` directory for all routes and pages

### **Internationalization**

- Use `next-intl` for all text content
- Add new translations in both `/messages/en.json` and `/messages/ar.json`
- For RTL support, utilize the `DirectionContextProvider`

### **Styling**

- Use Tailwind CSS utility classes for styling
- Leverage shadcn/ui components when possible for consistency
- For custom components, use CSS Modules with the `.module.css` extension
- Maintain a mobile-first responsive approach

### **Assets**

- Store static assets in the `public` directory:
  - Images: `.webp` format (preferred) or `.png`
  - Icons: Use Lucide React or React Icons
  - Videos: `.gif` or `.mp4` formats
- Optimize all media files for web

### **Code Quality**

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Keep components small and focused on a single responsibility

### **Performance**

- Use `next/image` for optimized image loading
- Implement code splitting using dynamic imports for large components
- Optimize API calls with proper caching strategies

🚀 **Happy coding!**
