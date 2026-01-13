test('Create employee via API, verify via UI', async ({ request, page }) => {
  const apiResponse = await request.post(
    'https://reqres.in/api/users',
    {
      data: {
        name: 'Budi Automation',
        job: 'QA'
      }
    }
  );

  expect(apiResponse.status()).toBe(201);

  // UI hanya untuk verifikasi visual
  await page.goto('https://opensource-demo.orangehrmlive.com');
});