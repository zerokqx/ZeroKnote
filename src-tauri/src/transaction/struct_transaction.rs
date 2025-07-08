use chrono::Local;
use rand::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
pub struct Transaction<T = Vec<String>> {
    pub id: u8,
    pub error: Option<bool>,
    pub created_at: String,
    pub data: T,
}

impl<T> Transaction<T> {
    pub fn new(data: T) -> Self {
        let mut rng = rand::rng();
        let id = rng.random();

        Self {
            id,
            error: None,
            created_at: Local::now().to_string(),
            data,
        }
    }
}
