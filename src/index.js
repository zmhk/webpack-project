async function component() {
    var element = document.createElement('div');
    const _ = await import(/* webpackChunkName:"lodash"*/'lodash');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    return element;
}

component().then(com => {
    document.body.appendChild(com);
})