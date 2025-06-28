const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    'hero.jpg': 'https://images.unsplash.com/photo-1508780709619-79562169bc64',
    'about.jpg': 'https://images.unsplash.com/photo-1544507888-56d73eb6046e',
    'campus.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'library.jpg': 'https://images.unsplash.com/photo-1588072432836-e10032774350',
    'stem.jpg': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
    'sports.jpg': 'https://images.unsplash.com/photo-1541534401786-2077eed87a74',
    'arts.jpg': 'https://images.unsplash.com/photo-1535401991746-da3d9055713e',
    'testimonial1.jpg': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    'testimonial2.jpg': 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f'
};

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(__dirname, '../public/images', filename);
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {
                console.error(`Error downloading ${filename}:`, err.message);
                reject(err);
            });
        });
    });
};

async function downloadAllImages() {
    try {
        for (const [filename, url] of Object.entries(images)) {
            await downloadImage(url, filename);
        }
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages(); 