# 📘 Hilfe & Anleitung zur Anpassung

Willkommen zu deinem neuen Portfolio! Dieses Template wurde so gebaut, dass du **keine tiefen Programmierkenntnisse** benötigst, um die Inhalte zu ändern.

## 📍 Wo ändere ich die Texte?

Die wichtigste Datei für dich ist:
`src/constants/content.js`

---

## 📸 Bildgrößen & Empfehlungen

Damit deine Website professionell aussieht und schnell lädt, solltest du auf die Bildgrößen achten:

### 1. Projekt-Bilder (`projects`)
- **Empfohlene Größe**: ca. 800 x 600 Pixel.
- **Format**: 4:3 (Breitbild).
- **Tipp**: Nutze das Format `.webp` für extrem schnelle Ladezeiten.

### 2. Partner-Logos (`partners`)
- **Empfohlene Größe**: ca. 200 x 80 Pixel.
- **Format**: Transparentes PNG oder SVG.
- **Hinweis**: Logos sehen am besten aus, wenn sie alle eine ähnliche optische "Schwere" haben.

### 3. Favicon (Browser-Icon)
- **Empfohlene Größe**: 32x32 oder 64x64 Pixel.
- **Datei**: `public/favicon.ico`.

### 4. Icons allgemein
- Wir nutzen **React-Icons** (Feather Icons). Diese sind Vektorgrafiken und skalieren ohne Qualitätsverlust. Du musst hier also keine Bilddateien hochladen, sondern nur den Icon-Namen im Code (falls du diesen anpassen willst) ändern.

---

## 🛠️ Technische Details

### Wo liegen die Dateien?
- **Texte & Daten**: `src/constants/content.js`
- **Eigene Bilder**: Lege sie in den Ordner `public/` und verlinke sie in der `content.js` einfach mit `"/dein-bild.jpg"`.

## 🚀 Deployment (Veröffentlichung)
1. Führe den Befehl `npm run build` aus.
2. Es entsteht ein Ordner namens `dist/`.
3. Lade den Inhalt dieses Ordners bei GitHub Pages oder Cloudflare Pages hoch.

**Erstellt von ecomcodeLab**