function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind.charAt(1)} chai`;
    }
    else {
        return kind;
    }
}
console.log(getChai('abc'));
console.log(getChai(5));
function orderChai(size) {
    if (size === "small") {
        return `Serving ${size} chai`;
    }
    else if (size === "large" || size === "medium") {
        return `make extra ${size}`;
    }
    else {
        return 50;
    }
}
console.log(orderChai(10));
class kuladhChai {
    serve() {
        return `serving kuladh chai`;
    }
}
class CuttingChai {
    serve() {
        return `serving cutting chai`;
    }
}
function chai(input) {
    if (input instanceof kuladhChai) {
        return input.serve();
    }
    if (input instanceof CuttingChai) {
        return input.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function servingChaiOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with sugar ${item.sugar}`;
    }
    return `serving custom chai with ${item}`;
}
function makeChai(order) {
    switch (order.type) {
        case "masala":
            return `masala chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break;
        case "cutting":
            return `cuttin chai`;
            break;
        default:
            return `chai`;
            break;
    }
}
function brew(order) {
    if ("spiceleve" in order) {
        return `masala chai`;
    }
}
export {};
//# sourceMappingURL=typeNarrowing.js.map