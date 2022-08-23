#include <stdio.h>
#include <string.h>
#include <sys/types.h>
#include <dirent.h>
#include <setjmp.h>

#define NAME_LENGTH 1000
#define FILES_LENGTH 100

#define TRY do { jmp_buf buf_state; if ( !setjmp(buf_state)) {
#define CATCH } else {
#define ENDTRY }} while(0)
#define THROW longjmp(buf_state, 1)

struct Language {
  char name[20];
  char ext[10];
  int lines;
};

struct Stack {
  int index;
  char nodes[NAME_LENGTH][FILES_LENGTH];
};

char* popStack (struct Stack *s) {
  s->index--;
  printf("%s\n", s->nodes[s->index]);
  return s->nodes[s->index];
}

void addToStack (struct Stack *s, char str[]) {
  strcpy(s->nodes[s->index], str);
  s->index++;
}

int stackIsEmpty (struct Stack *s) {
  return s->index == 0;
}

int fileLength(char fileName[]) {
  // printf("%s\n", fileName);
  FILE *fp = fopen(fileName, "r");
  if (fp) {
    int lines = 0;

    if (strstr(fileName, ".ipynb")) {
      while(!feof(fp))
        { 
          if (
            fgetc(fp) == 'e' &&
            fgetc(fp) == '"' &&
            fgetc(fp) == ':') {
            lines++;
          }
        }
    } else {
      while(!feof(fp))
      {
        int ch = fgetc(fp);
        
        if (ch == '\n') {
          lines++;
        }
      }
    }
    if (lines > 100 && strstr(fileName, ".ipynb")) {
      printf("%s - %d\n", fileName, lines);
    }
    return lines;
  }
  return 0;
}

void assignLanguage(
  struct Language *language,
  char name[],
  char ext[],
  int lines) {
  strcpy(language->name, name);
  strcpy(language->ext, ext);
  language->lines = 0;
}

void updateCount(
  struct Language *language,
  int lineIncrement) {
  language->lines += lineIncrement;
}

void iterateThroughFolders(
  struct Language *languages,
  struct Stack *folders) {

  char folder[NAME_LENGTH];
  strcpy(folder, popStack(folders));

  DIR *d;
  struct dirent *dir;
  d = opendir(folder);

  if (d) {
    while ((dir = readdir(d)) != NULL) {
      for (int i=0; i<sizeof(languages); i++) {
        struct Language *language = &languages[i];
        if (strstr(dir->d_name, language->ext)) {
          int size = fileLength(dir->d_name);
          printf("%d", size);
        }
      }

      if (!strstr(dir->d_name, ".")) {
        char folderCopy[NAME_LENGTH];
        strcpy(folderCopy, folder);

        addToStack(
          folders,
          strcat(strcat(folderCopy, "/"), dir->d_name)
        );
      }
    }
    closedir(d);
  }
}

void iterateThroughFolder(
  struct Language *languages,
  char* folder) {

    DIR *d;
    struct dirent *dir;
    d = opendir(folder);

    if (d) {
      while ((dir = readdir(d)) != NULL) {

        char folderCopy[NAME_LENGTH];
        strcpy(folderCopy, folder);
        strcat(folderCopy, "/");
        strcat(folderCopy, dir->d_name);

        if (
          !strstr(dir->d_name, ".") && 
          !strstr(dir->d_name, "node_modules") &&
          strlen(dir->d_name) < NAME_LENGTH
        ) {

          iterateThroughFolder(languages, folderCopy);

        } else {

          for (int i = 0; i < sizeof(languages)+1; i++) {
            struct Language *language = &languages[i];

            char* ext = strrchr(dir->d_name, '.');
            // if (strlen(ext) > 4) {
            //   printf("%s\n", ext);
            // }
            
            int extMatch = (
              ext &&
              strcmp(ext, language->ext) == 0 &&
              !strstr(folderCopy, "jquery") &&
              !strstr(folderCopy, "_files") &&
              !strstr(folderCopy, "_cup") &&
              !strstr(folderCopy, "admin") &&
              !strstr(folderCopy, "lib") &&
              !strstr(folderCopy, "wagtut") &&
              !strstr(folderCopy, "assignment") &&
              !strstr(folderCopy, "CS2040S") &&
              !strstr(folderCopy, "NUS Modules")
            );

            if (extMatch) {
              int size = fileLength(folderCopy);
              updateCount(language, size);
            }
          }

        }
      }
      closedir(d);
    }
}

int main() {
  struct Language languages[12];

  assignLanguage(&languages[0], "python", ".py", 0);
  assignLanguage(&languages[1], "javascript", ".js", 0);
  assignLanguage(&languages[2], "java", ".java", 0);
  assignLanguage(&languages[3], "ruby", ".rb", 0);
  assignLanguage(&languages[4], "r", ".r", 0);
  assignLanguage(&languages[5], "c", ".c", 0);
  assignLanguage(&languages[6], "rust", ".rs", 0);
  assignLanguage(&languages[7], "cpp", ".cpp", 0);
  assignLanguage(&languages[8], "bash", ".sh", 0);
  assignLanguage(&languages[9], "php", ".php", 0);
  assignLanguage(&languages[10], "python", ".ipynb", 0);
  assignLanguage(&languages[11], "vue", ".vue", 0);

  // struct Stack folders;
  // folders.index = 0;

  // addToStack(&folders, "../../../..");

  // while (!stackIsEmpty(&folders)) {
  //   iterateThroughFolder(languages, &folders);
  // }

  iterateThroughFolder(languages, "../../../..");
  languages[0].lines += languages[10].lines;
  languages[1].lines += languages[11].lines;

  // for (int i = 0; i < 12; i++) {
  //   printf("%s - %d\n", languages[i].ext, languages[i].lines);
  // }

  FILE *fptr = fopen("../coding-lines.json", "w"); 

  fprintf(fptr, "{\n");
  for (int i = 0; i < 10; i++) {
    // printf("%s - %d\n", languages[i].ext, languages[i].lines);
    fprintf(fptr, "\"%s\": %d", languages[i].name, languages[i].lines);
    if (i < 9) {
      fprintf(fptr, ",");
    }
    fprintf(fptr, "\n");
  }
  fprintf(fptr, "}");

  fclose(fptr);

  return 0;
}