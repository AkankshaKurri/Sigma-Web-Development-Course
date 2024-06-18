## Mongodb npm

Link: "https://www.npmjs.com/package/mongodb"

Step 1: Make "index.js" file in "Installing mongooase and using it with express"

Step 2: Run this command in terminal to install "package.json"

```
 npm init -y
```
Step 3: Run this command in terminal to install "mongodb" as dependencies in "package.json"

```
  npm install mongodb
```

Step 4:If you are a Typescript user, you will need the Node.js type definitions to use the driver's definitions.Run this command in terminal to install "@types/node" as devdependencies in "package.json"

```
  npm install -D @types/node
```

Step 5:Open "Mongodb Compass" and start "connection"

Step 6:Paste this code in "index.js" to connect to mongodb

```
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

```

Step6: Now you can run any command by writing this code in terminal

```
  node index.js
```
## Different ways 

1.Insert a Document

Add to index.js the following function which uses the insertMany method to add three documents to the documents collection.The insertMany command returns an object with information about the insert operations.

```
const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);
```


2.Find All Documents

Add a query that returns all the documents.
This query returns all the documents in the documents collection. If you add this below the insertMany example, you'll see the documents you've inserted.

```
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
```


3.Find Documents with a Query Filter

Add a query filter to find only documents which meet the query criteria.
Only the documents which match 'a' : 3 should be returned.

```
const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
```

4.Update a document
The following operation updates a document in the documents collection.
The method updates the first document where the field a is equal to 3 by adding a new field b to the document set to 1. updateResult contains information about whether there was a matching document to update or not.

```
const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
console.log('Updated documents =>', updateResult);
```

5.Remove a document
Remove the document where the field a is equal to 3.

```
const deleteResult = await collection.deleteMany({ a: 3 });
console.log('Deleted documents =>', deleteResult);
```

6.Index a Collection
Indexes can improve your application's performance. The following function creates an index on the a field in the documents collection.

```
const indexName = await collection.createIndex({ a: 1 });
console.log('index name =', indexName);
```

