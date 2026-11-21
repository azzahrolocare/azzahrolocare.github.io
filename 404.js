document.addEventListener("DOMContentLoaded", () => {
    // Atur judul halaman dan bahasa dokumen
    document.documentElement.lang = "id";
    document.title = "404 - Halaman Tidak Ditemukan";

    // Tambahkan meta tag jika belum ada
    const ensureMeta = (name, content, isCharset = false) => {
        if (isCharset) {
            if (!document.querySelector("meta[charset]")) {
                const meta = document.createElement("meta");
                meta.setAttribute("charset", content);
                document.head.prepend(meta);
            }
            return;
        }
        if (!document.querySelector(`meta[name="${name}"]`)) {
            const meta = document.createElement("meta");
            meta.name = name;
            meta.content = content;
            document.head.appendChild(meta);
        }
    };

    ensureMeta(null, "UTF-8", true);
    ensureMeta("viewport", "width=device-width, initial-scale=1.0");

    // Suntikkan CSS ke dalam <head>
    const style = document.createElement("style");
    style.textContent = `
        :root {
            --primary-color: #0f5227;
            --primary-hover: #0b3a1c;
            --alert-bg: #fff3e0;
            --alert-border: #ff9800;
            --alert-text: #bf360c;
            --alert-icon: #e65100;
            --text-color: #3c4043;
            --bg-color: #f8f9fa;
            --card-bg: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            text-align: center;
            background: var(--card-bg);
            padding: 40px 30px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            max-width: 500px;
            width: 100%;
        }

        .illustration {
            width: 100%;
            max-width: 280px;
            height: auto;
            border-radius: 8px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    `;
    document.head.appendChild(style);

    // Bersihkan isi body lalu buat container dan gambar
    document.body.innerHTML = "";

    const container = document.createElement("div");
    container.className = "container";

    const img = document.createElement("img");
    img.src = "/media/img/404.jpg";
    img.alt = "Halaman tidak ditemukan / diperbarui";
    img.className = "illustration";

    container.appendChild(img);
    document.body.appendChild(container);
});
