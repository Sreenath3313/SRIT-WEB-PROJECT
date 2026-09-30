const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 390, height: 844});
    await page.goto('http://localhost:5173/about/overview', {waitUntil: 'networkidle0'});
    
    // Check if dropdown exists before click
    let dd = await page.$('.lg\\:hidden.overflow-hidden.bg-white.shadow-xl');
    console.log('Before click:', !!dd);
    
    // Click hamburger
    await page.click('button[aria-label="Toggle menu"]');
    await new Promise(r => setTimeout(r, 500)); // wait for animation
    
    // Check dropdown again
    dd = await page.$('.lg\\:hidden.overflow-hidden.bg-white.shadow-xl');
    if (dd) {
        const bounding = await dd.boundingBox();
        console.log('After click bounding:', bounding);
        const zIndex = await page.evaluate(el => window.getComputedStyle(el).zIndex, dd);
        console.log('After click zIndex:', zIndex);
        const display = await page.evaluate(el => window.getComputedStyle(el).display, dd);
        console.log('After click display:', display);
    } else {
        console.log('Dropdown not found after click');
    }
    
    await browser.close();
})();
