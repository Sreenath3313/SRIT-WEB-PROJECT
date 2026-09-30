const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 390, height: 844});
    await page.goto('http://localhost:5173/about/overview', {waitUntil: 'networkidle0'});
    const data = await page.evaluate(() => {
        const img = document.querySelector('img[alt="SRIT Cover"]');
        if (!img) return null;
        return {
            height: img.clientHeight,
            offsetHeight: img.offsetHeight,
            styleHeight: img.style.height,
            classList: img.className,
            parentHeight: img.parentElement.clientHeight,
            bounding: img.getBoundingClientRect()
        };
    });
    console.log("COVER:", JSON.stringify(data));
    
    await page.goto('http://localhost:5173/', {waitUntil: 'networkidle0'});
    const heroData = await page.evaluate(() => {
        const img = document.querySelector('img[alt="SRIT Main Building"]');
        if (!img) return null;
        return {
            height: img.clientHeight,
            offsetHeight: img.offsetHeight,
            styleHeight: img.style.height,
            classList: img.className,
            parentHeight: img.parentElement.clientHeight,
            bounding: img.getBoundingClientRect()
        };
    });
    console.log("HERO:", JSON.stringify(heroData));

    await browser.close();
})();
