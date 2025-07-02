REQUIREMENT
Install node.js
install npm
install express


INSTALLATION STEPS
1) git clone    https://github.com/yourusername/express-item-api.git
cd express-item-api

INSTALLATION DEPENDENCIES
npm install

START SERVER
node server.js

IN YOUR BROWSER VISIT http://localhost:3000


DOCUMNTATION
BASE URL: http://localhost:3000




Endpoints
Method	Endpoint	    Description
GET	  /	               Health check route
GET	  /items	         Get all items
GET	  /items/:id       Get a single item by ID
POST	/items	         Create a new item
PUT	  /items/:id	     Update an existing item
DELETE	/items/:id	    Delete an item by ID


Sample Request/Response Examples with postman

GET /items        Returns a list of all item
json
[
  { "id": 1, "name": "Item One" },
  { "id": 2, "name": "Item Two" }
]

GET/items/1     returns a single item
json
{ "id": 1, "name": "Item One" }

POST/items
REQUEST JSON(BODY)
json
{ "name": "New Item" }

RESPONSE
json
{ "id": 3, "name": "New Item" }

ERROR RESPONCES
Code	     Scenario	                         Example Message
400	       Missing fields	              { "error": "Name is required" }
404	       Item not found / bad URL	    { "error": "Item not found" }
500	       Server error	                { "error": "Something went wrong!" }


