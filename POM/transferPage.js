import {test, expect} from '@playwright/test';
import { fullyParallel } from '../playwright.config';
class transferPage
{
    constructor(page)
    {
        this.page= page;
        this.btn_create= this.page.getByRole('button',{name:'Create'});
        this.btn_transfer= this.page.locator("//button[@id='TransferBtn']");
        this.icn_issueListView= this.page.locator('.i-font-icon');
        this.slt_unit= this.page.locator("//div[@id='UnitCode']");
        this.slt_b9b10= this.page.getByRole('option', { name: 'B9B10' });
        this.slt_d15= this.page.getByRole('option',{name:'D15-2'})
        this.opt_l008= this.page.getByRole('option',{name:'L008'});
        this.slt_type= this.page.locator("//div[@id='type']");
        this.opt_fabric= this.page.getByRole('option', { name: 'FABRIC' });
        this.opt_trims= this.page.getByRole('option', { name: 'TRIMS' });
        this.slt_issueType= this.page.locator("//div[@id='IssueType']");
        this.opt_binTransfer= this.page.getByRole('option',{name:'20 | BIN TRANSFER '});
        this.opt_styleTransfer= this.page.getByRole('option',{name:'21 | STYLE TRANSFER '});
        this.opt_rackTransfer= this.page.getByRole('option',{name:'22 | RACK TRANSFER '});

        this.slt_fromBin= this.page.locator("//div[@id='IssueFromBIN']");
        this.opt_b9bin= this.page.getByRole('option',{name:'AR | NON BOND RUNNING'});
        this.slt_toBin= this.page.locator("//div[@id='ToBIN']/child::div/div/div[2]/input");
        this.opt_b9b10bin= this.page.getByRole('option',{name:'B9 | B9B10 Factory Stock '});
        this.slt_fromStyle= this.page.locator("//div[@id='fromOrderNo']/child::div/div/div[2]/input");
        this.slt_toStyle= this.page.locator("//div[@id='toOrderNo']/child::div/div/div[2]/input");
        this.opt_style= this.page.getByRole('option',{name:'40506'});
        this.opt1_style= this.page.getByRole('option',{name:'40541'});
        this.slt_issueTo= this.page.locator("//div[@id='IssueTo']/div/div/div[2]/input");
        this.txt_issueTo= this.page.locator("//input[@id='IssueTo']");
        this.slt_lineNo= this.page.locator("//div[@id='LineNo']");
        this.opt_sb3= this.page.getByRole('option',{name:'SB3'});
        this.opt_M= this.page.getByRole('option',{name:'M'});
        this.slt_transportType= this.page.locator("//div[@id='TransportType']/child::div/div/div[2]/input");
        this.opt_AIR= this.page.getByRole('option',{name:'AIR'});
        this.txt_transportDocNo= this.page.locator("//input[@id='TransportDocNo']");
        this.txt_remarks= this.page.locator("//input[@id='IssueRemark']");
        this.txt_issueAddress= this.page.locator("//input[@id='IssueAddress']");
        this.slt_poNO= this.page.locator("//div[@id='PoNo']/child::div/div/div[2]/input");
        this.opt_poNO= this.page.getByRole('option',{name:'FF242899'});
        this.opt_poNO1= this.page.getByRole('option',{name:'FF242898'});
        this.btn_view= this.page.getByRole('button',{name:'View',exact:true});
        this.slt_fromRack= this.page.locator("//div[@id='rackNoSelect']").nth(0);
        this.opt_A01= this.page.getByRole('option',{name:'A01'});
        this.slt_toRack= this.page.locator("//div[@id='rackNoSelect']").nth(1);
        this.opt_A02= this.page.getByRole('option',{name:'A02'});
        this.slt_wiType= this.page.locator("//div[@id='PopUpType']");
        this.opt_orderView= this.page.getByRole('option',{name:'Order view'});
        this.slt_wiOrderNO= this.page.locator("//div[@id='orderNo']/child::div/div/div[2]/input");
        this.btn_selectAll= this.page.getByRole('button',{name:'Select all'});
        this.slt_wiMattype= this.page.locator("//input[@name='Matgroup']");
        this.slt_wiMatcode= this.page.locator("//input[@name='MatCode']");
        this.slt_wiMatcolor= this.page.locator("//input[@name='MatColor']");
        this.slt_wiMatSize= this.page.locator("//input[@name='MatSize']");
        this.slt_wiCodeNo= this.page.locator("//input[@name='CodeNo']");
        this.btn_save= this.page.locator("//button[@id='SaveBtn']");
        this.box_check= this.page.locator("//input[@type='checkbox']");
        this.txt_ncvUnchecked1= this.page.locator("//tbody/tr/td/input[@type='text' and not(@disabled)]");
        this.btn_close= this.page.locator("//button[@class='btn-close']");
    }

    async createBinTransfer()
    {
        await this.btn_create.click();
        await this.btn_transfer.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_binTransfer.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toBin.click();
        await this.opt_b9b10bin.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
       // await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
        await this.opt_orderView.click();
        await this.slt_wiOrderNO.fill('40506');
        await this.opt_style.click();
        await this.slt_wiMattype.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcode.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcolor.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatSize.click();
        await this.btn_selectAll.click();
        await this.slt_wiCodeNo.click();
        await this.btn_selectAll.click();
        await this.btn_view.nth(1).click();
        //await this.box_check.nth(1).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        await this.btn_close.click({force:true});
        await this.btn_save.dblclick({force:true});
    }

    async createStyleTransfer()
    {
        await this.btn_create.click();
        await this.btn_transfer.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_styleTransfer.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_fromStyle.fill('40506');
        await this.opt_style.click();
        await this.slt_toStyle.fill('40541');
        await this.opt1_style.nth(0).click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
        await this.opt_orderView.click();
        await this.slt_wiMattype.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcode.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcolor.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatSize.click();
        await this.btn_selectAll.click();
        await this.slt_wiCodeNo.click();
        await this.btn_selectAll.click();
        await this.btn_view.nth(1).click();
        //await this.box_check.nth(1).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        await this.btn_close.click({force:true});
        await this.btn_save.click({force:true});
    }

    async createRackTransfer()
    {
        await this.btn_create.click();
        await this.btn_transfer.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_rackTransfer.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_fromRack.click();
        await this.opt_A01.click();
        await this.slt_toRack.click();
        await this.opt_A02.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
        await this.opt_orderView.click();
        await this.slt_wiOrderNO.fill('40506');
        await this.opt_style.click();
        await this.slt_wiMattype.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcode.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatcolor.click();
        await this.btn_selectAll.click();
        await this.slt_wiMatSize.click();
        await this.btn_selectAll.click();
        await this.slt_wiCodeNo.click();
        await this.btn_selectAll.click();
        await this.btn_view.nth(1).click();
        //await this.box_check.nth(1).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        await this.btn_close.click({force:true});
        await this.btn_save.click({force:true});

    }

}
module.exports=transferPage;