// tutorial =>  https://www.youtube.com/watch?v=GiklAlzdjd0&lc=UgzalQ5jYsKYEWCPH2d4AaABAg.9xW3zU5MFWM9xWMPnnF0_Q

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan("dev"));

const { createProxyMiddleware } = require("http-proxy-middleware");

// proxy URLs
const auth = "http://localhost:4001";
const payment = "http://localhost:4002";
const products = "http://localhost:4003";

// if match with a particular service -> create a Proxy and redirect request to particular service domain

// if it is a auth request => create a proxy and redirect request to auth domain

/**
 // ------------------- -> create a middleware for each service || alternative way of loop 
app.use(
    "/auth",
    createProxyMiddleware({
        target: auth,
        changeOrigin: true,
    })
);

app.use(
    "/payment",
    createProxyMiddleware({
        target: payment,
        changeOrigin: true,
    })
);

app.use(
    "/products",
    createProxyMiddleware({
        target: products,
        changeOrigin: true,
    })
);

 */

/**
 *  if we have a lots of services then writing app.use() for all services will be an overhead
 *  so we can create an array of all services and loop through the array
 *  if request match with any particular service URL -> create a proxy and redirect to service domain
 *  */

const proxies = [
    {
        path: "/auth",
        domain: "http://localhost:4001",
    },
    {
        path: "/payment",
        domain: "http://localhost:4002",
    },
    {
        path: "/products",
        domain: "http://localhost:4003",
    },
];

// if match to any service path redirect request to service domain
proxies.forEach((proxy, index) => {
    app.use(
        proxy.path,
        createProxyMiddleware({
            target: proxy.domain,
            changeOrigin: true,
        })
    );
});

app.use((req, res) => {
    res.send("API gateway - Invalid request");
});

app.listen(PORT, () => {
    console.log("API gateway is listening on PORT", PORT);
});
