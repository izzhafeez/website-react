use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::Path;

// struct Logo {
//     name: String,
//     import_statement: String
// }

/*

When downloading a new image into this website project, I often have to register this as part of the "logo-controller" in JavaScript code. This is a very tedious process, as I would need to open the file, insert the image at multiple points, and commit-push this new file.

This Rust project streamlines this process, by writing to a JavaScript file, instead of having to do it manually. Essentially, the code scrapes the logo folder, and reads the files within it. Then, using some string parsing, we standardise these strings into their appropriate format.

Finally, we write the JavaScript code line by line, until we get our desired JavaScript code.

I also intended to create a struct for this purpose, which would include the logo's name and import statement. However, I later found this to be unnecessary, and wastes more memory, whereas the import statement purely relies on the name and nothing much else.

*/
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
