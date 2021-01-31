import ExcelJS from 'exceljs';

export default async (request, response) => {
  var workbook = new ExcelJS.Workbook();

  workbook.xlsx
    .readFile('./src/pages/api/abastecimento/data/abastecimento.xlsx')
    .then(function () {
      const vehicles = [
        'OBK-1879',
        'OBK-0080',
        'OBH-2C35',
        'ANY-5979',
        'QCQ-4B09',
        'QCA-6472',
        'QCA-6D72',
        'QCA-6352',
        'QCX-6199',
        'QCX-6149',
        'QCX-6A89',
        'QCX-6189',
        'QCX-6119',
        'QCW-1569',
        'QCH-1230',
        'QCG-7533',
        'QCG-7553',
        'QCG-6933',
        'QCV-5439',
        'QCJ-9490',
        'QCM-8361',
        'NJH-5949',
        'MML-2I41',
        'AWC-6B67',
        'OBH-0429',
        'OBK-1800',
        'OBK-1860',
        'QCF-5341',
        'NJC-9087',
        'NUG-3415',
        'NJH-6691',
        'RAK-5E67',
        'QCY-3249',
        'QCT-2930',
        'RAK-4240',
        'QCT-2140',
        'QCT-2850',
        'QCT-2770',
        'OBN-2830',
        'OBN-2880',
        'QCJ-4423',
        'QCJ-4453',
        'QCJ-4483',
        'RAK-4280',
        'RAK-4340',
        'QCT-2680',
        'NJC-9047',
        'RAK-5E77',
        'KAM-8829',
      ];

      let data = [];
      let total = 0;

      let worksheet = workbook.getWorksheet('abastecimento');

      for (let i = 1; i <= parseInt(worksheet.rowCount); i++) {
        let obj = { plate: '', value: '', label: '' };
        if (vehicles.indexOf(worksheet.getCell(`A${i}`).value) != -1) {
          obj.plate = worksheet.getCell(`A${i}`).value;
          obj.value = worksheet.getCell(`H${i}`).value;
          obj.label = `${worksheet.getCell(`A${i}`).value}\n${
            worksheet.getCell(`H${i}`).value
          }`;
          total += worksheet.getCell(`H${i}`).value;

          data.push(obj);
        }
      }
      console.log(data);
      return response.send({ data: data, total: total });
    })
    .catch(function (error) {
      return response.json({ Error: 'Error' });
    });
};
