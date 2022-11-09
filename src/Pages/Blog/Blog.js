import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What is the Difference between SQL and NoSQL?
        </h1>
        <div className="my-10">
          <span className="text-xl lg:text-2xl font-bold">SQL: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            1. SQL databases are a type of system software that supports
            management, analysis, capturing and querying the structured data in
            a relational format.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            2. A language used to communicate with databases for storage,
            deletion, updation, insertion and retrieval of data.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            3. SQL was developed in the year 1970 for flat file storage
            problems.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            4. SQL databases support Structured Query Languages.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            5. Supports table based data type.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            6. SQL is best suitable for complex queries, multi-row transactions.
          </p>
        </div>
        <div>
          <span className="text-xl lg:text-2xl font-bold">NoSQL: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            1. NoSQL databases are a type of software that allows to maintain
            and retrieve structured, unstructured, polymorphic data for
            different purposes.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            2. A software to retrieve, store and manage scalability of
            databases.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            3. NoSQL was developed in 2000 as an enhanced version for SQL
            databases for unstructured and semi-structured data.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            4. NonSQL does not have any declarative query language.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            5. Supports document oriented, graph databases, key value
            pair-based.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            6. NoSQL is best suited for unstructured data or documents. Not
            ideal for complex queries.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What is JWT? How does it work?
        </h1>
        <div className="my-10">
          <span className="text-xl lg:text-2xl font-bold">JWT: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
        </div>
        <div>
          <span className="text-xl lg:text-2xl font-bold">How JWT work: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            In authentication, when the user successfully logs in using their
            credentials, a JSON Web Token will be returned. Since tokens are
            credentials, great care must be taken to prevent security issues. In
            general, you should not keep tokens longer than required. Whenever
            the user wants to access a protected route or resource, the user
            agent should send the JWT, typically in the Authorization header
            using the Bearer schema. This can be, in certain cases, a stateless
            authorization mechanism. The server's protected routes will check
            for a valid JWT in the Authorization header, and if it's present,
            the user will be allowed to access protected resources. If the JWT
            contains the necessary data, the need to query the database for
            certain operations may be reduced, though this may not always be the
            case.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What is the Difference between JavaScript and Node JS?
        </h1>
        <div className="my-10">
          <span className="text-xl lg:text-2xl font-bold">JavaScript: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            1. Javascript is a programming language that is used for writing
            scripts on the website.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            2. Javascript can only be run in the browsers.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            3. It is basically used on the client-side.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            4. Javascript is capable enough to add HTML and play with the DOM.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            5. Javascript can run in any browser engine as like JS core in
            safari and Spidermonkey in Firefox.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            6. Javascript is used in frontend development.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            7. Some of the javascript frameworks are RamdaJS, TypedJS, etc.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            8. It is the upgraded version of ECMA script that uses Chrome’s V8
            engine written in C++.
          </p>
        </div>
        <div>
          <span className="text-xl lg:text-2xl font-bold">Node JS: </span>
          <p className="text-lg font-semibold hover:text-emerald-600">
            1. NodeJS is a Javascript runtime environment.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            2. We can run Javascript outside the browser with the help of
            NodeJS.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            3. It is mostly used on the server-side.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            4. Nodejs does not have capability to add HTML tags.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            5. V8 is the Javascript engine inside of node.js that parses and
            runs Javascript.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            6. Nodejs is used in server-side development.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            7. Some of the Nodejs modules are Lodash, express etc. These modules
            are to be imported from npm.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            8. Nodejs is written in C, C++ and Javascript.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          How does Node JS handle multiple requests at the same time?
        </h1>
        <p className="text-lg font-semibold hover:text-emerald-600">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
