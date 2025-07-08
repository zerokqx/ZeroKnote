use crate::transaction::struct_transaction::Transaction;
use std::fs::{read_dir, write};
#[tauri::command]
pub fn scan_dir(dir: String) -> Result<Transaction<Vec<String>>, String> {
    let entries = read_dir(&dir).map_err(|e| e.to_string())?;
    let mut files: Vec<String> = Vec::new();
    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        files.push(entry.file_name().to_string_lossy().into_owned());
    }
    Ok(Transaction::new(files))
}
#[tauri::command]
pub fn create_thought(text: Transaction<String>) -> Result<Transaction<bool>, String> {
    write(text.id.to_string(), text.data.to_string()).map_err(|e| e.to_string())?;
    Ok(Transaction::new(true))
}
