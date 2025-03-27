const { expect } = require("allure-playwright");
const { name } = require("../playwright.config");

class issuePage
{
    constructor(page)
    {
        this.page= page;
        this.btn_create= this.page.getByRole('button',{name:'Create'});
        this.icn_issueListView= this.page.locator('.i-font-icon');
        this.slt_unit= this.page.locator("//div[@id='UnitCode']");
        this.slt_b9b10= this.page.getByRole('option', { name: 'B9B10' });
        this.slt_d15= this.page.getByRole('option',{name:'D15-2'})
        this.opt_l008= this.page.getByRole('option',{name:'L008'});
        this.slt_type= this.page.locator("//div[@id='type']");
        this.opt_fabric= this.page.getByRole('option', { name: 'FABRIC' });
        this.opt_trims= this.page.getByRole('option', { name: 'TRIMS' });
        this.slt_issueType= this.page.locator("//div[@id='IssueType']");
        this.opt_factoryIssue= this.page.getByRole('option',{name:'35 | FACTORY ISSUE'});
        this.opt_sampleIssue= this.page.getByRole('option',{name:'SAMPLE ISSUE'});
        this.opt_pilotIssue= this.page.getByRole('option',{name:'11 | PILOT ISSUE', exact: true});
        this.opt_lotIssue= this.page.getByRole('option',{name:'12 | LOT (BULK) ISSUE', exact: true});
        this.opt_processIssue= this.page.getByRole('option',{name:'PROCESS ISSUE'});

        this.opt_otherIssue= this.page.getByRole('option',{name:'OTHER ISSUE'});
        this.opt_purchaseIssue= this.page.getByRole('option',{name:'PURCHASE RETURN'});
        this.opt_saleIssue= this.page.getByRole('option',{name:'SALE ISSUE'});
        this.opt_disposeIssue= this.page.getByRole('option',{name:'DISPOSE'});
        this.opt_factoryIssue= this.page.getByRole('option',{name:'FACTORY ISSUE'});
        this.opt_binIssue= this.page.getByRole('option',{name:'BIN ISSUE'});
        this.opt_unitIssue= this.page.getByRole('option',{name:'UNIT ISSUE'});

        this.slt_indentNo=
        this.slt_fromBin= this.page.locator("//div[@id='IssueFromBIN']");
        this.opt_b9bin= this.page.getByRole('option',{name:'AR | NON BOND RUNNING'});
        this.slt_toBin= this.page.locator("//div[@id='ToBIN']/child::div/div/div[2]/input");
        this.opt_tobin= this.page.getByRole('option',{name:'AS ~ NON MOVING'});
        this.slt_fromStyle= this.page.locator("//div[@id='fromOrderNo']/child::div/div/div[2]/input");
        this.slt_toStyle= this.page.locator("//div[@id='toOrderNo']/child::div/div/div[2]/input");
        this.opt_style= this.page.getByRole('option',{name:'40506'});
        this.slt_issueTo= this.page.locator("//div[@id='IssueTo']/div/div/div[2]/input");
        this.txt_issueTo= this.page.locator("//input[@id='IssueTo']");
        this.opt_essar= this.page.getByRole('option',{name:'essar impex,'});
        this.opt_TA= this.page.getByRole('option',{name:'TA'});
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
        this.slt_wiType= this.page.locator("//div[@id='PopUpType']");
        this.slt_wiOrderNO= this.page.locator("//div[@id='orderNo']/child::div/div/div[2]/input");
        this.btn_selectAll= this.page.getByRole('button',{name:'Select all'});
        this.slt_wiMattype= this.page.locator("//input[@name='Matgroup']");
        this.slt_wiMatcode= this.page.locator("//input[@name='MatCode']");
        this.slt_wiMatcolor= this.page.locator("//input[@name='MatColor']");
        this.slt_wiMatSize= this.page.locator("//input[@name='MatSize']");
        this.slt_wiCodeNo= this.page.locator("//input[@name='CodeNo']");
        this.cbx_wichkBx= this.page.locator("");
        this.icn_wiClose= this.page.locator("");
        this.btn_delete= this.page.locator("");
        this.btn_add= this.page.locator("");
        this.btn_save= this.page.getByRole('button',{name:'Save'});
        this.box_check= this.page.locator("//input[@type='checkbox']");
        this.txt_ncvUnchecked1= this.page.locator("//tbody/tr/td/input[@type='text' and not(@disabled)]");
       // this.txt_ncvUnchecked2= this.page.locator("//input[@id='input-1-ncvUncheck']");

        this.btn_close= this.page.locator("//button[@class='btn-close']");
        this.btn_remove= this.page.getByRole('button',{name:'Remove'}).nth(2);

        this.mnu_userboard= this.page.locator("//span[text()='Userboard']/parent::a");
        this.btn_toDo= this.page.locator("//div[@id='total_jobs']").nth(1);
        this.lnk_fabricIndent= this.page.locator("//h6[text()='FABRICINDENT']");
        this.btn_indentIssue= this.page.getByRole('button',{name:'Indent Issue'});
        this.lnk_totalIssue= this.page.locator();
        this.opt_b9b10bin= this.page.getByRole('option',{name:'B9 | B9B10 Factory Stock '});
        this.slt_toUnit= this.page.locator("//div[@id='ToUnit']/div/div/div[2]/input");
        this.opt_b12= this.page.getByRole('option',{name:'B12'})


    }

    async createFactoryIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_factoryIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toStyle.fill('40506');
        await this.opt_style.click();
        await this.slt_issueTo.click();
        await this.opt_TA.click();
        // await this.slt_lineNo.click();
        // await this.opt_M.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.page.pause();
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async createSampleIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_sampleIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toStyle.fill('40506');
        await this.opt_style.click();
        await this.slt_issueTo.click();
        await this.slt_d15.click();
        await this.slt_lineNo.click();
        await this.opt_l008.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }
    async createPilotIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_pilotIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toStyle.fill('40506');
        await this.opt_style.click();
        await this.slt_issueTo.click();
        await this.slt_d15.click();
        await this.slt_lineNo.click();
        await this.opt_l008.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async createLotIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_lotIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toStyle.fill('40506');
        await this.opt_style.click();
        await this.slt_issueTo.click();
        await this.slt_d15.click();
        await this.slt_lineNo.click();
        await this.opt_l008.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
       // await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }
    async createProcessIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_processIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        // await this.slt_issueTo.fill('essar impex,');
        // await this.opt_essar.click();
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.slt_poNO.fill('FF242899');
        await this.opt_poNO.click();
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        await this.box_check.nth(1).click();
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }
    async createOtherIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_otherIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toStyle.fill('40506');
        await this.opt_style.click();
        await this.txt_issueTo.fill('Test User');
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async createPurchaseReturnIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_purchaseIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.slt_poNO.fill('FF242899');
        await this.opt_poNO.click();
        await this.btn_view.click();
        // await this.slt_wiType.click();
        // await this.slt_wiOrderNO.fill('40506');
        // await this.opt_style.click();
        // await this.slt_wiMattype.click();
        // await this.btn_selectAll.click();
        // await this.slt_wiMatcode.click();
        // await this.btn_selectAll.click();
        // await this.slt_wiMatcolor.click();
        // await this.btn_selectAll.click();
        // await this.slt_wiMatSize.click();
        // await this.btn_selectAll.click();
        // await this.slt_wiCodeNo.click();
        // await this.btn_selectAll.click();
        // await this.btn_view.nth(1).click();
        // await this.box_check.nth(1).click();
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        while (await this.btn_remove.isVisible()) {
            try {
                await this.btn_remove.click();
                await this.page.waitForTimeout(500);  // Short delay to avoid rapid looping
            } catch (error) {
                console.log("Button is not available or detached from DOM.");
                break;  // Exit the loop if an error occurs
            }
        }
        await this.btn_save.click();

    }

    async createSaleIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_saleIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        //await this.slt_issueTo.fill('Test User');
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async createDisposeIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_disposeIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.txt_issueTo.fill('Test User');
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async createBinIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_binIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toBin.click();
        await this.opt_tobin.click();
        await this.slt_issueTo.click();
        await this.slt_d15.click();
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }
    async createUnitIssue()
    {
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        await this.opt_unitIssue.click()
        await this.slt_fromBin.click();
        await this.opt_b9bin.click();
        await this.slt_toBin.click();
        await this.opt_b9b10bin.click();
        await this.slt_issueTo.click();
        await this.slt_d15.click();
        await this.slt_toUnit.click();
        await this.opt_b12.click();
        // await this.slt_lineNo.click();
        // await this.opt_M1.click();
        await this.slt_transportType.click();
        await this.opt_AIR.click();
        await this.txt_transportDocNo.fill('Test Transport no');
        await this.txt_remarks.fill('Test Remark');
        //await this.txt_issueAddress.fill('Test IssueAddress');
        await this.btn_view.click();
        await this.slt_wiType.click();
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
        //await this.box_check.nth(2).click();
        await this.txt_ncvUnchecked1.nth(0).fill('0.1');
        //await this.txt_ncvUnchecked2.fill('1');
        await this.btn_close.click();
        await this.btn_save.click();

    }

    async saveFabricIndent()
    {
        await this.mnu_userboard.click({timeout:39000});
        await this.page.waitForTimeout(9000)
        await this.btn_toDo.click({force:true,timeout:29000});
        await this.lnk_fabricIndent.click();
        await this.box_check.nth(1).click();
        await this.btn_indentIssue.click();
        while (await this.btn_remove.isVisible()) {
            try {
                await this.btn_remove.click();
                await this.page.waitForTimeout(500);  // Short delay to avoid rapid looping
            } catch (error) {
                console.log("Button is not available or detached from DOM.");
                break;  // Exit the loop if an error occurs
            }
        }
        await this.lnk_totalIssue.click();
        await this.txt_ncvUnchecked1.nth(0).fill('1');
        await this.btn_close.click();
        await this.btn_save.click();
    }


    async CreateIssueFieldValidationForB9B10()
    {
        //await this.icn_issueListView.click()
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        if(this.opt_sampleIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Sample success');
        }
        await this.slt_issueType.click();
        if(this.opt_pilotIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Pilot success');
        }
        await this.slt_issueType.click();
        if(this.opt_lotIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Lot success');
        }
        await this.slt_issueType.click();
        if(this.opt_processIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeEnabled();
            console.log('process success');
        }
        await this.slt_issueType.click();
        if(this.opt_otherIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('other issue success');
        }
        await this.slt_issueType.click();
        if(this.opt_purchaseIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeEnabled();
            console.log('Purchase success');
        }
        await this.slt_issueType.click();
        if(this.opt_saleIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Sale success');
        }
        await this.slt_issueType.click();
        if(this.opt_disposeIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Dispose success');
        }
        await this.slt_issueType.click();
        if(this.opt_factoryIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Factory success');
        }
        await this.slt_issueType.click();
        if(this.opt_binIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeEnabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Bin success');
        }
        await this.slt_issueType.click();
        if(this.opt_unitIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeEnabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Unit success');
        }
    

    }
    async CreateIssueFieldValidationForD15()
    {
        await this.icn_issueListView.click()
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_d15.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_issueType.click();
        if(this.opt_sampleIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeEnabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Sample success');
        }
        await this.slt_issueType.click();
        if(this.opt_pilotIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Pilot success');
        }
        await this.slt_issueType.click();
        if(this.opt_lotIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Lot success');
        }
        await this.slt_issueType.click();
        if(this.opt_processIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeEnabled();
            console.log('process success');
        }
        await this.slt_issueType.click();
        if(this.opt_otherIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('other issue success');
        }
        await this.slt_issueType.click();
        if(this.opt_purchaseIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeEnabled();
            console.log('Purchase success');
        }
        await this.slt_issueType.click();
        if(this.opt_saleIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Sale success');
        }
        await this.slt_issueType.click();
        if(this.opt_disposeIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Dispose success');
        }
        await this.slt_issueType.click();
        if(this.opt_factoryIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeDisabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeEnabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Factory success');
        }
        await this.slt_issueType.click();
        if(this.opt_binIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeEnabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Bin success');
        }
        await this.slt_issueType.click();
        if(this.opt_unitIssue.click())
        {
            await expect(this.slt_fromBin).toBeEnabled();
            await expect(this.slt_toBin).toBeEnabled();
            await expect(this.slt_fromStyle).toBeDisabled();
            await expect(this.slt_toStyle).toBeDisabled();
            await expect(this.slt_transportType).toBeEnabled()
            await expect(this.slt_poNO).toBeDisabled();
            console.log('Unit success');
        }
    }

}
module.exports=issuePage;