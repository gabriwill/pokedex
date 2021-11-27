String.prototype.capitalize = function (): string {
    return String(this) ? (String(this)[0].toUpperCase() + String(this).slice(1)) : '';
}
String.prototype.stringFormat = function () {
    const s = String(this).split('-').map(e => e.capitalize());

    return s.join(' ').trim();
}

export { }