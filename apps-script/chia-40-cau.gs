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
    const score = Math.max(0, Math.min(40, Number(p.score)||0));
    const checked = Math.max(0, Math.min(40, Number(p.checked)||0));
    const row = [String(p.name).slice(0,150), Number(p.attempt)||1, score, checked, checked===40?'Hoàn thành':'Đang làm', String(p.startedAt||''), String(p.runId).slice(0,100)];
    // Ghi lịch sử các lượt làm giống bài 40 CÂU THẾ KỈ.
    const history = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('LỊCH SỬ LÀM BÀI');
    if (history) {
      const hLast = history.getLastRow();
      const hIds = hLast > 1 ? history.getRange(2,9,hLast-1,1).getValues().flat() : [];
      const hAt = hIds.indexOf(row[6]);
      const hRow = [row[0], 'CHIA 40 CÂU 6CS', row[1], score, checked, row[4], row[5], new Date(), row[6]];
      if (hAt >= 0) history.getRange(hAt+2,1,1,9).setValues([hRow]);
      else history.appendRow(hRow);
    }
    return ContentService.createTextOutput('OK');
  } catch(err) {
    return ContentService.createTextOutput('ERROR: '+err.message);
  } finally {lock.releaseLock();}
}
