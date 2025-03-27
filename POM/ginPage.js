const { name, timeout } = require("../playwright.config");
import gateEntryPage from '../POM/gateEntryPage';
import {test, expect} from '@playwright/test';

class ginPage
{
    constructor(page,entryNo)
    {
        this.page=page;
          if (!entryNo || typeof entryNo !== 'string') {
              throw new Error("Invalid entryNo passed to ginPage: " + entryNo);
          }
        this.entryNo= entryNo;
        this.btn_create= this.page.locator("//button[contains(text(),'Create')]");
        this.slt_unit= this.page.getByText('B9B10', { exact: true });
        this.slt_b9b10= this.page.getByRole('option', { name: 'B9B10' });
        this.slt_d15= this.page.getByRole('option',{name:'D15-2'})
        this.slt_type= this.page.locator("//div[@id='type']");
        this.opt_fabric= this.page.getByRole('option', { name: 'FABRIC' });
        this.opt_trims= this.page.getByRole('option', { name: 'TRIMS' });
        this.slt_GateEntryNo= this.page.locator("//div[@id='GateEntry_No']/div/div/div[2]/input");
        this.opt_gateEntryNo= this.page.getByRole('option', { name: `${this.entryNo}` })
        this.slt_supplier= this.page.locator("//input[@id='react-select-15-input']"); 
        this.slt_hangx= this.page.getByRole('option', { name: 'HANGZHOU XINSHENG PRINTING AND DYEING' });
        this.slt_docType= this.page.locator("(//div[@id='docTypeSelect']/div/div/div[2])[2]");
        this.opt_PoNo= this.page.getByRole('option', { name: 'PoNo' });
        this.slt_poNo= this.page.locator("//input[@id='react-select-28-input']");
        this.opt_poNoFDD= this.page.getByRole('option',{name:'FF242630'});
        this.opt_poNoTDD= this.page.getByRole('option',{name:'FT243011'});
        this.opt_poNoITDD= this.page.getByRole('option',{name:'IT241183'});
        this.txt_invNo= this.page.locator("//input[@id='invoiceNo']");
        this.txt_noOfPacks= this.page.locator("//input[@id='noOfPacks']");
        this.slt_bin= this.page.locator("//div[@id='binSelect']");
        this.opt_bin= this.page.getByRole('option',{name:'AR | NON BOND RUNNING'});
        this.opt_ITbin= this.page.getByRole('option',{name:'AB | BOND RUNNING'});
        this.txt_autoQc= this.page.locator("//input[@id='autoQc']");
        this.txt_crRemark= this.page.locator("//input[@id='remark']");
        this.btn_poView= this.page.locator("//button[contains(text(),'Po View')]");
        this.btn_view= this.page.locator("//button[text()='View']");
        this.btn_fileUpload= this.page.locator("//button[contains(text(),'File Upload')]");
        this.slt_fileType= this.page.locator("//div[@id='fileType']");
        this.opt_InvoiceListFile= this.page.getByRole('option', { name: 'Invoice list file' });
        this.btn_chooseFile= this.page.locator('input[type="file"]');
        this.txt_remark= this.page.locator('div').filter({ hasText: /^Remarks$/ }).getByRole('textbox');
        this.btn_add= this.page.locator("//button[contains(.,'Add')]");
        this.btn_close= this.page.locator("//button[@class='btn-close']");
        this.btn_back= this.page.getByRole('button', {name: 'Back'});
        this.btn_edit= this.page.getByRole('row').locator('td>.ri-pencil-line').first();
        this.btn_savePreGin= this.page.getByRole('button',{name:'Save Pre Gin'});
        this.btn_weightCapture= this.page.getByRole('button',{name:' Weight Capture'});
        this.txt_weightUomIP= this.page.locator("//input[@name='actualWeight']").first();
        this.btn_capture= this.page.locator("//button[text()='Capture']");
        this.btn_excelPdfExtract= this.page.getByRole('button',{name:'PDF Extract'});
        this.txt_receivedInvQty= this.page.locator("//input[@id='input-0-receivedInvQty']");
        this.txt_poBalanceQty= this.page.locator("//input[@id='input-0-poBalQty']");
        this.txt_groosWtKg= this.page.locator("//input[@id='input-0-grossWtKg']");
        this.txt_netWtKg= this.page.locator("//input[@id='input-0-netWtKg']");
        this.txt_blncQcQty= this.page.locator("//input[@id='input-0-qcQty']").first();
        this.txt_SaNoOfPacks= this.page.locator("//input[@id='input-0-noOfRolls']");
        this.txt_receivedWidth= this.page.locator("//input[@id='input-0-receivedWidth']");
        this.txt_supShade= this.page.locator("//input[@id='input-0-supShade']");
        this.txt_batchNo= this.page.locator("//input[@id='input-0-batchNo']");
        this.txt_supRefNo= this.page.locator("//input[@id='input-0-supplierRefNo']");
        this.txt_receivedQty= this.page.locator("//input[@id='input-0-receivedQty']");
        this.txt_gdBlncQcQty= this.page.locator("//input[@id='input-0-qcQty']").last();
        this.txt_labQcQty= this.page.locator("//input[@id='input-0-labQty']");
        this.btn_poInfo= this.page.getByRole('button', {name: 'PO Info'});
        this.btn_next= this.page.getByRole('button', {name: 'Next'});
        this.txt_autoQcQty= this.page.locator("//input[@id='input-0-autoQcQty']");
        this.btn_ginDetail= this.page.getByRole('button', {name: 'Gin Detail'});
        this.txt_seqNO1= this.page.locator("//input[@id='input-0-seqNo']");
        this.txt_seqNO2= this.page.locator("//input[@id='input-1-seqNo']");
        this.txt_seqNO3= this.page.locator("//input[@id='input-2-seqNo']");
        this.txt_seqNO4= this.page.locator("//input[@id='input-3-seqNo']");
        this.txt_seqNO5= this.page.locator("//input[@id='input-4-seqNo']");
        this.txt_barcodeNo1= this.page.locator("(//div[@id='input-0-barCodeNo']/descendant::div)[4]/child::input");
        this.txt_barcodeNo2= this.page.locator("(//div[@id='input-1-barCodeNo']/descendant::div)[4]/child::input");
        this.txt_barcodeNo3= this.page.locator("(//div[@id='input-2-barCodeNo']/descendant::div)[4]/child::input");
        this.txt_barcodeNo4= this.page.locator("(//div[@id='input-3-barCodeNo']/descendant::div)[4]/child::input");
        this.txt_barcodeNo5= this.page.locator("(//div[@id='input-4-barCodeNo']/descendant::div)[4]/child::input");
        this.opt_barCode4= this.page.getByRole('option',{name:'1234567895'});
        this.opt_barCode5= this.page.getByRole('option',{name:'1234567896'});
        this.txt_conversionFactor= this.page.locator("(//tbody/tr/td[14])[1]");
        this.slt_filterType= this.page.locator("svg.css-8mmkcg").nth(5);
        this.slt_filterUnit= this.page.locator("svg.css-8mmkcg").nth(3);
        this.chk_GDchkbox = this.page.locator("//input[@id='dtcheckbox-0']/ancestor::td");


        this.btn_saveGin= this.page.getByRole('button', {name: 'Save Gin'});
        this.saveConfMsg= this.page.locator("//h2[@id='swal2-title']");
        this.mnu_userboard= this.page.locator("//span[text()='Userboard']/parent::a");
        this.btn_ginMainBack= this.page.locator("//button[@class='btn btn-bisque']");
        this.btn_toDo= this.page.locator("//div[@id='total_jobs']").nth(1);
        this.btn_qc= this.page.locator("//h6[text()='QC']");
        this.slt_FQCcategory= this.page.locator("//div[@id='fabCatCode']");
        this.opt_SOLID= this.page.getByRole('option',{name:'SOLID'});
        this.slt_FQCgroupName= this.page.locator("//div[@id='groupID']");
        this.opt_Basic_cotton= this.page.getByRole('option',{name:'Basic Cotton Woven Stretch'});
        this.txt_FQCactualQty= this.page.locator("//input[@id='actualQty-0']");
        this.txt_FQCactualSize= this.page.locator("//input[@id='actualSize-0']");
        this.txt_FQCnoOfSwatch= this.page.locator("//input[@id='noOfswatch-0']");
        this.txt_FQCrefCutsQty= this.page.locator("//input[@id='refCutsQty-0']");
        this.txt_FQCbowingInches= this.page.locator("//input[@id='bowing-0']");
        this.txt_FQCcheckerRemark= this.page.locator("//input[@id='checkerRemark-0']");
        this.txt_TQCactualQty= this.page.locator("//input[@id='actualQty-0']");
        this.txt_TQCcheckerRemark= this.page.locator("//input[@id='checkerRemark-0']");
        this.lnk_totalPoint= this.page.locator("//td[@id='totalPoint-0']").first();
        this.slt_dcType= this.page.locator("//select[@id='defectType-0']");
        this.slt_defect= this.page.locator("//select[@id='defectID-0']");
        this.opt_knots= this.page.getByRole('option', { name: 'KNOTS' });
        this.txt_point1= this.page.locator("//input[@id='point1-0']");
        this.txt_point2= this.page.locator("//input[@id='point2-0']");
        this.txt_point3= this.page.locator("//input[@id='point3-0']");
        this.txt_point4= this.page.locator("//input[@id='point4-0']");
        this.btn_addRow= this.page.locator("//button[@id='addRow']");
        this.slt_dcType1= this.page.locator("//select[@id='defectType-1']");
        this.slt_defect1= this.page.locator("//select[@id='defectID-1']");
        this.txt_startLength= this.page.locator("//input[@id='startLength-1']");
        this.txt_endLength= this.page.locator("//input[@id='endLength-1']");
        this.btn_ok= this.page.getByRole('button',{name:'Ok'});
        this.txt_qcGinQCQty= this.page.locator('//tbody/tr/td[3]');
        this.txt_short= this.page.locator('//tbody/tr/td[7]');
        this.txt_excess= this.page.locator('//tbody/tr/td[8]');
        this.txt_bowingPer= this.page.locator("//td[@id='bowingPer-0']");
        this.icn_shipmentInfo= this.page.locator('.ri-information-line');
        this.txt_minScore= this.page.locator("(//tbody/tr/td[5])[2]");
        this.txt_maxScore= this.page.locator('(//tbody/tr/td[6])[2]');
        this.txt_shipAllowance= this.page.locator('(//tbody/tr/td[7])[2]');
        this.txt_grade= this.page.locator("//td[@id='bowingPer-0']/following::td[1]");
        this.txt_defectPer= this.page.locator("//td[@id='defectPer-0']");

        this.btn_save= this.page.getByRole('button',{name:'save'});
        this.txt_QCDocNo= this.page.locator('#docNo');
        this.txt_result= this.page.locator("(//div[@class='mb-3']/span)[8]");
        this.slt_newLFNo= this.page.locator("//div[@id='newlfno']/div/div/div[2]/input");
        this.opt_yes= this.page.getByRole('option',{name:'Yes'});
    

    }

    async createGinFabric(autoQcPer)
    {   
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_fabric.click();
        await this.slt_GateEntryNo.type(this.entryNo,{delay:300});
        await this.opt_gateEntryNo.click();
        await this.slt_docType.click();
        await this.opt_PoNo.click();
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type('FF242630',{delay:200});
        await this.opt_poNoFDD.click();
        await this.txt_invNo.fill('Test123');
        //await this.txt_noOfPacks.fill('25');
        await this.slt_bin.click();
        await this.opt_bin.click();
        await this.txt_autoQc.fill(autoQcPer);
        await this.txt_crRemark.fill('Test remark');
        // await this.slt_newLFNo.click();
        // await this.opt_yes.click();
        await this.btn_poView.click();
        await this.btn_close.click();
        await this.btn_view.click();
        await expect (this.txt_poBalanceQty).toBeHidden({timeout:39000});
        this.poBalanceQty=  await this.txt_poBalanceQty.getAttribute("value");
        this.receivedInvQty= Math.floor('3');
        console.log('received invoice quantity',this.receivedInvQty);
        await this.txt_receivedInvQty.fill(String(this.receivedInvQty));
        await this.txt_groosWtKg.fill('5');
        await this.txt_netWtKg.fill('5');
        await this.btn_next.click();
        this.conversionFactor=await this.txt_conversionFactor.textContent();
        let ginQty= (this.receivedInvQty* this.conversionFactor).toFixed(2);
        this.myAutoQcQty= await (( this.conversionFactor*this.receivedInvQty*autoQcPer)/100).toFixed(2);
        console.log("MyAuto "+this.myAutoQcQty);
        this.autoQcQty=String(await this.txt_autoQcQty.getAttribute("value"));
        console.log("Actual Auto "+this.autoQcQty);
        expect (this.myAutoQcQty).toEqual(this.autoQcQty);
        this.myBlncQcQty=await ((this.receivedInvQty* this.conversionFactor)-(( this.conversionFactor*this.receivedInvQty*autoQcPer)/100)).toFixed(2);
        this.blnsQCQty=await this.txt_blncQcQty.getAttribute("value");
        expect (Number(this.myBlncQcQty)).toEqual(Number(this.blnsQCQty));
        await this.txt_SaNoOfPacks.fill('2');
        //await this.btn_poInfo.click();
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('Test remark');
        await this.btn_add.click();
        await this.btn_close.click();
        //await this.btn_savePreGin.click();
        //await this.btn_weightCapture.click();
        //await this.txt_weightUomIP.fill('2');
        //await this.btn_capture.click();
        //await this.btn_excelPdfExtract.click();
        await this.btn_next.click();
        await this.btn_ginDetail.click();
        await this.txt_receivedWidth.fill('5');
        await this.txt_supShade.fill('5');
        await this.txt_batchNo.fill('5');
        await this.txt_supRefNo.fill('5');
        await this.txt_receivedQty.fill(ginQty);
        await this.txt_labQcQty.fill('1');
        await this.chk_GDchkbox .click();
        await this.btn_saveGin.click();
        this.ginId= (await this.saveConfMsg.textContent()).split('-')[0].trim();
        console.log(this.ginId);
        await expect (this.ginId).toContain('GI');
        this.icn_edit= await this.page.getByRole('row', { name: `${this.ginId}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.btn_ginMainBack.click({timeout:29000});
        await this.mnu_userboard.click({timeout:39000});
        await this.page.waitForTimeout(9000)
        await this.btn_toDo.click({force:true,timeout:29000});
        await this.btn_qc.click({timeout:29000});
        this.hypLnk_ginNo= this.page.locator(`//td[@title='${this.ginId}']`);
        console.log('ginID ',this.ginId )
        let maxRetries = 10;
        let attempts = 0;
        while (attempts < maxRetries)
    {
        try {
        await this.page.waitForSelector(`//td[@title='${this.ginId}']/child::div`, { state: 'visible', timeout: 4000 });
        await this.hypLnk_ginNo.click();
        break;  
        } 
        catch (error) {
            try{
        await this.btn_next.scrollIntoView();
            }catch(error){
        await this.btn_next.click();
            }
        await this.page.waitForTimeout(500);
        }
        attempts++;
    }

    if (attempts === maxRetries) {
       throw new Error("GIN Link not found after multiple attempts!");
       }
       //await this.txt_crRemark.fill('Test remark',{timeout:29000});
       await this.slt_FQCcategory.click();
       await this.opt_SOLID.click()
       await this.slt_FQCgroupName.click();
       await this.opt_Basic_cotton.click();
       await this.btn_view.click();
      this.qcGinQCQty= await this.txt_qcGinQCQty.textContent();
      console.log('qcGinQCQty',this.qcGinQCQty);
      this.FQCactualQty='22';
      this.FQCactualSize='23';
      this.bowingInch='5';
       await this.txt_FQCactualQty.fill(this.FQCactualQty);
       await this.txt_FQCactualSize.fill(this.FQCactualSize);
       this.actualShort= await this.txt_short.textContent();
       console.log('actualShort',this.actualShort)
       this.actualExcess= await this.txt_excess.textContent();
       console.log('actualExcess',this.actualExcess)
       if(Number(this.FQCactualQty)>=Number(this.qcGinQCQty))
       {
        this.excess=(Number(this.FQCactualQty)-Number(this.qcGinQCQty)).toFixed(2);
        expect(Number(this.actualExcess)).toEqual(Number(this.excess));
        console.log('excess',this.excess);
       }
       else
       {
        this.short= (Number(this.qcGinQCQty)-Number(this.FQCactualQty)).toFixed(2);
        expect(Number(this.actualShort.trim())).toEqual(Number(this.short));
        console.log('short',this.short);

       }
       await this.txt_FQCnoOfSwatch.fill('2');
       await this.txt_FQCrefCutsQty.fill('2');
       await this.txt_FQCbowingInches.fill(this.bowingInch);
       this.actualBowingPer= await this.txt_bowingPer.textContent();
       expect(Number(this.actualBowingPer)).toEqual(Number(((this.bowingInch/this.FQCactualSize)*100).toFixed(2)));
       await this.txt_FQCcheckerRemark.fill('Checker test remark');
       await this.icn_shipmentInfo.click();
       this.minScore= await this.txt_minScore.textContent();
       this.maxScore= await this.txt_maxScore.textContent();
       this.txt_shipAllowance= await this.txt_shipAllowance.textContent();
       await this.btn_close.click();
       await this.lnk_totalPoint.click();
       await this.slt_dcType.selectOption("DEFAULT");
       await this.slt_defect.selectOption("KNOTS");
       let p1='1',p2='5',p3='2',p4='6';
       await this.txt_point1.fill(p1);
       await this.txt_point2.fill(p2);
       await this.txt_point3.fill(p3);
       await this.txt_point4.fill(p4);
       this.tPoint= Number(p1)+Number(p2*2)+Number(p3*3)+Number(p4*4);
       console.log("tpoint = ",this.tPoint);
       await this.btn_ok.click();
       this.defectPer= await this.txt_defectPer.textContent();
       this.grade= await this.txt_grade.textContent();
       if(this.defectPer<=this.minScore)
       {
        expect (this.grade).toEqual('1');
       }
       else if(this.defectPer<=this.maxScore)
       {
        expect (this.grade).toEqual('2');
       }
       else if(this.defectPer>=this.maxScore)
       {
        expect (this.grade).toEqual('Reject');
       }
       else
       {
         console.log('check defect percentage and grade');
       }
       this.aTpoint= await this.lnk_totalPoint.textContent();
       console.log("Actual total point",this.aTpoint);
       await expect (Number(this.tPoint)).toEqual(Number(this.aTpoint));
       this.result= (await this.txt_result.textContent()).split(':')[1].trim();
       console.log('result = ',this.result);
       console.log('this.defectPer = ',this.defectPer);
       let a=this.aTpoint*3937;
       let b=this.FQCactualQty*this.FQCactualSize;
       let c= a/b;
       this.MyDefectPer = Number((c / 100)).toFixed(2);
       console.log('MyDefectPer=',this.MyDefectPer)
       console.log('this.txt_shipAllowance = ',this.txt_shipAllowance);
       if(Number(this.defectPer)<=Number(this.txt_shipAllowance))
       {
        await expect (this.result).toEqual('Pass')
       }
       else
       {
        await expect(this.result).toEqual('Fail');
       }
       await this.btn_save.click();
       await expect (this.txt_QCDocNo).toHaveText(/.+/,{timeout:39000});
       this.qcId= (await this.txt_QCDocNo.textContent())?.trim();
       console.log('QC document number= ',this.qcId);
       return this.ginId;

    }
    async createGinTrims(autoQcPer)
    {   
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_b9b10.click();
        await this.slt_type.click();
        await this.opt_trims.click();
        await this.slt_GateEntryNo.type(this.entryNo,{delay:200});
        await this.opt_gateEntryNo.click();
        await this.slt_docType.click();
        await this.opt_PoNo.click();
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type('FT243011',{delay:200});
        await this.opt_poNoTDD.click();
        await this.txt_invNo.fill('Test123');
        //await this.txt_noOfPacks.fill('25');
        await this.slt_bin.click();
        await this.opt_bin.click();
        await this.txt_autoQc.fill(autoQcPer);
        await this.txt_crRemark.fill('Test remark');
        // await this.slt_newLFNo.click();
        // await this.opt_yes.click();
        await this.btn_poView.click();
        await this.btn_close.click();
        await this.btn_view.click();
        await expect (this.txt_poBalanceQty).toBeHidden({timeout:39000});
        this.poBalanceQty=  await this.txt_poBalanceQty.getAttribute("value");
        this.receivedInvQty= Math.floor('3');
        console.log('received invoice quantity',this.receivedInvQty);
        await this.txt_receivedInvQty.fill(String(this.receivedInvQty));
        await this.btn_next.click();
        // await this.page.pause();
        this.myAutoQcQty= Math.floor((this.receivedInvQty*autoQcPer)/100);
        console.log("MyAuto "+this.myAutoQcQty);
        this.autoQcQty=String(await this.txt_autoQcQty.getAttribute("value"));
        console.log("Actual Auto"+this.autoQcQty);
        expect (Number(this.myAutoQcQty)).toEqual(Number(this.autoQcQty));
        this.myBlncQcQty= await this.receivedInvQty-this.myAutoQcQty;
        this.blnsQCQty=String(await this.txt_blncQcQty.getAttribute("value"));
        expect (this.myBlncQcQty).toEqual(Number(this.blnsQCQty));
        await this.txt_SaNoOfPacks.fill('5');
        //await this.btn_poInfo.click();
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('Test remark');
        await this.btn_add.click();
        await this.btn_close.click();
        //await this.btn_savePreGin.click();
        //await this.btn_weightCapture.click();
        //await this.txt_weightUomIP.fill('2');
        //await this.btn_capture.click();
        //await this.btn_excelPdfExtract.click();
        await this.btn_next.click();
        await this.btn_ginDetail.click();
        await this.txt_seqNO1.fill('1');
        await expect (this.txt_barcodeNo1).toBeDisabled();
        await this.txt_seqNO2.fill('1');
        await expect (this.txt_barcodeNo2).toBeDisabled();
        await this.txt_seqNO3.fill('1');
        await expect (this.txt_barcodeNo3).toBeDisabled();
        await this.txt_barcodeNo4.pressSequentially('1234567895');
        await this.opt_barCode4.click();
        await expect (this.txt_seqNO4).toBeDisabled();
        // await this.txt_barcodeNo5.pressSequentially('1234567896');
        // await this.opt_barCode5.click();
        // await expect (this.txt_seqNO5).toBeDisabled();
        // await this.chk_GDchkbox .click();
        await this.btn_saveGin.click();
        this.ginId= (await this.saveConfMsg.textContent()).split('-')[0];
        console.log(this.ginId);
        await expect (this.ginId).toContain('GI');
        await this.slt_filterUnit.click();
        await this.slt_b9b10.click();
        await this.slt_filterType.click();
        await this.opt_trims.click();
        await this.btn_view.click();
        this.icn_edit= await this.page.getByRole('row', { name: `${this.ginId}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.btn_ginDetail.click();
        let bcCode1= await this.txt_barcodeNo1.textContent();
        let bcCode2= await this.txt_barcodeNo2.textContent();
        let bcCode3= await this.txt_barcodeNo3.textContent();
        expect([bcCode1.trim(), bcCode2.trim(), bcCode3.trim()]).toEqual([bcCode1.trim(), bcCode1.trim(), bcCode1.trim()]);

    }

    async createGinTrimsForUnitWF(autoQcPer)
    {   
        await this.btn_create.click();
        await this.slt_unit.click();
        await this.slt_d15.click();
        await this.slt_type.click();
        await this.opt_trims.click();
        await this.slt_GateEntryNo.type(this.entryNo,{delay:200});
        await this.opt_gateEntryNo.click();
        await this.slt_docType.click();
        await this.opt_PoNo.click();
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type('IT241183',{delay:200});
        await this.opt_poNoITDD.click();
        await this.txt_invNo.fill('Test123');
        //await this.txt_noOfPacks.fill('25');
        await this.slt_bin.click();
        await this.opt_ITbin.click();
        await this.txt_autoQc.fill(autoQcPer);
        await this.txt_crRemark.fill('Test remark');
        await this.slt_newLFNo.click();
        await this.opt_yes.click();
        await this.btn_poView.click();
        await this.btn_close.click();
        await this.btn_view.click();
        await expect (this.txt_poBalanceQty).toBeHidden({timeout:39000});
        this.poBalanceQty=  await this.txt_poBalanceQty.getAttribute("value",{timeout:120000});
        this.receivedInvQty= Math.floor('3');
        console.log('received invoice quantity',this.receivedInvQty);
        await this.txt_receivedInvQty.fill(String(this.receivedInvQty));
        await this.btn_next.click();
        this.myAutoQcQty= Math.floor(String((this.receivedInvQty*autoQcPer)/100));
        console.log("MyAuto"+this.myAutoQcQty);
        this.autoQcQty=String(await this.txt_autoQcQty.getAttribute("value"));
        console.log("Actual Auto"+this.autoQcQty);
        expect (this.myAutoQcQty).toEqual(Number(this.autoQcQty));
        this.myBlncQcQty= await this.receivedInvQty-this.myAutoQcQty;
        this.blnsQCQty=String(await this.txt_blncQcQty.getAttribute("value"));
        expect (this.myBlncQcQty).toEqual(Number(this.blnsQCQty));
        await this.txt_SaNoOfPacks.fill('5');
        //await this.btn_poInfo.click();
        await this.btn_fileUpload.click();
        await this.slt_fileType.click();
        await this.opt_InvoiceListFile.click();
        await this.btn_chooseFile.setInputFiles('C:/Users/mugundhan/Downloads/test sample files/industry_sic.csv');
        await this.txt_remark.fill('Test remark');
        await this.btn_add.click();
        await this.btn_close.click();
        await expect(this.btn_ginDetail).not.toBeVisible();
        await this.btn_saveGin.click();
        this.ginId= (await this.saveConfMsg.textContent({timeout:29000})).split('-')[0];
        console.log(this.ginId);
        await expect (this.ginId).toContain('GI');
        await this.slt_filterUnit.click({timeout:29000});
        await this.slt_d15.click();
        await this.slt_filterType.click();
        await this.opt_trims.click();
        await this.btn_view.click();
        this.icn_edit= await this.page.getByRole('row', { name: `${this.ginId}` }).locator('i.ri-pencil-line');
        await this.icn_edit.click();
        await this.page.screenshot({ path: 'screenshots/editUnit.png', fullPage: true });
        await expect(this.btn_ginDetail).not.toBeVisible();
        await this.btn_saveGin.click();
    }
    
}

module.exports= ginPage;