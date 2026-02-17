// ============================================
// ENGLISH LEARNING PLATFORM - SCRIPT.JS
// Interactive Learning System for Caleb
// With Complete Grammar Details
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

// ============================================
// DETAILED GRAMMAR TOPICS DATA
// ============================================

const grammarTopics = {
    nouns: {
        title: 'Nouns (Naming Words)',
        definition: 'A noun is a word that names a person, place, animal, thing, or idea.',
        sections: [
            {
                name: 'Types of Nouns',
                content: `
                    <h4>Common Noun</h4>
                    <p>General name for things: dog, city, teacher, book</p>
                    
                    <h4>Proper Noun</h4>
                    <p>Specific name (starts with CAPITAL letter): Rex, London, Mr. Smith, Friday</p>
                    
                    <h4>Countable Noun</h4>
                    <p>Things you can count (have plural): book/books, apple/apples, cat/cats</p>
                    
                    <h4>Uncountable Noun</h4>
                    <p>Things you cannot count (no plural): water, rice, milk, sugar, sand</p>
                    
                    <h4>Singular Noun</h4>
                    <p>Just one: one cat, a student, the house</p>
                    
                    <h4>Plural Noun</h4>
                    <p>More than one: two cats, many students, five houses</p>
                `
            },
            {
                name: 'How to Make Plurals',
                content: `
                    <h4>Basic Rules:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Most words: add -s (cat → cats, dog → dogs)</li>
                        <li>Words ending in s, x, z, ch, sh: add -es (box → boxes, bus → buses)</li>
                        <li>Words ending in consonant + y: change y to i + -es (baby → babies)</li>
                        <li>Words ending in f or fe: change to -ves (knife → knives, leaf → leaves)</li>
                        <li>Irregular (special): man → men, child → children, tooth → teeth, mouse → mice, foot → feet</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>The cat sleeps. (singular)</li>
                        <li>The cats play. (plural)</li>
                        <li>I drink water. (uncountable - no 'waters')</li>
                        <li>Tokyo is beautiful. (proper noun)</li>
                    </ul>
                `
            }
        ]
    },
    verbs: {
        title: 'Verbs (Action Words)',
        definition: 'A verb is a word that shows action or state of being.',
        sections: [
            {
                name: 'Types of Verbs',
                content: `
                    <h4>Action Verb</h4>
                    <p>Shows what someone does: run, eat, think, write, jump, sing</p>
                    
                    <h4>Helping Verb</h4>
                    <p>Helps the main verb: is, are, was, were, have, has, do, does</p>
                    
                    <h4>Linking Verb</h4>
                    <p>Connects subject to description: am, is, are, was, were, seem, become, appear</p>
                `
            },
            {
                name: 'Verb Forms',
                content: `
                    <h4>3 Main Forms:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Base Form:</strong> walk, eat, go, see, do</li>
                        <li><strong>Past Tense:</strong> walked, ate, went, saw, did</li>
                        <li><strong>Past Participle:</strong> walked, eaten, gone, seen, done</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>She runs fast. (action verb - present)</li>
                        <li>He is happy. (linking verb)</li>
                        <li>They have finished homework. (helping + main verb)</li>
                    </ul>
                `
            }
        ]
    },
    adjectives: {
        title: 'Adjectives (Describing Words)',
        definition: 'An adjective describes a noun - it tells us what kind, how many, or which one.',
        sections: [
            {
                name: 'Types of Adjectives',
                content: `
                    <h4>Descriptive Adjective</h4>
                    <p>Describes qualities: happy, blue, tall, delicious, beautiful, soft, fast</p>
                    
                    <h4>Quantitative Adjective</h4>
                    <p>Tells how many/much: many, few, several, some, all, most</p>
                    
                    <h4>Demonstrative Adjective</h4>
                    <p>Points to specific things: this, that, these, those</p>
                    
                    <h4>Possessive Adjective</h4>
                    <p>Shows ownership: my, your, his, her, its, our, their</p>
                `
            },
            {
                name: 'Comparison of Adjectives',
                content: `
                    <h4>Three Levels:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Positive:</strong> tall, happy, beautiful, good, bad</li>
                        <li><strong>Comparative:</strong> taller, happier, more beautiful, better, worse</li>
                        <li><strong>Superlative:</strong> tallest, happiest, most beautiful, best, worst</li>
                    </ul>
                    
                    <h4>Rules:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Short words (1-2 syllables): add -er, -est</li>
                        <li>Long words (3+ syllables): use more, most</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>I have a red ball. (descriptive)</li>
                        <li>This book is mine. (demonstrative)</li>
                        <li>She is taller than me. (comparative)</li>
                        <li>He is the tallest boy. (superlative)</li>
                    </ul>
                `
            }
        ]
    },
    adverbs: {
        title: 'Adverbs (How/When/Where Words)',
        definition: 'An adverb describes a verb, adjective, or other adverb. Often ends in -ly.',
        sections: [
            {
                name: 'Types of Adverbs',
                content: `
                    <h4>Manner (How?)</h4>
                    <p>How is it done?: quickly, slowly, carefully, well, badly, happily, beautifully</p>
                    
                    <h4>Time (When?)</h4>
                    <p>When did it happen?: now, later, yesterday, soon, today, tomorrow, tonight</p>
                    
                    <h4>Place (Where?)</h4>
                    <p>Where did it happen?: here, there, everywhere, outside, inside, upstairs</p>
                    
                    <h4>Frequency (How often?)</h4>
                    <p>How many times?: always, usually, sometimes, never, rarely, often</p>
                    
                    <h4>Degree (How much?)</h4>
                    <p>To what extent?: very, quite, almost, too, really, extremely</p>
                `
            },
            {
                name: 'Formation & Examples',
                content: `
                    <h4>How to Make Adverbs:</h4>
                    <p>Many adverbs = adjective + -ly</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>quick → quickly</li>
                        <li>happy → happily</li>
                        <li>careful → carefully</li>
                    </ul>
                    
                    <h4>Exceptions:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>good → well (not "goodly"!)</li>
                        <li>fast → fast (no change)</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>She runs quickly. (manner)</li>
                        <li>I will go tomorrow. (time)</li>
                        <li>He is very tall. (degree - describes adjective)</li>
                        <li>They always eat breakfast. (frequency)</li>
                    </ul>
                `
            }
        ]
    },
    pronouns: {
        title: 'Pronouns (Replacement Words)',
        definition: 'A pronoun takes the place of a noun so we don\'t repeat the same word.',
        sections: [
            {
                name: 'Types of Pronouns',
                content: `
                    <h4>Personal - Subject</h4>
                    <p>Do the action: I, you, he, she, it, we, they</p>
                    
                    <h4>Personal - Object</h4>
                    <p>Receive the action: me, you, him, her, it, us, them</p>
                    
                    <h4>Possessive</h4>
                    <p>Show ownership: my/mine, your/yours, his, her/hers, its, our/ours, their/theirs</p>
                    
                    <h4>Demonstrative</h4>
                    <p>Point to things: this, that, these, those</p>
                    
                    <h4>Reflexive</h4>
                    <p>Back to the subject: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>
                    
                    <h4>Interrogative</h4>
                    <p>Ask questions: who, what, which, whose, whom</p>
                `
            },
            {
                name: 'Subject vs Object & Possessives',
                content: `
                    <h4>Subject vs Object:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Subject:</strong> She loves ice cream. (She = doing the loving)</li>
                        <li><strong>Object:</strong> I love her. (her = receiving the love)</li>
                    </ul>
                    
                    <h4>Possessive Adjectives vs Pronouns:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Adjective (before noun):</strong> This is my book.</li>
                        <li><strong>Pronoun (alone):</strong> This book is mine.</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>I like pizza. (subject)</li>
                        <li>Give me the ball. (object)</li>
                        <li>That toy is his. (possessive)</li>
                        <li>She made this herself. (reflexive)</li>
                        <li>Who is at the door? (interrogative)</li>
                    </ul>
                `
            }
        ]
    },
    prepositions: {
        title: 'Prepositions (Position Words)',
        definition: 'A preposition shows the relationship between a noun/pronoun and other words in the sentence.',
        sections: [
            {
                name: 'Categories of Prepositions',
                content: `
                    <h4>Place (Where?)</h4>
                    <p>in, on, at, under, over, behind, in front of, next to, between, among, above, below</p>
                    
                    <h4>Time (When?)</h4>
                    <p>at, on, in, before, after, during, for, since, until</p>
                    
                    <h4>Direction (Where to?)</h4>
                    <p>to, from, into, out of, through, across, along</p>
                    
                    <h4>Other</h4>
                    <p>with, without, about, of, by, for</p>
                `
            },
            {
                name: 'How to Use Prepositions',
                content: `
                    <h4>Common Usage Rules:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>In</strong> = inside something (in the box, in July, in 2024)</li>
                        <li><strong>On</strong> = touching surface (on the table, on Monday)</li>
                        <li><strong>At</strong> = specific point (at school, at 5 o'clock)</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>The cat is under the table.</li>
                        <li>We meet at 3 PM.</li>
                        <li>She walked through the door.</li>
                        <li>I come from Japan.</li>
                        <li>The book is on the shelf.</li>
                    </ul>
                `
            }
        ]
    },
    conjunctions: {
        title: 'Conjunctions (Connecting Words)',
        definition: 'A conjunction joins words, phrases, or sentences together.',
        sections: [
            {
                name: 'Types of Conjunctions',
                content: `
                    <h4>Coordinating (FANBOYS)</h4>
                    <p>For, And, Nor, But, Or, Yet, So - Join equal parts</p>
                    
                    <h4>Subordinating</h4>
                    <p>because, although, since, if, when, while, after, before, unless, until - Join unequal parts</p>
                    
                    <h4>Correlative</h4>
                    <p>both...and, either...or, neither...nor, not only...but also - Work in pairs</p>
                `
            },
            {
                name: 'FANBOYS Explained',
                content: `
                    <h4>Each Conjunction:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>For</strong> = reason (I stayed home, for I was sick.)</li>
                        <li><strong>And</strong> = addition (I like tea and coffee.)</li>
                        <li><strong>Nor</strong> = negative addition (I don't like fish, nor do I like shrimp.)</li>
                        <li><strong>But</strong> = contrast (She is small but strong.)</li>
                        <li><strong>Or</strong> = choice (Tea or coffee?)</li>
                        <li><strong>Yet</strong> = contrast (He is rich yet unhappy.)</li>
                        <li><strong>So</strong> = result (I was tired, so I slept.)</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>I like apples and oranges. (coordinating)</li>
                        <li>Because it rained, we stayed inside. (subordinating)</li>
                        <li>Both my mom and dad are teachers. (correlative)</li>
                    </ul>
                `
            }
        ]
    },
    tenses: {
        title: 'Tenses (Time of Action)',
        definition: 'Tense tells us WHEN an action happens - in the past, present, or future.',
        sections: [
            {
                name: 'Present Tense',
                content: `
                    <h4>Simple Present</h4>
                    <p><strong>When Used:</strong> Habits, facts, permanent situations</p>
                    <p><strong>Structure:</strong> Subject + verb (s/es for he/she/it)</p>
                    <p><strong>Example:</strong> I play soccer. She plays piano.</p>
                    
                    <h4>Present Continuous</h4>
                    <p><strong>When Used:</strong> Happening right now, temporary</p>
                    <p><strong>Structure:</strong> am/is/are + verb-ing</p>
                    <p><strong>Example:</strong> I am eating now. They are playing.</p>
                    
                    <h4>Present Perfect</h4>
                    <p><strong>When Used:</strong> Started in past, continues to now</p>
                    <p><strong>Structure:</strong> have/has + past participle</p>
                    <p><strong>Example:</strong> I have lived here for 5 years.</p>
                    
                    <h4>Signal Words:</h4>
                    <p>always, usually, often, sometimes, every day, now, today, since, for</p>
                `
            },
            {
                name: 'Past Tense',
                content: `
                    <h4>Simple Past</h4>
                    <p><strong>When Used:</strong> Completed actions in past</p>
                    <p><strong>Structure:</strong> Subject + verb-ed (or irregular)</p>
                    <p><strong>Example:</strong> I walked home. She went to school.</p>
                    
                    <h4>Past Continuous</h4>
                    <p><strong>When Used:</strong> Action in progress at specific past time</p>
                    <p><strong>Structure:</strong> was/were + verb-ing</p>
                    <p><strong>Example:</strong> I was sleeping when you called.</p>
                    
                    <h4>Past Perfect</h4>
                    <p><strong>When Used:</strong> Action completed before another past action</p>
                    <p><strong>Structure:</strong> had + past participle</p>
                    <p><strong>Example:</strong> She had left before I arrived.</p>
                    
                    <h4>Signal Words:</h4>
                    <p>yesterday, last week, ago, in 2020, when, while, before</p>
                `
            },
            {
                name: 'Future Tense',
                content: `
                    <h4>Simple Future</h4>
                    <p><strong>When Used:</strong> Predictions, spontaneous decisions</p>
                    <p><strong>Structure:</strong> will + verb OR am/is/are going to + verb</p>
                    <p><strong>Example:</strong> I will help you. It is going to rain.</p>
                    
                    <h4>Future Continuous</h4>
                    <p><strong>When Used:</strong> Action in progress at specific future time</p>
                    <p><strong>Structure:</strong> will be + verb-ing</p>
                    <p><strong>Example:</strong> At 8 PM, I will be studying.</p>
                    
                    <h4>Future Perfect</h4>
                    <p><strong>When Used:</strong> Action completed before specific future time</p>
                    <p><strong>Structure:</strong> will have + past participle</p>
                    <p><strong>Example:</strong> By tomorrow, I will have finished.</p>
                    
                    <h4>Signal Words:</h4>
                    <p>tomorrow, next week, soon, later, tonight, in 2025</p>
                `
            }
        ]
    },
    sentences: {
        title: 'Sentence Structure',
        definition: 'A sentence is a group of words that expresses a complete thought with a subject and predicate.',
        sections: [
            {
                name: 'Types of Sentences',
                content: `
                    <h4>By Purpose:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Declarative:</strong> Makes a statement (I like pizza.)</li>
                        <li><strong>Interrogative:</strong> Asks a question (Do you like pizza?)</li>
                        <li><strong>Imperative:</strong> Gives command/request (Close the door.)</li>
                        <li><strong>Exclamatory:</strong> Shows strong emotion (What a beautiful day!)</li>
                    </ul>
                    
                    <h4>Sentence Patterns:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Subject + Verb:</strong> Birds sing.</li>
                        <li><strong>Subject + Verb + Object:</strong> She eats apples.</li>
                        <li><strong>Subject + Verb + Complement:</strong> He is tall.</li>
                        <li><strong>Subject + Verb + Indirect Object + Direct Object:</strong> Mom gave me a gift.</li>
                    </ul>
                `
            },
            {
                name: 'Types by Structure',
                content: `
                    <h4>Simple Sentence</h4>
                    <p>One independent clause: I like cats.</p>
                    
                    <h4>Compound Sentence</h4>
                    <p>Two independent clauses joined by conjunction: I like cats, and she likes dogs.</p>
                    
                    <h4>Complex Sentence</h4>
                    <p>One independent + one dependent clause: Because I like cats, I have three.</p>
                    
                    <h4>Compound-Complex Sentence</h4>
                    <p>Two independent + one or more dependent: I like cats, and she likes dogs because they are friendly.</p>
                `
            }
        ]
    },
    agreement: {
        title: 'Subject-Verb Agreement',
        definition: 'The verb must match the subject in number (singular or plural).',
        sections: [
            {
                name: 'Golden Rule & Basic Rules',
                content: `
                    <h4>The Golden Rule:</h4>
                    <p style="font-size: 16px; font-weight: bold; color: var(--primary-red); margin: 15px 0;">The verb must match the subject in number!</p>
                    
                    <h4>Basic Rules:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li><strong>Most verbs:</strong> Singular add -s or -es, Plural base form</li>
                        <li><strong>Be verb:</strong> is (singular), are (plural)</li>
                        <li><strong>Have verb:</strong> has (singular), have (plural)</li>
                        <li><strong>Do verb:</strong> does (singular), do (plural)</li>
                    </ul>
                    
                    <h4>Examples:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>The cat runs fast. (singular - add s)</li>
                        <li>The cats run fast. (plural - no s)</li>
                        <li>She is happy. (singular)</li>
                        <li>They are happy. (plural)</li>
                        <li>He has a book. (singular)</li>
                        <li>They have books. (plural)</li>
                    </ul>
                `
            },
            {
                name: 'Special Cases',
                content: `
                    <h4>And (Compound Subject)</h4>
                    <p>Usually plural: Tom and Jerry are friends.</p>
                    
                    <h4>Or/Nor</h4>
                    <p>Verb matches closest subject: Either the teacher or the students are coming.</p>
                    
                    <h4>Each, Every, Everyone</h4>
                    <p>Always singular: Each student has a book.</p>
                    
                    <h4>There is/are</h4>
                    <p>Matches the noun after verb: There is a cat. / There are cats.</p>
                    
                    <h4>Collective Nouns (team, family)</h4>
                    <p>Can be singular or plural: The team is winning. / The team are arguing.</p>
                    
                    <h4>Tricky Words:</h4>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>News is singular: The news is good.</li>
                        <li>Mathematics is singular: Math is fun.</li>
                        <li>People is plural: The people are happy.</li>
                        <li>Police is plural: The police are coming.</li>
                    </ul>
                `
            }
        ]
    }
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
// GRAMMAR MODAL FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const learnButtons = document.querySelectorAll('.learn-btn');
    
    learnButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.getAttribute('data-topic');
            openGrammarModal(topic);
        });
    });
});

function openGrammarModal(topic) {
    const data = grammarTopics[topic];
    
    if (!data) return;
    
    let html = `<h2>${data.title}</h2>`;
    html += `<p style="font-size: 14px; color: #666; margin: 15px 0; font-style: italic;">${data.definition}</p>`;
    
    data.sections.forEach(section => {
        html += `<div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #eee;">`;
        html += `<h3 style="color: var(--primary-orange); margin-bottom: 15px;">${section.name}</h3>`;
        html += section.content;
        html += `</div>`;
    });
    
    modalBody.innerHTML = html;
    wordModal.classList.add('show');
}

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
