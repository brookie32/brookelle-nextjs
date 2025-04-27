#!/bin/bash
echo "Copying images from original project to Next.js public folder..."

# Create the public/assets directory if it doesn't exist
mkdir -p /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets

# Copy all image files with their original names
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/brookelle-hero2.png /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/brookehero1.png /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/brookelle-hero.png /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/brookelle-hero-upscaled.png /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/brookelle-logo.png /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/ladyplusbutterfly.jpg /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/
cp -v /Users/ryansikorsky/Documents/GitHub/brookelle-website/assets/staticmarklikes.jpeg /Users/ryansikorsky/Documents/GitHub/brookelle-nextjs/public/assets/

echo "Images copied successfully!"
echo "To make the script executable, run: chmod +x copy-images.sh"
echo "Then run: ./copy-images.sh"
