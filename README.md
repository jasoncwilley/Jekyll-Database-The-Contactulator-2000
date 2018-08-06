
# Jekyll-Database-The-Contactulator-2000

[![N|Solid](http://i63.tinypic.com/netec.png)(http://www.decryptmylife.xyz)

The Contactulator 2000 is a Jekyll driven database with an optional Firebase backend.  While the database can function fine using only Jekyll I decided to incorporate a Firebase backend to speed up the updating process.  This version of the project consists of three parts:

- Sortable Contact List

- Recent Order List that's value can be filtered by multiple keys

- Update Contact Form that allows users to send updates to a Firebase Database

The Contact list and Recent Order sections ultlize List.js to perform the sort and filter functions while some basic javascript enables the Update Contact Form to connect to and update he Firebase database.  

See The Contactulator 2000 in action at http://www.decryptmylife.xyz 

### Motivation

I started this project for several reasons but mostly because there was not (or I could not find) a decent web tutorial that guided users throught the process of creating Jekyll driven database with Firebase backend.  There is probably several out there that I overlooked but I figured what better way to learn these concepts than create my own.  

### Getting Started

In order to get started you need to first verify that you have all the verify all the required software. I have not tested this project with multiple versions of required softward so I recommend using the versions I developed in.  

### Requirements:

- Jekyll 3.8.3
- Bundler 1.16.2
- List.js 1.5.0 <script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>

- Optional:
     - Firebase Realtime Database API_Key  https://www.firebase.com 

Run the following command to ensure you have the required software/versions needed.
```sh
laptop@laptop:~$ jekyll -v
jekyll 3.8.3
```
If you need to install jekyll see my tutorial on how to install jekyll (insert link)
```sh
laptop@laptop:~$ bundler -v
Bundler version 1.16.2
```
If you need to install bundler see my tutorial on installing jekyll it contains bundler installation instructions.

Ensure you have a copy of List.js which can be downloaded here or you can use the CDN above.  

http://listjs.com/overview/download/

What things you need to install the software and how to install them

Give examples

Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example

And repeat

until finished

End with an example of getting some data out of the system or using it for a little demo
Running the tests

Explain how to run the automated tests for this system
Break down into end to end tests

Explain what these tests test and why

Give an example

And coding style tests

Explain what these tests test and why

Give an example
