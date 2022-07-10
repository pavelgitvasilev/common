import { useEffect } from 'react';

export const useGetOfferParam = () => {
  useEffect(() => {
    const price = document.querySelector('.price-sub');
    const offerMax = document.querySelector('.offer-max');
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamPrice = queryParams.get('price');
    const queryParamMaxAmount = queryParams.get('maxAmount');

    if (queryParamPrice) {
      price.innerHTML = queryParamPrice;
    }

    if (queryParamMaxAmount) {
      offerMax.innerHTML = queryParamMaxAmount;
    }
  }, []);
};
