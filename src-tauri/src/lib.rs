pub mod thought_manager;
pub mod transaction;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(debug_assertions)] // only enable instrumentation in development builds
    let devtools = tauri_plugin_devtools::init();

    tauri::Builder::default()
        .plugin(devtools)
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            thought_manager::scan_dir,
            thought_manager::create_thought
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
