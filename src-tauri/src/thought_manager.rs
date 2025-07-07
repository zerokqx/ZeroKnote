use crate::transaction::struct_transaction::Transaction;
use std::fs::{read_dir, ReadDir};
#[tauri::command]
pub fn read_thought_dir(dir: String) -> Result<Transaction<Vec<String>>, String> {
    let entries = read_dir(&dir).map_err(|e| e.to_string())?;
    let mut files = Vec::new();
    for entry in entries {
        let entry = entry.map_err(|e| e.to_string())?;
        files.push(entry.file_name().to_string_lossy().into_owned());
    }
    Ok(Transaction::new(files))
}
