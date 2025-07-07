use chrono::Local;
use serde::Serialize;
#[derive(Serialize)]
pub struct Transaction<T = Vec<String>> {
    created_at: String,
    pub data: T,
}

impl<T> Transaction<T> {
    pub fn new(data: T) -> Self {
        Self {
            created_at: Local::now().to_string(),
            data,
        }
    }
}
