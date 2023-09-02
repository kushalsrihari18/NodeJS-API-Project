exports.handler=async(event)=>{
    var response={
        statusCode:404,
        body: JSON.stringify({
            Error: "No Routes",
        }),
    };
    if(event.path=="/api/get-product"){
        response = {
            statusCode: 200,
            body: JSON.stringify({
                ProductName: "Shoe",
                Price: "$100",
            }),
        };
    }
    if(event.path=="/api/get-user"){
        response={
            statusCode: 200,
            body: JSON.stringify({
                UserName: "Kushal",
                Email:"Kushalsrihari@gmail.com",
            }),
        };
    }
    return response;
}