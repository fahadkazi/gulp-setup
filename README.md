# gulp-setup

Dependencies
```gulp```
```gulp-concat```
```gulp-rev```
```gulp-concat-css```
```gulp-order```
```gulp-util```

# Third party libraries

All third party plugin's ```CSS``` and ```JS``` files will be added in vendors directory. Moving forward if you are adding any new plugins your ```CSS``` and ```JS``` files should be in vendors directory. Just add the files and gulp will take care of the rest. If the plugin has dependency on some other plugin make sure it is added in the gulpfile's order function which you can refer to the deppendency section above.

# Application CSS and JS (this might change)

All JS files will be added to ```JS``` directory and the ```CSS``` files will be added in ```assets/css``` directory. Moving forward if you're adding any new ```JS``` or ```CSS``` files it should be in the respective folders.

# The gulp process

Following are the tasks that will run

VendorScripts

Gulp will find all the ```JS``` files in the ```vendors/js``` directory and it will concat all those files in order(check gulp-order) of the dependencies. And then it will create a file named ```vendors.js``` in dist directory.

VendorStyles

Gulp will find all the ```CSS``` files in the ```vendors/css``` directory and it will concat all those files. And then it will create a file named ```vendors.css``` in dist directory.

AppScripts

Gulp will find all the ```JS``` files in the ```JS``` directory and it will concat all those files. And then it will create a file named ```app.bundle.js``` in dist directory.

AppStyles

Gulp will find all the ```CSS``` files in the ```assets/css``` directory and it will concat all those files. And then it will create a file named ```app.bundle.css``` in dist directory.

Rev

Gulp will find all the files in ```dist``` directory and it will create a revised versioned of those files in the dist directory itself. These versioned files will then be used on the frontend.

