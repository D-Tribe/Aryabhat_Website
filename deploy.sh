#!/bin/bash
set -e

echo "→ Building Next.js..."
npm run build

echo "→ Assembling deploy folder..."
rm -rf .deploy
mkdir -p .deploy/aryabhat
mkdir -p .deploy/narrate

# Main site (aryabhat.ai root)
cp ../../Aryabhat/aryabhat_main.html .deploy/index.html
cp ../../Aryabhat/logo.png .deploy/
cp ../../Aryabhat/data-ai-connect.jpg .deploy/ 2>/dev/null || true
cp ../../Aryabhat/missing_part.jpg .deploy/ 2>/dev/null || true

# Aryabhat product page (aryabhat.ai/aryabhat)
cp -r out/. .deploy/aryabhat/

# Narrate product page (aryabhat.ai/narrate)
cp -r ../../Narrate/Narrate/. .deploy/narrate/

# CNAME must be at root so GitHub Pages keeps the custom domain
cp public/CNAME .deploy/

echo "→ Deploying to GitHub Pages..."
npx gh-pages -d .deploy --dotfiles

echo "✓ Done — live at aryabhat.ai"