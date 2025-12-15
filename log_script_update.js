/*
  GOOGLE APPS SCRIPT FOR LOGGING SYSTEM
  Target Spreadsheet ID: 1pqeAzhIcCu_hEhbBXmGHluSNQjyJjxhkBEyjAiOUEWs
  
  Fitur:
  - doPost: Mencatat log baru (Existing functionality).
  - doGet: Mengambil data log untuk ditampilkan di dashboard (New functionality).
  
  Cara Update:
  1. Buka Script Editor project Log Anda.
  2. Copy-paste kode ini menggantikan kode yang lama.
  3. Deploy New Version (biarkan akses "Anyone" atau "Anyone with Google Account" sesuai kebutuhan, biasanya "Anyone" jika client-side fetch tanpa token).
     Note: Untuk keamanan lebih tinggi, bisa batasi ke "Anyone with Google Account" tapi frontend perlu adjustment token. 
     Untuk tahap ini, kita asumsi akses public/anonymous allowed untuk GET, atau validasi token di header jika diperlukan. 
     Namun kode asli user doPost tidak cek token, jadi saya buat simple.
*/

const LOG_SPREADSHEET_ID = "1pqeAzhIcCu_hEhbBXmGHluSNQjyJjxhkBEyjAiOUEWs";

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const logDoc = SpreadsheetApp.openById(LOG_SPREADSHEET_ID);
        const logSheet = logDoc.getSheets()[0];

        // Header Check
        if (logSheet.getLastRow() === 0) {
            logSheet.appendRow(["Waktu", "Nama User", "Email User", "Judul File", "ID File"]);
        }

        const timestamp = new Date();
        const userName = e.parameter.name || "Anonymous";
        const userEmail = e.parameter.email || "-";
        const fileTitle = e.parameter.title || "Unknown File";
        const fileId = e.parameter.id || "-";

        logSheet.appendRow([timestamp, userName, userEmail, fileTitle, fileId]);

        return ContentService.createTextOutput(JSON.stringify({
            "result": "success",
            "message": "Log recorded"
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService.createTextOutput(JSON.stringify({
            "result": "error",
            "error": err.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function doGet(e) {
    // Action router jika perlu, tapi defaultnya "get_logs"
    return getLogs();
}

function getLogs() {
    try {
        const logDoc = SpreadsheetApp.openById(LOG_SPREADSHEET_ID);
        const logSheet = logDoc.getSheets()[0];

        const lastRow = logSheet.getLastRow();
        if (lastRow <= 1) {
            // Hanya header atau kosong
            return createResponse({ status: 'success', data: [] });
        }

        // Ambil semua data
        const data = logSheet.getRange(2, 1, lastRow - 1, 5).getValues();
        // Format: [Waktu, Nama, Email, Judul, ID]

        // Map ke object JSON
        // Kita reverse biar yang terbaru di atas
        const structuredData = data.map(row => ({
            time: row[0],
            user_name: row[1],
            user_email: row[2],
            file_title: row[3],
            file_id: row[4]
        })).reverse();

        return createResponse({ status: 'success', data: structuredData });

    } catch (err) {
        return createResponse({ status: 'error', message: err.toString() });
    }
}

function createResponse(data) {
    return ContentService.createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}
