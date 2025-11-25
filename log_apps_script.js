function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        // Gunakan Spreadsheet LOGS (bukan active spreadsheet)
        const logDoc = SpreadsheetApp.openById("1pqeAzhIcCu_hEhbBXmGHluSNQjyJjxhkBEyjAiOUEWs");
        const logSheet = logDoc.getSheets()[0]; // Sheet pertama

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
    return ContentService.createTextOutput("Service is running");
}