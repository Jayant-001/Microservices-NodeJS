app1, app2, and app3 are three different services running on different PORTs (which can be on different URLs).

api gateway identify the type of request coming from the client and create a proxy for the corresponding service app.


# benefit of it
If any particular service crashes, all other services will not be affected, and they will be running fine.