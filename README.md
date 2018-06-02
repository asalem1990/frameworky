# Frameworky's framework
UI Framework

## Installing:

``` bash
# clone the starter project
git clone https://github.com/asalem1990/frameworky.git
cd <bath_to_frameworky_starter_project>/
# example:
cd /home/projects/frameworky

# install dependencies
npm install

# serve the assets
gulp

# serve the html in a live server -this needs to be running on a different terminal tab-
npm start

```

## documentation

### The project has mainly three directories:
``` bash
1- assets/ : this will holds the generated assets files by gulp
2- src/ : this will holds the source files where you will work on directly, like the SASS files and the js files.
3- component/ : this will hold the html page parts, like the navbar and the footer.
```

### The html components work on this way:
``` bash
1- each component should have a <template/> wrapper, inside it you will implement the needed html
2- the page where you include the component in should have:
  a- in the <head/> you will add a <link rel="import" ref="$reference" href="./components/$component_name.html">
  b- in the body <$reference-template />
  ```

#### example
in the "/components/navbar.html":
``` bash
  <template>
    <navbar>
      <li>
        <a href="#">Link</a>
      </li>
    </navbar>
  </template>
```

in the "/html.html":
``` bash
<!doctype html>
<html lang="en">
  <head>
    <!-- COMPONENT IMPORTING -->
    <link rel="import" ref="navbar" href="./components/navbar.html">
  </head>
  <body>
    <navbar-template></navbar-template>
  </body>
</html>
```


For detailed explanation on how things work, consult us by contacting on this email hey@ninjitsu.co.
