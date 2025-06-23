# Build Troubleshooting Guide

## Common Build Issues & Solutions

### 🚨 **Critical: Tailwind CSS v4 + LightningCSS Issues**

#### Error: `Cannot find module '../lightningcss.win32-x64-msvc.node'`

**Root Cause**: Tailwind CSS v4 uses LightningCSS (Rust-based CSS processor) which requires native binaries. The Windows binary is missing or corrupted.

**Solutions (in order of preference):**

```bash
# Solution 1: Clear cache and reinstall (Most common fix)
npm cache clean --force
npm install

# Solution 2: Complete clean install
Remove-Item -Recurse -Force node_modules, package-lock.json, .next -ErrorAction SilentlyContinue
npm install

# Solution 3: Platform-specific install (Windows)
npm install --platform=win32 --arch=x64

# Solution 4: Force rebuild native modules
npm rebuild
```

### 🔧 **General Build Issues**

#### Build Fails with Webpack Errors

```bash
# Clear all caches
npm cache clean --force
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Fresh install
npm install

# Rebuild
npm run build
```

#### TypeScript Errors

```bash
# Check TypeScript
npx tsc --noEmit

# Fix auto-fixable issues
npx tsc --noEmit --fix
```

#### ESLint Errors

```bash
# Check linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### 🐛 **Development Server Issues**

#### Port Already in Use

```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

#### Hot Reload Not Working

```bash
# Clear Next.js cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

### 📦 **Dependency Issues**

#### Package Version Conflicts

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

#### Node Version Issues

```bash
# Check Node version
node --version

# Required: Node.js 18.17 or later
# If using wrong version, install correct Node.js version
```

### 🔍 **Performance Issues**

#### Slow Build Times

```bash
# Enable build analysis
npm run build -- --debug

# Check bundle size
npm run build -- --analyze
```

#### Large Bundle Size

```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer
npm run build -- --analyze
```

### 🚀 **Production Deployment Issues**

#### Vercel Deployment Fails

```bash
# Test build locally first
npm run build

# Check environment variables
npm run build -- --debug

# Verify static export (if needed)
npm run export
```

#### Static Export Issues

```bash
# Ensure all pages are static
# Check for server-side code in static pages
npm run build
npm run export
```

### 📋 **Prevention Checklist**

#### Before Committing Code
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] All tests pass (when implemented)

#### Before Deployment
- [ ] Production build succeeds
- [ ] Environment variables are set
- [ ] All API routes work
- [ ] Images and assets load correctly

### 🛠️ **Useful Commands**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run clean        # Clean build artifacts

# Debugging
npm run build -- --debug    # Debug build
npm run build -- --analyze  # Analyze bundle
npx tsc --noEmit           # Type check
npm audit                  # Security audit
```

### 📞 **Getting Help**

If you encounter issues not covered here:

1. **Check the error logs** - Look for specific error messages
2. **Search GitHub Issues** - Check Next.js, Tailwind CSS, and other package repositories
3. **Clear caches** - Try the cache clearing solutions above
4. **Update dependencies** - Ensure all packages are up to date
5. **Check Node.js version** - Ensure compatibility

### 🔄 **Environment-Specific Issues**

#### Windows
- Use PowerShell or Command Prompt (not Git Bash)
- Ensure proper file permissions
- Check for antivirus interference

#### macOS/Linux
- Ensure proper file permissions
- Check for Node.js version manager conflicts

#### CI/CD
- Ensure all environment variables are set
- Check for platform-specific dependencies
- Verify Node.js version in CI environment

---

*Last Updated: December 2024*
*Next Review: After major dependency updates* 