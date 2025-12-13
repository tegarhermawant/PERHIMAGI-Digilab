/*
  GOOGLE APPS SCRIPT FOR AUTHENTICATION & ACCESS MANAGEMENT (V3)
  Updated by: Antigravity
  
  Updates:
  - "Akademik" and "Sekjend" are now recognized as Global Admins (same as "ALL").
  
  Setup Instructions:
  1. Copy-paste kode ini.
  2. Deploy New Version.
*/

const SHEET_PENGURUS_NAME = "Pengurus";
const SHEET_MEMBER_NAME = "Member";
const SHEET_INSTITUSI_NAME = "Institusi";
const SHEET_AKSES_NAME = "Akses";
const DEFAULT_CONTACT = "6282290193887";

function doGet(e) {
    return handleRequest(e);
}

function doPost(e) {
    return handleRequest(e);
}

function handleRequest(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        let params = {};
        if (e.postData && e.postData.contents) {
            try { params = JSON.parse(e.postData.contents); } catch (err) { params = e.parameter; }
        } else {
            params = e.parameter;
        }

        const action = params.action;
        const ss = SpreadsheetApp.getActiveSpreadsheet();

        switch (action) {
            case 'check_access': return checkAccess(ss, params.email);
            case 'register': return registerMember(ss, params.name, params.email, params.institution);
            case 'get_institutions': return getInstitutions(ss);
            case 'check_admin': return checkAdmin(ss, params.email);
            case 'get_members': return getMembers(ss, params.email);
            case 'update_status': return updateMemberStatus(ss, params);
            default: return createResponse({ status: 'error', message: 'Invalid action' });
        }

    } catch (error) {
        return createResponse({ status: 'error', message: error.toString() });
    } finally {
        lock.releaseLock();
    }
}

// --- CORE LOGIC ---

function isGlobalScope(scope) {
    if (!scope) return false;
    const s = scope.toString().toUpperCase();
    return s === "ALL" || s.includes("AKADEMIK") || s.includes("SEKJEND");
}

function getMembers(ss, adminEmail) {
    const adminCheck = checkAdminInternal(ss, adminEmail);
    if (!adminCheck.isAdmin) return createResponse({ status: 'error', message: 'Unauthorized' });

    const scope = adminCheck.scope;
    const isGlobal = isGlobalScope(scope);

    const sheetMember = ss.getSheetByName(SHEET_MEMBER_NAME);
    const data = sheetMember.getDataRange().getValues();

    let resultList = [];

    for (let i = 1; i < data.length; i++) {
        const mName = String(data[i][0]);
        const mEmail = String(data[i][1]);
        const mInst = String(data[i][2]);
        const mAccess = String(data[i][3]).toUpperCase() === 'TRUE';

        // Filter: If Global, take all. Else, must match exact institution.
        if (isGlobal || mInst.toLowerCase() === scope.toLowerCase()) {
            resultList.push({
                name: mName,
                email: mEmail,
                institution: mInst,
                access: mAccess
            });
        }
    }

    return createResponse({ status: 'success', data: resultList, scope: scope, isGlobal: isGlobal });
}

function updateMemberStatus(ss, params) {
    const adminEmail = params.admin_email;
    const targetEmail = params.target_email;
    const newStatus = params.new_status;

    const adminCheck = checkAdminInternal(ss, adminEmail);
    if (!adminCheck.isAdmin) return createResponse({ status: 'error', message: 'Unauthorized' });

    const sheetMember = ss.getSheetByName(SHEET_MEMBER_NAME);
    const data = sheetMember.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
        if (String(data[i][1]).toLowerCase() === targetEmail.toLowerCase()) {
            const targetInst = String(data[i][2]);

            // Permission Check
            if (!isGlobalScope(adminCheck.scope) && targetInst.toLowerCase() !== adminCheck.scope.toLowerCase()) {
                return createResponse({ status: 'error', message: 'Anda tidak berhak mengubah member institusi lain.' });
            }

            const val = newStatus ? "TRUE" : "FALSE";
            sheetMember.getRange(i + 1, 4).setValue(val);

            return createResponse({ status: 'success', message: `Status updated to ${val}` });
        }
    }

    return createResponse({ status: 'error', message: 'Member not found' });
}

function checkAdminInternal(ss, email) {
    const sheet = ss.getSheetByName(SHEET_AKSES_NAME);
    if (!sheet) return { isAdmin: false };
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]).toLowerCase() === email.toLowerCase()) {
            return { isAdmin: true, scope: String(data[i][1]) };
        }
    }
    return { isAdmin: false };
}

// --- EXISTING / HELPER FUNCTIONS ---

function checkAccess(ss, email) {
    if (!email) return createResponse({ status: 'error', message: 'Email required' });

    // 1. Pengurus
    const sheetPengurus = ss.getSheetByName(SHEET_PENGURUS_NAME);
    if (sheetPengurus) {
        const data = sheetPengurus.getDataRange().getValues();
        for (let i = 1; i < data.length; i++) {
            if (String(data[i][2]).toLowerCase() === email.toLowerCase()) {
                return createResponse({ status: 'authorized', role: 'pengurus', name: data[i][0], division: data[i][1] });
            }
        }
    }

    // 2. Member
    const sheetMember = ss.getSheetByName(SHEET_MEMBER_NAME);
    if (sheetMember) {
        const data = sheetMember.getDataRange().getValues();
        for (let i = 1; i < data.length; i++) {
            if (String(data[i][1]).toLowerCase() === email.toLowerCase()) {
                const access = String(data[i][3]).toUpperCase() === 'TRUE';
                const inst = String(data[i][2]);
                if (access) return createResponse({ status: 'authorized', role: 'member', name: data[i][0], institution: inst });
                else return createResponse({ status: 'pending', message: 'Menunggu persetujuan.', institution: inst, contact: getInstitutionContact(ss, inst), isPerhimagi: isPerhimagiInstitution(ss, inst) });
            }
        }
    }
    return createResponse({ status: 'unregistered' });
}

function checkAdmin(ss, email) {
    const res = checkAdminInternal(ss, email);
    return createResponse({
        status: 'success',
        isAdmin: res.isAdmin,
        scope: res.scope,
        isGlobal: isGlobalScope(res.scope) // Helpful info
    });
}

function registerMember(ss, name, email, institution) {
    const sheetMember = ss.getSheetByName(SHEET_MEMBER_NAME);
    const data = sheetMember.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (String(data[i][1]).toLowerCase() === email.toLowerCase()) return createResponse({ status: 'error', message: 'Email registered' });
    }
    sheetMember.appendRow([name, email, institution || "-", "FALSE"]);
    return createResponse({ status: 'success', message: 'Registered' });
}

function getInstitutions(ss) {
    const sheet = ss.getSheetByName(SHEET_INSTITUSI_NAME);
    const data = sheet ? sheet.getDataRange().getValues().slice(1).map(r => r[0]).filter(Boolean) : [];
    return createResponse({ status: 'success', data: data });
}

function isPerhimagiInstitution(ss, institutionName) {
    if (!institutionName || institutionName === "-") return false;
    const sheet = ss.getSheetByName(SHEET_INSTITUSI_NAME);
    if (!sheet) return false;
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]).toLowerCase() === String(institutionName).toLowerCase()) return true;
    }
    return false;
}

function getInstitutionContact(ss, institutionName) {
    if (!institutionName || institutionName === "-") return DEFAULT_CONTACT;
    const sheet = ss.getSheetByName(SHEET_INSTITUSI_NAME);
    if (!sheet) return DEFAULT_CONTACT;
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]).toLowerCase() === String(institutionName).toLowerCase()) return data[i][1] || DEFAULT_CONTACT;
    }
    return DEFAULT_CONTACT;
}

function createResponse(data) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
