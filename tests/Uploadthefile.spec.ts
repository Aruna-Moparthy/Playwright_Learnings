import {test, expect} from '@playwright/test'
test("Single File Upload", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")


    //SetInputFiles()// which accepts path of the file or path of the files 

  await page.locator("#filesToUpload").setInputFiles("tests/testdata/IMG_2038.JPG")

  //await expect(page.locator("#fileList")).toContainText("IMG_2038")


})


    //SetInputFiles()// which accepts path of the file or path of the files 
    test("Multiple files upload", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload").setInputFiles([
        "tests/testdata/IMG_2038.JPG",
        "tests/testdata/IMG_2039.JPG",
        "tests/testdata/IMG_2032.JPG"
    ]);

    await page.pause()
});

 