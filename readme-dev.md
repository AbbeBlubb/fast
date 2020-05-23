## Dev server

- npm run devbuild; builds without contenthash, thus making the webpack dev server work properly
- npm start
- npm run build; builds with contenthash aimed for deploy



## Copy files

Powershell:
Copy-Item -Path "C:\Users\alber\Documents\fast\build\*" -Destination "C:\Users\alber\Documents\fast\docs" -Recurse

Linux: will not overwrite files, so need to delete the files in the docs folder first
cp -r build/* docs/
