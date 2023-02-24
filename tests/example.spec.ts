import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://developer.sailpoint.com/developerdays/');
  await page.locator('button:text("Agenda")').click();
  const text = await page.locator('p:text("Welcome to Developer Days 2023")').textContent();
  
  // Expect a title "to contain" a substring.
  await expect(text).toEqual("Welcome to Developer Days 2023")
});

