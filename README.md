# 🦄 Unicorn Supea - Penelope's Magical Art Gallery

A beautiful, magical website showcasing Penelope's AI-created unicorn art! Built with Astro and featuring her favorite colors: purple, pink, yellow, and rainbow snakes! ✨

## 🌟 Features

- **Magical Design**: Sparkles, golden balls, rainbow snakes, and unicorns everywhere!
- **Easy to Update**: Simple way to add new art pieces
- **Responsive**: Looks great on all devices
- **Fast**: Built with Astro for lightning-fast performance
- **Family-Friendly**: Perfect for sharing with family and friends

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit `http://localhost:4321`

## 🎨 Adding New Art

Adding new art pieces is super easy! Here are two ways:

### Method 1: Using the Helper Script (Recommended)
```bash
npm run add-art
```
This will guide you through adding a new art piece step by step!

### Method 2: Manual Addition
1. **Add the Image**: Save your image file (JPG, PNG, GIF, etc.) to the `public/art/` folder
2. **Update the Data**: Open `src/data/art.ts` and add a new entry to the `artPieces` array:

```typescript
{
    id: 7, // Use the next available number
    title: "Your Art Title",
    description: "Description of your magical creation",
    image: "/art/your-filename.jpg", // Path to your image
    date: "2024-02-15" // Date created
}
```

### Done!
The new art piece will automatically appear on the website! 🎉

## 🎨 Customizing the Style

The website uses Tailwind CSS, making it easy to customize colors and styles. Penelope's favorite elements are already included:

- **Colors**: Purple, pink, yellow gradients
- **Animations**: Sparkles, bouncing golden balls, rainbow snakes
- **Font**: Fredoka (cute and friendly)
- **Emojis**: Unicorns, sparkles, rainbows, snakes

## 📁 Project Structure

```
unicorn-supea/
├── public/
│   └── art/           # Add your images here
├── src/
│   ├── data/
│   │   └── art.ts     # Art pieces data
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
└── README.md
```

## 🚀 Deployment

This site can be easily deployed to:
- **Netlify**: Just connect your GitHub repo
- **Vercel**: Push to GitHub and deploy
- **GitHub Pages**: Use the Astro adapter

## 💜 Made with Love

Created for Penelope, age 4, who loves:
- 🦄 Unicorns
- ✨ Sparkles  
- 🌈 Rainbows
- 🐍 Snakes (especially rainbow ones!)
- 💜 Purple, pink, and yellow colors
- 🟡 Golden balls

---

**✨ Sparkles and rainbows forever! ✨**
