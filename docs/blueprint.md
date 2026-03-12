# **App Name**: LI-Costruzioni

## Core Features:

- Professional Website Foundation: Establish the core structure with clean navigation (Home, Servizi, Progetti, Chi Siamo, Contatti, 'Richiedi Preventivo' button), a dynamic hero section adjusting content for generic vs. localized views, and an SEO-friendly footer with key area links.
- Localized Service Content: Implement dynamic /servizi/[city] pages for Terracina, Latina, and Roma, serving location-specific content while integrating Schema.org ConstructionBusiness JSON-LD with areaServed details for improved local SEO.
- AI Digital Geometer Chatbot: A floating, AI-powered chatbot leveraging Google Gemini to act as a 'Geometra Digitale', answering technical queries about construction and renovation and actively requesting name and phone as a tool for sopralluogo requests.
- Secure Lead Management: Automatically capture and store lead contact details (name and phone) collected by the AI chatbot directly into a dedicated 'leads' collection within Firebase Firestore.
- Filterable Project Portfolio: Showcase completed projects in a dedicated section with filters by 'Città' and 'Tipologia', displaying images with dynamically generated SEO-rich alt-tags. Project data will be managed in Firestore.

## Style Guidelines:

- Color Scheme: A sophisticated dark theme, inspired by industrial aesthetics and modern professionalism, providing strong contrast for readability and an elegant user experience.
- Primary Color: Rich Amber (#DF9B20) for interactive elements and highlights, chosen to convey warmth, trust, and a refined connection to raw materials, standing out clearly against the dark background.
- Background Color: A very dark, subtle sepia grey (#1D1B16), creating an 'industrial' canvas with a warm undertone that provides depth and elegance.
- Accent Color: Vibrant Coral Red (#F2725A) to draw attention to key calls to action or urgent notifications, adding a touch of dynamism and energy while maintaining sophistication.
- Main Typeface: 'Inter' (sans-serif) for both headlines and body text. Its clean, modern, and highly legible design ensures clarity and a professional aesthetic across all content, supporting the app's sophisticated yet functional intent.
- Utilize modern, clean-lined, and geometric icons, consistent with Shadcn UI's typical offerings, to represent construction themes, services, and navigation elements. Prioritize clarity and minimalist design.
- Adopt a structured, responsive layout with generous spacing, focusing on clear content hierarchy. The navigation bar will remain 'clean' as requested, and the hero section will feature light text on the dark background for dramatic impact.
- Incorporate subtle and smooth transitions for UI elements such as hero section text changes, chatbot interactions (opening/closing), and project filtering, enhancing the user experience without being distracting.