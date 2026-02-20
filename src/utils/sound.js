const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

/**
 * Procedurally generates subtle UI sound effects using Web Audio API
 * Avoids needing to download/host external .mp3 files
 */
export const playSound = (type = 'click') => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
        // Subtle, high-pitched "tick" for buttons
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, now);
        oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.05);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        oscillator.start(now);
        oscillator.stop(now + 0.05);
    } else if (type === 'hover') {
        // Very soft, airy "whoosh" for hovering over elements
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, now);
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.02, now + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        oscillator.start(now);
        oscillator.stop(now + 0.1);
    } else if (type === 'toggle') {
        // Two-tone pop for toggles (e.g., dark mode)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, now);
        oscillator.frequency.setValueAtTime(600, now + 0.05);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.05, now + 0.01);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.1);

        oscillator.start(now);
        oscillator.stop(now + 0.1);
    }
};
