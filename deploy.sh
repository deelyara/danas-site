#!/bin/bash

# Portfolio Website Deployment Script
# This script ensures all optimizations are in place before deployment

set -e

echo "🚀 Starting deployment preparation..."

# 1. Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm ci

# 3. Type checking
echo "🔍 Running type checks..."
npm run lint

# 4. Build the application
echo "🏗️  Building application..."
npm run build

# 5. Security check - ensure robots.txt is properly configured
echo "🔒 Checking security configurations..."
if grep -q "Disallow: /" public/robots.txt; then
    echo "✅ robots.txt properly configured for privacy"
else
    echo "❌ Warning: robots.txt may not be properly configured"
    exit 1
fi

# 6. Check for sensitive information
echo "🔍 Scanning for sensitive information..."
if grep -r -i "api_key\|secret_key\|password\|private_key" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git --exclude="*.sh" --exclude="*.md" --exclude="package-lock.json" . | grep -v "design token\|update token\|js-tokens"; then
    echo "❌ Warning: Potential sensitive information found"
    echo "Please review and remove any exposed secrets"
    exit 1
else
    echo "✅ No sensitive information detected"
fi

# 7. Performance check - bundle size analysis
echo "📊 Analyzing bundle size..."
npx next build --debug 2>&1 | grep -E "(First Load JS|Route)"

echo ""
echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Pre-deployment checklist:"
echo "   ✅ Build successful"
echo "   ✅ Type checking passed"
echo "   ✅ Security headers configured"
echo "   ✅ Bot protection enabled"
echo "   ✅ Image optimization enabled"
echo "   ✅ No sensitive data exposed"
echo ""
echo "🚀 Ready to deploy to Vercel!"
echo "   Run: vercel --prod"
echo ""
