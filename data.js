const FIELD_MANUAL_DATA = {
  meta: { title: 'Field Manual', subtitle: 'Critical Thinking Checklists · Research-Informed Edition · v3.0', coverStamp: 'GRAB & USE' },
  ribbon: [{ label: 'Before Deciding', jumpTo: 'safety' }, { label: 'Before Arguing', jumpTo: 'safety' }],
  tabs: [
    { id: 'dashboard', label: 'Dashboard', type: 'dashboard' },
    { id: 'universal', label: 'Universal', type: 'checklist', key: 'factss' },
    { id: 'methods', label: 'Methods', type: 'methods' },
    { id: 'fallacies', label: 'Fallacies & Biases', type: 'fallacies' },
    { id: 'detective', label: 'Detective Mind', type: 'detective' },
    { id: 'probability', label: 'Probability Lab', type: 'probability' },
    { id: 'factgame', label: 'Fact or Assumption?', type: 'factGame' },
    { id: 'games', label: 'Game Theory', type: 'gameTheory' },
    { id: 'decision', label: 'Decision-Making', type: 'decisionLab' },
    { id: 'problem', label: 'Problem-Solving', type: 'problemLab' },
    { id: 'research', label: 'Research', type: 'evaluator' },
    { id: 'safety', label: 'Cognitive Safety', type: 'safety' },
    { id: 'journal', label: 'Decision Journal', type: 'journal' },
    { id: 'habits', label: 'Habits', type: 'habits' },
    { id: 'before-emailing', label: 'Before Emailing', type: 'checklist', key: 'beforeEmailing' },
    { id: 'tip-calc', label: 'Tip Calculator', type: 'tipCalc' },
    { id: 'notes', label: 'Notes', type: 'notes' }
  ],
  habits: [
    { name: 'Implementation intentions', line: 'Tie the habit to a specific cue: "After I X, I will Y."' },
    { name: 'Habit stacking', line: 'Anchor a new habit right after an existing, reliable one.' },
    { name: 'Two-minute rule', line: 'Shrink the start of the habit until it takes under two minutes.' },
    { name: 'Environment design', line: 'Make the cue for the good habit visible and the cue for the bad one absent.' },
    { name: 'Identity-based habits', line: 'Frame the habit as evidence for the kind of person you want to be.' }
  ],
  checklists: {
    beforeEmailing: {
      title: 'Before Emailing Checklist',
      description: 'A quick proofread-and-tone pass before you hit send.',
      quickCount: 3,
      items: [
        { text: 'Does the subject line say what the email is actually about?', why: 'Vague subjects get deprioritized or missed.' },
        { text: 'Have you read it once out loud for tone?', why: 'Text strips tone; reading aloud catches unintended bluntness.' },
        { text: 'Is there a single clear ask or next step?', why: 'Emails without a clear ask often get no response.' },
        { text: 'Did you check names, dates, and attachments?', why: 'These are the most common embarrassing mistakes.' },
        { text: 'Would you be comfortable if this were forwarded?', why: 'A quick check against saying something you would not want repeated.' }
      ]
    },
    factss: {
      title: 'FACTSS Checklist',
      description: 'A research-informed screen for claims and decisions: measure clearly, compare with base rates, inspect methods, and act in proportion to the stakes.',
      quickCount: 3,
      researchBasis: 'Built around evidence-based reasoning practices: operationalize the claim, identify assumptions, use reference classes, inspect source quality, seek disconfirming evidence, and calibrate confidence against outcomes.',
      items: [
        { letter: 'F', text: 'acts — what do I actually know, versus assume?', why: 'Separate observations and measurements from interpretations.' },
        { letter: 'A', text: 'ssumptions — what am I taking for granted?', why: 'Identify assumptions that would change the conclusion if false.' },
        { letter: 'C', text: 'ontext — what is the comparison or base rate?', why: 'A result is easier to interpret when its reference class is explicit.' },
        { letter: 'T', text: 'rack record — has this source or method been right before?', why: 'Past predictive accuracy is relevant evidence about future reliability.' },
        { letter: 'S', text: 'ource — how was the claim produced and checked?', why: 'Inspect methods, incentives, conflicts, and independent verification.' },
        { letter: 'S', text: 'takes — how bad is it if I am wrong, and can I check first?', why: 'Match evidence and action to the consequences of error.' }
      ]
    }
  },
  safetyCards: [
    { title: 'BEFORE DECIDING', items: ['Is the decision reversible, and what is the cost of delay?', 'What observation or result would change my mind?', 'Have I considered a reasonable alternative explanation?'] },
    { title: 'BEFORE ARGUING', items: ['Can I state their position in a way they would recognize as fair?', 'Which part is evidence, and which part is interpretation or value judgment?', 'What evidence would update my view, and am I willing to follow it?'] }
  ],
  methods: [
    { name: 'Base rates', line: 'Start with what usually happens in the relevant reference class.', examples: ['Real life: estimate a project using past delivery times, not optimism.', 'Cinema: Moneyball uses historical player statistics instead of reputation.', 'Cartoon: before saying a monster caused a noise, ask how often the house simply creaks.'] },
    { name: 'Falsifiability', line: 'State what observation would count against the claim.', examples: ['Real life: define what result would show a training program is not working.', 'Cinema: Sherlock Holmes tests clues that could disprove his first theory.', 'Cartoon: “The invisible dragon is undetectable” cannot be tested, so it provides no useful prediction.'] },
    { name: 'Alternative hypotheses', line: 'List plausible explanations before selecting your favorite.', examples: ['Real life: a sales drop may come from price, seasonality, competition, or measurement error.', 'Cinema: Knives Out shows why several motives must be tested before naming a culprit.', 'Cartoon: a missing sandwich could be eaten, moved, or misremembered—not automatically stolen.'] },
    { name: 'Bayesian updating', line: 'Change confidence in proportion to evidence strength.', examples: ['Real life: update a diagnosis after a test while considering false positives.', 'Cinema: The Martian updates survival plans after each experiment.', 'Cartoon: one cloudy day should lower confidence in a sunny forecast, not prove a permanent climate change.'] },
    { name: 'Expected value', line: 'Combine probability, benefit, cost, and downside risk.', examples: ['Real life: compare a small insurance cost with a rare but severe loss.', 'Cinema: Ocean’s Eleven weighs potential reward against detection and failure costs.', 'Cartoon: a character should not jump across a canyon because success looks exciting if the downside is fatal.'] },
    { name: 'Pre-mortem', line: 'Imagine failure in advance and list preventable causes.', examples: ['Real life: ask why a product launch failed before releasing it.', 'Cinema: Apollo 13 planning repeatedly anticipates failure modes.', 'Cartoon: before a complicated prank, list the ways it could backfire on everyone.'] },
    { name: 'Steelman', line: 'Represent the strongest version of a competing position.', examples: ['Real life: summarize a colleague’s concern before responding.', 'Cinema: 12 Angry Men models careful engagement with doubts instead of dismissing them.', 'Cartoon: let the “villain” explain their goal before deciding whether the plan is harmful.'] },
    { name: 'Systematic review', line: 'Synthesize the relevant body of evidence, not one vivid study.', examples: ['Real life: compare multiple high-quality studies before accepting a health claim.', 'Cinema: investigative reporters cross-check documents, witnesses, and timelines in Spotlight.', 'Cartoon: one dramatic story is not enough to decide whether a whole species is dangerous.'] },
    { name: 'Invention test', line: 'Ask what problem the invention solved, and what hidden trade-off it introduced.', examples: ['Real life: smartphones improve access while creating distraction and privacy costs.', 'Cinema: Jurassic Park shows how technical capability can outrun safety planning.', 'Cartoon: a gadget that solves chores may create new dependence or chaos.'] }
  ],
  fallacies: [
    { type: 'Ad hominem', category: 'Fallacy', definition: 'Rejecting a claim by attacking the person instead of addressing the evidence.', example: 'Real life: “Ignore her budget proposal; she is too young.”', media: 'Cinema: a courtroom argument attacks a witness’s character instead of testing their testimony.', fix: 'Evaluate the claim and evidence separately from the speaker.' },
    { type: 'Straw man', category: 'Fallacy', definition: 'Replacing someone’s real position with a weaker version that is easier to attack.', example: 'Real life: “You want a spending review, so you want to cancel every service.”', media: 'Cartoon: one character says “reduce screen time” and another hears “ban all fun.”', fix: 'Ask the other person to confirm your summary before responding.' },
    { type: 'False dilemma', category: 'Fallacy', definition: 'Presenting only two options when more possibilities exist.', example: 'Real life: “Either approve this plan today or you do not care about the team.”', media: 'Cinema: a hero may have more choices than fight or surrender.', fix: 'Generate at least one additional option and check the boundaries.' },
    { type: 'Post hoc', category: 'Fallacy', definition: 'Assuming that because B followed A, A caused B.', example: 'Real life: sales rose after a new logo, so the logo must be the cause.', media: 'Cartoon: a character wears lucky socks and wins, then treats the socks as causal proof.', fix: 'Look for a mechanism, comparison group, and alternative causes.' },
    { type: 'Confirmation bias', category: 'Bias', definition: 'Seeking or interpreting evidence in ways that support what you already believe.', example: 'Real life: reading only reviews that support the purchase you want.', media: 'Cinema: a detective notices clues that fit their favorite suspect and ignores others.', fix: 'Search specifically for disconfirming evidence.' },
    { type: 'Availability bias', category: 'Bias', definition: 'Overestimating vivid, recent, or memorable events.', example: 'Real life: fearing flying after seeing a crash report while ignoring base rates.', media: 'Cartoon: one dramatic shark scene makes every beach seem deadly.', fix: 'Check statistics and the relevant reference class.' },
    { type: 'Anchoring', category: 'Bias', definition: 'Relying too heavily on the first number or idea encountered.', example: 'Real life: a first salary offer shapes every later negotiation.', media: 'Cinema: an opening ransom demand frames what characters consider reasonable.', fix: 'Estimate independently before seeing or accepting the anchor.' },
    { type: 'Sunk-cost fallacy', category: 'Bias', definition: 'Continuing because of past investment rather than future value.', example: 'Real life: keeping a failing subscription because you already paid for it.', media: 'Cartoon: a character keeps repairing a ridiculous machine because “we have come this far.”', fix: 'Ask what you would choose if starting today.' },
    { type: 'Overconfidence', category: 'Bias', definition: 'Being more certain than the evidence and track record justify.', example: 'Real life: promising a project date without an uncertainty range.', media: 'Cinema: a plan assumes every step will work and has no backup.', fix: 'Use probabilities, ranges, base rates, and a pre-mortem.' },
    { type: 'Survivorship bias', category: 'Bias', definition: 'Studying visible successes while ignoring failures that disappeared.', example: 'Real life: copying successful founders without studying failed businesses.', media: 'Cinema montage shows a winner’s journey but omits all abandoned attempts.', fix: 'Ask who tried and failed, and whether those cases are missing.' }
  ],
  inventions: [
    { invention: 'The printing press', fact: 'It dramatically lowered the cost of copying information.', assumption: 'More information automatically means better information.', lesson: 'Distribution can improve while misinformation also scales.' },
    { invention: 'The safety bicycle', fact: 'Its design made cycling more stable and accessible than earlier bicycles.', assumption: 'A safer design removes every risk.', lesson: 'Risk is reduced, not eliminated; ask what new risks remain.' },
    { invention: 'The shipping container', fact: 'Standardized containers made loading and global transport far more efficient.', assumption: 'Efficiency benefits everyone equally.', lesson: 'Look for second-order effects on labor, ports, trade, and resilience.' },
    { invention: 'The internet search engine', fact: 'Ranking systems help people find information at enormous scale.', assumption: 'The first result is the most reliable result.', lesson: 'Convenience is not the same as evidence quality.' }
  ],
  probability: {
    examples: [
      { title: 'The two-door invention test', prompt: 'A prototype succeeds 8 times out of 10. What is the next result likely to be?', answer: 'The base rate suggests success is more likely than failure, but one trial is never guaranteed.', concept: 'Frequency and uncertainty' },
      { title: 'The rare alarm', prompt: 'A detector is 99% accurate, but the condition affects only 1 in 100 people. Is a positive result certainty?', answer: 'No. When the base rate is low, false positives can make up a substantial share of positive results.', concept: 'Base rates and conditional probability' },
      { title: 'The repeated coin', prompt: 'A fair coin lands heads five times. Is tails now “due”?', answer: 'No. Independent tosses do not remember earlier outcomes. The next toss remains 50/50.', concept: 'Gambler’s fallacy' }
    ],
    calculator: { prior: 1, sensitivity: 99, falsePositive: 1 }
  },
  factGame: [
    { statement: 'The prototype passed 8 of 10 controlled tests.', answer: 'fact', explanation: 'This is a report about observed test results. It still needs context about the test design and sample.' },
    { statement: 'Users will love the new invention.', answer: 'assumption', explanation: 'This is a prediction. It becomes more credible when supported by representative user research.' },
    { statement: 'The first search result is the most reliable source.', answer: 'assumption', explanation: 'Search ranking is not the same as evidence quality or accuracy.' },
    { statement: 'The machine used 20% less energy in the measured trial.', answer: 'fact', explanation: 'This can be a fact if the measurement and comparison conditions are documented.' },
    { statement: 'This policy is fair because it treats everyone identically.', answer: 'value', explanation: 'Fairness is a value judgment. Equal treatment and equitable outcomes are different claims.' }
  ],
  games: {
    matrix: { cooperateCooperate: 'Both gain trust and a strong shared result.', cooperateDefect: 'You are exploited; the other player gains short-term advantage.', defectCooperate: 'You gain short-term advantage; trust is damaged.', defectDefect: 'Both avoid exploitation but receive a poor result.' },
    concepts: [
      { name: 'Prisoner’s dilemma', line: 'Individual incentives can produce a worse result for everyone.' },
      { name: 'Nash equilibrium', line: 'A stable outcome where no player benefits by changing strategy alone.' },
      { name: 'Zero-sum game', line: 'One player’s gain is exactly another player’s loss.' },
      { name: 'Positive-sum game', line: 'Cooperation can create more total value to distribute.' },
      { name: 'Signaling', line: 'Actions can communicate hidden information when signals are costly or credible.' },
      { name: 'Repeated games', line: 'Future interactions can make trust, reputation, and cooperation rational.' }
    ]
  },
  dailyQuestions: ['What evidence would change my mind?', 'What is the base rate?', 'Which assumption is doing the most work?', 'Is this a one-shot or repeated game?', 'What is the strongest alternative explanation?'],
  disclaimer: 'This field manual is an educational reasoning aid. It does not replace professional medical, legal, financial, scientific, or safety advice.',
  translations: {
    en: { dashboard: 'Field Manual Dashboard', dashboardDesc: 'A quick command center for evidence, uncertainty, incentives, and better decisions.', progress: 'CHECKLIST PROGRESS', completed: 'completed items', saved: 'Progress is saved in this browser.', calibration: 'CALIBRATION', accuracy: 'accuracy', confidence: 'Average confidence', gap: 'gap', resolve: 'Resolve journal predictions to measure calibration.', daily: 'DAILY QUESTION', dailyHint: 'Use it before your next important decision.', export: 'EXPORT JOURNAL', reset: 'RESET CHECKLIST PROGRESS', care: 'USE WITH CARE', disclaimer: 'This field manual is an educational reasoning aid. It does not replace professional medical, legal, financial, scientific, or safety advice.', language: 'Language', dailyQuestions: ['What would change my mind?', 'What is the base rate?', 'Which assumption is doing the most work?', 'Is this a one-shot or repeated game?', 'What is the strongest alternative explanation?'] },
    ta: { dashboard: 'சிந்தனை களக் கையேடு', dashboardDesc: 'ஆதாரம், நிச்சயமின்மை, ஊக்கங்கள் மற்றும் சிறந்த முடிவுகளுக்கான விரைவு மையம்.', progress: 'சரிபார்ப்பு பட்டியல் முன்னேற்றம்', completed: 'முடிக்கப்பட்ட உருப்படிகள்', saved: 'முன்னேற்றம் இந்த உலாவியில் சேமிக்கப்படுகிறது.', calibration: 'துல்லிய அளவீடு', accuracy: 'துல்லியம்', confidence: 'சராசரி நம்பிக்கை', gap: 'இடைவெளி', resolve: 'துல்லிய அளவீட்டை கணக்கிட கணிப்பு முடிவுகளை பதிவு செய்யுங்கள்.', daily: 'இன்றைய கேள்வி', dailyHint: 'அடுத்த முக்கிய முடிவுக்கு முன் இதைப் பயன்படுத்துங்கள்.', export: 'கணிப்புகளை ஏற்றுமதி செய்', reset: 'முன்னேற்றத்தை மீட்டமை', care: 'கவனத்துடன் பயன்படுத்தவும்', disclaimer: 'இந்த களக் கையேடு கல்வி சார்ந்த சிந்தனை உதவி மட்டுமே. இது மருத்துவ, சட்ட, நிதி, அறிவியல் அல்லது பாதுகாப்பு ஆலோசனைக்கு மாற்றாகாது.', language: 'மொழி', dailyQuestions: ['என் எண்ணத்தை மாற்றும் ஆதாரம் எது?', 'அடிப்படை விகிதம் என்ன?', 'எந்த அனுமானம் அதிக வேலை செய்கிறது?', 'இது ஒருமுறை நடக்கும் விளையாட்டா அல்லது மீண்டும் நடப்பதா?', 'மிகவும் வலுவான மாற்று விளக்கம் எது?'] }
  },
  detective: {
    intro: 'A compact investigation workflow for moving from a surprising claim to a defensible conclusion.', caseFileLabel: 'CASE FILE // EVIDENCE WORKFLOW', motto: 'Observe carefully. Infer modestly. Update visibly.', columns: [
      { step: '01', title: 'Observe', items: ['What was directly measured?', 'What is the source and study design?', 'What details are missing?'] },
      { step: '02', title: 'Test', items: ['What alternative explanation fits?', 'What is the base rate?', 'Would another team reproduce it?'] },
      { step: '03', title: 'Decide', items: ['How strong is the evidence?', 'What action is proportionate?', 'What would change the decision?'] }
    ]
  },
  stubs: {
    research: 'Research tools planned: scientific paper, news article, and social media claim review.'
  },
  decisionLab: {
    methods: [
      { name: 'Reversible vs irreversible', line: 'Move quickly on two-way doors; slow down and document one-way doors.' },
      { name: 'Expected value', line: 'Compare possible outcomes by probability, benefit, cost, and downside.' },
      { name: 'Pre-mortem', line: 'Imagine the decision failed and list the causes before committing.' },
      { name: 'Opportunity cost', line: 'Ask what the chosen path prevents you from doing instead.' }
    ],
    cases: [
      { name: 'Apollo 13', source: 'NASA mission / film Apollo 13', question: 'How do you decide under time pressure with incomplete information?', method: 'Constrain the problem, prioritize survival, test options against physical limits, and communicate clearly.', lesson: 'Good decisions are often a sequence of small, evidence-based updates rather than one perfect choice.' },
      { name: 'Erin Brockovich', source: 'Historical legal case / film Erin Brockovich', question: 'How do you decide whether a pattern is worth investigating?', method: 'Collect testimonies, compare records, identify the common exposure, and build a case from converging evidence.', lesson: 'A compelling story becomes stronger when independent records point in the same direction.' },
      { name: 'The Martian', source: 'Novel and film', question: 'How do you choose the next action when survival depends on many unknowns?', method: 'Break the goal into measurable subproblems, run small tests, and update the plan after each result.', lesson: 'Use reversible experiments when the full plan cannot be known in advance.' }
    ]
  },
  problemLab: {
    methods: [
      { name: 'Five Whys', line: 'Repeat “why?” until you reach a controllable system cause, not a person to blame.' },
      { name: 'First principles', line: 'Strip away convention and rebuild the solution from constraints and fundamentals.' },
      { name: 'Systems map', line: 'Trace feedback loops, delays, incentives, and unintended side effects.' },
      { name: 'Divide and test', line: 'Split a complex problem into smaller hypotheses that can be checked.' }
    ],
    cases: [
      { name: 'The Apollo 13 CO₂ filter', source: 'NASA engineering / film Apollo 13', problem: 'A spacecraft has filters that do not fit the available ports.', method: 'List available materials, define the constraint, prototype with only onboard components, and verify airflow.', lesson: 'First-principles problem-solving starts with what is physically available, not what would be ideal.' },
      { name: 'The Imitation Game', source: 'Alan Turing and Bletchley Park / film The Imitation Game', problem: 'A huge search space must be reduced before the day ends.', method: 'Find structure in the problem, automate repeated work, and use partial clues to eliminate possibilities.', lesson: 'The right representation can make an impossible problem tractable.' },
      { name: 'Moneyball', source: 'Oakland Athletics / film Moneyball', problem: 'How can a team compete with a much larger budget?', method: 'Question the accepted metric, identify undervalued variables, and optimize the system for wins rather than appearances.', lesson: 'A problem may persist because the goal is measured indirectly or with the wrong proxy.' }
    ]
  },
  journalSeed: [
    { text: 'Sample: vendor delivers on time', conf: 80, outcome: 'correct' },
    { text: 'Sample: feature ships without rollback', conf: 65, outcome: 'correct' },
    { text: 'Sample: forecast is within 5%', conf: 90, outcome: 'incorrect' }
  ]
};