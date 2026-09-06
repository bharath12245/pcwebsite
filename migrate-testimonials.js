const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'pc images', 'customer images');
const targetDir = path.join(__dirname, 'public', 'images', 'testimonials');
const outputFile = path.join(__dirname, 'content', 'testimonials.json');

// Ensure target directory exists
if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

// Ensure content directory exists
if (!fs.existsSync(path.dirname(outputFile))){
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

const files = fs.readdirSync(sourceDir);
let counter = 1;
const testimonials = [];

files.forEach(file => {
    // Only process valid extensions
    const ext = path.extname(file).toLowerCase();
    if (['.jpeg', '.jpg', '.png', '.mp4', '.webp'].includes(ext)) {
        const newFileName = `${counter}${ext}`;
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, newFileName);
        
        // Copy file
        fs.copyFileSync(sourcePath, targetPath);
        
        testimonials.push({
            id: counter,
            filename: newFileName,
            type: ext === '.mp4' ? 'video' : 'image',
            url: `/images/testimonials/${newFileName}`
        });

        counter++;
    }
});

// Save the list mapping
fs.writeFileSync(outputFile, JSON.stringify(testimonials, null, 2));

console.log(`Successfully migrated ${testimonials.length} files to ${targetDir}`);
