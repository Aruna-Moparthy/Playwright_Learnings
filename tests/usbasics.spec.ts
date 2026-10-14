//testfile.spec.ts
//testfile.test.ts


// how to enter an "input" inside the textbox
//validate if the input field have a value "input" 
//click on the element

import {test,expect} from '@playwright/test'

test ("Login into application using valid creditials", async({page}) =>{
   
//goto the url
//fill the username
//fille the password
//click on submit button
//expect if the dashboard page is visible or not


//click - click the element
//check- if validates if the element is checked or not//if it is not selected then only it will click the element
//uncheck - if the element is not already  checked/selected

//goto (url:string) - it helps us in launching the url on the given browser
//url should consists of http/https.
await page.goto("https://practicetestautomation.com/practice-test-login/")

//await page.locator("#username").fill("student")
await page.getByRole('textbox', { name: 'Username' }).fill("student")
//await expect(page.getByRole('textbox', { name: 'Username' }).fill("student"))

await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue("student")
//toHaveValue("value") - checks if the input field is having the value as "value"


await page.getByLabel("password").pressSequentially("Password123", {delay:500})



//in the above test case learned pressSequentially means slowly typed but we have to give delay option.
//to  fill the username in the input value like student we have to give the fill method
//to validate whether student is typed or not we have to give expect and toHaveValue

//when ever we want to use the value character by character we will use pressSequentially.

//click on the submit button

await page.getByText("Submit", { exact: true }).first().click();



//1.there should be an element which should have a text value logged in successfully

//2.there should be an element which contains have a text value "congratulation"

//3.The logout button should be visible on the page

//1.to validate the firstone point toHaveText("Exact")
//2. toContainsText("partiall text")
//toBeVisible()

//await expect(page.locator(".Logged In Successfully")).toHaveText(".Logged In Successfully")

await expect(page.locator(".post-title")).toBeVisible();

await expect(page.getByText("Log out")).toBeVisible()


}
)

//select radio/checkbox
test("handling of checkbox and radio button", async({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/")
await  page.getByLabel("Female").click();
await expect(page.getByLabel("Female")).toBeChecked()


//await page.getByLabel("Sunday").click();
//await expect(page.getByLabel("Sunday")).toBeChecked()
//await page.getByLabel("Sunday").click();
//await page.pause();



//for 78,79 lines instead of writing the whole matter again we can keep that value in one varibale like below

const radiobutton = page.getByLabel("Sunday")
await radiobutton.check();
await expect(radiobutton).toBeChecked()
await radiobutton.uncheck()
await expect(radiobutton).not.toBeChecked()
await radiobutton.check();
await expect(radiobutton).toBeChecked()





//write a logic to check all the checkboxes

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
for (const day of days) {
    const checkbox = page.getByLabel(day, { exact: true });

    await checkbox.check();
    await expect(checkbox).toBeChecked();
} // Closes the for loop
       
})


    
