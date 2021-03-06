export const debounce = (callback, timeout = 0) => {
    let timeoutObj = null;

    return {
        run: (...args) => {
            const context = this;
            clearTimeout(timeoutObj);
            timeoutObj = setTimeout(() => callback.apply(context, args), timeout);
        },

        cancel: () => {
            clearTimeout(timeoutObj);
        },
    };
};
