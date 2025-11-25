// SCRIPT INI UNTUK DI-COPY KE GOOGLE APPS SCRIPT
// Cara pasang:
// 1. Buka Spreadsheet Database Anda
// 2. Klik menu "Ekstensi" > "Apps Script"
// 3. Hapus semua kode yang ada, lalu paste kode di bawah ini
// 4. Ganti SHEET_NAME jika nama sheet anda bukan 'Sheet1'
// 5. Klik "Terapkan" (Deploy) > "Aplikasi Web Baru" (New Web App)
// 6. Atur "Who has access" (Siapa yang memiliki akses) menjadi "Anyone" (Siapa saja)
// 7. Copy URL Web App yang dihasilkan

const SHEET_NAME = 'Sheet1'; // Ganti sesuai nama sheet/tab di bawah
const DOWNLOAD_COLUMN = 11; // Kolom K (Download) adalah kolom ke-11

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    // Parameter 'id' yang dikirim dari website (index array dari 0)
    // Row di spreadsheet dimulai dari 1, dan ada header di row 1.
    // Jadi Row Data = id + 2
    const id = parseInt(e.parameter.id);
    const row = id + 2;
    
    const range = sheet.getRange(row, DOWNLOAD_COLUMN);
    const currentVal = range.getValue() || 0;
    
    // Increment jumlah download
    range.setValue(currentVal + 1);
    
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "new_count": currentVal + 1
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": e.toString()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } finally {
    lock.releaseLock();
  }
}

// Fungsi setup CORS agar bisa diakses dari website lain
function doGet(e) {
  return ContentService.createTextOutput("Service is running");
}
