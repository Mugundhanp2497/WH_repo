const { chromium } = require("@playwright/test");
const config= require('../config.json');
const LoginPage = require('../POM/loginPage');


module.exports=async()=>
{
    const browser= await chromium.launch({headless:false,args: ['--start-maximized']});
    const context= await browser.newContext();
    const page= await context.newPage();
    let loginPage= new LoginPage(page)
    const environment= 'staging';//available-> staging/QA
    const envConfig = config[environment];
    const url= String(envConfig.baseUrl);
    const email= String(envConfig.username);
    const password= String(envConfig.password);
    await page.goto(url);
    await loginPage.iThredLogin(email,password);
    await loginPage.navigateWarehouse(); 
    await page.waitForLoadState('networkidle',{timeout:39000});
    await page.context().storageState({path:"user.json"});
    await browser.close();

};