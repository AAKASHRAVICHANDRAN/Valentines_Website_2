# 💕 Valentine's Day Interactive Website 💕

A beautiful, interactive Valentine's Day website that takes users through a romantic journey from initial invitation to marriage and family. Features moving photos, background music, interactive elements, and responsive design.

## 🌟 Features

- **Interactive Story Flow**: Multi-page journey from Valentine's invitation to marriage proposal to family
- **Moving Photo Animations**: Dynamic floating photos with smooth animations
- **Background Music**: Page-specific music with 20-second auto-limit
- **Mobile-Friendly**: Responsive design with mobile music controls
- **Interactive Elements**: Playful "No" buttons that move and transform
- **Photo Galleries**: Customizable photo displays with modal viewing
- **Celebration Effects**: Confetti, floating hearts, and visual celebrations

## 📁 Project Structure

```
project/
├── index.html              # Main Valentine's invitation page
├── yes.html               # Acceptance page with proposal
├── married.html           # Wedding celebration page
├── family.html            # Family photos page
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── images/                # Photo directory
│   ├── photo1.jpg         # Main page moving photos (photo1-5)
│   ├── photo6.jpg         # Gallery photos (photo6-13)
│   ├── wedding1.jpg       # Wedding photos (wedding1-3)
│   ├── kid1.jpg           # Family photos (kid1-6)
│   └── ...
├── music/                 # Audio directory
│   ├── romantic-intro.wav # Main page music
│   ├── celebration-love.wav # Yes page music
│   ├── wedding-song.wav   # Wedding page music
│   ├── family-song.wav    # Family page music
│   └── bell-sound.wav     # Sound effects
└── README.md              # This file
```

## 🖼️ Adding Your Photos

### Main Page Moving Photos (index.html)
Add 5 photos that will float around the main invitation page:
- `images/photo1.jpg` - `images/photo5.jpg`
- **Recommended size**: 400x400px or similar square format
- **Format**: JPG, PNG, or WebP

### Gallery Photos (yes.html)
Add 6 photos for the memory gallery:
- `images/photo6.jpg` - `images/photo11.jpg`
- **Recommended size**: 300x300px minimum
- **Format**: JPG, PNG, or WebP

### Wedding Photos (married.html)
Add 3 wedding photos:
- `images/wedding1.jpg` - `images/wedding3.jpg`
- **Recommended size**: 400x300px (4:3 aspect ratio)
- **Format**: JPG, PNG, or WebP

### Family Photos (family.html)
Add 6 family/children photos arranged in a circle:
- `images/kid1.jpg` - `images/kid6.jpg`
- **Recommended size**: 300x300px (square format works best)
- **Format**: JPG, PNG, or WebP

### Photo Guidelines
- **File naming**: Use exact names as listed above (case-sensitive)
- **Quality**: Use high-quality images for best results
- **Size**: Keep files under 2MB each for faster loading
- **Backup**: Keep original photos as backups before resizing

## 🎵 Adding Your Music

### Required Audio Files
Place audio files in the `music/` directory:

1. **romantic-intro.wav** - Main page background music
2. **celebration-love.wav** - Yes page celebration music
3. **wedding-song.wav** - Wedding page music
4. **family-song.wav** - Family page music
5. **bell-sound.wav** - Wedding bells sound effect

### Audio Guidelines
- **Format**: WAV files preferred (MP3 as fallback)
- **Length**: Music auto-stops after 20 seconds
- **Quality**: 44.1kHz, 16-bit recommended
- **Size**: Keep files under 5MB for faster loading
- **Volume**: Normalize audio levels for consistent experience

### Converting Audio Files
If you have MP3 files, you can:
1. Use online converters to create WAV versions
2. Keep both formats (the site will try WAV first, then MP3)
3. Name MP3 files the same but with `.mp3` extension

## 🚀 Getting Started

1. **Download/Clone** the project files
2. **Add your photos** to the `images/` folder using the naming convention above
3. **Add your music** to the `music/` folder
4. **Open `index.html`** in a web browser
5. **Test on mobile** to ensure music controls work properly

## 📱 Mobile Compatibility

- **Music**: Shows play button when autoplay fails (typical on mobile)
- **Photos**: Responsive sizing for all screen sizes
- **Touch**: All interactive elements work with touch
- **Performance**: Optimized for mobile browsers

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:
- Primary pink: `#ff6b9d`
- Secondary pink: `#ffc3e0`
- Accent colors: `#d63384`, `#e91e63`

### Text Content
Edit the HTML files to customize:
- Page titles and messages
- Button text
- Photo captions
- Love notes and quotes

### Animations
Modify animation speeds and effects in `styles.css`:
- Photo movement patterns
- Floating heart effects
- Button hover animations

## 🔧 Technical Details

- **No server required**: Runs entirely in the browser
- **Modern browsers**: Works in Chrome, Firefox, Safari, Edge
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized animations and image loading
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📝 File Naming Reference

### Images Directory
```
images/
├── photo1.jpg through photo5.jpg    # Main page floating photos
├── photo6.jpg through photo11.jpg   # Gallery photos
├── wedding1.jpg through wedding3.jpg # Wedding photos
└── kid1.jpg through kid6.jpg         # Family photos
```

### Music Directory
```
music/
├── romantic-intro.wav     # Main page music
├── celebration-love.wav   # Yes page music
├── wedding-song.wav       # Wedding page music
├── family-song.wav        # Family page music
└── bell-sound.wav         # Sound effects
```

## 💡 Tips

1. **Test locally**: Open `index.html` directly in your browser
2. **Photo quality**: Higher resolution photos look better but load slower
3. **Music length**: Since music stops after 20 seconds, choose the best part of your songs
4. **Mobile testing**: Always test on actual mobile devices
5. **Backup**: Keep copies of your original photos and music files

## 🐛 Troubleshooting

### Photos not showing?
- Check file names match exactly (case-sensitive)
- Ensure photos are in the `images/` folder
- Try refreshing the page (Ctrl+F5 or Cmd+Shift+R)

### Music not playing?
- Check file names match exactly
- Ensure audio files are in the `music/` folder
- On mobile, tap the music button when it appears
- Try both WAV and MP3 formats

### Page not loading properly?
- Ensure all files are in the same directory structure
- Check browser console for errors (F12)
- Try a different browser

## 💕 Enjoy Your Romantic Website!

This website is designed to create a magical, interactive experience for your special someone. Customize it with your photos and music to make it uniquely yours!