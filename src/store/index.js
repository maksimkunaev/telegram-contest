const initial = {
    name: 'webApp',
    messages: 1,
};

const store = new Proxy(initial, {
    set(target, prop, val) {
        target[prop] = val;

        console.log('updated', );

        updateFunctions.forEach(update => update());
        return true;
    }
});
const updateFunctions = [];

function connect(root) {
    updateFunctions.push()
};
