# WebAPI_HW4

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="3b1a2b235e1985dac688"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

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


     
