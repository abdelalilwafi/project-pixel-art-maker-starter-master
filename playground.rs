use std::env;
use std::error::Error;
use std::path::{Path, PathBuf};

fn get_cwd() -> Option<PathBuf> {
    let mut cwd = env::current_dir().ok()?;

    if let Some(home) = env::home_dir() {
        if let Ok(cwd_without_home) = cwd.strip_prefix(home).map(Path::to_owned) {
            cwd = PathBuf::from("~");

            if cwd_without_home != Path::new("") {
                cwd.push(cwd_without_home);
            }
        }
    }

    Some(cwd)
}

fn main() -> Result<(), Box<dyn Error>> {
    print!("{}", get_cwd().unwrap().display());
    Ok(())
}
