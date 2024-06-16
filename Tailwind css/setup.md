## How to setup Tailwind css

Step 1  : Run the following commands

```
   npm init -y
   npm install -D tailwindcss
   npx tailwindcss init
```

Step 2 : Update "tailwind.config.js file to include this line"

```
content: ["*.html"]
   or
content: ["./src/**/*.{html,js}"]
```

Step 3: Make "src" folder.In that src folder make "input.css" file.And type the commands in "input.css" file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4:Run this command in terminal."Output.css" file will be created.And this will run continuously.

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

If you dont remember this code then go to "package.json" file and in "scripts" write this code 

```
build= "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```
Now when you will run your code in terminal 
you have to write 

```
  npm run build
```

Step 5: Add your compiled CSS file to the "head" and start using Tailwind’s utility classes to style your content.

```
<link href="./output.css" rel="stylesheet">
```
Step 6: SEt up done.

