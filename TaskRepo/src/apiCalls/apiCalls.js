import {Strings} from '../values';

async function apiRequest(method, url, headers, callback, params, errorMsg, callbackFailure, props) {
        
                var body;
                var query = '';
                if (method === 'GET') {

                        //TODO need to implement fecth using async-await ref- https://facebook.github.io/react-native/docs/network.html
                        fetch(url + query, {
                            method
                            }).then((response) => {
                            var resJson;
                            Utility.log('-------------->' + JSON.stringify(response))
                            resJson = response.json();
                            return resJson;
                        })
                            .then((responseJson) => {
                                if (!responseJson) {
                                    return;
                                }

                                Utility.log("response : " + url + "    =>  " + JSON.stringify(responseJson.code));
                                if (responseJson.statusCode != 200) {
                                    alert("Please try again");
                                    callbackFailure(responseJson);
                                    return;
                                }

                                if (callback) {

                                    callback(responseJson);
                                }

                            }).catch((error) => {
                            Utility.log("Error from Server Request :::::: " + error);
                            if (callbackFailure) {
                                callbackFailure();
                            }
                        });
                    

                } else if (method === 'POST') {
                    query = paramsToUrlQueryParams(params);
                } else if (method === 'JSON_POST') {
                    body = params;
                    method = 'POST';
                }

}

function paramsToUrlQueryParams(params) {

    var esc = encodeURIComponent;
    var query = "";
    if (params) {
        query = '?';
        query += Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    }
    return query;
}

export function searchLocationBaseDataApi(params,extraData, callbackSuccess, callbackFailure) {

    apiRequest('GET', Strings.SEARCH_LocationData_API+extraData, null, callbackSuccess, true, params, null, null, callbackFailure, null);
}

export function searchLocationBaseDataApiss(params,extraData, callbackSuccess, callbackFailure, props) {

    apiRequest('GET', Strings.SEARCH_LocationData_API+extraData, null, callbackSuccess, true, params, null, null, callbackFailure, null);

}

