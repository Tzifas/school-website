const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const REPO_NAME = 'school-website';
const GITHUB_USERNAME = 'Tzifas'; // Updated with user's GitHub username

console.log('🚀 Setting up GitHub repository...\n');

try {
    // Check if git is initialized
    if (!fs.existsSync('.git')) {
        console.log('📁 Initializing git repository...');
        execSync('git init', { stdio: 'inherit' });
    }

    // Check if remote already exists
    try {
        execSync('git remote get-url origin', { stdio: 'pipe' });
        console.log('⚠️  Remote origin already exists. Skipping remote setup.');
    } catch (error) {
        console.log('🔗 Adding remote origin...');
        const remoteUrl = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git`;
        execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });
    }

    // Add all files
    console.log('📦 Adding files to git...');
    execSync('git add .', { stdio: 'inherit' });

    // Commit changes
    console.log('💾 Committing changes...');
    execSync('git commit -m "Initial commit: Sankofa Academy website"', { stdio: 'inherit' });

    // Set main branch
    console.log('🌿 Setting main branch...');
    execSync('git branch -M main', { stdio: 'inherit' });

    // Push to GitHub
    console.log('🚀 Pushing to GitHub...');
    execSync('git push -u origin main', { stdio: 'inherit' });

    console.log('\n✅ Successfully pushed to GitHub!');
    console.log(`📋 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`);

} catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\n📝 Manual steps:');
    console.log('1. Create a new repository on GitHub');
    console.log('2. Update the GITHUB_USERNAME in this script');
    console.log('3. Run this script again');
} 