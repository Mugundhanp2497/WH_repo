const loginPage= require('../POM/loginPage');
import {test, expect} from '@playwright/test';
import gateEntryPage from '../POM/gateEntryPage';
import ginPage from '../POM/ginPage';
import laboratoryPage from '../POM/laboratoryPage';
import issuePage from '../POM/issuePage';
import transferPage from '../POM/transferPage';
import readExcel from '../utils/readExcel';
import receiptPage from '../POM/receiptPage';
import {WriteExcel} from '../utils/writeExcel';
const {executeQuery}= require('../utils/dbUtils');

let entryNo;
test.beforeEach('befor each',async({page})=>
{
    await page.goto('/user-board');
    await page.evaluate(() => {
        document.body.style.zoom = "0.8";
    });

})

test('gateEntryFabric', async({page})=>
{
let LoginPage= new loginPage(page);
let GateEntryPage= new gateEntryPage(page);
await LoginPage.mnuGateEntry();
return entryNo = await GateEntryPage.createGateEntryFabric();
})
test('createGinForFabric',async({page})=>
{
    let LoginPage= new loginPage(page);
    await LoginPage.mnuGin();
    console.log(entryNo);
    let GinPage= new ginPage(page,entryNo);
    let ginid= await GinPage.createGinFabric('90');
    let LaboratoryPage=new laboratoryPage(page,ginid);
    await LoginPage.mnuLab();
    await LaboratoryPage.saveLab();
    })

test('gateEntryTrims', async({page})=>
    {
    let LoginPage= new loginPage(page);
    let GateEntryPage= new gateEntryPage(page);
    await LoginPage.mnuGateEntry();
    return entryNo = await GateEntryPage.createGateEntryTrims();
    })
    

test('createGinForTrims',async({page})=>
    {
        let LoginPage= new loginPage(page);
        await LoginPage.mnuGin();
        console.log(entryNo);
        let GinPage= new ginPage(page,entryNo);
        await GinPage.createGinTrims('90');
    })

test('gateEntryTrims for d15 unit', async({page})=>
    {
    let LoginPage= new loginPage(page);
    let GateEntryPage= new gateEntryPage(page);
    await LoginPage.mnuGateEntry();
    return entryNo = await GateEntryPage.createGateEntryTrimsD15();
    })

test('createGinForTrims To check unit specific workflow',async({page})=>
    {
    let LoginPage= new loginPage(page);
    await LoginPage.mnuGin();
    console.log(entryNo);
    let GinPage= new ginPage(page,entryNo);
    await GinPage.createGinTrimsForUnitWF('90');
    })
test('create issue',async({page})=>
    {
    let LoginPage= new loginPage(page);
    await LoginPage.mnuIssue();
    let IssuePage = new issuePage(page);
    await IssuePage.createFactoryIssue();
    await IssuePage.createSampleIssue();
    await IssuePage.createPilotIssue();
    await IssuePage.createLotIssue();
    //await IssuePage.createProcessIssue();
    await IssuePage.createOtherIssue();
    //await IssuePage.createPurchaseReturnIssue();
    await IssuePage.createSaleIssue();
    await IssuePage.createDisposeIssue();
    await IssuePage.createBinIssue();
    await IssuePage.createUnitIssue();
    await IssuePage.CreateIssueFieldValidationForB9B10();
    await IssuePage.CreateIssueFieldValidationForD15();

    })

    

test('create receipt',async({page})=>
    {
    let LoginPage= new loginPage(page);
    await LoginPage.mnuReceipt();
    let ReceiptPage= new receiptPage(page);
    await ReceiptPage.createReceipt();
    });

test('create transfer', async({page})=>
    {
    let LoginPage= new loginPage(page);
    await LoginPage.mnuIssue();
    let TransferPage=new transferPage(page);
    await TransferPage.createBinTransfer();
    await TransferPage.createStyleTransfer();
    await TransferPage.createRackTransfer();    
    })

test('db test',async({page})=>
    {

    let query1= await readExcel(1,1,'DBQSheet');
    const result= await executeQuery(query1);
    let a=1;
    for( let record of result) { 
    console.log(record.DocNo);
    let NRData= record.DocNo;
    await WriteExcel(a,1,NRData);
    a++;
    }
    });
    
