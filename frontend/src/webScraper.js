const puppeteer = require('puppeteer');

const performScraping = async (username) => {
    try{
        // Launch a new browser session.
        const browser = await puppeteer.launch();
        // Open a new page.
        const page = await browser.newPage();
        // Navigate to the URL.
        await page.goto('https://www.instagram.com/' + username + '/');

        // Wait for the selector that contains the posts count to appear
        await page.waitForSelector('.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs');

        // Extract the number of posts, followers, and following using their index positions
        const data = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('.html-span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs'));
            return {
                postCount : elements[0].innerHTML,
                followers : elements[1].innerHTML,
                following : elements[2].innerHTML,
            }
        });
        // // Log the results.
        // console.log(`Posts: ${postCount}, Followers: ${followers}, Following: ${following}`);

        // Close the browser.
        await browser.close();

        return {
            username,
            ...data
        };
    } catch (error) {
        console.error("Scraping failed ", error);
        throw error;
    }
    
};

module.exports = performScraping;
