#!/bin/bash
root=../../../..
name=$1
language=$2
url=$3

simple_name=$(echo $name | sed "s/[^[:alnum:]]/ /g" | tr -s ' ')
echo "Creating '$simple_name' folder for '$language'"

src_path=$language/src
folder_path=$simple_name/$src_path

# Create folder
mkdir -p "$folder_path"
cd "$simple_name"

# Create src file
case $language in
    "JavaScript")
        language=js
        ;;
    "Java")
        language=java
        ;;
    *)
        echo "unknown language '${language}' using default 'js'"
        language=js
esac

touch "${src_path}/Solution.$language"

# Create README for challenge statement
kebab_name=$(echo $simple_name | tr '[:upper:]' '[:lower:]' | sed "s/ /-/g")
python3 "$root/scripts/grab-problem.py" "$kebab_name" "$url"