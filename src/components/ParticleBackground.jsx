import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        // Load the full tsparticles engine
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded", container);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false, zIndex: 0 },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab", // Creates lines connecting to mouse cursor
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                links: {
                                    opacity: 0.8,
                                    color: "#915eff"
                                },
                            },
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#915eff", "#00cea8", "#ffffff"],
                        },
                        links: {
                            color: "#aaa6c3",
                            distance: 120,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.5,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticleBackground;
