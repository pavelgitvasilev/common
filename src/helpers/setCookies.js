export const setCookie = (name, value, hours) => {
    let date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    let c_value = escape(value) + (hours == null ? '' : ';expires=' + date.toUTCString());
    document.cookie = name + '=' + c_value + ';path=/';
};

export const getCookie = (name) => {
    let results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    if (results) {
        return unescape(results[2]);
    } else {
        return null;
    }
};

export const getAllUrlParameters = (url) => {
    let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    const obj = {};

    if (queryString) {
        queryString = queryString.split('#')[0];
        const arr = queryString.split('&');
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i].split('=');
            let paramNum = undefined;
            let paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });
            let paramValue = typeof a[1] === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();

            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName][paramNum] = paramValue;
                }
            } else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
};

export const setCookiesFromUrlParams = () => {
    let allGetParams = getAllUrlParameters();
    let lifeTime = 1440;

    for (let param in allGetParams) {
        if (allGetParams.hasOwnProperty(param)) {
            setCookie('' + unescape(param), unescape(allGetParams[param]), lifeTime);
        }
    }
};
