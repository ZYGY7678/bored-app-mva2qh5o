// Database of hundreds of fun, stupid & hilarious activities, jokes, riddles & weirdness
const activities = [
  // --- מוזר ומטופש ---
  {
    category: "מוזר ומטופש",
    title: "תתווכח עם הקיר בסלון",
    desc: "הקיר חושב שאתה לא יודע לבשל פסטה. תוכיח לו שהוא טועה بصوت רם ומשכנע. אל תוותר לו עד שהוא יבקש סליחה.",
    type: "argument",
    actionText: "התחל בוויכוח"
  },
  {
    category: "מוזר ומטופש",
    title: "תעשה תחרות בהייה במקרר",
    desc: "פתח את המקרר, הבט לתוך מדף הגבינות בעיניים מצומצמות ואל תמצמץ עד שהמנורה נסגרת או שאתה מתייאש.",
    type: "stare",
    actionText: "ניצחתי את המקרר"
  },
  {
    category: "מוזר ומטופש",
    title: "תרגול שפת דולפינים למתחילים",
    desc: "תנסה להוציא צלילים מוזרים מהפה כאילו אתה דולפין שמנסה להזמין פיצה בלב ים. השכנים כבר יבינו.",
    type: "argument",
    actionText: "עשיתי קולות של דולפין"
  },
  {
    category: "מוזר ומטופש",
    title: "תספור כמה מדרגות יש בבית (גם אם אין)",
    desc: "אין מדרגות? תבדוק שוב! אולי יש אחת נסתרת במטבח. אם אין, תדמיין שאתה עולה על הר האוורסט מהסלון למרפסת.",
    type: "generic",
    actionText: "כבשתי את ההר"
  },
  {
    category: "מוזר ומטופש",
    title: "תכתוב מכתב אהבה דרמטי לשלט הטלוויזיה",
    desc: "הוא מדליק אותך, הוא מכבה אותך, והוא תמיד נאבד בין הכריות. מגיע לו קצת הערכה רומנטית בכתב.",
    type: "excuse",
    actionText: "מסרתי את השלט"
  },
  {
    category: "מוזר ומטופש",
    title: "תאכל ביסקוויט כאילו אתה מבקר מסעדות מישלן",
    desc: "תריח אותו, תנתח את המרקם, תגיד בקול רם: 'יש כאן נופך אדמתי עם נגיעות של קמח סודי'.",
    type: "generic",
    actionText: "קיבלתי 3 כוכבי מישלן"
  },
  {
    category: "מוזר ומטופש",
    title: "תנעל את הנעליים ברגליים ההפוכות",
    desc: "שמאל לימין וימין לשמאל. נסה לעשות חמישה צעדים בחדר בלי ליפול כמו ברווז מבולבל.",
    type: "penguin",
    actionText: "שרדתי את ההליכה"
  },
  {
    category: "מוזר ומטופש",
    title: "תודיע בקול רם: 'אני המלך של החדר הזה!'",
    desc: "אחר כך תבדוק אם המנורה חולקת עליך. אם כן, כבה אותה למשך 3 שניות כעונש.",
    type: "generic",
    actionText: "הכרזתי על מלוכה"
  },
  {
    category: "מוזר ומטופש",
    title: "תרקוד ריקוד ניצחון בלי שירים",
    desc: "דמיין שזכית באליפות העולם בהרמת גבות מקצועית. תן לזה את כל מה שיש לך במשך 30 שניות.",
    type: "generic",
    actionText: "סיימתי לרקוד"
  },
  {
    category: "מוזר ומטופש",
    title: "תבדוק אם האף שלך עדיין במקום",
    desc: "גע בו בעדינות עם האצבע ותוודא שהוא לא נפל בשעה האחרונה. איזה מזל, הוא שם!",
    type: "generic",
    actionText: "האף אותר בהצלחה"
  },

  // --- רמת טימטום שיא (חדש!) ---
  {
    category: "רמת טימטום שיא",
    title: "תאכל כאילו אתה בננה במסווה של בנקים",
    desc: "תחזיק ביד בננה (או חפץ צהוב כלשהו כמו עט או ספוג) ותסביר לו בלחש את תוכנית הבריחה שלך מהכourt.",
    type: "extreme_stupid",
    actionText: "הבננה הבינה הכל"
  },
  {
    category: "רמת טימטום שיא",
    title: "פקד על הלשון שלך לגעת באף 100 פעם",
    desc: "רוב הסיכויים שתפספס לפחות 95 פעמים. המשך עד שהלשון תבקש חופשת מחלה.",
    type: "extreme_stupid",
    actionText: "הלשון בשביתה"
  },
  {
    category: "רמת טימטום שיא",
    title: "תן כיף למסך של הטלפון/מחשב שלך",
    desc: "תן מכה קטנה ועדינה עם כף היד למסך ותגיד לו: 'כל הכבוד שאתה סובל אותי'.",
    type: "extreme_stupid",
    actionText: "נתתי כיף למסך"
  },
  {
    category: "רמת טימטום שיא",
    title: "תשאל את המיטה שלך אם היא תפוסה הלילה",
    desc: "קודם תדפוק על המזרון פעמיים, תפתח מוש"ס ותשאל בנימוס אם מותר לך לישון שם היום.",
    type: "extreme_stupid",
    actionText: "קיבלתי אישור שינה"
  },
  {
    category: "רמת טימטום שיא",
    title: "תעשה קולות של מיקרוגל מקולקל",
    desc: "תעשה 'בזזזז... ביפ ביפ ביפ! טרחחח!' בקול רם במשך 15 שניות כאילו אתה מחמם שאריות פיצה.",
    type: "extreme_stupid",
    actionText: "האוכל חם ומוכן"
  },
  {
    category: "רמת טימטום שיא",
    title: "תמציא שפה חדשה לעצמך ותגיד משפט",
    desc: "אמור בקול: 'בלבולה-פיצה-מיש-מואש!' ותהנה מהתחושה שאתה חייזר עליון.",
    type: "extreme_stupid",
    actionText: "דיברתי חייזרית שוטפת"
  },

  // --- קליקר מטופש ---
  {
    category: "קליקר מטופש",
    title: "תלחץ על הכפתור בלי סיבה",
    desc: "כמה פעמים אתה יכול ללחוץ על כפתור כתום זוהר לפני שיימאס לך? (ספוילר: יימאס מהר מאוד, אבל תנסה בכל זאת).",
    type: "clicker",
    actionText: "תן לי ללחוץ!"
  },
  {
    category: "קליקר מטופש",
    title: "מרתון לחיצות מהירות במיוחד",
    desc: "כמה לחיצות אתה מצליח לתת תוך 5 שניות? תן לזה את כל האנרגיה שיש לך באצבע המורה!",
    type: "clicker",
    actionText: "לחוץ מהר!"
  },
  {
    category: "קליקר מטופש",
    title: "כפתור ההשמדה העצמית (בדימוי)",
    desc: "לחיצה אחת כאן תמחק את כל השעמום מהיקום (או לפחות תעשה רעש מגניב במסך). נסה את מזלך.",
    type: "clicker",
    actionText: "פוצץ את השעמום"
  },

  // --- תרפיה בבועות ---
  {
    category: "תרפיה בבועות",
    title: "פצפצים וירטואליים למתקדמים",
    desc: "אין תקציב לקנות פצפצים אמיתיים? אין בעיה. תפוצץ את הבועות הדיגיטליות האלה ותשמע את הקול בראש שלך.",
    type: "bubbles",
    actionText: "אפס בועות"
  },

  // --- חכמת רחוב & גורל ---
  {
    category: "חכמת רחוב",
    title: "המזלג האסטרולוגי היומי",
    desc: "גלה איזו חיית פרא מסתורית מייצגת את מצב הגרביים שלך כרגע בעזרת גלגל הגורל המטופש.",
    type: "fortune",
    actionText: "תגלה לי את העתיד"
  },
  {
    category: "חכמת רחוב",
    title: "נבואת הקפה והשולחן",
    desc: "לחץ כדי לגלות איזה אירוע מטופש לחלוטין הולך לקרות לך ב-5 הדקות הקרובות.",
    type: "fortune",
    actionText: "תגלה את הנבואה"
  },

  // --- התחמקויות מקצועיות ---
  {
    category: "התחמקויות מקצועיות",
    title: "מחולל תירוצים להשתמטות מיידית",
    desc: "צריך תירוץ הזוי למה אתה לא יכול לעשות כלום כרגע? לחץ על הכפתור וקבל משפט שיגרום לאחרים לתפוס את הראש.",
    type: "excuse",
    actionText: "תמציא לי תירוץ"
  },

  // --- בדיחות קרש מטופשות ---
  {
    category: "בדיחת קרש",
    title: "למה עכבר חוצה את הכביש?",
    desc: "כי הוא רצה להוכיח שהוא לא פוחד מחצייה בטוחה! (טוב, אולי זו לא בדיחה, אבל לפחות ניסינו).",
    type: "joke",
    actionText: "ספר עוד בדיחה גרועה"
  },
  {
    category: "בדיחת קרש",
    title: "מה עשה המחשב כשהיה קר לו?",
    desc: "הוא הדליק את ה'מאוורר' על חם! תודו שזה היה נורא.",
    type: "joke",
    actionText: "נחנקתי מהצחוק"
  },

  // --- חידות קשות ומטופשות ---
  {
    category: "חידה מטופשת",
    title: "חידת השעון המסתורי",
    desc: "מה עושה שעון שעצר מלכת? צודק לגמרי פעמיים ביום! אבל מה הוא עושה בשאר הזמן? מתבטל כמוך.",
    type: "riddle",
    actionText: "הבנתי את הפאנץ'"
  }
];

// Fun Fortunes
const fortunes = [
  "הגרב שלך תמצא את בן הזוג שלה במכונת הכביסה בדיוק בעוד 3 חודשים. 🧦✨",
  "צפויה לך הצלחה מסחררת בהסתכלות על התקרה בשעה הקרובה. 🙃",
  "מישהו יגיד לך 'מה נשמע' ואתה תענה 'גם לך' (זה יקרה היום). 💀",
  "הקפה הבא שלך הולך להיות בדיוק בטמפרטורה המושלמת (בערך). ☕🔥",
  "אם תסתכל שמאלה עכשיו תראה... אה, בעצם זה רק קיר. 🧱",
  "החתול השכונתי חושב שאתה בנאדם די מגניב בסך הכל. 🐱👑",
  "בקרוב מאוד תמצא מטבע של עשרה אגורות במקום שלא ציפית לו בכלל. 🪙",
  "המחשב שלך מעריך את זה שאתה נותן לו לנוח מדי פעם. 💻💤"
];

// Fun Excuses
const excuses = [
  "אני חייב להאכיל את האקווריום שלי בדגים וירטואליים. 🐠",
  "הכוכבים לא מסודרים נכון בשביל שאעשה מטלות כרגע. ✨",
  "המוח שלי נמצא במצב חיסכון בסוללה עד מחר בבוקר. 🔋",
  "הבטחתי לצמח שלי בסלון שששש... אנחנו במדיטציה. 🌱",
  "אני באמצע לספור את כל הפעימות לב שלי עד שייגמר היום. 💓",
  "החתול שלי חסם לי את הדרך עם הגוף שלו ואני בן ערובה. 🐾",
  "המקלדת שלי ביקשה חופשת מחלה פתאומית. ⌨️🤒"
];

// Stupid Emojis to float in background
const stupidEmojis = ["🤪", "🤡", "💩", "🦄", "🍌", "💥", "👻", "🌮", "🐸", "🧌", "🤖", "🥴", "🍕", "🥳", "💫", "🦩", "🦆", "🥴", "🧻", "💥"];

// App State
let currentActivity = null;
let stats = {
  completedCount: 0,
  boredLevel: 100,
  stupidPoints: 0
};

// DOM Elements
const activityBadge = document.getElementById('activityBadge');
const activityTitle = document.getElementById('activityTitle');
const activityDesc = document.getElementById('activityDesc');
const interactiveArea = document.getElementById('interactiveArea');
const mainActionBtn = document.getElementById('mainActionBtn');
const nextBtn = document.getElementById('nextBtn');
const completedCountEl = document.getElementById('completedCount');
const boredLevelEl = document.getElementById('boredLevel');
const emojiPartyBtn = document.getElementById('emojiPartyBtn');
const stupidSlider = document.getElementById('stupidSlider');
const stupidLevelDisplay = document.getElementById('stupidLevelDisplay');

// Initialize App
function init() {
  loadRandomActivity();
  
  mainActionBtn.addEventListener('click', handleMainAction);
  nextBtn.addEventListener('click', loadRandomActivity);
  emojiPartyBtn.addEventListener('click', triggerEmojiChaos);

  if (stupidSlider) {
    stupidSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val < 30) stupidLevelDisplay.textContent = "רמת טימטום: סביר ביותר (משעמם)";
      else if (val < 70) stupidLevelDisplay.textContent = "רמת טימטום: ליצן שכונתי 🤡";
      else if (val < 100) stupidLevelDisplay.textContent = "רמת טימטום: מוח של בננה קפואה 🍌🔥";
      else stupidLevelDisplay.textContent = "רמת טימטום: קטסטרופה קוסמית מוחלטת!! 🤪💥🦄";
      
      // Spawn extra emojis based on slider
      spawnFloatingEmoji(stupidEmojis[Math.floor(Math.random() * stupidEmojis.length)]);
    });
  }

  // Periodic random floating stupid emoji
  setInterval(() => {
    spawnFloatingEmoji();
  }, 2200);
}

// Spawn random floating emoji across screen
function spawnFloatingEmoji(emojiOverride) {
  const container = document.getElementById('floatingEmojisContainer');
  if (!container) return;

  const el = document.createElement('div');
  el.className = 'floating-stupid-emoji';
  el.textContent = emojiOverride || stupidEmojis[Math.floor(Math.random() * stupidEmojis.length)];
  
  const startX = Math.random() * window.innerWidth;
  el.style.left = `${startX}px`;
  el.style.bottom = `-50px`;
  
  const duration = 2.5 + Math.random() * 3;
  const rot = (Math.random() - 0.5) * 540;
  el.style.animation = `floatUpStupid ${duration}s linear forwards`;
  el.style.setProperty('--rot', `${rot}deg`);

  container.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, duration * 1000);
}

// Emoji Chaos Party Button!
function triggerEmojiChaos() {
  for (let i = 0; i < 45; i++) {
    setTimeout(() => {
      spawnFloatingEmoji();
    }, i * 50);
  }
  
  // Shake main card
  const card = document.querySelector('.activity-card');
  card.classList.add('card-shake');
  setTimeout(() => card.classList.remove('card-shake'), 500);

  // Random hilarious banner message
  const funBanners = [
    "מסיבת טימוטום הופעלה! השכנים מזמינים ציאניד! 🤡",
    "המוח שלך כרגע נכנס למצב ענן מטומטם במיוחד! ☁️🍌",
    "איזה כיף, איבדת עוד 10 נקודות IQ בהצלחה רבה! 🥳"
  ];
  activityTitle.textContent = funBanners[Math.floor(Math.random() * funBanners.length)];
}

// Load a random activity
function loadRandomActivity() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * activities.length);
  } while (activities[randomIndex] === currentActivity && activities.length > 1);

  currentActivity = activities[randomIndex];
  
  // Render details
  activityBadge.textContent = currentActivity.category;
  activityTitle.textContent = currentActivity.title;
  activityDesc.textContent = currentActivity.desc;
  mainActionBtn.innerHTML = `<span>${currentActivity.actionText}</span> <i class="fa-solid fa-arrow-left"></i>`;

  // Render interactive component
  renderInteractiveComponent(currentActivity.type);

  // Slight animation bounce on card
  const card = document.querySelector('.activity-card');
  card.style.animation = 'none';
  card.offsetHeight; // trigger reflow
  card.style.animation = 'fadeIn 0.4s ease';

  spawnFloatingEmoji();
}

// Render interactive widgets based on activity type
function renderInteractiveComponent(type) {
  interactiveArea.innerHTML = '';

  switch(type) {
    case 'clicker':
      let count = 0;
      const btn = document.createElement('button');
      btn.className = 'clicker-btn';
      btn.innerHTML = `${count} 🤪`;
      btn.onclick = () => {
        count++;
        btn.innerHTML = `${count} 💥`;
        spawnFloatingEmoji("🔥");
        if(count === 15) {
          triggerSuccess("וואו, לחצת 15 פעם! השעמום שלך מתפורר לגמרי! 🥳");
        }
      };
      interactiveArea.appendChild(btn);
      break;

    case 'extreme_stupid':
      const extDiv = document.createElement('div');
      extDiv.style.textAlign = 'center';
      extDiv.innerHTML = `
        <div style="font-size: 2.8rem; margin-bottom: 10px; animation: bounceEmoji 1s infinite alternate;">🍌🤡🤪</div>
        <button class="clicker-btn" style="width: auto; height: auto; padding: 12px 24px; border-radius: 30px; font-size: 1rem; background: linear-gradient(135deg, #e91e63, #ff5722);">
          לחץ להזרקת מטומטמת ישירות למוח 🧠⚡
        </button>
      `;
      extDiv.querySelector('button').onclick = () => {
        spawnFloatingEmoji("🍌");
        spawnFloatingEmoji("💥");
        extDiv.querySelector('div').textContent = "🤪 מוחך הוא כעת אננס מזמר! הצלחה מסחררת!";
      };
      interactiveArea.appendChild(extDiv);
      break;

    case 'bubbles':
      const grid = document.createElement('div');
      grid.className = 'bubble-wrap';
      for(let i=0; i<12; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = '<i class="fa-solid fa-circle"></i>';
        bubble.onclick = () => {
          if(!bubble.classList.contains('popped')) {
            bubble.classList.add('popped');
            const popEmojis = ['💥', '🤪', '🎈', '⭐', '✨', '🍌', '🤡'];
            bubble.innerHTML = popEmojis[Math.floor(Math.random() * popEmojis.length)];
            spawnFloatingEmoji("💨");
            checkAllBubblesPopped(grid);
          }
        };
        grid.appendChild(bubble);
      }
      interactiveArea.appendChild(grid);
      break;

    case 'fortune':
      const fDiv = document.createElement('div');
      fDiv.className = 'fortune-text';
      fDiv.textContent = "🔮 לחץ על הכפתור למטה כדי לחשוף את הנבואה המטופשת שלך...";
      interactiveArea.appendChild(fDiv);
      break;

    case 'excuse':
      const eDiv = document.createElement('div');
      eDiv.className = 'excuse-box';
      eDiv.textContent = "«המחשב שלי התחיל לבכות אז אני חייב לנחם אותו עם פיצה וירטואלית» 🍕🤡";
      interactiveArea.appendChild(eDiv);
      break;

    case 'stare':
      const sDiv = document.createElement('div');
      sDiv.className = 'stare-box';
      sDiv.textContent = '👀';
      let staring = false;
      sDiv.onclick = () => {
        staring = !staring;
        sDiv.style.transform = staring ? 'scale(1.5) rotate(15deg)' : 'scale(1)';
        sDiv.textContent = staring ? '🤪' : '👀';
        spawnFloatingEmoji("🥴");
      };
      interactiveArea.appendChild(sDiv);
      break;

    case 'joke':
    case 'riddle':
      const jDiv = document.createElement('div');
      jDiv.className = 'joke-box';
      jDiv.innerHTML = '<i class="fa-solid fa-face-laugh" style="color:var(--accent); font-size: 1.8rem; margin-bottom: 8px;"></i><br>🤡 מוכן לפאנץ\' הכי גרוע בעולם? לחץ למטה!';
      interactiveArea.appendChild(jDiv);
      break;

    default:
      const defaultText = document.createElement('div');
      defaultText.style.color = 'var(--text-muted)';
      defaultText.style.textAlign = 'center';
      defaultText.innerHTML = '<i class="fa-solid fa-face-laugh-squint fa-2x" style="margin-bottom:10px; color:var(--accent);"></i><br>🤪 תעשה את זה עכשיו ואל תתחכם בכלל!';
      interactiveArea.appendChild(defaultText);
      break;
  }
}

// Check bubbles completion
function checkAllBubblesPopped(grid) {
  const remaining = grid.querySelectorAll('.bubble:not(.popped)').length;
  if(remaining === 0) {
    triggerSuccess("פצפצת הכל! השעמום שלך התפוגג בענן של קונפטי בננה! 🎉");
  }
}

// Handle Action Button click
function handleMainAction() {
  stats.completedCount++;
  stats.boredLevel = Math.max(0, stats.boredLevel - 10);
  
  updateStatsDisplay();
  spawnFloatingEmoji("✨");

  // Special interactive responses
  if(currentActivity.type === 'fortune') {
    const randomF = fortunes[Math.floor(Math.random() * fortunes.length)];
    interactiveArea.querySelector('.fortune-text').textContent = `🔮 ${randomF}`;
    return;
  }

  if(currentActivity.type === 'excuse') {
    const randomE = excuses[Math.floor(Math.random() * excuses.length)];
    interactiveArea.querySelector('.excuse-box').textContent = `«${randomE}»`;
    return;
  }

  if(currentActivity.type === 'joke' || currentActivity.type === 'riddle') {
    const punchlines = [
      "ועכשיו תצחק בקול רם כמו ליצן מטומטם כדי שהשכנים יזמינו משטרה! 🤡🚨",
      "גאוני, נכון? עכשיו תן לזה לייק דמיוני בתוך האוזן שלך. 🦄",
      "אם לא צחקת, הבדיחה חייבת לך פיצוי בדמות בננה דחופה. 🍌",
      "רמת ההומור שלך עלתה ב-3% לפחות וזה ממש נס רפואי. 🤪"
    ];
    const randomP = punchlines[Math.floor(Math.random() * punchlines.length)];
    interactiveArea.querySelector('.joke-box').innerHTML = `<i class="fa-solid fa-face-grin-squint-tears" style="color:var(--primary); font-size: 1.8rem; margin-bottom: 8px;"></i><br>${randomP}`;
    return;
  }

  // Load next activity after standard action
  loadRandomActivity();
}

function triggerSuccess(msg) {
  stats.completedCount++;
  stats.boredLevel = Math.max(0, stats.boredLevel - 20);
  updateStatsDisplay();
  
  for(let i=0; i<10; i++) {
    setTimeout(() => spawnFloatingEmoji(), i * 80);
  }

  activityTitle.textContent = `🎉 ${msg}`;
  setTimeout(() => {
    loadRandomActivity();
  }, 2200);
}

function updateStatsDisplay() {
  completedCountEl.textContent = stats.completedCount;
  boredLevelEl.textContent = `${stats.boredLevel}%`;
}

// Run on load
window.addEventListener('DOMContentLoaded', init);
