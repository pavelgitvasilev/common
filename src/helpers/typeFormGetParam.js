export const TypeFormParam = (id, useCookies) => {
    const getParameters = window.location.search ? window.location.search.replace('?', '') : '';
    const cookies = document.cookie.split('; ');
    const cookiesString = cookies.join('&');

    return useCookies
        ? `https://form.typeform.com/to/${id}?typeform-welcome=0&${cookiesString}`
        : `https://form.typeform.com/to/${id}?typeform-welcome=0&${getParameters}`;
};
