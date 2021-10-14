
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# BookSearchGraphQL 

## Table of Contents
1. [Description](#descrip) 
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Contributing](#contri)
6. [Tests](#test)
7. [Questions](#quest)

---------------------------------------
## 1. Description <a id="descrip"> </a>
Project entails refactoring a MERN stack Restful Google API used to search for books. Refactored code to incorporate GraphQL technology, replacing the Express routes scheme. All functionality was preserved in refactoring including signup, login/logout, booksearch, addbook and delete book. 

Technologies used : MERN stack + GraphQL 

----------------------------------------------

## 2. Installation <a id="install"></a>
Installation Instructions: 

Deployed on Heroku (see link below).  New users sign up and then login. Use navigation tab to search for books and click on add button to add to you user profile.  On saved books page the count of books is presented along with picture and description of the book.  You can also delete a book from your list of save books by clicking a button in the book card.  

To use code from the project, fork repo, at top level of file structure 'npm i' to load all libraries in both client and server.  Then type in terminal at top level - npm run develop to get localhost:3000 deployment.  Graphql Playground is available on port localhost:3001.

Files used in API found - GitHub :
https://github.com/gmcmurray/BookSearchGraphQL
API deployed here - 
Heroku : https://booksearchgraphql.herokuapp.com/

-------------------------------------------------

## 3. Usage <a id="usage"></a>
The API is targeted to be used to search and save books on internet. After signingup and logging in , type in title of book, submit and top 10 book returns will be presented. Save any books you would like by clicking on save button in book card. Saved books can be found by navigating over to saved books with a click on "See Your Books" in Nav bar.   You can remove any of these with a delete button.  Your book selection is saved in a database so next time you login you can view these.

-----------------------------------------------------

## 4. License <a id="lic"></a>

License covering API:
MIT License
    Copyright (c) <2021> <George McMurray>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

----------------------------------------------

## 5. Contributing <a id="contri"></a>
george mcmurray

-------------------------------------------------

## 6. Tests <a id="test"></a>
The following tests were conducted on the API:
Tools used to develop application Insomnia to execute RESTful queries on the original API, GraphQL Playground and Robo3T validate the refactored code. 

----------------------------------------------------------------

## 7.  Questions <a id="quest"></a>
For any questions you can email me at:
gmcmurray1493@gmail.com

My github username is gmcmurray

---------------------------------
