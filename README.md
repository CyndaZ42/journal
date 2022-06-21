# _Journal_

#### By _**Zac Waggoner**_, _**Seung Lee**_

#### _{Brief description of application}_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## TDD

>Describe: Entry(title, text)
>
>Test: Creates an object with a title and body text.  
>Code: newEntry = new Entry("Hello", "Hello world. This is me.");  
>Output: newEntry { title: "Hello", text: "Hello world. This is me." }  

>Describe: wordCounter()
>
>Test: returns the word count of the body text of an Entry object
>Code: newEntry = new Entry("Hello", "Hello world. This is me.");  
>newEntry.wordCounter();  
>Output: 5  

>Describe: vowelCount()
>
>Test: returns the number of vowels of the body text of an Entry object
>Code: newEntry = new Entry("Hello", "Hello world. This is me.");  
>newEntry.vowelCount();  
>Output: 6

>Describe: consonantCount()
>
>Test: returns the number of consonants of the body text of an Entry object
>Code: newEntry = new Entry("Hello", "Hello world. This is me.");  
>newEntry.consonantCount();  
>Output: 12

>Describe: getTeaser()
>
>Test: returns the first sentence of body text of an Entry object. If sentence is longer than 8 words then only returns first 8 words
>Code: newEntry = new Entry("Hello", "Hello world. This is me.");  
>newEntry.getTeaser();  
>Output: "Hello world."

>Test: returns the first sentence of body text of an Entry object. If sentence is longer than 8 words then only returns first 8 words
>Code: newEntry = new Entry("Princess Bride", "Hello, my name is Inigo Montoya, you killed my father, prepare to die.");  
>newEntry.getTeaser();  
>Output: "Hello, my name is Inigo Montoya, you killed"

## License

Copyright (c) _2022_ _Zac Waggoner_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._
