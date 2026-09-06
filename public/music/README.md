# Adding music

Place your MP3 files directly in this folder. The music page automatically lists
all `.mp3` files alphabetically; there is no track list to edit.

The filename becomes the displayed title, with dashes and underscores changed
to spaces. For example, `Rako - Late Night.mp3` appears as `Rako Late Night`.
Use readable filenames such as `Late Night.mp3` for exact title formatting.

Run `npm run dev` to preview locally. Rebuild and deploy the site after adding,
renaming, or removing files to update the public playlist. Files in this folder
are public once deployed. Subfolders and non-MP3 files are ignored.

The player supports play/pause, track selection, seeking, elapsed time, an
audio-reactive waveform, and volume. Playback starts only after a visitor presses
play or selects a track. No audio files are included by default.
