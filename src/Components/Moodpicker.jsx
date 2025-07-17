import { useState } from "react";

function Moodpicker() {
  const [mood, setMood] = useState("");

  const Moods = {
    happy: [
      "Keep shining—your joy is contagious! ✨",
      "Share your smile with someone today 😄",
      "Use this energy to do something you love 💖",
      "Your light is a blessing—don't dim it 🌟",
      "Grateful hearts attract more to be grateful for 🙌",
    ],
    sad: [
      "It's okay to feel this way. You're not alone 🤍",
      "Crying is strength. Let it out, then rise again 💧",
      "You’ve made it through hard days before—you will again 💪",
      "Talk to someone. You're not a burden 💬",
      "Be gentle with yourself. Healing takes time 🕊️",
    ],
    angry: [
      "Pause. Breathe. You're stronger than your anger 😮‍💨",
      "Step away and give yourself space—it’s okay 🧘",
      "Write it down. Let your thoughts breathe ✍️",
      "Reacting calmly is power in action ⚡",
      "You’re not your anger. You’re peace in progress 🌱",
    ],
    tired: [
      "Rest is productive too. Recharge 🔋",
      "Close your eyes for 60 seconds—it helps 😌",
      "Drink some water and breathe deeply 😁",
      "Your worth isn’t based on your energy 💗",
      "You’ve done enough for today. Be proud and rest 🛏️",
    ],
  };

  function Moodpicker(mood) {
    const m = Moods[mood];
    const randommood = Math.floor(Math.random() * m.length);
    setMood(m[randommood]);
  }

  return (
    <div>
      <div className="mood-picker">
        <h2>How are you feeling today?</h2>
        <input type="text" readOnly value={mood} />

        <div className="buttons">
          <button onClick={() => Moodpicker("happy")} title="Happy" className="button1">
            ☺️
          </button>
          <button onClick={() => Moodpicker("sad")} title="Sad" className="button2">
            😞
          </button>
          <button onClick={() => Moodpicker("angry")} title="Angry" className="button3">
            😒
          </button>
          <button onClick={() => Moodpicker("tired")} title="Tired" className="button4">
            😩
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moodpicker;
