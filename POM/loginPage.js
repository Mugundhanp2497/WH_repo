import {page,locator,expect} from '@playwright/test';
import { timeout } from '../playwright.config';

class loginPage
{
   
constructor(page)
{
    this.page= page;
    this.txt_email= this.page.locator("//input[@placeholder='Email']");
    this.txt_passWord= this.page.locator("//input[@placeholder='Password']");
    this.btn_login= this.page.locator("//span[text()='Login']");
    this.btn_mainMenu= this.page.locator("//img[@src='/static/media/iThreadLogo.f7a3395f.png']");
    this.mnu_warehouse= this.page.locator("//h6[contains(.,'Warehouse Management')]");
    this.mnu_gateEntry= this.page.locator("//span[contains(.,'GateEntry')]");
    this.mnu_gin= this.page.locator("//span[text()='Gin']").first();
    this.mnu_issue= this.page.locator("//span[text()='Issue']");
    this.mnu_receipt= this.page.locator("//span[text()='Receipt']");
    this.mnu_receivedExplorer= this.page.locator("//span[text()='ReceiveExplorer']/parent::a");
    this.mnu_lab= this.page.locator("//span[text()='Laboratory']");

}

async iThredLogin(email,password)
{
    await this.txt_email.fill(email);
    await this.txt_passWord.fill(password);
    await this.btn_login.click();
    await expect (await this.btn_mainMenu).toBeVisible({timeout:19000});
}
async navigateWarehouse()
{
  await this.btn_mainMenu.click();
  await this.mnu_warehouse.click();
  await expect(await this.mnu_gateEntry).toBeVisible({timeout:29000})
 
}

async mnuGateEntry()
{
   await this.mnu_gateEntry.click();
   
}

async mnuGin()
{
  await this.mnu_receivedExplorer.click();
  await this.mnu_gin.click();
}

async mnuIssue()
{
  await this.mnu_receivedExplorer.click();
  await this.mnu_issue.click();
}
async mnuReceipt()
{
  await this.mnu_receivedExplorer.click();
  await this.mnu_receipt.click();
}
async mnuLab()
{
  await this.mnu_receivedExplorer.click();
  await this.mnu_lab.click();
}

}


module.exports= loginPage; 