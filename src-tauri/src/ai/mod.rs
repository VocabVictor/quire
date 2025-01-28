pub mod openai;
pub mod claude;

use std::error::Error;

pub async fn get_suggestions(prompt: &str) -> Result<Vec<String>, Box<dyn Error>> {
    // TODO: 实现 AI 建议获取逻辑
    Ok(Vec::new())
} 