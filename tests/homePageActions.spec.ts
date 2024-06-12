import {test} from '@playwright/test';

test.beforeEach('go to homepage', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
})
test.describe('test suite 1', () => {
    test('navigate to search field', async({page}) => {
         await page.getByPlaceholder("Я шукаю...").click();
    });
    test('add an item to the cart', async({page})=> {
        const searchField = page.getByPlaceholder("Я шукаю...");
        const searchButton = page.getByText("Знайти");
        const buyButtonFirstElement = page.getByLabel('Купити').first();
    
        await searchField.fill("пральна машина");
        await searchButton.click();
        //await page.locator('ul[class="catalog-grid ng-star-inserted"]').locator('li').first().locator('.buy-button goods-tile__buy-button ng-star-inserted').click();
        await buyButtonFirstElement.click();
        await page.locator('.header-cart__button').click();
    });

    })