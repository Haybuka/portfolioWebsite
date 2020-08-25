window.addEventListener("load", function () {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        const bods = document.querySelector("body");
        bods.style.background = "black"
        preloader.className += " hidden";
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        count_particles = document.querySelector('.js-count-particles');
        update = function () {
            stats.begin();
            stats.end();
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);;
        var Stats = function () {
            function h(a) {
                c.appendChild(a.dom);
                return a
            }

            function k(a) {
                for (var d = 0; d < c.children.length; d++) c.children[d].style.display = d === a ? "block" : "none";
                l = a
            }
            var l = 0,
                c = document.createElement("div");
            c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
            c.addEventListener("click", function (a) {
                a.preventDefault();
                k(++l % c.children.length)
            }, !1);
            var g = (performance || Date).now(),
                e = g,
                a = 0,
                r = h(new Stats.Panel("FPS", "#0ff", "#002")),
                f = h(new Stats.Panel("MS", "#0f0", "#020"));
            if (self.performance && self.performance.memory) var t = h(new Stats.Panel("MB", "#f08", "#201"));
            k(0);
            return {
                REVISION: 16,
                dom: c,
                addPanel: h,
                showPanel: k,
                begin: function () {
                    g = (performance || Date).now()
                },
                end: function () {
                    a++;
                    var c = (performance || Date).now();
                    f.update(c - g, 200);
                    if (c > e + 1E3 && (r.update(1E3 * a / (c - e), 100), e = c, a = 0, t)) {
                        var d = performance.memory;
                        t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576)
                    }
                    return c
                },
                update: function () {
                    g = this.end()
                },
                domElement: c,
                setMode: k
            }
        };
        Stats.Panel = function (h, k, l) {
            var c = Infinity,
                g = 0,
                e = Math.round,
                a = e(window.devicePixelRatio || 1),
                r = 80 * a,
                f = 48 * a,
                t = 3 * a,
                u = 2 * a,
                d = 3 * a,
                m = 15 * a,
                n = 74 * a,
                p = 30 * a,
                q = document.createElement("canvas");
            q.width = r;
            q.height = f;
            q.style.cssText = "width:80px;height:48px";
            var b = q.getContext("2d");
            b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
            b.textBaseline = "top";
            b.fillStyle = l;
            b.fillRect(0, 0, r, f);
            b.fillStyle = k;
            b.fillText(h, t, u);
            b.fillRect(d, m, n, p);
            b.fillStyle = l;
            b.globalAlpha = .9;
            b.fillRect(d, m, n, p);
            return {
                dom: q,
                update: function (f,
                    v) {
                    c = Math.min(c, f);
                    g = Math.max(g, f);
                    b.fillStyle = l;
                    b.globalAlpha = 1;
                    b.fillRect(0, 0, r, m);
                    b.fillStyle = k;
                    b.fillText(e(f) + " " + h + " (" + e(c) + "-" + e(g) + ")", t, u);
                    b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
                    b.fillRect(d + n - a, m, a, p);
                    b.fillStyle = l;
                    b.globalAlpha = .9;
                    b.fillRect(d + n - a, m, a, e((1 - f / v) * p))
                }
            }
        };
        "object" === typeof module && (module.exports = Stats);
    }, 1500);
});