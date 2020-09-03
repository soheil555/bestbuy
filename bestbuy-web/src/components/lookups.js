function backendLookup(url,method,responseHandler){

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){

            responseHandler(xhr.status,xhr.response);

    }


    xhr.open(method,`http://127.0.0.1:8000/${url}`,true);

    xhr.responseType = 'json';

    xhr.send();

}


export function productsListView(responseHandler,q=""){

    backendLookup(`api/products/list/${q}`,"GET",responseHandler);

}


export function productDetailView(responseHandler,slug=""){

    backendLookup(`api/products/detail/${slug}/`,"GET",responseHandler);


}
