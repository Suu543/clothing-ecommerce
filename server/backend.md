## Backend API Setup with Node.js and MongoDB

- We have completed a first major section in client side. However we want to use our own node server with mongoDB, which means the firebase client-side implementation pretty much ends here. We'll use firebase to only log the user and get token. 

- In our backend we will validate that token using firebase admin so that our app is well secured. What I mean by secure is that if we don't check the validity of token in the backend, then anyone can send anything as token to get access to protected routes/resoureces. 

- Once we implement firebase admin in backend, when user register or login to our app, we will create or update user in MongoDB. Then we will come back to our login/register page and make some adjustments so that when user login, the response is from our backend... 