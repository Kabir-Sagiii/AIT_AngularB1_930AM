function fn(x) {
    if (typeof x === 'function') {
        x();
    }
}
fn(8);
