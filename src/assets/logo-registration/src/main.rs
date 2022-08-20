use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::Path;

// struct Logo {
//     name: String,
//     import_statement: String
// }

fn main() {
    let logo_paths = fs::read_dir("../logo/").unwrap();
    let logo_count = logo_paths.size_hint().0;
    // let mut logos: Vec<Logo> = Vec::<Logo>::with_capacity(logo_count);
    let mut logo_names: Vec<String> = Vec::<String>::with_capacity(logo_count);
    let mut import_statements: Vec<String> = Vec::<String>::with_capacity(logo_count);

    for logo_path in logo_paths {
        let cleaned_logo_path: String = logo_path
            .unwrap()
            .path()
            .display()
            .to_string()
            .replace("..", ".");

        let logo_name: &str = &cleaned_logo_path
            .split("/")
            .collect::<Vec<&str>>()[2]
            .replace(".png", "");

        let import_statement: String = format!("import {} from '{}';", logo_name, cleaned_logo_path);

        // let logo = Logo {
        //     name: logo_name.to_string(),
        //     import_statement: import_statement
        // };

        // logos.push(logo);
        
        if logo_name != ".DS_Store" {
            logo_names.push(logo_name.to_string());
            import_statements.push(import_statement);
        }
    }

    let logo_names_formatted: Vec<String> = logo_names
        .iter()
        .map(
            |name| format!("{}: {},", name, name)
        )
        .collect();

    let logo_names_in_brackets: String = format!(
        "var logos = {{{}}};",
        logo_names_formatted.join("\n")
    );

    let final_string: Vec<String> = vec![
        import_statements.join("\n"),
        logo_names_in_brackets,
        String::from("export default logos;")
    ];

    let file_path = Path::new("../logo-controller.js");
    let mut file = File::create(&file_path).expect("Unable to create");
    write!(file, "{}", final_string.join("\n\n")).expect("Unable to write");
}
