pub mod pdf;

use std::error::Error;

pub async fn compile(source: &str) -> Result<Vec<u8>, Box<dyn Error>> {
    // TODO: 实现编译逻辑
    Ok(Vec::new())
} 