const excel =require('exceljs');

module.exports =async function readExcel(rowNumber,cellNumber,sheet) 
    {
        let workBook = new excel.Workbook();
        await workBook.xlsx.readFile('./resource/test.xlsx');
        let workSheet= workBook.getWorksheet(sheet);
        let testData=null;
        workSheet.eachRow((row,rownumber)=>
        {
           if(rownumber==rowNumber)
           {
            row.eachCell((cell,cellnumber)=>
            {
                if(cellnumber==cellNumber)
                {
                    testData= cell.value;
                    
                }

            })
           }

        })
        return testData;

    } 