const practice_trial_info = [
    {
      context: `This is | the | first | example paragraph.`,
      trigger: `Parts of | each sentence | appear | one | at | a | time.`,
      continuation: `You | will | see two | more | examples for | practice.`,
      question: "Will you see two more examples?",
      option1: "yes",
      option2: "no"
    },
    {
      context: `This | is | the second | example | paragraph.`,
      trigger: `You | will | see | one more example | for practice.`,
      continuation: `The | next will | be the | last | example.`,
      question: "Will you see one more examples?",
      option1: "yes",
      option2: "no"
    },
    {
      context: `This is the | third | example | paragraph.`,
      trigger: `It | is | also | the | final | example.`,
      continuation: `You | will | not see | any | more examples | for | practice.`,
      question: "Examples are over, would you like to continue?",
      option1: "yes",
      option2: "no"
    }
  ];
  
  let raw_trial_info = [
    {
      ID: 1,
      context: {
        full: `I carefully inspected | the new | shipment of jewelry.`,
        partial: `I helped unload | the new | shipment of jewelry.`
      },
      context_length: {
        full: 8, // number of words in full context condition
        partial: 8 // number of words in partial context condition
      },
      trigger: {
        scalar: `Some of | the gold | watches were | fakes.`,
        focused: `Only | some of | the gold | watches were | fakes.`
      },
      trigger_length: {
        scalar: 7, // number of words noin scalar trigger sentence
        focused: 8 // number of words in focused trigger sentence
      },
      continuation: {
        complement: `The rest | were real, | but the | company is still | planning | to sue.`,
        cancelation: `In fact, | they all | were, | so the | company is | planning | to sue.`
      },
      question: `Were there vegetables in the shipment?`,
      question_type: "S1"
      correct: "no"
    },
    {
      ID: 2,
      context: {
        full: `Before the | hurricane landed, | I checked every | house | in town.`,
        partial: `Before the | hurricane landed, | I volunteered | to help out | in town.`
      },
      context_length: {
        full: 10,
        partial: 11
      },
      trigger: {
        scalar: `Some of | the residents | had evacuated.`,
        focused: `Only | some of | the residents | had evacuated.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The rest | stayed at home | and foolishly | risked their | lives.`,
        cancelation: `In fact, | they all | did | and, | as a result, | they survived | the storm.`
      },
      question: `Were any of the residents in their town when the hurricane landed?`,
      question_type: "S3_all"
      correct: "negated_existential"
    },
    {
      ID: 3,
      context: {
        full: `This morning, | I took | attendance | at an | important meeting | with the manager.`,
        partial: `This morning, | I heard | about an | important meeting | with the manager.`
      },
      context_length: {
        full: 12,
        partial: 11
      },
      trigger: {
        scalar: `Some of | the company’s | accountants were | there.`,
        focused: `Only | some of | the company’s | accountants were | there.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The rest | were missing | because they | had to audit | the company’s finances | before | the end of | the quarter.`,
        cancelation: `In fact, | they all | were | in order to | communicate | how budget cutbacks | were crippling | their division.`
      },
      question: {
        complement: `Was there an audit for the company's finances?`,
        cancelation:`Were the accountants worried about the potential budget cutbacks`
      },
      question_type: "S3_misc"
      answer: "yes"

    },
    {
      ID: 4,
      context: {
        full: `I was | the chief medic | overseeing | the bus accident | on the side | of the | highway.`,
        partial: `I stopped | to see | if | I could help | with the | bus accident | on the side | of the highway.`
      },
      context_length: {
        full: 15,
        partial: 18
      },
      trigger: {
        scalar: `Some of | the passengers | were still | alive.`,
        focused: `Only | some of | the passengers | were still | alive.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The others | were killed | on impact | and there | was no | opportunity to | save them.`,
        cancelation: `In fact, | they all | were | and none | were critically injured.`
      },
      question: `Did any passenger die in the bus accident on the highway?`,
      question_type: "S3_all",
      correct: "negated_existential"
    },
    {
      ID: 5,
      context: {
        full: `At my client’s request, | I | meticulously compiled | the investment report.`,
        partial: `At my client’s request, | I | skimmed | the investment report.`
      },
      context_length: {
        full: 10,
        partial: 9
      },
      trigger: {
        scalar: `Some of | the real estate | investments lost | money.`,
        focused: `Only | some of | the real estate | investments lost | money.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The others | were successful | despite the | recent economic | downturn.`,
        cancelation: `In fact, | they all | did | because of the | recent economic | downturn.`
      },
      question: `Did all real estate investments increase in value in spite of the economic downturn?`,
      question_type: "S2_some",
      answer: "no"
    },
    {
      ID: 6,
      context: {
        full: `As the | office’s main technician, | I had | to check | each computer | for | the dangerous | new virus.`,
        partial: `As the | office’s main technician, | I had | been alerted | to | the dangerous | new virus.`
      },
      context_length: {
        full: 16,
        partial: 14
      },
      trigger: {
        scalar: `Some of | our computers | were infected.`,
        focused: `Only | some of | our computers | were infected.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The rest | were clean | because their | owners had | been very | cautious.`,
        cancelation: `In fact, | they all | were | and the | virus nearly | destroyed the | whole system.`
      },
      question: `Has there been damaging software on any computers at the office?`,
      question_type: `S2`
      correct: `yes`
    },
    {
      ID: 7,
      context: {
        full: `Earlier today, | I was | leading | a small | group of tourists | around the sights | downtown.`,
        partial: `Earlier today, | I passed | by a group of tourists | looking at sights | downtown.`
      },
      context_length: {
        full: 14,
        partial: 13
      },
      trigger: {
        scalar: `Some of | the tourists | got soaked | by the | rain storm.`,
        focused: `Only | some of | the tourists | got soaked | by the | rain storm.`
      },
      trigger_length: {
        scalar: 10,
        focused: 11
      },
      continuation: {
        complement: `The rest | were dry | because they | had remembered | their umbrellas.`,
        cancelation: `In fact, | they all | did | because they | had forgotten | their umbrellas.`
      },
      question: `Was there a rain storm downtown earlier today?`,
      question_type: "S2_misc",
      correct: `yes`
      
    },
    {
      ID: 8,
      context: {
        full: `After | the furniture sale, | I catalogued | all the merchandise | in the store.`,
        partial: `After | the furniture sale, | I closed down | and | locked up | the store.`
      },
      context_length: {
        full: 12,
        partial: 12
      },
      trigger: {
        scalar: `Some of | the leather | couches had | been sold.`,
        focused: `Only | some of | the leather | couches had | been sold.`
      },
      trigger_length: {
        scalar: 8,
        focused: 9
      },
      continuation: {
        complement: `The rest | were going | to be | stored in | the warehouse | until the | following season.`,
        cancelation: `In fact, | they all | had | since they | were stylish | and cheap.`
      },
      question: `Did the furniture sale include any leather couches?`,
      question_type: "S2_misc",
      correct: `yes`,
    },
    {
      ID: 9,
      context: {
        full: `Last week, | I tasted | every dish | at | a family potluck.`,
        partial: `Last week, | I attended | a family potluck.`
      },
      context_length: {
        full: 10,
        partial: 7
      },
      trigger: {
        scalar: `Some of | the dishes | were spicy.`,
        focused: `Only | some of | the dishes | were spicy.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The rest | were mild | and I | found them | to be | too bland.`,
        cancelation: `In fact, | they all | were | but fortunately | I love | spicy food.`
      },
      question: `Does the person dislike spicy food?`,
      question_type: `S3_misc`,
      correct: `no`
    },
    {
      ID: 10,
      context: {
        full: `When I | entered Disney World, | I asked | about the status | of each | of the rides.`,
        partial: `When I | visited Disney World, | I quickly | walked around | the amusement park.`
      },
      context_length: {
        full: 15,
        partial: 12
      },
      trigger: {
        scalar: `Some of | my favorite | rides were | still running.`,
        focused: `Only | some of | my favorite | rides were | still running.`
      },
      trigger_length: {
        scalar: 8,
        focused: 9
      },
      continuation: {
        complement: `The rest | were shut down | since they | were no | longer popular.`,
        cancelation: `In fact, | they all | were | since they | were still | popular.`
      },
      question: `Had all of my favorite rides at Disney World been closed?`,
      question_type: `S2_some`,
      correct: `no`
    },
    {
      ID: 11,
      context: {
        full: `After | my house | was burglarized, | I carefully | inventoried | my wine collection.`,
        partial: `After | my house | was burglarized, | I briefly | checked | the basement.`
      },
      context_length: {
        full: 11,
        partial: 10
      },
      trigger: {
        scalar: `Some of | the bottles | of Chardonnay | were missing.`,
        focused: `Only | some of | the bottles | of Chardonnay | were missing.`
      },
      trigger_length: {
        scalar: 8,
        focused: 9
      },
      continuation: {
        complement: `The rest | were safe | but I | was still | extremely upset.`,
        cancelation: `In fact, | they all | were | even though | I had | secured them.`
      },
      question: `Was the person's house burglarized?`,
      question_type: "S1",
      correct: `yes`
    },
    {
      ID: 12,
      context: {
        full: `While working | in the | veterinary clinic, | I | closely examined | the mouth | of a large | bulldog.`,
        partial: `While working | in the | veterinary clinic, | I | caught a glimpse | of a large | bulldog.`
      },
      context_length: {
        full: 15,
        partial: 14
      },
      trigger: {
        scalar: `Some of | the dog’s | teeth were | missing.`,
        focused: `Only | some of | the dog’s | teeth were | missing.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The rest | were intact | so it | should still | be able | to eat | solid food.`,
        cancelation: `In fact, | they all | were | because its | owners completely | neglected its | oral hygiene.`
      },
      question: `Was there a dog in the veterinary clinic?`,
      question_type: "yes"
    },
    {
      ID: 13,
      context: {
        full: `In the | school parking lot, | I carefully | inspected | an old bus.`,
        partial: `In the | school parking lot, | I passed by | an old bus.`
      },
      context_length: {
        full: 11,
        partial: 11
      },
      trigger: {
        scalar: `Some of | its tires | were flat.`,
        focused: `Only | some of | its tires | were flat.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The others | were fine | so it | would not | cost too | much to | fix it.`,
        cancelation: `In fact, | they all | were | so the | cost to | repair it | would be enormous.`
      },
      question: `Was a brand-new bus found in the school parking lot?`,
      question_type: "S1",
      correct: `no`
    },
    {
      ID: 14,
      context: {
        full: `To check | on the progress | of my research, | I | meticulously recorded | the results of | the experiments.`,
        partial: `To check | on the progress | of my research, | I | quickly scanned | the experiments | in the lab.`
      },
      context_length: {
        full: 16,
        partial: 16
      },
      trigger: {
        scalar: `Some of | my predictions | were correct.`,
        focused: `Only | some of | my predictions | were correct.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The rest | were wrong | so my | theory must | be mistaken.`,
        cancelation: `In fact, | they all | were | so I | should be | able to | publish the results.`
      },
      question: `Were all of my predictions confirmed by my research?`,
      question_type: "S3_all",
      correct: `universal`
    },
    {
      ID: 15,
      context: {
        full: `When they returned, | I reviewed | each of the | receipts | for my family’s trip | to Europe.`,
        partial: `When they returned, | my family | told me | about their trip | to Europe.`
      },
      context_length: {
        full: 15,
        partial: 12
      },
      trigger: {
        scalar: `Some of | their hotels | were expensive.`,
        focused: `Only | some of | their hotels | were expensive.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The rest | were cheap | despite my | family’s love | for luxurious holidays.`,
        cancelation: `In fact, | they all | were | because my | family loves | luxurious holidays.`
      },
      question: `Does my family live in Europe?`,
      question_type: "S1",
      correct: `no`
    },
    {
      ID: 16,
      context: {
        full: `After | the babysitter | left, | I carefully | examined | my liquor collection.`,
        partial: `After | the babysitter | left, | I went | to my liquor collection | and made | a drink.`
      },
      context_length: {
        full: 10,
        partial: 14
      },
      trigger: {
        scalar: `Some of | my new | bottles of | vodka were | opened.`,
        focused: `Only | some of | my new | bottles of | vodka were | opened.`
      },
      trigger_length: {
        scalar: 9,
        focused: 10
      },
      continuation: {
        complement: `The others | were untouched, | but I | was still | concerned and | decided to | call her | parents.`,
        cancelation: `In fact, | they all | were | but I | decided not | to call | her parents | because it | was so | hard to | find a | babysitter.`
      },
      question: `Have all new bottles of vodka been untouched?`,
      question_type: "S3_all",
      correct: `negated_existential`
    },
    {
      ID: 17,
      context: {
        full: `I examined | the damage | after I dropped | a bowling ball | down the stairs.`,
        partial: `I heard that | my friend dropped | a bowling ball | down the stairs.`
      },
      context_length: {
        full: 13,
        partial: 12
      },
      trigger: {
        scalar: `Some of | the steps | were damaged.`,
        focused: `Only | some of | the steps | were damaged.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The others | were fine | so the | repairs shouldn’t be | too expensive.`,
        cancelation: `In fact, | they all | were | so they | will require | extensive repairs.`
      },
      question: {
        complement: `Is it expected that the repairs will cost a lot?`,
        cancelation: `Is it expected that the reapirs will not cost that much?`
      },
      question_type: "S3_misc",
      answer: `no`
    },
    {
      ID: 18,
      context: {
        full: `At a friend’s suggestion, | I completely | worked through | an entire | math textbook.`,
        partial: `At a friend’s suggestion, | I read | a review | of a new | math textbook.`
      },
      context_length: {
        full: 12,
        partial: 13
      },
      trigger: {
        scalar: `Some of | its problems | were difficult.`,
        focused: `Only | some of | its problems | were difficult.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The others | were straightforward | and I | feel like | I learned | a lot.`,
        cancelation: `In fact, | they all | were | but it | received a | positive review anyway.`
      },
      question: `Did a friend suggest reading up on math to me?`,
      question_type: `S1`,
      correct: `yes`
    },
    {
      ID: 19,
      context: {
        full: `To keep | the laboratory | well stocked, | I | write down | exactly | how much | of the chemicals | are used | every night.`,
        partial: `To keep | the laboratory | well stocked, | I | occasionally | look at | which chemicals | are being used.`
      },
      context_length: {
        full: 19,
        partial: 15
      },
      trigger: {
        scalar: `Today, | some of | the liquid | nitrogen containers | needed to | be refilled.`,
        focused: `Today, | only | some of | the liquid | nitrogen containers | needed to | be refilled.`
      },
      trigger_length: {
        scalar: 11,
        focused: 12
      },
      continuation: {
        complement: `The others | were normal | but I | decided to | order more anyway.`,
        cancelation: `In fact, | they all | did, | which confused | me because | we hadn’t | used a | lot this morning.`
      },
      question: {
        complement: `Did I decided to buy more liquid nitrogen?`,
        cancelation: `Did we use a lot of liquid nitrogen this morning?`
      }
      question_type: "S3_misc",
      correct: `yes`
    },
    {
      ID: 20,
      context: {
        full: `The | PTA | picked me | to organize | every | award | for the assembly | at my daughter’s | school.`,
        partial: `My | daughter | told me | about the | awards assembly | at her | school.`
      },
      context_length: {
        full: 15,
        partial: 11
      },
      trigger: {
        scalar: `Some of | the honors | students received | prizes.`,
        focused: `Only | some of | the honors | students received | prizes.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The others | were not invited | to attend because | the teachers | didn’t want | anyone to | feel left out.`,
        cancelation: `In fact, | they all | did | because the | teachers didn’t | want any | of them | to feel | left out.`
      },
      question: `the school assembly involve handing out awards to student?`,
      question_type: "S1"
    },
    {
      ID: 21,
      context: {
        full: `As | the new librarian, | it was | my responsibility | to catalog | every book | in the reference section.`,
        partial: `The librarian | told me | about | how annoying | it was | to reorganize | the reference section.`
      },
      context_length: {
        full: 16,
        partial: 14
      },
      trigger: {
        scalar: `Some of | the dictionaries | were labeled | incorrectly.`,
        focused: `Only | some of | the dictionaries | were labeled | incorrectly.`
      },
      trigger_length: {
        scalar: 7,
        focused: 8
      },
      continuation: {
        complement: `The others | were labeled | appropriately though | a few | of them | had been | shelved in | the wrong place.`,
        cancelation: `In fact, | they all | were | which made | the job | much more difficult.`
      },
      question: `Does the library's collection only contain fiction?`,
      question_type: "S2_misc",
      correct: `No`
    },
    {
      ID: 22,
      context: {
        full: `I | am a | huge fan | of my old | high school football team | and attended | every game | last season.`,
        partial: `I | ran | into a | friend | who started | telling how | my old | high school football team | did | last season.`
      },
      context_length: {
        full: 17,
        partial: 17
      },
      trigger: {
        scalar: `Some of | their losses | were close.`,
        focused: `Only | some of | their losses | were close.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The others | were blowouts | which made | the games | boring to watch.`,
        cancelation: `In fact, | they all | were | which made | the games | stressful to watch.`
      },
      question: `Back when I was a highschooler, did I go to a school with a football team?`,
      question_type: "S1",
      correct: `yes`
    },
    {
      ID: 23,
      context: {
        full: `To prepare | for my Spanish test, | I spent hours | studying | the new | vocabulary items.`,
        partial: `I had | little time | to prepare | for my Spanish test | so I | quickly glanced at | the new | vocabulary items.`
      },
      context_length: {
        full: 14,
        partial: 19
      },
      trigger: {
        scalar: `Some of | the words | sounded like | they do | in English.`,
        focused: `Only | some of | the words | sounded like | they do | in English.`
      },
      trigger_length: {
        scalar: 10,
        focused: 11
      },
      continuation: {
        complement: `The others | were totally | unfamiliar which | made the | test somewhat challenging.`,
        cancelation: `In fact, | they all | did | which made | the test | somewhat easier.`
      },
      question: `I preared for a test on Spanish grammar`,
      question_type: "S1",
      correct: `no`
    },
    {
      ID: 24,
      context: {
        full: `While | eating breakfast, | I | had lots of time | to pore over | the stock prices | from yesterday.`,
        partial: `While | eating breakfast, | I | had little time | to skim | the stock prices | from yesterday.`
      },
      context_length: {
        full: 16,
        partial: 14
      },
      trigger: {
        scalar: `Some of | my stocks | went up.`,
        focused: `Only | some of | my stocks | went up.`
      },
      trigger_length: {
        scalar: 6,
        focused: 7
      },
      continuation: {
        complement: `The others | were relatively steady | but my | portfolio was | still down | for the year.`,
        cancelation: `In fact, | they all | did | but my | portfolio was | still down | for the year.`
      },
      question: `Did I sell off all the stocks that I owned?`,
      question_type: "S2_misc",
      correct: `no`
    }
  ];
  
  let filler_trial_info = [
    {
    type: `1`,
    ID: 1,
    context: `Lena and Marcus | often argued | about their finances.`,
    trigger: `One of them | kept making | spontaneous purchases, | while the other | stressed about | the budget.`,
    continuation: `He showed | Lena a credit card | bill with | surprise charges, | and then | he | shook his head in frustration.`,
    question: `Is finance a frequent of despute between the couple?`,
    question_type: `S1`,
    correct: `yes`
    },  
    {
    type: `1`,
    ID: 2,
    context: `Jessica and Aaron argued constantly about household chores.`,
    trigger: `One of them | always brought up | old mistakes, | while the other | tried to | stay calm.`,
    continuation: `Aaron | accused Jessica | of never doing | chores in | the house | and then | he | stormed out | of the room.`,
    question: `Do Jessica and Aaron fight often?`,
    question_type: `S1`,
    correct: `yes`
    },
    {
    type: `1`,
    ID: 3,
    context: `Emma and Noah | cleaned the | classroom together | after school.`,
    trigger: `One of them | mopped the | floor while | the other | wiped the desks.`,
    continuation: `Emma | handed | a mop | to Noah | and then | she | left the room.`,
    question: `Did Noah hand a mop to Emma?`,
    question_type: `S1`,
    correct: `no`
    },
    {
    type: `1`,
    ID: 4,
    context: `Jack and Olivia | organized books | on the | library shelves.`,
    context_length: 9,
    trigger: `One of them | sorted fiction | while | the other | labeled nonfiction.`,
    trigger_length: 10,
    continuation: `Jack passed | a book | to Olivia | and then | he sat down.`,
    question: `Did Olivia pass the book to Jack?`,
    question_type: `S2`,
    correct: `no`
    },
    {
    type: `1`,
    ID: 5,
    context: `Ella  and Ethan | prepared lunch | in the | kitchen together.`,
    trigger: `One of them | chopped vegetables | while the other | cooked rice.`,
    continuation: `She offered Ethan | a spoonful | to taste | and then | she | smiled.`,
    question: `Did they make a dish with rice for lunch?`,
    question_type: `S2`,
    correct: `yes`
    },
    {
    type: `1`,
    ID: 6,
    context: `Ava and Lucas | worked together | on the | art project.`,
    trigger: `One of them | drew the | outlines while | the other | filled in | the colors.`,
    continuation: `He handed | a marker | to Ava | and then | he | picked up | the brush.`,
    question: `Did the project involve drawing the outlines and filling in the colors?`,
    question_type: `S3`,
    correct: `yes`
    },
    {
    type: `1`,
    ID: 7,
    context: `Nora | and | Owen | prepared | for | the | debate | competition | together.`,
    trigger: `One | of | them | wrote | arguments | while | the | other | practiced | rebuttals.`,
    continuation: `Nora corrected | Owen’s bulletpoints| and then | she | rehearsed | her own lines.`,
    question: `Did Nora correct Owen's bulletpoints?`,
    question_type: `S3`,
    correct: `yes`
    },
    {
    type: `1`,
    ID: 8,
    context: `Caleb and Zoe | built a | birdhouse over | the weekend.`,
    context_length: 9,
    trigger: `One of them | cut the | wood while | the other | painted the walls.`,
    trigger_length: 11,
    continuation: `Zoe | passed the | brush to | Caleb and | then she grabbed | a hammer.`,
    question: `Did Zoe passed the brush to Caleb?`,
    question_type: `S3`,
    correct: `yes`
    },
    {
    type: `1`,
    ID: 9,
    context: `Mary  and  John | were doing | the  dishes | after dinner.`,
    trigger: `One of them | was  washing | while  the | other  dried.`,
    continuation: `Mary accidentally | scratched  John | with a knife | and  then | she | dropped it | on  the counter.`,
    question: `Did John drop the knife?`,
    question_type: `S3`,
    correct: `no`
    }, 
    {
    type: `1`,
    ID: 10,
    context: `Sophie and Liam | played video games | all afternoon.`,
    trigger: `One of them | used the controller | while the | other watched.`,
    continuation: `Liam | bumped into | Sophie during | the match | and then | she | got | distracted and | lost the game.`,
    question: `Did Sophia and Liam play videos games in the morning?`,
    question_type: `S1`,
    correct: `no`
    },
    {
    type: `1`,
    ID: 11,
    context: `Noah | and | Olivia | studied | for | the | final | exam | last | weekend.`,
    trigger: `One | of | them | made | flashcards | while | the | other | took | practice | tests.`,
    continuation: `Noah | passed the | cards to Oliva | and then | she | went through them.`,
    question: `Did both Mia and Oliva make flashcards?`,
    question_type: `S2`,
    correct: `no`
    },
    {
    type: `1`,
    ID: 12,
    context: `Leo and Mia | edited  video | clips for | the  school project.`,
    trigger: `One | of | them | organized | the | footage | while | the | other | adjusted | the | audio.`,
    continuation: `Leo played | a clip | for Mia | and then | she | synced the audio | and video.`,
    question: `Did Leo open a new file?`,
    question_type: `S3`,
    correct: `yes`
    },

  {
    type: `2_unambiguous`,
    ID: 13,
    context: `The CEO | updated the | design team | on their | latest collection.`,
    trigger: `The | fashion | designers | discussed | the | cotton.`,
    continuation: `The | fabric | was | not | what | they | had | been | hoping | for.`,
    question: `Were the designers disappointed with the fabric?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `2_unambiguous`,
    ID: 14,
    context: `I arrived at | the concert hall | early and | looked around | the place.`,
    trigger: `The dancers | were aurging | about the production`,
    continuation: `The chorus | line needed to | be adjusted |right away`,
    question: `Were the dancers satisfied with the chorus line?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `2_unambiguous`,
    ID: 15,
    context: `While sitting | on my desk, | I got a | question about | some lost stuff.`,
    trigger: `The children | were wondered about | the tin.`,
    continuation: `The cookie | container was | suddenly nowhere | to be found.`,
    question: `Were the children able to find the cookie container by themselves?`,
    question_type: `S3`,
    correct: `no`
  },
 
  {
    type: `2_unambiguous`,
    ID: 16,
    context: `An old man | bragged to | me about | his success. `,
    trigger: `As an investor, | he pondered | his fortune`,
    continuation: `He realized | that his wealth | was tremendous`,
    question: `Does the investor think that he got lucky with his success?`,
    question_type: `S2`,
    correct: `no`
  },
 
  {
    type: `2_unambiguous`,
    ID: 17,
    context: `We were | in the porch | discussing the price | I would have | to pay`,
    trigger: `The plumber | remembered | the shower`,
    continuation: `The repair | took only | a minute | with minimum effort`,
    question: `Did the plumber take the shower repair into account for the price?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `2_unambiguous`,
    ID: 18,
    context: `I had | her count | the amount | to make | sure nothing | is missing`,
    trigger: `The housekeeper | carefully counted | the sheets`,
    continuation: `The linen | had arrived | that morning`,
    question: `Do I currently have a housekeeper hired?`,
    question_type: `S2`,
    correct: `yes`
  },
  
   {
    type: `2_unambiguous`,
    ID: 19,
    context: `I heard | the backstory of | how the | unusual color | scheme on | the painting | came about.`,
    trigger: `The graphic | artist thought | about the orange.`,
    continuation: `The paint | was unusual | and intense.`,
    question: `Are the colors on the painting as the artist initially intended?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `2_unambiguous`,
    ID: 20,
    context: `I got | an urgent | call on | my phone | for help.`,
    trigger: `The skier | grew annoyed | with the cold`,
    continuation: `The temperature was | making her | tired and | kranky`,
    question: `Did I get a call for urgent help?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `2_unambiguous`,
    ID: 22,
    context: `I heard | the backstory of | how the | unusual color | scheme on | the painting | came about.`,
    trigger: `The graphic | artist thought | about the orange.`,
    continuation: `The paint | was unusual | and intense.`,
    question: `Are the colors on the painting as the artist initially intended?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `2_ambiguous`,
    ID: 21,
    context: `A particularly eye-catching book was discovered.`,
    trigger: `They | talked about | the book.`,
    continuation: `The cover | seemed slightly | different than | the others`,
    question: `Was there something special about the book?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `2_ambiguous`,
    ID: 23,
    context: `The instructor | showed us | the final | step in | the practical session.`,
    context_length: 6,
    trigger: `She meticulously | tested | the filling.`,
    trigger_length: 10,
    continuation: `The metal | was smooth |and even | on the teeth.`,
    question: `Did the last step of the process involve testing the final result?`,
    question_type: `S2`,
    correct: `yes`
  },
  
  {
    type: `2_ambiguous`,
    ID: 24,
    context: `We recieved | a complaint | from one | of our workers.`,
    context_length: 6,
    trigger: `He complained about | the trunk.`,
    trigger_length: 10,
    continuation: `The log | was too | large for just | one man to | move.`,
    question: `Did the worker complain about the number of logs he has to move?`,
    question_type: `S3`,
    correct: `no`
  },
    {
    type: `3_unambiguous`,
    ID: 25,
    context: `The atheltes | and the coach | stretched on | the practice field.`,
    trigger: `They had stained | their uniforms | with mud and | were told to | wash it | before the match.`,
    continuation: `The athletes | complained | so the coach | gave them | a spare kit | for the match.`,
    question: `Did coach stretch on the field with the atheltes, too?`,
    question_type: `S1`,
    correct: `yes`
  },
    {
  type: `3_unambiguous`,
  ID: 26,
  context: `The manager | monitored the | the waiters' service | throughout the day.`,
  context_length: 9,
  trigger: `He noted | their tone | was consistently | professional.`,
  trigger_length: 12,
  continuation: `The manager | shared positive | feedback during | the team debrief.`,
  question: `Were the waiter's service monitored through out the day?`,
  question_type: `S1`,
  correct: `yes`
},
    {
  type: `3_unambiguous`,
  ID: 27,
  context: `The therapist | listened to the | clients’ group | discussion closely.`,
  trigger: `They  appreciated | his warmth | towards their | emotional struggles.`,
  continuation: `The clients `,
  question: `Was the therapist one who was talking for most of the discussion?`,
  question_type: `S1`,
  correct: `no`
    },
  {
    type: `3_unambiguous`,
    ID: 28,
    context: `The  maintenance men | told | the | singer about | a problem.`,
    trigger: `They had | broken his | piano and | would have | to repair | that first.`,
    continuation: `The singer agreed | but  asked | for a replacement | keyboard until | the repair is finished.`,
    question: `Did the maintenance men break the singer's piano?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `3_unambiguous`,
    ID: 29,
    context: `The principal | carefully went | through the | students' report.`,
    context_length: 9,
    trigger: `She was | disappointed to | see their grades | in science.`,
    trigger_length: 12,
    continuation: `The principal | decided to | hire new | science teachers.`,
    question: `Did the children get bad grades in science?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
  type: `3_unambiguous`,
  ID: 30,
  context: `The director | reviewed the | actors' final | rehearsal footage.`,
  context_length: 9,
  trigger: `He was | impressed by | their performance | in the climax.`,
  trigger_length: 12,
  continuation: `The director | extended their | contracts for | the next project.`,
  question: `Did the actors perform well in the final scene?`,
  question_type: `S2`,
  correct: `yes`
},
  {
    type: `3_unambiguous`,
    ID: 31,
    context: `The crowd | and the author | sat in | the fan meeting.`,
    trigger: `They asked | when her | next release | is scheduled.`,
    continuation: `The author | smiled and | said that | her new novel | would be out by summer.`,
    question: `Is her new release planned for next winter?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `3_unambiguous`,
    ID: 32,
    context: `The miners | and the geologist | stood at | the cliffside.`,
    trigger: `They examined | his notes |on the | rock strata.`,
    continuation: `The geologist | clarified that his | diagram indicated | a gold reserve.`,
    question: `Are the miners and geologist at the cliffside to mine for oil?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `3_unambiguous`,
    ID: 33,
    context: `The children and | the magician | crowded around | the table.`,
    trigger: `She examined | their reaction | carefully during | the card trick`,
    continuation: `The children's | faces were | filled with | shock and |the magician | smiled satisfied.`,
    question: `Did the children like the magic trick?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `3_ambiguous`,
    ID: 34,
    context: `The actor | and the agents | arrived at | the venue.`,
    context_length: 9,
    trigger: `They complained | about his | parking spot | being too | far away.`,
    trigger_length: 12,
    continuation: `The agents said | the actor | should ask | for a reserved | space next time.`,
    question: `Did the actor arrive at the venue alone?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `3_ambiguous`,
    ID: 35,
    context: `The researcher | and the interns | walked into | the break room.`,
    trigger: `He noticed | their coffee | cups were | still on |the table.`,
    continuation: `The researcher | asked the interns | to clean | up next time.`,
    question: `Did the coffee cups belong to the interns?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `3_ambiguous`,
    ID: 36,
    context: `The journalist | and the | botanists entered | the greenhouse.`,
    trigger: `They noticed | her umbrella | had been | left by the door.`,
    continuation: `The journalist | picked up | the umbrella |  up and  said | she always | forgets it.`,
    question: `Is the journalist often clumsy with her umbrella? `,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 37,
    context: `After the | forest fire, | I | conducted an | official survey | of | the damage.`,
    trigger: `Many  of | the trees | burned down.`,
    continuation: `Nevertheless, | my data | suggested | the ecosystem would | bounce back.`,
    question: `Is the ecosystem projected to collapse?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 38,
    context: `During the meeting,| the manager | presented the | budget report.`,
    trigger: `Some of | the numbers | seemed exaggerated.`,
    continuation: `Specifically, | the revenue figures | needed to | be checked.`,
    question: `Did the manager present exaggerated figures?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 39,
    context: `On our | road trip, | we passed | several gas stations.`,
    trigger: `Most of them | were | closed | for | renovations.`,
    continuation: `Only | the last two | stops were open.`,
    question: `Were the first stations open?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 40,
    context: `I borrowed | some books | from the library.`,
    trigger: `I returned | all of | them on time.`,
    continuation: `None | were | overdue and | I was able | to avoid | getting fined.`,
    question: `Was any book overdue?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 41,
    context: `Yesterday, | I met with |  my advisor | to discuss elective courses.`,
    trigger: `She | recommended | some of the electives.`,
    continuation: `I | chose | the easiest | options of | them all.`,
    question: `Did my adivisor and I discuss obligatory courses?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 42,
    context: `On the | nature trail, | I spotted | various animals.`,
    trigger: `Some of them | were deer, | and others | were foxes.`,
    continuation: `I managed | to photograph | only the latter.`,
    question: `Did I photograph any deer?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 43,
    context: `During the concert, | the band | played | a total of | 16 songs.`,
    trigger: `They | got a | big round | of appluase  | some of | their older songs`,
    continuation: `But the new relases | did not | get such | enthusiatic reactions.`,
    question: `Did the audience like their older songs more than their newer ones?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 44,
    context: `In | the | chemistry | lab, | I | measured | different | samples.`,
    trigger: `Some of | the results | were | off by | a little.`,
    continuation: `So I | recalibrated | the instruments.`,
    question: `Were all readings accurate?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 45,
    context: `The | novelist | reviewed | her draft of | her new romance book.`,
    trigger: `A few of | the chapters | had explicit expressions.`,
    continuation: `The novelist | decided to | publish the draft | as it was | anyways`,
    question: `Did the novelist used explicit language in the romance book?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 46,
    context: `I bought | three flavors | of ice cream.`,
    trigger: `One | was chocolate, | one | was vanilla,| one was mint.`,
    continuation: `I ate | only | the chocolate.`,
    question: `Did I buy four flavors of ice cream?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 47,
    context: `The | gardener | planted | several | types | of | roses.`,
    trigger: `Some | were | red, | others | yellow.`,
    continuation: `The | yellow | bushes | grew | faster.`,
    question: `Did the gardner plant multiple types of roses?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 48,
    context: `The | gardener | planted | several | types | of | roses.`,
    trigger: `Some | were | red, | others | yellow.`,
    continuation: `The | yellow | bushes | grew | faster.`,
    question: `Did the gardner plant multiple types of roses?`,
    question_type: `S1`,
    correct: `yes`
    
  }
]

  
  // 2 knowledge conditions: full vs partial
  // 3 continuation conditions: scalar + complement, scalar + cancelation, focused + complement
  // 24 total vignettes
  // 6 lists
  
  // latin square:
  // C E D B A F
  // D C A E F B
  // A B F D E C
  // E D C F B A
  // F A B C D E
  // B F E A C D
  
  // A = full, scalar + complement
  // B = full, scalar + cancelation
  // C = full, focused + complement
  // D = partial, scalar + complement
  // E = partial, scalar + cancelation
  // F = partial, focus + complement
  
  const latin_square_lists = [
    [
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // C
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // E
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // D
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // B
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // A
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      } // F
    ],
    [
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // D
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // C
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // A
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // E
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // F
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      } // B
    ],
    [
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // A
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // B
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // F
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // D
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // E
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      } // C
    ],
    [
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // E
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // D
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // C
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // F
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // B
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      } // A
    ],
    [
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // F
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // A
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // B
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // C
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // D
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      } // E
    ],
    [
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // B
      {
        context_type: "partial",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // F
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "cancelation"
      }, // E
      {
        context_type: "full",
        trigger_type: "scalar",
        continuation_type: "complement"
      }, // A
      {
        context_type: "full",
        trigger_type: "focused",
        continuation_type: "complement"
      }, // C
      {
        context_type: "partial",
        trigger_type: "scalar",
        continuation_type: "complement"
      } // D
    ]
  ];
  
  // create the list of trials for a participant by randomly choosing 4
  // lists (each consisting of 6 trial types) and filling them in with
  // the content
  
  const correct_answer = {
    existential:{
      complement: "yes",
      cancelation: "yes"
    },
    negated_existential:{
      complement: "yes",
      cancelation: "no"
    },
    existential:{
      complement: "no",
      cancelation: "yes"
    },
    existential:{
      complement: "no",
      cancelation: "no"
    }
  }


  const trial_list = _.flatten(_.sampleSize(latin_square_lists, 4)); // set to 4 for original trial nr
  
  // fills in a single trial based on context_type, trigger_type and continuation_type
  const create_trial = function (trial, args) {
    return {
      type: "main",
      knowledge: args.context_type,
      context_type: args.context_type,
      trigger_type: args.trigger_type,
      continuation_type: args.trigger_type.concat("-", args.continuation_type),
      context: trial.context[args.context_type],
      trigger: trial.trigger[args.trigger_type],
      continuation: trial.continuation[args.continuation_type],
      question: trial.question,
      question_type: trial.question_type,
      correct_answer: correct_answer.args[trial.question_type][trial.continuation_type],
      option1: "yes",
      option2: "no",
      ID: trial.ID
    };
  };
  
  const create_filler_trial = function (trial) {
    return {
      ID: trial.ID,
      type: trial.type,
      context: trial.context,
      trigger: trial.trigger,
      continuation: trial.continuation,
      question: trial.question,
      correct_answer: trial.correct,
      option1: "yes",
      option2: "no"
    };
  };
  
  // fill in all trial templates in the list with the corresponding text from the raw_trial_info and shuffle
  const trial_info = trial_list.map(function (e) {
    let trial = create_trial(raw_trial_info[_.indexOf(trial_list, e)], e);
    return trial;
  });
  
  console.log(trial_info);
  
  // fill in all filler trial templates in the list with the corresponding text from the raw_trial_info and shuffle
  const filler_trial_info = raw_filler_trial_info.map(function (e) {
    let trial = create_filler_trial(
      raw_filler_trial_info[_.indexOf(raw_filler_trial_info, e)],
      e
    );
    return trial;
  });
  
  // grab half of the fillers
  const filler_trials = _.shuffle(filler_trial_info).slice(0, 10);
  
  // console.log(filler_trial_info);
  console.log(filler_trials);
  // put main trials and filler trials together in one array
  var main_trials = _.shuffle([...trial_info, ...filler_trials]) 
  // console.log("before");
  
  export {practice_trial_info, main_trials};

  