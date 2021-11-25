String.prototype.capitalize = function () {
    return (String(this)[0].toUpperCase() + String(this).slice(1));
}
String.prototype.stringFormat = function () {
    const s = String(this).split('-').map(e => e.capitalize());

    return s.join(' ');
}

export { }