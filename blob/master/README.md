
Assignment Four
===============
**Purpose**
The purpose of this assignment is to get comfortable working with backend services (or BaaS). Apigee provides a free backend service with your Apigee Edge account. We will be storing and retrieving data through this service. The backend stores data in JSON snippets and canqueriedsimilartoanSQLdatabase. Refer to the resources section for more information regarding the backend service. The starting backend organization is named “Sandbox”, use this one for your backend.
You will then store information about movies and create a proxy with a Node.js server to interact with this service.

**Requirements**
>Create a collection in Apigee’s BaaS to hold information about movies.
 Each entry should contain the following: 
 - Title
 - Year released
 - An array of three actors that were in the ﬁlm
 
The movie collection should have at least ﬁve movies. 
> Create a proxy to interact with the backend service.

 - Users should be able to get information about movies through the proxy.
 - Users should be able to query a speciﬁc movie, as well as a list of them. 
 - Ensure incoming entities contain the necessary information. Forexample, if a movie does not contain actors, the entity should not be created and an error returned to the user.
 - Users should be able to delete existing entries from the BaaS through the proxy. 
 - Follow best practices when creating theproxy ,i.e. there should be diﬀerent paths based on the collection and operation.
**Resources**
You can connect to Apigee’s BaaS through the dashboard (page you see when ﬁrst signing into Edge) by selecting BaaS or http://appservices.apigee.com 
http://apigee.com/docs/api-baas 
Apigee BaaS documentation. 
Contains information about querying the service, creating entities, etc. Feel free to use the Node.js SDK mentioned here, although
not required.


----------


     