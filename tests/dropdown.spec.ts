//dropdrown element using select <tag> element


//1, Launch the URL
//2.Locate the dropdown element by writing the locator . dropdrown element using select <tag> element by using SelectOption()
//3.to check the value use assertion and toHaveValue("DJ")


//1, Launch the URL
//2.Locate the dropdown element by writing the locator
//get the value from the dropdown using - SelectOption("value" or (label) or index)

// below code is for to dropdown  
import {test,expect} from '@playwright/test'
test("Handling drop down developed using select tag", async ({page}) => {


    
await page.goto("https://practice.expandtesting.com/dropdown")
{ waitUntil: "domcontentloaded" }


//Default
const dd = page.locator("#country")
await  page.locator("#country").selectOption("DJ")
await expect(page.locator("#country")).toHaveValue("DJ")
//Value
await dd.selectOption({value : 'AF'})
await expect(dd).toHaveValue("AF")
await page.waitForTimeout(3000)
//Label
await dd.selectOption({label :'Aland Islands'})
await expect(dd).toHaveValue("AX")
await page.waitForTimeout(3000)

//Index
await dd.selectOption({index :6})
await page.waitForTimeout(3000)



//2nd testcase for multiple selection drop down


await page.goto ("https://demoqa.com/select-menu")

await page.locator("#cars").selectOption(["volvo", "opel"])
//await expect(page.locator("#cars")).toHaveValues(["volvo", "opel"]) 

//or you can write all in one line means lable, index and value

await page.locator("#cars").selectOption([{index: 1},
     {value: "volvo"} ,
      {label: "Saab"}])
})