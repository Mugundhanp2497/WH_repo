const { expect } = require("allure-playwright");
const { timeout } = require("../playwright.config");

class gateEntryPage
{

    constructor(page)
    {
      this.page=page;
      this.entryNo=null;
      this.btn_create= this.page.locator("//button[contains(.,'Create')]");
      this.slt_unit= this.page.locator("//div[@id='unitCode']");
      this.slt_b9b10= this.page.getByRole('option', { name: 'B9B10' });
      this.slt_d15= this.page.getByRole('option', { name: 'D15-2' });
      this.slt_supplierName= this.page.locator('#react-select-7-input');
      this.slt_hangx= this.page.getByRole('option', { name: 'HANGZHOU XINSHENG PRINTING AND DYEING'});
      this.txt_entryPersonName= this.page.locator("//input[@id='entryPersonName']");
      this.txt_entryPersonId= this.page.locator("//input[@id='entryPersonID']");
      this.txt_entryPersonContact= this.page.locator("//input[@id='entryPersonContact']");
      this.txt_invoNO= this.page.locator("//input[@id='invoiceNo']");
      this.dt_invDate= this.page.locator("//input[@id='invoiceDate']");
      this.slt_transportDetail= this.page.locator("//div[@id='mode']");
      this.opt_road= this.page.getByRole('option', { name: 'ROAD' });
      this.txt_dcNo= this.page.locator("//input[@id='dcNo']");
      this.dt_dcDate= this.page.locator("//input[@id='dcDate']");
      this.txt_vehicleNo= this.page.locator("//input[@id='vehicleNo']");
      this.dt_vechicleInTime= this.page.locator("//input[@id='vehicleInTime']");
      this.dt_vechicleOutTime= this.page.locator("//input[@id='vehicleOutTime']");
      this.txt_awbNo= this.page.locator("//input[@id='awbillNo']");
      this.dt_awbDate= this.page.locator("//input[@id='awbillDate']");
      this.slt_MaterialType= this.page.locator("//div[@id='icategory']");
      this.opt_fabric= this.page.getByRole('option', { name: 'FABRIC' });
      this.opt_trims= this.page.getByRole('option', { name: 'TRIMS' });
      this.slt_goodsType= this.page.locator('#goodsType > .css-13cymwt-control > .css-1os8ql7 > .css-19bb58m');
      this.opt_import= this.page.getByRole('option', { name: 'IMPORT' });
      this.opt_local= this.page.getByRole('option',{name:'LOCAL'});
      this.txt_poNo= this.page.getByRole('textbox', { name: 'PO No' });
      this.slt_impRefNo= this.page.locator("//input[@id='react-select-11-input']");
      this.opt_0123= this.page.getByRole('option', { name: 'IND01234/' }); 
      this.txt_MaterialDescription= this.page.locator("//input[@id='materialDescription']");
      this.slt_destination= this.page.locator("//div[@id='destination']");
      this.opt_fabricWarehouse= this.page.getByRole('option', { name: 'FABRIC WAREHOUSE' });
      this.opt_trimsWarehouse= this.page.getByRole('option', { name: 'TRIMS WAREHOUSE' });
      this.txt_attentionUserName= this.page.locator("//input[@id='attentionUserName']");
      this.txt_inspectedQty= this.page.locator("//input[@id='quantity']");
      this.slt_uom= this.page.locator("//div[@id='uom']");
      this.opt_roles= this.page.getByRole('option', { name: 'ROLES' });
      this.txt_inspectorName= this.page.locator("//input[@id='inspectorName']");
      this.slt_securityCheckStatus= this.page.locator("//div[@id='securityCheckStatus']");
      this.opt_qtyInspected=this.page.getByRole('option', { name: '% Qty Inspected' })
      this.txt_inspectionRemark= this.page.locator('#remark');
      this.btn_fileUpload= this.page.getByRole('button', { name: 'File Attach (0)' });
      this.slt_fileType= this.page.locator("//div[@id='fileType']");
      this.opt_InvoiceListFile= this.page.getByRole('option', { name: 'Invoice list file' });
      this.btn_chooseFile= this.page.locator('input[type="file"]');
      this.txt_remark= this.page.locator('div').filter({ hasText: /^Remarks$/ }).getByRole('textbox');
      this.btn_add= this.page.locator("//button[contains(.,'Add')]");
      this.btn_close= this.page.locator("//button[@class='btn-close']");
      this.btn_save= this.page.locator("//button[contains(.,'Save')]");
      this.txt_entryNo= this.page.locator('//h4/child::b');
      this.slt_filterunit= this.page.locator("svg.css-8mmkcg").nth(1);
      this.slt_filterType= this.page.locator("div>svg.css-8mmkcg").nth(2);
      this.btn_view= this.page.locator("//button[text()='View']");


    }

    async createGateEntryFabric()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_supplierName.fill('HANGZHOU XINSHENG');
        await this.slt_hangx.click();
        await this.txt_entryPersonName.fill('Mugundhan');
        await this.txt_entryPersonId.fill('411223');
        await this.txt_entryPersonContact.fill('2345679811');
        await this.txt_invoNO.fill('ed33tg23');
        await this.dt_invDate.fill('16-02-2025');
        await this.slt_transportDetail.click();
        await this.opt_road.click();
        await this.txt_dcNo.fill('abc321');
        await this.dt_dcDate.fill('17-02-2025')
        await this.txt_vehicleNo.fill('dc33vb3223');
        await this.dt_vechicleOutTime.fill('02/17/2025, 12:53 PM');
        await this.page.keyboard.press('Enter');
        await this.txt_awbNo.fill('abc321');
        await this.slt_MaterialType.click();
        await this.opt_fabric.click();
        await this.slt_goodsType.click();
        //await this.opt_import.click();
        await this.opt_local.click();
        await this.txt_poNo.fill('23431353');
        // await this.slt_impRefNo.pressSequentially('0123');
        // await this.opt_0123.click();
        await this.txt_MaterialDescription.fill('good mAaterial');
        await this.slt_destination.click();
        await this.opt_fabricWarehouse.click();
        await this.txt_attentionUserName.fill('Mugu');
        await this.txt_inspectedQty.fill('21');
        await this.slt_uom.click();
        await this.opt_roles.click();
        await this.txt_inspectorName.fill('Mugu');
        await this.slt_securityCheckStatus.click();
        await this.opt_qtyInspected.click();
        await this.txt_inspectionRemark.type('inspection completed',{timeout:29000});
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('test3434');
        await this.btn_add.click();
        await this.btn_close.click();
        await this.btn_save.click();
        await expect(this.txt_entryNo).toContainText('GE');
        this.entryNo = await this.txt_entryNo.textContent({timeout:39000});
        console.log("fabric entry no ",this.entryNo);
        this.icn_edit= await this.page.getByRole('row', { name: `${this.entryNo}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.btn_save.click();
        return this.entryNo;

    }

    async createGateEntryTrims()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_supplierName.fill('HANGZHOU XINSHENG');
        await this.slt_hangx.click();
        await this.txt_entryPersonName.fill('Mugundhan');
        await this.txt_entryPersonId.fill('411223');
        await this.txt_entryPersonContact.fill('2345679811');
        await this.txt_invoNO.fill('ed33tg23');
        await this.dt_invDate.fill('16-02-2025');
        await this.slt_transportDetail.click();
        await this.opt_road.click();
        await this.txt_dcNo.fill('abc321');
        await this.dt_dcDate.fill('17-02-2025')
        await this.txt_vehicleNo.fill('dc33vb3223');
        await this.dt_vechicleOutTime.fill('02/17/2025, 12:53 PM');
        await this.page.keyboard.press('Enter');
        await this.txt_awbNo.fill('abc321');
        await this.slt_MaterialType.click();
        await this.opt_trims.click();
        await this.slt_goodsType.click();
        //await this.opt_import.click();
        await this.opt_local.click();
        await this.txt_poNo.fill('23431353');
        // await this.slt_impRefNo.pressSequentially('0123');
        // await this.opt_0123.click();
        await this.txt_MaterialDescription.fill('good mAaterial');
        await this.slt_destination.click();
        await this.opt_trimsWarehouse.click();
        await this.txt_attentionUserName.fill('Mugu');
        await this.txt_inspectedQty.fill('21');
        await this.slt_uom.click();
        await this.opt_roles.click();
        await this.txt_inspectorName.fill('Mugu');
        await this.slt_securityCheckStatus.click();
        await this.opt_qtyInspected.click();
        await this.txt_inspectionRemark.type('inspection completed',{timeout:29000});
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('test3434');
        await this.btn_add.click();
        await this.btn_close.click();
        await this.btn_save.click();
        await expect(this.txt_entryNo).toContainText('GE');
        this.entryNo = await this.txt_entryNo.textContent({timeout:29000});
        console.log("Trims entry no ",this.entryNo);
        await this.slt_filterunit.click();
        await this.slt_b9b10.click();
        await this.slt_filterType.click();
        await this.opt_trims.click();
        await this.btn_view.click();
        this.icn_edit= await this.page.getByRole('row', { name: `${this.entryNo}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.btn_save.click();
        return this.entryNo;

    }
    async createGateEntryTrimsD15()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_d15.click();
        await this.slt_supplierName.fill('HANGZHOU XINSHENG');
        await this.slt_hangx.click();
        await this.txt_entryPersonName.fill('Mugundhan');
        await this.txt_entryPersonId.fill('411223');
        await this.txt_entryPersonContact.fill('2345679811');
        await this.txt_invoNO.fill('ed33tg23');
        await this.dt_invDate.fill('16-02-2025');
        await this.slt_transportDetail.click();
        await this.opt_road.click();
        await this.txt_dcNo.fill('abc321');
        await this.dt_dcDate.fill('17-02-2025')
        await this.txt_vehicleNo.fill('dc33vb3223');
        await this.dt_vechicleOutTime.fill('02/17/2025, 12:53 PM');
        await this.page.keyboard.press('Enter');
        await this.txt_awbNo.fill('abc321');
        await this.slt_MaterialType.click();
        await this.opt_trims.click();
        await this.slt_goodsType.click();
        //await this.opt_import.click();
        await this.opt_local.click();
        await this.txt_poNo.fill('23431353');
        // await this.slt_impRefNo.pressSequentially('0123');
        // await this.opt_0123.click();
        await this.txt_MaterialDescription.fill('good mAaterial');
        await this.slt_destination.click();
        await this.opt_trimsWarehouse.click();
        await this.txt_attentionUserName.fill('Mugu');
        await this.txt_inspectedQty.fill('21');
        await this.slt_uom.click();
        await this.opt_roles.click();
        await this.txt_inspectorName.fill('Mugu');
        await this.slt_securityCheckStatus.click();
        await this.opt_qtyInspected.click();
        await this.txt_inspectionRemark.type('inspection completed',{timeout:29000});
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('test3434');
        await this.btn_add.click();
        await this.btn_close.click();
        await this.btn_save.click();
        await expect(this.txt_entryNo).toContainText('GE');
        this.entryNo = await this.txt_entryNo.textContent({timeout:29000});
        console.log("Trims entry no ",this.entryNo);
        await this.slt_filterunit.click();
        await this.slt_d15.click();
        await this.slt_filterType.click({force:true,timeout:29000});
        await this.opt_trims.click();
        await this.btn_view.click();
        this.icn_edit= await this.page.getByRole('row', { name: `${this.entryNo}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.btn_save.click();
        return this.entryNo;

    }
}
module.exports= gateEntryPage;