use std::error::Error;

pub fn handle_error(err: Box<dyn Error>) -> String {
    format!("Error: {}", err)
} 