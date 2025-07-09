use chrono::Local;
use rand::prelude::*;
use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(Deserialize, Serialize, TS)]
#[ts(export)]
pub struct Transaction<T = Vec<String>> {
    pub id: u8,
    pub error: Option<bool>,
    pub created_at: String,
    pub data: T,
}

impl<T> Transaction<T>
where
    T: TS,
{
    pub fn new(data: T) -> Self {
        let mut rng: ThreadRng = rand::rng();
        let id: u8 = rng.random();
        Self {
            id,
            error: None,
            created_at: Local::now().to_string(),
            data,
        }
    }
}
