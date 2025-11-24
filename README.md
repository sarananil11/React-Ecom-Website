# GlowSkin - React E-Commerce Website

A modern, responsive skincare e-commerce website built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Hero section, features, and featured products
- 🛍️ **Products Page** - Browse all products with filtering (Men's/Women's)
- ℹ️ **About Page** - Company story, mission, and values
- 📧 **Contact Page** - Contact form with EmailJS integration
- 📱 **Fully Responsive** - Hamburger menu for mobile devices
- 🎨 **Clean UI** - Professional and modern design

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **EmailJS** - Email service for contact form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd React-Ecom-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## EmailJS Setup

To enable the contact form functionality, you'll need to set up EmailJS:

1. **Sign up for EmailJS** (https://www.emailjs.com/)
2. **Create a service** - Connect your email service (Gmail, Outlook, etc.)
3. **Create an email template** - Set up the template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

5. **Update Contact.jsx** - Replace the placeholders in `src/pages/Contact.jsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',      // Replace with your service ID
     'YOUR_TEMPLATE_ID',     // Replace with your template ID
     formRef.current,
     'YOUR_PUBLIC_KEY'       // Replace with your public key
   );
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar with hamburger menu
│   └── Footer.jsx       # Footer component
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Products.jsx     # Products listing page
│   ├── About.jsx        # About page
│   └── Contact.jsx      # Contact page with form
├── data/
│   └── products.js      # Product data
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Products

Edit `src/data/products.js` to add, remove, or modify products.

### Styling

- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Color scheme: Modify `primary` colors in `tailwind.config.js`

### Routes

Routes are defined in `src/App.jsx`. Add new routes as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For support, email info@glowskin.com or visit our website.
