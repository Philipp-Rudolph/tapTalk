/**
 * Composable for managing text-to-speech functionality
 */
export function useSpeech() {
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'

      // Adjust speech parameters for more natural sound
      utterance.rate = 0.9   // Slightly slower (default is 1, range: 0.1 to 10)
      utterance.pitch = 1.0  // Normal pitch (default is 1, range: 0 to 2)
      utterance.volume = 1.0 // Full volume (default is 1, range: 0 to 1)

      // Try to use a better quality German voice if available
      const voices = window.speechSynthesis.getVoices()
      const germanVoice = voices.find(voice =>
        voice.lang.startsWith('de') &&
        (voice.name.includes('Google') || voice.name.includes('Enhanced') || voice.name.includes('Premium'))
      ) || voices.find(voice => voice.lang.startsWith('de'))

      if (germanVoice) {
        utterance.voice = germanVoice
      }

      window.speechSynthesis.speak(utterance)
    }
  }

  return {
    speak
  }
}
