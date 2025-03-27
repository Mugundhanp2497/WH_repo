const { expect } = require("allure-playwright");

class laboratoryPage
{
    constructor(page,ginid)
    {
        this.page=page;
        this.ginid=ginid;
        this.txt_search= this.page.locator("//input[@id='search-bar-0']");
        this.icn_edit= this.page.getByRole('row',{name:this.ginid}).locator('i.ri-pencil-line');
        this.txt_shade= this.page.locator("//input[@id='shade-0']");
        this.txt_warpL1= this.page.locator("//input[@id='warpL1-0']");
        this.txt_warpL2= this.page.locator("//input[@id='warpL2-0']");
        this.txt_warpL3= this.page.locator("//input[@id='warpL3-0']");
        this.txt_weftL1= this.page.locator("//input[@id='weftL1-0']");
        this.txt_weftL2= this.page.locator("//input[@id='weftL2-0']");
        this.txt_weftL3= this.page.locator("//input[@id='weftL3-0']");
        this.txt_width= this.page.locator("//input[@id='widthCM-0']");
        this.txt_skew= this.page.locator("//input[@id='skewCM-0']");
        this.txt_gsm= this.page.locator("//input[@id='gsm-0']");
        this.txt_repeatWarp= this.page.locator("//input[@id='repeatWarp-0']");
        this.txt_repeatWeft= this.page.locator("//input[@id='repeatWeft-0']");
        this.txt_tensile= this.page.locator("//input[@id='tensile-0']");
        this.txt_homeLaundry= this.page.locator("//input[@id='homeLaundry-0']");
        this.btn_save= this.page.getByRole('button',{name:'Save'});

    }
    async saveLab()
     {
        console.log(this.ginid);
        await this.txt_search.click();
        await this.icn_edit.click();
        await expect (this.txt_shade).toBeVisible({timeout:39000});
        await this.txt_shade.fill('A');
        await this.txt_warpL1.fill('-1');
        await this.txt_warpL2.fill('-2');
        await this.txt_warpL3.fill('-3');
        await this.txt_weftL1.fill('-4');
        await this.txt_weftL2.fill('-5');
        await this.txt_weftL3.fill('-6');
        await this.txt_width.fill('2');
        await this.txt_skew.fill('4');
        await this.txt_gsm.fill('6');
        await this.txt_repeatWarp.fill('1');
        await this.txt_repeatWeft.fill('1');
        await this.txt_tensile.fill('7');
        await this.txt_homeLaundry.fill('9');
        await this.btn_save.click();
     }
        
}

module.exports=laboratoryPage;