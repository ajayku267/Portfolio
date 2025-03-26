# Project Images Guide

This directory contains custom images for your portfolio projects. Below are guidelines on creating effective project images:

## Image Requirements

- **File Format**: PNG or JPG (PNG preferred for transparency)
- **Resolution**: At least 1200x800 pixels (16:9 aspect ratio)
- **File Size**: Keep under 400KB per image for optimal loading
- **Style**: Consistent style across all project images

## Project Image Recommendations

### Stock Vision
- **Filename**: `stock_vision.png`
- **Content Ideas**:
  - Stock market analysis charts/graphs
  - Data visualization dashboard
  - Financial metrics with AI prediction overlay
  - Color scheme: Blue and green tones (financial)

### Mausam Weather App
- **Filename**: `mausam_weather.png`
- **Content Ideas**:
  - Weather dashboard with temperature display
  - Mobile app interface showing forecasts
  - Weather icons for different conditions
  - Color scheme: Blue, white, and light gradients

### Digital Wardrobe Manager
- **Filename**: `digital_wardrobe.png`
- **Content Ideas**:
  - Clothing items in a digital closet interface
  - Outfit suggestion interface
  - Personal style analysis screen
  - Color scheme: Fashion-forward pastels or bold colors

## Creating Your Images

### Option 1: Screenshot Your Actual Projects
If your projects are deployed, take high-quality screenshots of the main interfaces.

### Option 2: Design Mock-ups
Use design tools like Figma, Adobe XD, or Canva to create professional mock-ups.

### Option 3: Use AI Image Generation
Tools like Midjourney, DALL-E, or Stable Diffusion can create stunning project illustrations.

### Option 4: Free Stock Images
Sites like Unsplash or Pexels offer free high-quality images you can customize.

## After Adding Images

After adding your images to this directory, update the imports in `src/assets/index.js`:

```javascript
// Project images
import stockVision from "./projects/stock_vision.png";
import mausamWeather from "./projects/mausam_weather.png";
import digitalWardrobe from "./projects/digital_wardrobe.png";
```

## Best Practices

- Keep your images visually consistent for a professional look
- Ensure the images clearly represent what the project does
- Add subtle branding or your personal style across images
- Use high contrast to ensure visibility in both light and dark themes 