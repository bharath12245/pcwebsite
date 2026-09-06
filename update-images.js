const fs = require('fs');
const path = require('path');

const holidaysDir = path.join(__dirname, 'public/images/tours/holidays');
const pilgrimageDir = path.join(__dirname, 'public/images/tours/pilgrimage');

const holidaysJsonPath = path.join(__dirname, 'content/tours/holidays.json');
const pilgrimageJsonPath = path.join(__dirname, 'content/tours/pilgrimage.json');

const updateJson = (jsonPath, imgDir, basePath) => {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    } catch(e) {
        console.error("Error reading JSON", e);
        return;
    }
    const files = fs.readdirSync(imgDir);

    data.forEach(tour => {
        // match up the file based on the slug (ignoring the .jpg/.png differences)
        const matchingFile = files.find(f => f.startsWith(tour.slug + '.'));
        if (matchingFile) {
            tour.hero_image = basePath + matchingFile;
        } else {
            console.warn(`Warning: Image missing for ${tour.slug}`);
        }
    });

    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
};

updateJson(holidaysJsonPath, holidaysDir, '/images/tours/holidays/');
updateJson(pilgrimageJsonPath, pilgrimageDir, '/images/tours/pilgrimage/');
console.log('Update complete!');
