const exceljs=require('exceljs');

async function WriteExcel(rowNo,cellNo,data)
{
    const workBook=new exceljs.Workbook();
    await workBook.xlsx.readFile('./resource/test.xlsx');
    const workSheet= workBook.getWorksheet('writeData');
    let row = workSheet.getRow(rowNo);
    row.getCell(cellNo).value = data;
    row.commit();
    await workBook.xlsx.writeFile('./resource/test.xlsx');


}
module.exports= {WriteExcel};