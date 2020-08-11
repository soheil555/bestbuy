function backendLookup(url,method,responseHandler){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){

            responseHandler(this.status,this.response);

    }


    xhr.open(method,`http://127.0.0.1:8000/${url}`)
    xhr.send();

}


export function productsListView(responseHandler){

    backendLookup("api/products/list/","GET",responseHandler);

}

