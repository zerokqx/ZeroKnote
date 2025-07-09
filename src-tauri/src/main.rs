// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use ts_rs::TS;
use zeroknote_lib::transaction::struct_transaction::Transaction;

fn main() {
    Transaction::<String>::export();

    zeroknote_lib::run()
}
