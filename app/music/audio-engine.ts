// A single media element feeds playback and the visualizer. No generated audio.
export class MusicPlayer {
  readonly context: AudioContext
  readonly analyser: AnalyserNode
  private source: MediaElementAudioSourceNode
  private gain: GainNode
  private operation = 0

  constructor(readonly audio: HTMLAudioElement) {
    this.context = new AudioContext()
    this.source = this.context.createMediaElementSource(audio)
    this.analyser = this.context.createAnalyser()
    this.analyser.fftSize = 1024
    this.gain = this.context.createGain()
    this.source.connect(this.gain)
    this.gain.connect(this.analyser)
    this.analyser.connect(this.context.destination)
  }

  get playing() {
    return !this.audio.paused && !this.audio.ended
  }

  setVolume(value: number) {
    this.gain.gain.setTargetAtTime(value / 100, this.context.currentTime, 0.02)
  }

  async play() {
    const operation = ++this.operation
    await this.context.resume()
    if (operation !== this.operation || this.context.state === 'closed') return
    await this.audio.play()
  }

  pause() {
    this.operation++
    this.audio.pause()
  }

  dispose() {
    this.pause()
    this.source.disconnect()
    this.gain.disconnect()
    this.analyser.disconnect()
    void this.context.close()
  }
}
