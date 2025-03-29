const fs = require('fs');
const https = require('https');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/team',
  'public/about',
  'public/portfolio',
  'public/blog',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to download image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
                .on('error', reject)
                .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

// List of images to download (using Lorem Picsum)
const images = [
  // Team members
  {
    url: 'https://picsum.photos/500/500',
    path: 'public/team/john-smith.jpg'
  },
  {
    url: 'https://picsum.photos/500/500',
    path: 'public/team/sarah-johnson.jpg'
  },
  {
    url: 'https://picsum.photos/500/500',
    path: 'public/team/michael-chen.jpg'
  },
  {
    url: 'https://picsum.photos/500/500',
    path: 'public/team/emily-brown.jpg'
  },
  // About
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/about/office.jpg'
  },
  // Portfolio
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/ecommerce.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/healthcare.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/banking.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/smart-city.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/supply-chain.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/portfolio/analytics.jpg'
  },
  // Blog
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/web-dev-trends.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/cloud-solutions.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/ai-software.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/mobile-dev.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/cybersecurity.jpg'
  },
  {
    url: 'https://picsum.photos/800/600',
    path: 'public/blog/digital-transform.jpg'
  },

];

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.path);
      console.log(`Downloaded: ${image.path}`);
      // Add a small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error downloading ${image.path}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

// Run the download
downloadAllImages(); 