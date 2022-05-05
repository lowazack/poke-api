import {useEffect, useRef, useState} from "react";

export default function SearchingUnown() {
    const canvasRef = useRef();
    const requestIdRef = useRef(null);
    const particles = useRef([]);
    const particleLimit = 5;
    const imagesCache = useRef([]);

    const imageUrls = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-a.png",
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-b.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-c.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-d.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-e.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-f.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-g.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-h.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-i.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-j.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-k.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-l.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-m.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-n.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-o.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-p.png',
    ]

    const [width, setWidth] = useState()
    const [height, setHeight] = useState()

    function Particle(i) {
        this.id = i;
        this.active = false;
    }

    Particle.prototype.build = function () {
        let ctx = canvasRef.current.getContext('2d')
        this.x = Math.floor((Math.random() * width));
        this.y = Math.floor((Math.random() * height));
        this.r = rand(7, 2, 1);
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.gravity = .05;
        this.rising = true
        this.opacity = 0.05


        this.img = imagesCache.current[Math.floor(Math.random() * imagesCache.current.length)]


        ctx.globalAlpha = this.opacity

        if (this.img){
            ctx.drawImage(
                this.img,
                this.x, this.y,
                90, 90
            );
            this.active = true;
        }
    };

    Particle.prototype.draw = function () {
        let ctx = canvasRef.current.getContext('2d')
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.r = Math.abs(this.r - .05);


        if (this.rising){
            this.opacity += (this.id + 0.5) * 0.005;
        }
        else {
            this.opacity -= (this.id + 0.5) * 0.005;
        }


        if (this.rising && this.opacity >= 1){
            this.rising = false;
        }
        else if(this.opacity <= 0){
            this.active = false
        }
        ctx.globalAlpha = this.opacity


        ctx.drawImage(
            this.img,
            this.x, this.y,
            90, 90
        );

    };

    function cacheImages() {
        for (let url in imageUrls) {
            let image = new Image;
            image.src = imageUrls[url]
            imagesCache.current.push(image)
        }
    }

    useEffect(() => {
        cacheImages()
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }, [])



    useEffect(() => {
        if (canvasRef.current && width && height) {
            for (let int = 0; int < particleLimit; int++) {
                particles.current.push(new Particle(int))
            }
            requestIdRef.current = requestAnimationFrame(tick);
        }
        return () => cancelAnimationFrame(requestIdRef.current)
    }, [width, height])

    function tick() {
        if (!canvasRef.current) return;
        renderFrame();
        requestAnimationFrame(tick);
    };

    function renderFrame() {
        let ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0, 0, width, height);
        for (let int = 0; int < particleLimit; int++) {
            if (particles.current[int].active === true) {
                particles.current[int].draw();
            } else {
                particles.current[int].build();
            }
        }
    };

    function rand(max, min, _int) {
        max = (max === 0 || max) ? max : 1
        min = min || 0
        let gen = min + (max - min) * Math.random();
        let val = (_int) ? Math.round(gen) : gen;
        return val
    };

    return (
        <canvas style={{position: "fixed", left: 0, top: 0, zIndex: -1}} className="absolute" width={width} height={height} ref={canvasRef}/>

    )
}

