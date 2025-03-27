const { name } = require("../playwright.config");

class receiptPage
{
    constructor(page)
    {
        this.page=page;
        this.btn_create= this.page.getByRole('button',{name:'Create'});
        this.slt_unit= this.page.getByText('B9B10', { exact: true });
        this.opt_b9b10= this.page.getByRole('option', { name: 'B9B10' });
        this.opt_d15= this.page.getByRole('option', { name: 'D15-2' });
        this.slt_type= this.page.locator("//div[@id='iCategory']/div/div/div[2]/input");
        this.opt_fabric= this.page.getByRole('option', { name: 'FABRIC' });
        this.opt_trims= this.page.getByRole('option', { name: 'TRIMS' });
        this.slt_receiptType= this.page.locator("//div[@id='recType']/div/div/div[2]/input");
        this.opt_sampleReceipt= this.page.getByRole('option',{name:'SAMPLERECEIPT'});
        this.slt_receiptBin= this.page.locator("//div[@id='bin']/div/div/div[2]/input");
        this.opt_AR= this.page.getByRole('option',{name:'AR-NON BOND RUNNING'});
        this.slt_supplierName= this.page.locator("//div[@id='Supplier']/div/div/div[2]/input");
        this.txt_remark= this.page.locator("//input[@id='remarks']");
        this.btn_view= this.page.getByRole('button',{name:'View'});
        this.btn_addRow= this.page.getByRole('button',{name:'+Add Row'});
        this.slt_dropLoad= this.page.locator("//div[@id='dropLoad']"); 
        this.opt_orderView= this.page.getByRole('option',{name:'OrderView'});
        this.slt_orderNO= this.page.locator("//div[@id='orderNo']/div/div/div[2]/input");
        this.opt_order= this.page.getByRole('option',{name:'40506'});
        this.btn_selectAll= this.page.getByRole('button',{name:'Select all'});
        this.slt_matGroup= this.page.locator("//input[@name='matGroup']");
        this.slt_matCode= this.page.locator("//input[@name='matCode']");
        this.slt_matColor=  this.page.locator("//input[@name='matColor']"); 
        this.slt_matSize=  this.page.locator("//input[@name='matSize']");
        this.slt_barcodeNo=  this.page.locator("//input[@name='barCodeNo']");
        this.txt_cvUnchecked= this.page.locator("//input[@id='cvUncheck-0']");
        this.btn_checkBox=  this.page.locator("//input[@id='checked-0']");
        this.btn_close= this.page.locator("//button[@class='btn-close']");
        this.btn_save= this.page.getByRole('button',{name:'Save'});

    }

    async createReceipt()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.opt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_receiptType.click();
        await this.opt_sampleReceipt.click();
        await this.slt_receiptBin.click();
        await this.opt_AR.click();
        await this.txt_remark.fill('test remark');
        await this.btn_view.click();
        await this.btn_addRow.click();
        await this.slt_dropLoad.click();
        await this.opt_orderView.click();
        await this.slt_orderNO.fill('40506');
        await this.opt_order.click();
        await this.slt_matGroup.click();
        await this.btn_selectAll.click();
        await this.slt_matCode.click();
        await this.btn_selectAll.click();
        await this.slt_matColor.click();
        await this.btn_selectAll.click();
        await this.slt_matSize.click();
        await this.btn_selectAll.click();
        await this.slt_barcodeNo.click();
        await this.btn_selectAll.click();
        await this.btn_view.nth(1).click();
        await this.txt_cvUnchecked.fill('3');
        await this.btn_checkBox.click();
        await this.btn_close.click();
        await this.btn_save.click();

    }
}
module.exports=receiptPage;