// ============================================
// ENGLISH LEARNING PLATFORM - SCRIPT.JS
// Interactive Learning System for Caleb
// ============================================

// Credentials
const VALID_USERNAME = 'Caleb';
const VALID_PASSWORD = 'englishforcaleb';

// Vocabulary Data
const vocabularyData = {
    animals: [
        { word: 'Dog', meaning: 'A furry pet that barks', synonym: 'Hound', example: 'My dog loves to play fetch.' },
        { word: 'Cat', meaning: 'A soft pet that meows', synonym: 'Feline', example: 'The cat sleeps on the sofa.' },
        { word: 'Bird', meaning: 'An animal with wings that flies', synonym: 'Avian', example: 'The bird sings in the morning.' },
        { word: 'Fish', meaning: 'Animal that lives in water and swims', synonym: '—', example: 'I have a gold fish in a bowl.' },
        { word: 'Elephant', meaning: 'Huge animal with a long trunk', synonym: '—', example: 'The elephant sprayed water with its trunk.' },
        { word: 'Lion', meaning: 'Big cat with a mane, king of animals', synonym: '—', example: 'The lion roared loudly.' },
        { word: 'Tiger', meaning: 'Big orange cat with black stripes', synonym: '—', example: 'A tiger is very strong.' },
        { word: 'Bear', meaning: 'Big furry animal that loves honey', synonym: '—', example: 'The bear caught a fish in the river.' },
        { word: 'Rabbit', meaning: 'Small animal with long ears that hops', synonym: 'Bunny', example: 'The rabbit ate a carrot.' },
        { word: 'Horse', meaning: 'Big animal people ride', synonym: 'Steed', example: 'She rides her horse every day.' },
    ],
    food: [
        { word: 'Apple', meaning: 'Round red or green fruit', synonym: '—', example: 'I eat an apple every day.' },
        { word: 'Banana', meaning: 'Long yellow fruit', synonym: '—', example: 'Monkeys love bananas.' },
        { word: 'Bread', meaning: 'Food made from flour, baked in oven', synonym: 'Loaf', example: 'I had bread with butter for breakfast.' },
        { word: 'Water', meaning: 'Clear drink we need to live', synonym: 'H2O', example: 'Please drink more water.' },
        { word: 'Milk', meaning: 'White drink from cows', synonym: '—', example: 'I pour milk on my cereal.' },
        { word: 'Pizza', meaning: 'Round food with cheese and toppings', synonym: '—', example: 'We ordered pepperoni pizza.' },
        { word: 'Ice Cream', meaning: 'Frozen sweet treat', synonym: '—', example: 'I love chocolate ice cream.' },
        { word: 'Chocolate', meaning: 'Brown sweet candy', synonym: 'Cocoa', example: 'I ate a piece of chocolate.' },
    ],
    house: [
        { word: 'House', meaning: 'Building where people live', synonym: 'Home', example: 'My house has a red door.' },
        { word: 'Room', meaning: 'Space inside a house with walls', synonym: 'Chamber', example: 'My bedroom is my favorite room.' },
        { word: 'Door', meaning: 'Thing you open to enter', synonym: 'Entrance', example: 'Please close the door.' },
        { word: 'Window', meaning: 'Glass in the wall you can see through', synonym: '—', example: 'Open the window for fresh air.' },
        { word: 'Table', meaning: 'Flat furniture with legs for eating/working', synonym: 'Desk', example: 'Put the books on the table.' },
        { word: 'Chair', meaning: 'Furniture you sit on', synonym: 'Seat', example: 'Please take a chair.' },
        { word: 'Bed', meaning: 'Furniture for sleeping', synonym: '—', example: 'I made my bed this morning.' },
        { word: 'Kitchen', meaning: 'Room where you cook food', synonym: '—', example: 'Mom is in the kitchen.' },
    ],
    family: [
        { word: 'Mother', meaning: 'Female parent', synonym: 'Mom', example: 'My mother cooks dinner.' },
        { word: 'Father', meaning: 'Male parent', synonym: 'Dad', example: 'My father drives a car.' },
        { word: 'Brother', meaning: 'Male sibling', synonym: '—', example: 'My brother is older than me.' },
        { word: 'Sister', meaning: 'Female sibling', synonym: '—', example: 'My sister has long hair.' },
        { word: 'Family', meaning: 'Group of related people living together', synonym: 'Relatives', example: 'I love my family.' },
        { word: 'Baby', meaning: 'Very young child', synonym: 'Infant', example: 'The baby is sleeping.' },
    ],
    school: [
        { word: 'School', meaning: 'Place where students learn', synonym: '—', example: 'I walk to school every day.' },
        { word: 'Book', meaning: 'Pages with stories or information', synonym: '—', example: 'I read a book every night.' },
        { word: 'Pen', meaning: 'Tool for writing with ink', synonym: '—', example: 'I need a blue pen.' },
        { word: 'Pencil', meaning: 'Tool for writing, can erase', synonym: '—', example: 'I drew with a pencil.' },
        { word: 'Paper', meaning: 'Thin material for writing on', synonym: '—', example: 'Write your name on the paper.' },
        { word: 'Teacher', meaning: 'Person who helps you learn', synonym: 'Instructor', example: 'My teacher is very nice.' },
    ],
    actions: [
        { word: 'Run', meaning: 'Move fast using legs', synonym: 'Sprint', example: 'I run in the park every morning.' },
        { word: 'Walk', meaning: 'Move slowly using legs', synonym: 'Stroll', example: 'Let\'s walk to school.' },
        { word: 'Jump', meaning: 'Push yourself up into the air', synonym: 'Leap', example: 'The cat can jump high.' },
        { word: 'Eat', meaning: 'Put food in your mouth', synonym: 'Consume', example: 'I eat breakfast at 7 AM.' },
        { word: 'Sleep', meaning: 'Rest with eyes closed at night', synonym: '—', example: 'I sleep for eight hours.' },
        { word: 'Play', meaning: 'Have fun, do enjoyable activities', synonym: '—', example: 'Children play in the park.' },
    ],
    nature: [
        { word: 'Sky', meaning: 'Space above us, blue during day', synonym: '—', example: 'The sky is full of stars.' },
        { word: 'Sun', meaning: 'Big hot star that gives us light', synonym: '—', example: 'The sun rises in the east.' },
        { word: 'Moon', meaning: 'Round thing in sky at night', synonym: '—', example: 'The moon is bright tonight.' },
        { word: 'Star', meaning: 'Shiny point of light in night sky', synonym: '—', example: 'Make a wish on a star.' },
        { word: 'Rain', meaning: 'Water falling from clouds', synonym: 'Shower', example: 'Take an umbrella, it\'s raining.' },
        { word: 'Tree', meaning: 'Tall plant with trunk and leaves', synonym: '—', example: 'The bird sat in the tree.' },
    ]
};

// Quiz Data
const quizQuestions = [
    { type: 'mc', question: 'Which word is a PROPER NOUN?', options: ['city', 'dog', 'London', 'teacher'], answer: 2 },
    { type: 'mc', question: 'What is the plural of "child"?', options: ['childs', 'children', 'childes', 'child'], answer: 1 },
    { type: 'mc', question: 'Which is a COUNTABLE noun?', options: ['water', 'rice', 'book', 'milk'], answer: 2 },
    { type: 'mc', question: 'What is the plural of "tooth"?', options: ['tooths', 'teeth', 'toothes', 'tooth'], answer: 1 },
    { type: 'mc', question: 'What is the plural of "mouse"?', options: ['mouses', 'mice', 'mouse', 'mices'], answer: 1 },
    { type: 'mc', question: 'Which is the correct past tense of "go"?', options: ['goed', 'went', 'gone', 'going'], answer: 1 },
    { type: 'mc', question: 'In "She is singing," what is "is"?', options: ['Main verb', 'Helping verb', 'Noun', 'Adjective'], answer: 1 },
    { type: 'mc', question: 'What is the past participle of "eat"?', options: ['ate', 'eaten', 'eating', 'eated'], answer: 1 },
    { type: 'mc', question: 'Which sentence uses a LINKING verb?', options: ['She runs fast.', 'He is tall.', 'They play soccer.', 'I eat pizza.'], answer: 1 },
    { type: 'mc', question: 'What is the comparative form of "big"?', options: ['more big', 'bigger', 'biggest', 'bigly'], answer: 1 },
];

const fillInQuestions = [
    { question: 'One child, two _______', answer: 'children' },
    { question: 'She _______ (go) to school every day.', answer: 'goes' },
    { question: 'Look! The cat _______ (sleep) on the sofa.', answer: 'is sleeping' },
    { question: 'They _______ (play) basketball now.', answer: 'are playing' },
    { question: 'I _______ (live) here since 2020.', answer: 'have lived' },
    { question: 'This book is _______ (interesting) than that one.', answer: 'more interesting' },
    { question: 'She is the _______ (tall) girl in class.', answer: 'tallest' },
    { question: 'She runs very _______ (quick).', answer: 'quickly' },
];

const synonymQuestions = [
    { word: 'Happy', options: ['Sad', 'Angry', 'Glad', 'Tired'], answer: 2 },
    { word: 'Big', options: ['Small', 'Large', 'Tiny', 'Huge'], answer: 1 },
    { word: 'Fast', options: ['Slow', 'Rapid', 'Quick', 'Both B and C'], answer: 3 },
    { word: 'Beautiful', options: ['Ugly', 'Pretty', 'Dark', 'Bad'], answer: 1 },
    { word: 'Easy', options: ['Simple', 'Hard', 'Difficult', 'Complex'], answer: 0 },
];

// Global State
let userProgress = {
    username: '',
    wordsLearned: 0,
    quizzesCompleted: 0,
    totalScore: 0,
    topicsMastered: 0,
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const dashboardContainer = document.getElementById('dashboardContainer');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const vocabularyGrid = document.getElementById('vocabularyGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const wordModal = document.getElementById('wordModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const userGreeting = document.getElementById('userGreeting');

// ============================================
// LOGIN FUNCTIONALITY
// ============================================

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('loginError');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        userProgress.username = username;
        errorMsg.classList.remove('show');
        showDashboard();
    } else {
        errorMsg.textContent = 'Invalid username or password. Try Caleb / englishforcaleb';
        errorMsg.classList.add('show');
    }
});

logoutBtn.addEventListener('click', () => {
    loginContainer.style.display = 'flex';
    dashboardContainer.style.display = 'none';
    loginForm.reset();
});

function showDashboard() {
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'flex';
    userGreeting.textContent = `Welcome, ${userProgress.username}!`;
    loadVocabulary('all');
    updateProgress();
}

// ============================================
// NAVIGATION
// ============================================

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
        
        // Update active button
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active section
        contentSections.forEach(s => s.classList.remove('active'));
        document.getElementById(section + 'Section').classList.add('active');
    });
});

// ============================================
// VOCABULARY FUNCTIONALITY
// ============================================

function loadVocabulary(category) {
    vocabularyGrid.innerHTML = '';
    let words = [];
    let wordCount = 1;

    if (category === 'all') {
        Object.values(vocabularyData).forEach(catWords => {
            words = words.concat(catWords);
        });
    } else {
        words = vocabularyData[category] || [];
    }

    words.forEach((wordObj, index) => {
        const card = createVocabularyCard(wordObj, wordCount++);
        card.addEventListener('click', () => openWordModal(wordObj));
        vocabularyGrid.appendChild(card);
    });

    userProgress.wordsLearned = words.length;
}

function createVocabularyCard(wordObj, number) {
    const card = document.createElement('div');
    card.className = 'vocabulary-card';
    card.innerHTML = `
        <span class="word-number">#${number}</span>
        <h3>${wordObj.word}</h3>
        <p class="meaning">${wordObj.meaning}</p>
        <div class="word-meta">
            <div class="meta-item"><strong>Synonym:</strong> ${wordObj.synonym}</div>
        </div>
    `;
    return card;
}

function openWordModal(wordObj) {
    modalBody.innerHTML = `
        <h2>${wordObj.word}</h2>
        <div class="modal-info">
            <strong>Meaning:</strong> ${wordObj.meaning}
        </div>
        <div class="modal-info">
            <strong>Synonym:</strong> ${wordObj.synonym}
        </div>
        <div class="example-sentence">
            <strong>Example:</strong> "${wordObj.example}"
        </div>
    `;
    wordModal.classList.add('show');
}

closeModal.addEventListener('click', () => {
    wordModal.classList.remove('show');
});

wordModal.addEventListener('click', (e) => {
    if (e.target === wordModal) {
        wordModal.classList.remove('show');
    }
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        loadVocabulary(category);
    });
});

// ============================================
// QUIZ FUNCTIONALITY
// ============================================

const startMCQuiz = document.getElementById('startMCQuiz');
const startFillQuiz = document.getElementById('startFillQuiz');
const startSynonymQuiz = document.getElementById('startSynonymQuiz');
const quizContainer = document.getElementById('quizContainer');
const quizResults = document.getElementById('quizResults');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const finishQuizBtn = document.getElementById('finishQuizBtn');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');

startMCQuiz.addEventListener('click', () => startQuiz('mc'));
startFillQuiz.addEventListener('click', () => startQuiz('fill'));
startSynonymQuiz.addEventListener('click', () => startQuiz('synonym'));

function startQuiz(type) {
    quizContainer.style.display = 'block';
    quizResults.style.display = 'none';
    currentQuestionIndex = 0;
    quizScore = 0;

    if (type === 'mc') {
        currentQuiz = { type: 'mc', questions: quizQuestions.slice(0, 10), title: 'Multiple Choice Quiz' };
    } else if (type === 'fill') {
        currentQuiz = { type: 'fill', questions: fillInQuestions.slice(0, 10), title: 'Fill in the Blanks' };
    } else if (type === 'synonym') {
        currentQuiz = { type: 'synonym', questions: synonymQuestions.slice(0, 10), title: 'Synonym Matching' };
    }

    document.getElementById('quizTitle').textContent = currentQuiz.title;
    document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;
    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;

    quizContent.innerHTML = '';

    if (currentQuiz.type === 'mc') {
        quizContent.innerHTML = `
            <h4>${question.question}</h4>
            <div class="quiz-options-list">
                ${question.options.map((opt, idx) => `
                    <label class="quiz-option" onclick="selectOption(${idx})">
                        <input type="radio" name="answer" value="${idx}" style="margin-right: 10px;">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
    } else if (currentQuiz.type === 'fill') {
        quizContent.innerHTML = `
            <h4>${question.question}</h4>
            <input type="text" id="fillAnswer" placeholder="Type your answer" style="width: 100%; padding: 10px; border: 2px solid #e8e8e8; border-radius: 8px; font-size: 15px;">
        `;
        document.getElementById('fillAnswer').focus();
    } else if (currentQuiz.type === 'synonym') {
        quizContent.innerHTML = `
            <h4>Find a synonym for: <strong style="color: var(--primary-red);">${question.word}</strong></h4>
            <div class="quiz-options-list">
                ${question.options.map((opt, idx) => `
                    <label class="quiz-option" onclick="selectOption(${idx})">
                        <input type="radio" name="answer" value="${idx}" style="margin-right: 10px;">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
    }

    submitAnswerBtn.style.display = 'inline-block';
    nextQuestionBtn.style.display = 'none';
    finishQuizBtn.style.display = 'none';
}

function selectOption(index) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === index);
        opt.querySelector('input').checked = idx === index;
    });
}

submitAnswerBtn.addEventListener('click', () => {
    const question = currentQuiz.questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuiz.type === 'fill') {
        const answer = document.getElementById('fillAnswer').value.trim().toLowerCase();
        isCorrect = answer === question.answer.toLowerCase();
    } else {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            isCorrect = parseInt(selected.value) === question.answer;
        }
    }

    if (isCorrect) {
        quizScore++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
        submitAnswerBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'inline-block';
    } else {
        submitAnswerBtn.style.display = 'none';
        finishQuizBtn.style.display = 'inline-block';
    }
});

nextQuestionBtn.addEventListener('click', () => {
    displayQuestion();
});

finishQuizBtn.addEventListener('click', () => {
    showQuizResults();
});

function showQuizResults() {
    quizContainer.style.display = 'none';
    quizResults.style.display = 'block';

    const percentage = Math.round((quizScore / currentQuiz.questions.length) * 100);
    document.getElementById('scoreSpan').textContent = percentage;

    let message = '';
    if (percentage >= 90) message = 'Outstanding! You\'re a master! 🌟';
    else if (percentage >= 80) message = 'Great job! Keep it up! 👏';
    else if (percentage >= 70) message = 'Good effort! Practice more! 💪';
    else if (percentage >= 60) message = 'Not bad! Review the material! 📚';
    else message = 'Keep practicing! You\'ll improve! 🚀';

    document.getElementById('resultsMessage').textContent = message;

    userProgress.quizzesCompleted++;
    userProgress.totalScore += percentage;
    updateProgress();
}

retakeQuizBtn.addEventListener('click', () => {
    quizResults.style.display = 'none';
    startQuiz(currentQuiz.type === 'mc' ? 'mc' : currentQuiz.type === 'fill' ? 'fill' : 'synonym');
});

// ============================================
// PROGRESS TRACKING
// ============================================

function updateProgress() {
    document.getElementById('wordsLearned').textContent = userProgress.wordsLearned;
    document.getElementById('quizzesCompleted').textContent = userProgress.quizzesCompleted;
    
    const avgScore = userProgress.quizzesCompleted > 0 
        ? Math.round(userProgress.totalScore / userProgress.quizzesCompleted)
        : 0;
    document.getElementById('averageScore').textContent = avgScore + '%';
    
    document.getElementById('topicsMastered').textContent = userProgress.topicsMastered;

    // Generate Achievement Badges
    const achievementContainer = document.getElementById('achievementBadges');
    achievementContainer.innerHTML = '';

    const achievements = [
        { emoji: '🎯', name: 'Quiz Master', unlocked: userProgress.quizzesCompleted >= 5 },
        { emoji: '📚', name: 'Word Collector', unlocked: userProgress.wordsLearned >= 50 },
        { emoji: '⭐', name: 'Star Learner', unlocked: avgScore >= 80 },
        { emoji: '🏆', name: 'Champion', unlocked: userProgress.quizzesCompleted >= 10 },
    ];

    achievements.forEach(ach => {
        const badge = document.createElement('div');
        badge.className = `badge ${ach.unlocked ? '' : 'locked'}`;
        badge.textContent = ach.emoji;
        badge.title = ach.name;
        achievementContainer.appendChild(badge);
    });
}

// ============================================
// INITIALIZATION
// ============================================

console.log('%c🎓 English Learning Platform Ready!', 'color: #E63946; font-size: 16px; font-weight: bold;');
console.log('%cLogin with: Caleb / englishforcaleb', 'color: #FF6B35; font-size: 14px;');
