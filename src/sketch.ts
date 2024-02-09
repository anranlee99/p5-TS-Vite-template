import p5 from 'p5';

new p5((p: p5) => {
    let x = 200; 
    let y = 200; 

    const width = Math.min(window.innerWidth, 1920);
    const height = Math.min(window.innerHeight, 1080);

    p.setup = () => {
        p.createCanvas(width, height);
        p.background("white");
    };

    p.draw = () => {
        p.background("white"); // Redraw background to clear previous frame

        p.arc(x, y, 80, 80, 0, p.PI + p.QUARTER_PI, p.CHORD);
    };

});
