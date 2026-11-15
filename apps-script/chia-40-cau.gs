/**
 * Google Apps Script — triển khai dưới dạng Web app.
 * Chạy với quyền chủ sở hữu, quyền truy cập: Anyone.
 * Script gắn với Google Sheets đích hoặc dùng openById.
 */
const SPREADSHEET_ID = '1AkoD-fqkjvO_OiEATu4GGug1sRbYhS5W6Sk6tySPhks';
const SHEET_NAME = 'CHIA 40 CÂU 6CS';
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const p = JSON.parse(e.postData.contents || '{}');
    if (!p.name || !p.runId || p.title !== 'CHIA 40 CÂU 6CS') throw new Error('Invalid submission');
    const sh = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sh) throw new Error('Missing sheet');
    const score = Math.max(0, Math.min(40, Number(p.score)||0));
    const checked = Math.max(0, Math.min(40, Number(p.checked)||0));
    const done = Math.max(0, Math.min(40, Number(p.done)||0));
    const row = [String(p.name).slice(0,150),Number(p.attempt)||1,score,checked,done,checked===40?'Hoàn thành':'Đang làm',String(p.startedAt||''),new Date(),String(p.runId).slice(0,100),'CHIA 40 CÂU 6CS'];
    const last = sh.getLastRow();
    const ids = last > 1 ? sh.getRange(2,9,last-1,1).getValues().flat() : [];
    const at = ids.indexOf(row[8]);
    if (at >= 0) sh.getRange(at+2,1,1,row.length).setValues([row]);
    else sh.appendRow(row);
    return ContentService.createTextOutput('OK');
  } catch(err) {
    return ContentService.createTextOutput('ERROR: '+err.message);
  } finally {lock.releaseLock();}
}
