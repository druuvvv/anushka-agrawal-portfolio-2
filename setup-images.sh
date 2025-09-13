#!/bin/bash

# Portfolio Website Image Organization Script
# This script helps organize images for the portfolio website

echo "🎨 Portfolio Website Image Organization"
echo "======================================"

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p images/projects/bloom
mkdir -p images/projects/ispace  
mkdir -p images/projects/pune-metro
mkdir -p images/profile
mkdir -p images/icons
mkdir -p images/backgrounds

echo "✅ Directory structure created!"

# Create placeholder files
echo "📝 Creating placeholder files..."

# Bloom project images
touch images/projects/bloom/bloom-hero.jpg
touch images/projects/bloom/bloom-mockup-1.jpg
touch images/projects/bloom/bloom-mockup-2.jpg
touch images/projects/bloom/bloom-features.jpg
touch images/projects/bloom/bloom-process.jpg

# Ispace project images
touch images/projects/ispace/ispace-hero.jpg
touch images/projects/ispace/ispace-laptop.jpg
touch images/projects/ispace/ispace-living-room.jpg
touch images/projects/ispace/ispace-contact-form.jpg
touch images/projects/ispace/ispace-stats.jpg
touch images/projects/ispace/ispace-projects.jpg
touch images/projects/ispace/ispace-services.jpg
touch images/projects/ispace/ispace-testimonials.jpg
touch images/projects/ispace/ispace-map.jpg

# Pune Metro project images
touch images/projects/pune-metro/pune-metro-hero.jpg
touch images/projects/pune-metro/pune-metro-old-splash.jpg
touch images/projects/pune-metro/pune-metro-new-splash.jpg
touch images/projects/pune-metro/pune-metro-home-old.jpg
touch images/projects/pune-metro/pune-metro-home-new.jpg
touch images/projects/pune-metro/pune-metro-booking.jpg
touch images/projects/pune-metro/pune-metro-tickets.jpg
touch images/projects/pune-metro/pune-metro-tracking.jpg
touch images/projects/pune-metro/pune-metro-landmarks.jpg
touch images/projects/pune-metro/pune-metro-stations.jpg

# Profile images
touch images/profile/profile-main.jpg
touch images/profile/profile-thumbnail.jpg

# Icons
touch images/icons/favicon.ico
touch images/icons/logo.svg

# Background images
touch images/backgrounds/hero-bg.jpg
touch images/backgrounds/section-bg.jpg

echo "✅ Placeholder files created!"

echo ""
echo "📋 Next Steps:"
echo "1. Export images from your Figma designs"
echo "2. Replace the placeholder files with actual images"
echo "3. Ensure images are optimized for web (compressed)"
echo "4. Update HTML files to reference local images"
echo ""
echo "🎯 Priority Images for Project Cards:"
echo "- images/projects/bloom/bloom-hero.jpg (400x300px)"
echo "- images/projects/ispace/ispace-hero.jpg (400x300px)"  
echo "- images/projects/pune-metro/pune-metro-hero.jpg (400x300px)"
echo "- images/profile/profile-main.jpg (300x300px)"
echo ""
echo "✨ Ready to replace placeholders with your Figma exports!"
