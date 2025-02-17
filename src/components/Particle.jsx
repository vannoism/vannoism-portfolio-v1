import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container); // Menambahkan log saat partikel dimuat
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute", // Mengatur posisi partikel agar tidak mengganggu layout
            top: 0,
            left: 0,
            zIndex: -1, // Partikel di belakang konten
            width: "100%",
            height: "100vh", // Menutupi seluruh layar
          }}
          options={{
            background: {
              color: {
                value: "#121212", // Warna latar belakang gelap
              },
            },
            fpsLimit: 60, // Menurunkan fps untuk kinerja yang lebih baik
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse", // Efek repulse saat hover
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ff5733", // Ubah warna partikel
              },
              links: {
                color: "#ff5733", // Ubah warna koneksi antar partikel
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5, // Menambah kecepatan pergerakan partikel
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800, // Mengatur kepadatan area
                },
                value: 250, // Meningkatkan jumlah partikel
              },
              opacity: {
                value: 0.7, // Mengatur transparansi partikel
              },
              shape: {
                type: "circle", // Bentuk partikel bulat
              },
              size: {
                value: { min: 1, max: 6 }, // Ukuran variabel partikel
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
