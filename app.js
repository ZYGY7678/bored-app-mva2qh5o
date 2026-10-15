// Database of fun, stupid & hilarious activities
const activities = [
  {
    category: "מוזר ומטופש",
    title: "תתווכח עם הקיר בסלון",
    desc: "הקיר חושב שאתה לא יודע לבשל פסטה. תוכיח לו שהוא טועה بصوت רם ומשכנע. אל תוותר לו עד שהוא יבקש סליחה.",
    type: "argument",
    actionText: "התחל בוויכוח"
  },
  {
    category: "קליקר מטופש",
    title: "תלחץ על הכפתור בלי סיבה",
    desc: "כמה פעמים אתה יכול ללחוץ על כפתור כתום זוהר לפני שיימאס לך? (ספוילר: יימאס מהר מאוד, אבל תנסה בכל זאת).",
    type: "clicker",
    actionText: "תן לי ללחוץ!"
  },
  {
    category: "תרפיה בבועות",
    title: "פצפצים וירטואליים למתקדמים",
    desc: "אין תקציב לקנות פצפצים אמיתיים? אין בעיה. תפוצץ את הבועות הדיגיטליות האלה ותשמע את הקול בראש שלך.",
    type: "bubbles",
    actionText: "אפס בועות"
  },
  {
    category: "חכמת רחוב",
    title: "המזלג האסטרולוגי היומי",
    desc: "גלה איזו חיית פרא מסתורית מייצגת את מצב הגרביים שלך כרגע בעזרת גלגל הגורל המטופש.",
    type: "fortune",
    actionText: "תגלה לי את העתיד"
  },
  {
    category: "ספורט קיצוני",
    title: "אליפות העולם בהבהלת חפצים דוממים",
    desc: "תתגנב בשקט לכוס שתייה או לשלט ותצעק עליהם פתאום. אם הם זזו, נפסלת. אם הם לא זזו, ניצחת באליפות.",
    type: "stare",
    actionText: "התחל בהתגנבות"
  },
  {
    category: "התחמקויות מקצועיות",
    title: "מחולל תירוצים להשתמטות מיידית",
    desc: "צריך תירוץ הזוי למה אתה לא יכול לעשות כלום כרגע? לחץ על הכפתור וקבל משפט שיגרום לאחרים לתפוס את הראש.",
    type: "excuse",
    actionText: "תמציא לי תירוץ"
  },
  {
    category: "אתגר פיזי מביך",
    title: "הליכת פינגווין לסלון ובחזרה",
    desc: "תצמיד את הידיים לגוף, תעשה קולות 'קווקוו' ותרגול הליכת פינגווין מהחדר למטבח וחזרה. חובת צילום עצמי בראש (לא באמת, אבל תדמיין).",
    type: "penguin",
    actionText: "סיימתי לצעוד כמו פינגווין"
  },
  {
    category: "פילוסופיה בגרוש",
    title: "תספור את השערות על היד שלך",
    desc: "זה הזמן לבדוק אם יש לך זוג שערות תאומות או בודדות. ספר אותן אחת אחת. אם איבדת ספירה ב-14, תתחיל מחדש.",
    type: "hairs",
    actionText: "ספרתי והתייאשתי"
  },
  {
    category: "מוזיקת עתיד",
    title: "קונצרט נקישות שיניים קצבי",
    desc: "נקישות קצביות עם השיניים לפי קצב של שיר מטאל דמיוני. השתדל לא לשבור סתימה.",
    type: "teeth",
    actionText: "נתתי הופעה"
  }
];

// App State
let currentActivity = null;
let stats = {
  completedCount: 0,
  boredLevel: 100
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

// Initialize App
function init() {
  loadRandomActivity();
  
  mainActionBtn.addEventListener('click', handleMainAction);
  nextBtn.addEventListener('click', loadRandomActivity);
}

// Load a random activity
function loadRandomActivity() {
  // Pick random item different from current if possible
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
}

// Render interactive widgets based on activity type
function renderInteractiveComponent(type) {
  interactiveArea.innerHTML = '';

  switch(type) {
    case 'clicker':
      let count = 0;
      const btn = document.createElement('button');
      btn.className = 'clicker-btn';
      btn.textContent = count;
      btn.onclick = () => {
        count++;
        btn.textContent = count;
        if(count === 20) {
          triggerSuccess("וואו, לחצת 20 פעם. אתה ממש משועמם כל הכבוד!");
        }
      };
      interactiveArea.appendChild(btn);
      break;

    case 'bubbles':
      const grid = document.createElement('div');
      grid.className = 'bubble-wrap';
      for(let i=0; i<8; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = '<i class="fa-solid fa-circle"></i>';
        bubble.onclick = () => {
          if(!bubble.classList.contains('popped')) {
            bubble.classList.add('popped');
            bubble.innerHTML = '💥';
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
      fDiv.textContent = "לחץ על הכפתור למטה כדי לחשוף את הנבואה שלך...";
      interactiveArea.appendChild(fDiv);
      break;

    case 'excuse':
      const eDiv = document.createElement('div');
      eDiv.className = 'excuse-box';
      eDiv.textContent = "«המחשב שלי התחיל לבכות אז אני חייב לנחם אותו»";
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
        sDiv.textContent = staring ? '😳' : '👀';
      };
      interactiveArea.appendChild(sDiv);
      break;

    default:
      const defaultText = document.createElement('div');
      defaultText.style.color = 'var(--text-muted)';
      defaultText.style.textAlign = 'center';
      defaultText.innerHTML = '<i class="fa-solid fa-face-laugh-squint fa-2x" style="margin-bottom:10px; color:var(--accent);"></i><br>תעשה את זה עכשיו ואל תתחכם!';
      interactiveArea.appendChild(defaultText);
      break;
  }
}

// Check bubbles completion
function checkAllBubblesPopped(grid) {
  const remaining = grid.querySelectorAll('.bubble:not(.popped)').length;
  if(remaining === 0) {
    triggerSuccess("פצפצת הכל! השעמום שלך ירד ב-12%.");
  }
}

// Handle Action Button click
function handleMainAction() {
  stats.completedCount++;
  stats.boredLevel = Math.max(0, stats.boredLevel - 15);
  
  updateStatsDisplay();

  // Special interactive responses
  if(currentActivity.type === 'fortune') {
    const fortunes = [
      "הגרב שלך תמצא את בן הזוג שלה במכונת הכביסה בדיוק בעוד 3 חודשים.",
      "צפויה לך הצלחה מסחררת בהסתכלות על התקרה בשעה הקרובה.",
      "מישהו יגיד לך 'מה נשמע' ואתה תענה 'גם לך' (זה יקרה היום).",
      "הקפה הבא שלך הולך להיות בדיוק בטמפרטורה המושלמת (בערך).",
      "אם תסתכל שמאלי עכשיו תראה... אה, בעצם זה רק קיר."
    ];
    const randomF = fortunes[Math.floor(Math.random() * fortunes.length)];
    interactiveArea.querySelector('.fortune-text').textContent = `🔮 ${randomF}`;
    return;
  }

  if(currentActivity.type === 'excuse') {
    const excuses = [
      "אני חייב להאכיל את האקווריום שלי בדגים וירטואליים.",
      "הכוכבים לא מסודרים נכון בשביל שאעשה מטלות כרגע.",
      "המוח שלי נמצא במצב חיסכון בסוללה עד מחר בבוקר.",
      "הבטחתי לצמח שלי בסלון שששש... אנחנו מדיטציה.",
      "אני באמצע לספור את כל הפעימות לב שלי עד שייגמר היום."
    ];
    const randomE = excuses[Math.floor(Math.random() * excuses.length)];
    interactiveArea.querySelector('.excuse-box').textContent = `«${randomE}»`;
    return;
  }

  // Load next activity after standard action
  loadRandomActivity();
}

function triggerSuccess(msg) {
  stats.completedCount++;
  stats.boredLevel = Math.max(0, stats.boredLevel - 20);
  updateStatsDisplay();
  
  // Show brief success toast or alert inside title
  const originalTitle = activityTitle.textContent;
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
