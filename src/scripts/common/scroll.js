function smoothScrollTo(element, duration) {

    var targetBlock =
        typeof element === 'string' ?
        document.querySelector('.' + element) :
        element;

    var duration = duration || 300;
    var startPoint = window.pageYOffset;
    var distance = Math.ceil(targetBlock.getBoundingClientRect().top);
    var iteration = 120;
    var endPoint = distance + startPoint;
    var distancePerTick = distance / iteration;
    var sumParts = Math.ceil(startPoint + distancePerTick);
    var tickTime = Math.ceil(duration / iteration);

    var animate = setTimeout(function tick() {
        if (distance < 150 && distance > 0) {
            window.scrollTo(0, endPoint);
            return;
        }
        window.scrollTo(0, sumParts);
        iteration--;
        sumParts += distancePerTick;
        animate = setTimeout(tick, tickTime);
        if (iteration <= 0) {
            clearTimeout(animate);
        }
    }, tickTime)
}

export { smoothScrollTo };