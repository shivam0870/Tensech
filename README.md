API_KEY = 47e60617-adf6-4988-bf65-c6793be487ce

Task: Create a RESTful API with five endpoints using the provided Pantry API:

Create (POST): Implement an endpoint, e.g., /add-item, that allows users to add key-value pairs to the Pantry key-value store. You should provide a way for users to specify both the Pantry ID and the basket key in the request payload.

Read (GET): Implement an endpoint, e.g., /get-item, that allows users to retrieve the value associated with a specified basket key from the Pantry key-value store. Users should provide both the Pantry ID and the basket key in the request.

List Baskets (GET): Implement an endpoint, e.g., /list-baskets, that allows users to list all baskets under a specified Pantry using the Pantry ID. Users should be able to filter baskets by name.

Update (PUT): Implement an endpoint, e.g., /update-item, that allows users to update the value associated with a specified basket key in the Pantry key-value store. Users should provide both the Pantry ID and the basket key in the request, along with a new payload.

Delete (DELETE): Implement an endpoint, e.g., /delete-item, that allows users to delete a specific basket by providing the Pantry ID and basket key.

Dockerization:

Dockerize your API project within the same time frame and make sure your container is exposting the API on port 9443.

Please make sure to publish your docker image to docker hub.

Prerequisite: Before you proceed with the assessment, please follow these steps to create a Pantry on Pantry Cloud:

1. Go to https://getpantry.cloud/.

2. Enter your email address and a unique pantry name of your choice.

3. Click the "Create Pantry" button to generate your unique Pantry ID.

Once you have your Pantry ID, you can use it to complete the assessment tasks

Endpoints:

Use the following endpoints from the Pantry API for your project:

Create (POST): https://getpantry.cloud/apiv1/pantry/pantry id/basket/basket key

Read (GET): https://getpantry.cloud/apiv1/pantry/{pantry id/basket/(basket keyl List Baskets (GET): https://getpantry.cloud/apiv1/pantry/{pantry id}

Update (PUT): https://getpantry.cloud/apiv1/pantry/{pantry id/basket/{basket key!

Delete (DELETE): https://getpantry.cloud/apiv1/pantry/pantry id/basket/basket key)

S

*Note-

Pantry id to be used in the above-mentioned endpoints is to be gathered from the prerequisites step. Basket_key is your unique key for storing any key value pair in the pantry.

The request body in the POST/PUT can be any JSON of your choice. Define your request class accordingly.

Filtering

by

Implement the ability to filter baskets by name using static list methods within your code. This means you should retrieve the list of baskets from the Pantry API and then filter them in your code based on the provided name filter.

Error

Implement proper error handling for cases such as invalid requests, key not found, or API errors


