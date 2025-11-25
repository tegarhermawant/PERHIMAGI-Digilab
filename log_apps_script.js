// SCRIPT INI UNTUK DI-COPY KE SPREADSHEET BARU (LOGS)
// Nama File: log_apps_script.js
// Cara pasang:
// 1. Buka Spreadsheet BARU yang kosong (untuk Logs)
// 2. Klik menu "Ekstensi" > "Apps Script"
// 3. Paste kode ini
// 4. Deploy sebagai "New Web App" -> "Anyone" has access
// 5. Copy URL Web App baru dan update di beta.html

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        // LOG KE SPREADSHEET INI (LOGS)
        const logDoc = SpreadsheetApp.getActiveSpreadsheet();
        const logSheet = logDoc.getSheets()[0]; // Pakai sheet pertama

        // Buat Header jika masih kosong
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

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({
            "result": "error",
            "error": e.toString()
        })).setMimeType(ContentService.MimeType.JSON);

    } finally {
        lock.releaseLock();
    }
}

function doGet(e) {
    return ContentService.createTextOutput("Service is running");
}
