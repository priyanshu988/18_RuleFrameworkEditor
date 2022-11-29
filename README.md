# OVERVIEW

1.  Our project is used for validating conditional constructs only.
2.  The main components comprise of rule adder, rule checker and validation.
3.  Both adder and checker are supposed to authenticate to the server before performing their usual function.
4.  Once validated, the checker's code can be converted into hash where the hash value will be displayed in the alert box as well as stored in the DB.
5.  Checker can test his code against any of the rules that the adder has uploaded prior.  

**NOTE: Invalid code CANNOT be converted into hash.**


# EXECUTION

1. Open two terminals concurrently.
2. In the first terminal: 
```
cd Server
npm install
node app.js 
```
3. In the second terminal:
```
cd Client
npm install
npm start
``` 

# ASSUMPTIONS

1. In input format, tokens should be *SPACE SEPARATED*
2. Conditional constructs are given as input in separated values.
3. Only the skeleton structure of the code is syntactically checked.
    E.g. if ( _expr_ ) { }, ----> here only 'if','(', ')','{','}' will be verified. 
    The expr or the part that follows if statement will be ignored.









