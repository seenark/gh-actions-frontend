use std::env;
use std::process::Command;

fn exec(domain: &str, dist_folder: &str) {
    println!("domain: {}, dist_folder: {}", domain, dist_folder);
    let output = Command::new("npx")
        .arg("surge")
        .arg(dist_folder)
        .arg("--domain")
        .arg(domain)
        .output();
    match output {
        Ok(output) => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            println!("stdout: {}", stdout.trim());

            if !output.stderr.is_empty() {
                let stderr = String::from_utf8_lossy(&output.stderr);
                println!("stderr: {}", stderr.trim());
            }
        }
        Err(err) => println!("Error: {}", err),
    }
}

fn main() {
    // let login = env::var("SURGE_LOGIN").unwrap();
    // let token = env::var("SURGE_TOKEN").unwrap();
    let domain = env::var("SURGE_DOMAIN").unwrap();
    let dist_folder = env::var("SURGE_DIST_FOLDER").unwrap();

    exec(&domain, &dist_folder);
}
