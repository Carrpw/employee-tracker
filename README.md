# Employee Tracker

## Files Included:

* Javascript x1
* Json x2
* gitignore x1
* node_modules
* readme x2
* sql x1

### Description of Process

I started this project by making an sql file that I would set up with the name of the database as well as the table names. I then filled the tables out with the neccessary columns I would need for each before inserting starting values into each of the tables so that the user can understand the structure and add more or view it later. Once that was done I added a package.json using a git init and then installed mysql and inquirer into it before doing an npm install. I then remembered I needed to go back into mysql workbench to use the sql file I made and set up the database. Once the database was working properly I started my javascript file starting with adding the required const for inquirer and mysql since I would be heavily be using both. Next I made sure that mysql properly connected to the database before starting my first function to provide options to the user once they started up the application. Depending on which of the options they chose it would start a different function using a switch-case, the first three functions were just for viewing the three seperate tables that were made. The next three were for adding a row whichever table the user chose using inquirer and then inserting the users answer into the table. My last function was to simply stop the application and I attempted to join the tables but did not yet get there. 