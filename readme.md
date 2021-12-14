# E-Commerce Website for Everyday Products

This repo has the backend modules necessary for running the e-commerce website.

## Problem Statement:

E-commerce provides an easy way to sell products to a large customer base. However, there is a lot of competition among multiple e-commerce sites. When users land on an e-commerce site, they expect to find what they are looking for quickly and easily. Also, users are not sure about the brands or the actual products they want to purchase. They have a very broad idea about what they want to buy. In this project, we are building an e-commerce website hosting products in multiple categories for users to buy and for users to have a hassle-free experience.

## Solutions Statement:

In this project we have created an e-commerce application which is easy to access and user friendly. We have used MERN stack to build the application.

There are two kinds of users using our application.

- Shopper

- Admin.

The shopper has the ability to go through a list of products, search for a particular product and even add reviews to the products. Admin is a special type of user who has the ability to modify, create and delete different types of products.

It is important to note that only admins can create,delete and modify a product.

The web application is built using the MERN stack, where the DB is hosted in Mongo Atlas and we would use Node and express to communicate with the DB and React for the UI.

## User Description:

As iterated above, there are two different kinds of users. So, in this section we describe the user experience for both those types of users.

There is a common login screen, where the user would choose if they are a shopper or an admin. And based on the type they choose and the credentials that they provide we authenticate and authorize the user with certain functionalities.

- A shopper can only search for a product, look through the available list of products, and write reviews for those products.
- An admin however can create, delete, modify and search for a product.

## SETUP

`npm install`

## How to use
`node index.js`
    
- This will connect you to the DB hosted in Mongo Atlas.
