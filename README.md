# Valentine's Day Love Website ❤️

A beautiful, interactive Valentine's Day website with personalized name and photo features!

## Features ✨

- **Personalized Experience**: Enter your Valentine's name and upload their photo
- **Interactive Elements**: 
  - Custom heart cursor trail
  - Floating hearts animation
  - Love counter
  - WhatsApp integration
- **Multiple Screens**:
  - Photo gallery
  - Love letters (flip cards)
  - Timeline of your love story
  - Memory matching game
  - Love quiz
  - Interactive surprise messages
- **Responsive Design**: Works on mobile and desktop

## Files Included 📁

- `index.html` - Main HTML file
- `styles.css` - All CSS styling
- `script.js` - JavaScript functionality
- `README.md` - This file

## How to Deploy on GitHub Pages 🚀

### Step 1: Prepare Your Images

Add these image files to your project folder:
- `pic 01.jpg` - Main photo
- `pic 02.jpeg` - Gallery photo 2
- `pic 03.jpeg` - Gallery photo 3
- `pic 04.jpeg` - Gallery photo 4
- `pic 05 .jpeg` - Celebration photo
- `love 02.jpeg` - Gallery photo 6
- `second.mp4` - Background music (optional)

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Name your repository (e.g., `valentine-website`)
5. Make it **Public**
6. Click **"Create repository"**

### Step 3: Upload Files

**Option A: Using GitHub Web Interface**
1. Click **"uploading an existing file"**
2. Drag and drop all files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - All image files
   - Audio file (if using)
3. Click **"Commit changes"**

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"**
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site will be live at: `https://USERNAME.github.io/REPO_NAME/`

## Customization 🎨

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --cream: #FAF9F6;
    --rose: #E8B4B8;
    --coral: #F28B82;
    --dark: #2C2C2C;
    --whatsapp: #25D366;
}
```

### Change WhatsApp Number
Edit the phone number in `index.html`:
```html
<a href="https://wa.me/YOUR_NUMBER?text=MESSAGE" ...>
```

### Customize Love Letters
Edit the letter content in `index.html` under the "Love Letters For You" section.

### Modify Timeline
Edit timeline events in `index.html` under the "Our Love Story" section.

### Update Quiz Questions
Edit questions in `script.js` in the `questions` array.

## Troubleshooting 🔧

### Images Not Loading
- Make sure image filenames match exactly (including spaces and capitalization)
- Check that images are in the same folder as `index.html`

### Music Not Playing
- Use MP3 format instead of MP4 for better browser compatibility
- Update the audio source in `index.html`:
  ```html
  <source src="your-music.mp3" type="audio/mp3">
  ```

### Site Not Appearing
- Wait a few minutes after enabling GitHub Pages
- Check that your repository is public
- Ensure `index.html` is in the root folder

## Browser Compatibility 🌐

Works on:
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Edge (Desktop & Mobile)

## Credits 💝

Created with love using:
- HTML5
- CSS3
- Vanilla JavaScript
- Canvas Confetti library
- Google Fonts (Montserrat, Dancing Script, Playfair Display)

## License 📄

Feel free to use and modify this for your own Valentine! ❤️

---

**Made with ❤️ for your special someone**