const practice_trials = [
  {
    context: `This is | the | first | example paragraph.`,
    trigger: `Parts of | each sentence | appear | one at a time.`,
    continuation: `You | can see | two more examples | for practice.`,
    question: `Would you like to see two more examples?`,
    option1: `yes`,
    option2: `no`
  },
  {
    context: `This is | the second | example paragraph.`,
    trigger: `You | can see | one more example | for practice.`,
    continuation: `The next | will | be the | last example.`,
    question: `Would you like to see one more example?`,
    option1: `yes`,
    option2: `no`
  },
  {
    context: `This is | the third | example paragraph.`,
    trigger: `It is | also the | final example.`,
    continuation: `You | will not see | any more | examples | for practice.`,
    question: `The examples are over, would you like to proceed to the next step?`,
    option1: `yes`,
    option2: `no`
  }
];

let raw_critical_trials = [
  {
    ID: 1,
    context: {
      full: `I carefully inspected | the new | shipment of jewelry.`,
      partial: `I helped unload | the new | shipment of jewelry.`
    },
    trigger: {
      scalar: `Some of | the gold | watches were | fakes.`,
      focused: `Only | some of | the gold | watches were | fakes.`
    },
    continuation: {
      complement: `The rest | were real, | but the | company is still | planning | to sue.`,
      cancellation: `In fact, | they all | were, | so the | company is | planning | to sue.`
    },
    question: `Were there vegetables in the shipment?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    ID: 2,
    context: {
      full: `Before the | hurricane landed, | I checked every | house | in town.`,
      partial: `Before the | hurricane landed, | I volunteered | to help out | in town.`
    },
    trigger: {
      scalar: `Some of | the residents | had evacuated.`,
      focused: `Only | some of | the residents | had evacuated.`
    },
    continuation: {
      complement: `The rest | stayed at home | and foolishly | risked their | lives.`,
      cancellation: `In fact, | they all | did | and, | as a result, | they survived | the storm.`
    },
    question: `Were any of the residents still in their house when the hurricane landed?`,
    question_type: `S3_scalar`,
    correct: `negated_universal`
  },
  {
    ID: 3,
    context: {
      full: `This morning, | I took | attendance | at an | important meeting | with the manager.`,
      partial: `This morning, | I heard | about an | important meeting | with the manager.`
    },
    trigger: {
      scalar: `Some of | the company’s | accountants were | there.`,
      focused: `Only | some of | the company’s | accountants were | there.`
    },
    continuation: {
      complement: `The rest | were missing | because they | had to audit | the company’s finances | before | the end of | the quarter.`,
      cancellation: `In fact, | they all | were | in order to | communicate | how budget cutbacks | were crippling | their division.`
    },
    question: {
      complement: `Was there an audit for the company's finances?`,
      cancellation: `Were the accountants unhappy about the budget cutbacks?`
    },
    question_type: `S3_misc`,
    correct: `yes`
  },
  {
    ID: 4,
    context: {
      full: `I was | the chief medic | overseeing | the bus accident | on the side | of the | highway.`,
      partial: `I stopped | to see | if | I could help | with the | bus accident | on the side | of the highway.`
    },
    trigger: {
      scalar: `Some of | the passengers | were still | alive.`,
      focused: `Only | some of | the passengers | were still | alive.`
    },
    continuation: {
      complement: `The others | were killed | on impact | and there | was no | opportunity to | save them.`,
      cancellation: `In fact, | they all | were | and none | were critically injured.`
    },
    question: `Did any passenger die in the bus accident on the highway?`,
    question_type: `S3_scalar`,
    correct: `negated_universal`
  },
  {
    ID: 5,
    context: {
      full: `At my client’s request, | I | meticulously compiled | the investment report.`,
      partial: `At my client’s request, | I | skimmed | the investment report.`
    },
    trigger: {
      scalar: `Some of | the real estate | investments lost | money.`,
      focused: `Only | some of | the real estate | investments lost | money.`
    },
    continuation: {
      complement: `The others | were successful | despite the | recent economic | downturn.`,
      cancellation: `In fact, | they all | did | because of the | recent economic | downturn.`
    },
    question: `Did all real estate investments increase in value in spite of the economic downturn?`,
    question_type: `S2_scalar`,
    correct: `no`
  },
  {
    ID: 6,
    context: {
      full: `As the | office’s main technician, | I had | to check | each computer | for | the dangerous | new virus.`,
      partial: `As the | office’s main technician, | I had | been alerted | to | the dangerous | new virus.`
    },
    trigger: {
      scalar: `Some of | our computers | were infected.`,
      focused: `Only | some of | our computers | were infected.`
    },
    continuation: {
      complement: `The rest | were clean | because their | owners had | been very | cautious.`,
      cancellation: `In fact, | they all | were | and the | virus nearly | destroyed the | whole system.`
    },
    question: `Has there been virus on any computers in the office?`,
    question_type: `S2_scalar`,
    correct: `yes`
  },
  {
    ID: 7,
    context: {
      full: `Earlier today, | I was | leading | a small | group of tourists | around the sights | downtown.`,
      partial: `Earlier today, | I passed | by a group of tourists | looking at sights | downtown.`
    },
    trigger: {
      scalar: `Some of | the tourists | got soaked | by the | rainstorm.`,
      focused: `Only | some of | the tourists | got soaked | by the | rain storm.`
    },
    continuation: {
      complement: `The rest | were dry | because they | had remembered | their umbrellas.`,
      cancellation: `In fact, | they all | did | because they | had forgotten | their umbrellas.`
    },
    question: `Was there a rainstorm downtown earlier today?`,
    question_type: `S2_misc`,
    correct: `yes`
  },
  {
    ID: 8,
    context: {
      full: `After | the furniture sale, | I catalogued | all the merchandise | in the store.`,
      partial: `After | the furniture sale, | I closed down | and | locked up | the store.`
    },
    trigger: {
      scalar: `Some of | the leather | couches had | been sold.`,
      focused: `Only | some of | the leather | couches had | been sold.`
    },
    continuation: {
      complement: `The rest | were going | to be | stored in | the warehouse | until the | following season.`,
      cancellation: `In fact, | they all | had | since they | were stylish | and cheap.`
    },
    question: `Did the furniture sale include any leather couches?`,
    question_type: `S2_misc`,
    correct: `yes`
  },
  {
    ID: 9,
    context: {
      full: `Last week, | I tasted | every dish | at a | family potluck.`,
      partial: `Last week, | I attended | a family potluck.`
    },
    trigger: {
      scalar: `Some of | the dishes | were spicy.`,
      focused: `Only | some of | the dishes | were spicy.`
    },
    continuation: {
      complement: `The rest | were mild | and I | found them | to be | too bland.`,
      cancellation: `In fact, | they all | were | but fortunately | I love | spicy food.`
    },
    question: `Do I enjoy spicy food?`,
    question_type: `S3_misc`,
    correct: `yes`
  },
  {
    ID: 10,
    context: {
      full: `When I | entered Disney World, | I asked | about the status | of each | of the rides.`,
      partial: `When I | visited Disney World, | I quickly | walked around | the amusement park.`
    },
    trigger: {
      scalar: `Some of | my favorite | rides were | still running.`,
      focused: `Only | some of | my favorite | rides were | still running.`
    },
    continuation: {
      complement: `The rest | were shut down | since they | were no | longer popular.`,
      cancellation: `In fact, | they all | were | since they | were still | popular.`
    },
    question: `Had all of my favorite rides at Disney World been shut down?`,
    question_type: `S2_scalar`,
    correct: `no`
  },
  {
    ID: 11,
    context: {
      full: `After | my house | was burglarized, | I carefully | inventoried | my wine collection.`,
      partial: `After | my house | was burglarized, | I briefly | checked | the basement.`
    },
    trigger: {
      scalar: `Some of | the bottles | of Chardonnay | were missing.`,
      focused: `Only | some of | the bottles | of Chardonnay | were missing.`
    },
    continuation: {
      complement: `The rest | were safe | but I | was still | extremely upset.`,
      cancellation: `In fact, | they all | were | even though | I had | secured them.`
    },
    question: `Was my house burglarized?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    ID: 12,
    context: {
      full: `While working | in the | veterinary clinic, | I | closely examined | the mouth | of a large | bulldog.`,
      partial: `While working | in the | veterinary clinic, | I | caught a glimpse | of a large | bulldog.`
    },
    trigger: {
      scalar: `Some of | the dog’s | teeth were | missing.`,
      focused: `Only | some of | the dog’s | teeth were | missing.`
    },
    continuation: {
      complement: `The rest | were intact | so it | should still | be able | to eat | solid food.`,
      cancellation: `In fact, | they all | were | because its | owners completely | neglected its | oral hygiene.`
    },
    question: `Did the dog have any missing teeth?`,
    question_type: `S2_scalar`,
    correct: `yes`
  },
  {
    ID: 13,
    context: {
      full: `In the | school parking lot, | I carefully | inspected | an old bus.`,
      partial: `In the | school parking lot, | I passed by | an old bus.`
    },
    trigger: {
      scalar: `Some of | its tires | were flat.`,
      focused: `Only | some of | its tires | were flat.`
    },
    continuation: {
      complement: `The others | were fine | so it | would not | cost too | much to | fix it.`,
      cancellation: `In fact, | they all | were | so the | cost to | repair it | would be enormous.`
    },
    question: `Was the bus found in the school parking lot brand-new?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    ID: 14,
    context: {
      full: `To check | on the progress | of my research, | I | meticulously recorded | the results of | the experiments.`,
      partial: `To check | on the progress | of my research, | I | quickly scanned | the experiments | in the lab.`
    },
    trigger: {
      scalar: `Some of | my predictions | were correct.`,
      focused: `Only | some of | my predictions | were correct.`
    },
    continuation: {
      complement: `The rest | were wrong | so my | theory must | be revised.`,
      cancellation: `In fact, | they all | were | so I | should be | able to | publish the results.`
    },
    question: `Were all of my predictions confirmed by my research?`,
    question_type: `S3_scalar`,
    correct: `universal`
  },
  {
    ID: 15,
    context: {
      full: `When they returned, | I reviewed | each of the | receipts | for my family’s trip | to Europe.`,
      partial: `When they returned, | my family | told me | about their trip | to Europe.`
    },
    trigger: {
      scalar: `Some of | their hotels | were expensive.`,
      focused: `Only | some of | their hotels | were expensive.`
    },
    continuation: {
      complement: `The rest | were cheap | despite my | family’s love | for luxurious holidays.`,
      cancellation: `In fact, | they all | were | because my | family loves | luxurious holidays.`
    },
    question: `Does my family live in Europe?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    ID: 16,
    context: {
      full: `After | the babysitter | left, | I carefully | examined | my liquor collection.`,
      partial: `After | the babysitter | left, | I went | to my liquor collection | and made | a drink.`
    },
    trigger: {
      scalar: `Some of | my new | bottles of | vodka were | opened.`,
      focused: `Only | some of | my new | bottles of | vodka were | opened.`
    },
    continuation: {
      complement: `The others | were untouched, | but I | was still | concerned and | decided to | call her | parents.`,
      cancellation: `In fact, | they all | were | but I | decided not | to call | her parents | because it | was so | hard to | find a | babysitter.`
    },
    question: `Were all of my new bottles of vodka opened?`,
    question_type: `S3_scalar`,
    correct: `universal`
  },
  {
    ID: 17,
    context: {
      full: `I examined | the damage | after I dropped | a bowling ball | down the stairs.`,
      partial: `I heard that | my friend dropped | a bowling ball | down the stairs.`
    },
    trigger: {
      scalar: `Some of | the steps | were damaged.`,
      focused: `Only | some of | the steps | were damaged.`
    },
    continuation: {
      complement: `The others | were fine | so the | repairs shouldn’t be | too expensive.`,
      cancellation: `In fact, | they all | were | so they | will require | extensive repairs.`
    },
    question: {
      complement: `Do I expect the repairs to cost a lot?`,
      cancellation: `Do I expect the repairs to be affordable?`
    },
    question_type: `S3_misc`,
    correct: `no`
  },
  {
    ID: 18,
    context: {
      full: `At a friend’s suggestion, | I completely | worked through | an entire | math textbook.`,
      partial: `At a friend’s suggestion, | I read | a review | of a new | math textbook.`
    },
    trigger: {
      scalar: `Some of | its problems | were difficult.`,
      focused: `Only | some of | its problems | were difficult.`
    },
    continuation: {
      complement: `The others | were straightforward | and I | feel like | I learned | a lot.`,
      cancellation: `In fact, | they all | were | but it | received a | positive review | anyway.`
    },
    question: `Did a friend suggest that I read up on math?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    ID: 19,
    context: {
      full: `To keep | the laboratory | well stocked, | I | write down | exactly | how much | of the chemicals | are used | every night.`,
      partial: `To keep | the laboratory | well stocked, | I | occasionally | look at | which chemicals | are being used.`
    },
    trigger: {
      scalar: `Today, | some of | the liquid | nitrogen containers | needed to | be refilled.`,
      focused: `Today, | only | some of | the liquid | nitrogen containers | needed to | be refilled.`
    },
    continuation: {
      complement: `The others | were normal | but I | decided to | order more anyway.`,
      cancellation: `In fact, | they all | did, | which confused | me because | we hadn’t | used much | this morning.`
    },
    question: {
      complement: `Did I hold back on buying more liquid nitrogen?`,
      cancellation: `Did we use a lot of liquid nitrogen this morning?`
    },
    question_type: `S3_misc`,
    correct: `no`
  },
  {
    ID: 20,
    context: {
      full: `The | PTA | picked me | to organize | every | award | for the assembly | at my daughter’s | school.`,
      partial: `My | daughter | told me | about the | awards assembly | at her | school.`
    },
    trigger: {
      scalar: `Some of | the honors | students received | prizes.`,
      focused: `Only | some of | the honors | students received | prizes.`
    },
    continuation: {
      complement: `The others | were not invited | to attend because | the teachers | didn’t want | anyone to | feel left out.`,
      cancellation: `In fact, | they all | did | because the | teachers didn’t | want any | of them | to feel | left out.`
    },
    question: `Did the school assembly involve handing out awards to students?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    ID: 21,
    context: {
      full: `As | the new librarian, | it was | my responsibility | to catalog | every book | in the reference section.`,
      partial: `The librarian | told me | about | how annoying | it was | to reorganize | the reference section.`
    },
    trigger: {
      scalar: `Some of | the dictionaries | were labeled | incorrectly.`,
      focused: `Only | some of | the dictionaries | were labeled | incorrectly.`
    },
    continuation: {
      complement: `The others | were labeled | appropriately though | a few | of them | had been | shelved in | the wrong place.`,
      cancellation: `In fact, | they all | were | which made | the job | much more difficult.`
    },
    question: `Did the library's collection contain only fiction?`,
    question_type: `S2_misc`,
    correct: `no`
  },
  {
    ID: 22,
    context: {
      full: `I | am a | huge fan | of my old | high school football team | and attended | every game | last season.`,
      partial: `I | ran | into a | friend | who started | telling how | my old | high school football team | did | last season.`
    },
    trigger: {
      scalar: `Some of | their losses | were close.`,
      focused: `Only | some of | their losses | were close.`
    },
    continuation: {
      complement: `The others | were blowouts | which made | the games | boring to watch.`,
      cancellation: `In fact, | they all | were | which made | the games | stressful to watch.`
    },
    question: `When I was in highschool, did I go to a school with a football team?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    ID: 23,
    context: {
      full: `To prepare | for my Spanish test, | I spent hours | studying | the new | vocabulary items.`,
      partial: `I had | little time | to prepare | for my Spanish test | so I | quickly glanced at | the new | vocabulary items.`
    },
    trigger: {
      scalar: `Some of | the words | sounded like | they do | in English.`,
      focused: `Only | some of | the words | sounded like | they do | in English.`
    },
    continuation: {
      complement: `The others | were totally unfamiliar | which made | the test | somewhat challenging.`,
      cancellation: `In fact, | they all | did | which made | the test | somewhat easier.`
    },
    question: `Did I prepare for a test on Spanish grammar?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    ID: 24,
    context: {
      full: `While | eating breakfast, | I  had | lots of time | to pore over | the stock prices | from yesterday.`,
      partial: `While | eating breakfast, | I | had little time | to skim | the stock prices | from yesterday.`
    },
    trigger: {
      scalar: `Some of | my stocks | went up, | which came as | a surprise.`,
      focused: `Only | some of | my stocks | went up, | which was | to my surprise .`
    },
    continuation: {
      complement: `The others | were relatively steady | but my | portfolio was | still down | for the year.`,
      cancellation: `In fact, | they all | did | but my | portfolio was | still down | for the year.`
    },
    question: {
      
      scalar: `Did I expect many of my stocks to go up?`,
      focused: `Did I expect only few of my stocks to go up?`
    },
    question_type: `S2_misc`,
    correct: `no`
  }
];

let raw_filler_trials = [
  {
    type: `1`,
    ID: 1,
    context: `Lena and Marcus | often argued | about their finances.`,
    trigger: `One of them | kept making | spontaneous purchases, | while the other | stressed about | the budget.`,
    continuation: `He showed | Lena | a credit card bill |with surprise charges, | and then | he shook | his head | in frustration.`,
    question: `Is finance a frequent topic of dispute between the couple?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 2,
    context: `Jessica | and Aaron | argued constantly | about household chores.`,
    trigger: `One of them | always brought up | old mistakes, | while the other | tried to | stay calm.`,
    continuation: `Aaron | accused Jessica | of never | doing chores | in the house | and then | he stormed | out of the room.`,
    question: `Did Jessica and Aaron have frequent fights?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 3,
    context: `Sophie and Liam | played video games | all afternoon.`,
    trigger: `One of them | used the controller | while the | other watched.`,
    continuation: `Liam | bumped into | Sophie during | the match, | which distracted her | and cost | her the game.`,
    question: `Did Sophie and Liam play tennis in the afternoon?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `1`,
    ID: 4,
    context: `To change | the lightbulb, | the father | and the daughter | brought a ladder | into the house.`,
    trigger: `One of them | held the ladder | in place | while the | other changed | the lightbulb.`,
    continuation: `The daughter | fell onto | her father, | and fortunately | he was able | to catch her.`,
    question: `Did the father and the daughter have to paint the ceiling?`,
    question_type: `S1`,
    correct: `no`
  },
  { 
    type: `1`,
    ID: 5,
    context: `Emma and Noah | cleaned the | classroom together | after school.`,
    trigger: `One of them | mopped the | floor while | the other | wiped the desks.`,
    continuation: `Emma | handed | a mop | to Noah | and then | she left | the room.`,
    question: `Did Noah mop the floor?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `1`,
    ID: 6,
    context: `Noah and Olivia | studied for | the final exam | last weekend.`,
    trigger: `One of them | made flashcards | while the other | took practice tests.`,
    continuation: `Noah passed | the cards | to Olivia | and then | she went | through them.`,
    question: `Did both Noah and Olivia make flashcards?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `1`,
    ID: 7,
    context: `Ella and Ethan | prepared lunch | in the | kitchen together.`,
    trigger: `One of them | chopped vegetables | while the other | cooked rice.`,
    continuation: `He offered | her | a spoonful | of rice | to taste | and then | he smiled.`,
    question: `Did Ella chop vegetables?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 8,
    context: `Caleb and Zoe | built | a birdhouse | over the weekend.`,
    trigger: `One of them | cut the | wood while | the other | painted the walls.`,
    continuation: `Zoe then | passed | the brush | to Caleb | and then | she grabbed | a hammer.`,
    question: `Did Zoe paint the walls?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 9,
    context: `Jack and Olivia | organized | books | on the | library shelves.`,
    trigger: `One of them | sorted fiction | while | the other | labeled nonfiction.`,
    continuation: `Jack handed | a book | to Olivia | and then | he sat down.`,
    question: `Did Olivia pass a book to Jack?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `1`,
    ID: 10,
    context: `Ava and Lucas | worked together | on the | art project.`,
    trigger: `One of them | drew the | outlines while | the other | filled in | the colors.`,
    continuation: `He handed | a marker | to Ava | and then | he | picked up | the brush.`,
    question: `Did Lucas pick up the brush?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 11,
    context: `Nora and Owen | prepared for | the debate | competition together.`,
    trigger: `One of them | wrote arguments | while the | other practiced | rebuttals.`,
    continuation: `Nora corrected | his bullet points | and then | she rehearsed | her own lines.`,
    question: `Did Nora correct Owen's bullet points?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `1`,
    ID: 12,
    context: `Mary and John | were doing | the dishes | after dinner.`,
    trigger: `One of them | was washing | while | the other | dried.`,
    continuation: `Mary accidentally | scratched John | with a knife | and then | she | dropped it | on the counter.`,
    question: `Did John drop the knife?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `2_unambiguous`,
    ID: 13,
    context: `The news | reported on | the recent | stock market crash | in the country.`,
    trigger: `The president | sent out an | important message | to the public.`,
    continuation: `This gave | people the | motivation to | persevere through | the crisis.`,
    question: `Did the country recently experience a stock market boom?`,
    question_type: `S1`,
    correct: `no` 
  },
  {
    type: `2_unambiguous`,
    ID: 14,
    context: `I asked | the housekeeper | to count | the supplies | to make sure | nothing | was missing.`,
    trigger: `She | carefully counted | the sheets.`,
    continuation: `She said | we didn't lose | any linen.`,
    question: `Did the housekeeper voluntarily count the supplies?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `2_unambiguous`,
    ID: 15,
    context: `We were | on the porch | discussing the price | I would | have to pay.`,
    trigger: `The plumber | remembered | the shower.`,
    continuation: `He had | to replace | some of | the tiles, | which cost | a lot `,
    question: `Did the plumber take the shower repair into account for the price?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `2_unambiguous`,
    ID: 16,
    context: `I heard | the story of | how the | unusual color | scheme on | the painting | came about.`,
    trigger: `The graphic | artist had | to reject | the orange.`,
    continuation: `The paint was | too intense | and did not | suit the mood.`,
    question: `Did the artist stick with their initial color choice?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `2_unambiguous`,
    ID: 17,
    context: `The CEO | updated the | design team | on their | latest collection.`,
    trigger: `The fashion designers | discussed | the cotton.`,
    continuation: `The fabric | was not | what they | had been | hoping for.`,
    question: `Were the designers disappointed with the fabric?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `2_unambiguous`,
    ID: 18,
    context: `While sitting | at my desk, | I got a | question about | some lost stuff.`,
    trigger: `The children | were wondering |about the | tin.`,
    continuation: `The cookie | container was | suddenly nowhere | to be found.`,
    question: `Did the children lose the cookie container?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `2_ambiguous`,
    ID: 19,
    context: `We received | a complaint | from one | of our workers.`,
    trigger: `He complained | in length | about the trunk.`,
    continuation: `The log | was too | large for just | one man | to move.`,
    question: `Were all the employees satisfied with their work?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `2_ambiguous`,
    ID: 20,
    context: `The village hall | received a | call asking | for help.`,
    trigger: `The villagers | were worried | about the | potential cold. `,
    continuation: `The temperature could | make the | crops freeze.`,
    question: `Did the village hall receive a call for support?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `2_ambiguous`,
    ID: 21,
    context: `The critics | discovered | an interesting | cover.`,
    trigger: `And then | they discussed | what was | special about it.`,
    continuation: `The bass line | sounded slightly | different than | in the original.`,
    question: `Did the critics think the cover was special?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `2_ambiguous`,
    ID: 22,
    context: `An old man | bragged | to me | about his success.`,
    trigger: `He seemed to | appreciate his | fortune very much.`,
    continuation: `He was proud | of the | tremendous wealth | that he | had accumulated.`,
    question: `Did the old man think that his success was due to luck?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `2_ambiguous`,
    ID: 23,
    context: `The instructor | showed us | the final | step in | the practical session.`,
    trigger: `She meticulously | tested | the filling.`,
    continuation: `The metal | was covering | the teeth | smooth and evenly.`,
    question: `Did the instructor test the filling on the teeth?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `2_ambiguous`,
    ID: 24,
    context: `The experts | warned us about | the danger | of moles.`,
    trigger: `They said | the moles | could take | us over | and cause | serious damage.`,
    continuation: `The spies were | finally caught | after a long | investigation.`,
    question: `Were the experts worried about marks on our skin?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `3_unambiguous`,
    ID: 25,
    context: `The athletes | and the coach | stretched on | the practice field.`,
    trigger: `They had stained | their uniforms | with mud and | were told to | wash them | before the match.`,
    continuation: `The athletes | complained, | so the coach | gave them | a spare kit | for the match.`,
    question: `Did the coach also stretch on the field with the atheltes?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `3_unambiguous`,
    ID: 26,
    context: `The therapist | listened to the | clients’ group | discussion closely.`,
    trigger: `They noticed | his warmth | towards their | emotional struggles.`,
    continuation: `The clients | were appreciative | of the | therapist's help.`,
    question: `Did the therapist do most of the talking during the discussion?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `3_unambiguous`,
    ID: 27,
    context: `The maintenance men | told | the | singer about | a problem.`,
    trigger: `They had | broken his | piano and | would have | to repair | that first.`,
    continuation: `The singer agreed | but asked | for a replacement | keyboard until | the repair is finished.`,
    question: `Did the maintenance men break the singer's piano?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `3_unambiguous`,
    ID: 28,
    context: `The principal | carefully went | through the | students' report.`,
    trigger: `She was | disappointed to | see their grades | in science.`,
    continuation: `The principal | decided to | hire new | science teachers.`,
    question: `Did the children get good grades in science?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `3_unambiguous`,
    ID: 29,
    context: `The crowd | and the author | gathered together | for the fan meeting.`,
    trigger: `They asked her | when the | next release | is scheduled.`,
    continuation: `The author | smiled and | said that | her new novel | would be out | by summer.`,
    question: `Is her new release planned for next summer?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `3_unambiguous`,
    ID: 30,
    context: `The miners | and the geologist | stood at | the cliffside.`,
    trigger: `They examined | his notes | on the | rock strata.`,
    continuation: `The geologist | clarified that | his diagram | indicated | a gold reserve.`,
    question: `Are the miners and geologist trying to locate an oil reserve?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `3_ambiguous`,
    ID: 31,
    context: `The actor | and the agents | arrived at | the venue.`,
    trigger: `They complained | about his | parking spot | being too | far away.`,
    continuation: `The agents said | the actor | should ask | for a reserved | space next time.`,
    question: `Did the actor arrive at the venue alone?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `3_ambiguous`,
    ID: 32,
    context: `The manager | monitored the | waiters' service | throughout the day.`,
    trigger: `He noted | their tone | was consistently | professional.`,
    continuation: `The manager | shared positive | feedback during | the team debrief.`,
    question: `Was the waiters' service monitored throughout the day?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `3_ambiguous`,
    ID: 33,
    context: `The researcher | and the interns | walked into | the break room.`,
    trigger: `He noticed | their coffee | cups were | still on | the table.`,
    continuation: `The researcher | asked the interns | to clean up | next time.`,
    question: `Do the coffee cups belong to the interns?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `3_ambiguous`,
    ID: 34,
    context: `The director | reviewed the | actors' final | rehearsal footage.`,
    trigger: `She was | impressed by | their enthusiasm | in the climax.`,
    continuation: `The director | extended | their contracts | for the next project.`,
    question: `Did the actors perform poorly in the climax?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `3_ambiguous`,
    ID: 35,
    context: `The journalist | and the | botanists entered | the greenhouse.`,
    trigger: `They noticed | her umbrella | had been | left by the door.`,
    continuation: `The journalist | picked up | the umbrella | and said | she always | forgets it.`,
    question: `Is the journalist often clumsy with her umbrella? `,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `3_ambiguous`,
    ID: 36,
    context: `The children and | the magician | crowded around | the table.`,
    trigger: `She observed | their faces | carefully during | the card trick.`,
    continuation: `The children's | expressions were | filled with | shock and | the magician smiled | in satisfaction.`,
    question: `Were the children underwhelmed by the magic trick?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 37,
    context: `On our | road trip, | we passed | several gas stations.`,
    trigger: `Most of them | were closed | for renovations.`,
    continuation: `Only | the last two | stops were open.`,
    question: `Did we stop at the first gas station that we encountered?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 38,
    context: `Yesterday, | I met with | my advisor | to discuss | my elective courses.`,
    trigger: `She | recommended | some of the electives.`,
    continuation: `I | chose | the easiest | options of | them all.`,
    question: `Did my advisor and I discuss obligatory courses?`,
    question_type: `S1`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 39,
    context: `The doctor | carefully checked | the moles | on my arms.`,
    trigger: `Some | were | symmetric, | and others | were asymmetric.`,
    continuation: `He said | the latter | could potentially | be signs | of skin cancer.`,
    question: `Did I have the moles on my arms checked?`,
    question_type: `S1`,
    correct: `yes`
  },
   {
    type: `4`,
    ID: 40,
    context: `The basketball | player worked on | her 3 point shooting | before the game`,
    trigger: `She made | only some | of the shots.`,
    continuation: `She decided to | focus on | passing the ball | to her teammates | in this game.`,
    question: `Did the basketball player work on her 3 point shots?`,
    question_type: `S1`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 41,
    context: `During the meeting, | the manager | presented the | budget report.`,
    trigger: `Some of | the numbers | seemed exaggerated.`,
    continuation: `Specifically, | the revenue figures | needed to | be checked.`,
    question: `Did the manager present any exaggerated figures?`,
    question_type: `S2`,
    correct: `yes`
  },
  
  {
    type: `4`,
    ID: 42,
    context: `In the | chemistry lab, | I measured | different samples.`,
    trigger: `Some of | the results | were off | by a little.`,
    continuation: `So I | recalibrated | the instruments.`,
    question: `Were all readings from the measurement accurate?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 43,
    context: `The novelist | reviewed | her draft of | her new romance book.`,
    trigger: `Only some of | the chapters | had | explicit expressions.`,
    continuation: `So the novelist | decided to | publish the draft | as it was.`,
    question: `Did the novelist use explicit language in the romance book?`,
    question_type: `S2`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 44,
    context: `I borrowed | some books | from the library.`,
    trigger: `I returned | all of | them on time.`,
    continuation: `None were | overdue and | I was able to | avoid getting fined.`,
    question: `Was any book overdue?`,
    question_type: `S2`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 45,
    context: `I tried | three flavors | of ice cream.`,
    trigger: `One | was chocolate, | one | was vanilla, | and one | was mint.`,
    continuation: `The chocolate one | tasted | the best.`,
    question: `Did the vanilla ice cream taste the best?`,
    question_type: `S3`,
    correct: `no`
  },
  {
    type: `4`,
    ID: 46,
    context: `On the | nature trail, | I spotted | various animals.`,
    trigger: `Some of them | were deer, | and others | were foxes.`,
    continuation: `I managed | to photograph | only the latter.`,
    question: `Did I photograph any foxes?`,
    question_type: `S3`,
    correct: `yes`
  },
  {
    type: `4`,
    ID: 47,
    context: `During the concert, | the band | played | a total of | 16 songs.`,
    trigger: `They | got a | big round | of applause for | some of | their older songs`,
    continuation: `But the new relases | did not get | very enthusiastic | reactions.`,
    question: `Did the audience like their older songs more than their newer ones?`,
    question_type: `S3`,
    correct: `yes`
  },
    {
    type: `4`,
    ID: 48,
    context: `After the | forest fire, | I | conducted an | official survey | of | the damage.`,
    trigger: `Many of | the trees | burned down.`,
    continuation: `Nevertheless, | my data | suggested | the ecosystem would | bounce back.`,
    question: `Do I expect the ecosystem to collapse?`,
    question_type: `S3`,
    correct: `no`
  }
];

// 2 knowledge conditions: full vs partial
// 3 continuation conditions: scalar + complement, scalar + cancellation, focused + complement
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
// B = full, scalar + cancellation
// C = full, focused + complement
// D = partial, scalar + complement
// E = partial, scalar + cancellation
// F = partial, focus + complement

const latin_square_lists = [
  [
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // C
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // E
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // D
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // B
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // A
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    } // F
  ],
  [
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // D
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // C
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // A
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // E
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // F
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    } // B
  ],
  [
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // A
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // B
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // F
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // D
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // E
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    } // C
  ],
  [
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // E
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // D
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // C
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // F
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // B
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    } // A
  ],
  [
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // F
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // A
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // B
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // C
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // D
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    } // E
  ],
  [
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // B
    {
      context_type: `partial`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // F
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `cancellation`
    }, // E
    {
      context_type: `full`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    }, // A
    {
      context_type: `full`,
      trigger_type: `focused`,
      continuation_type: `complement`
    }, // C
    {
      context_type: `partial`,
      trigger_type: `scalar`,
      continuation_type: `complement`
    } // D
  ]
];

const raw_IMCs = [
  {
    ID: 1,
    question: `In the sentence below, please select the person who is spoken to.`,
    text: `Michael says to Kobe encouragingly : "You'll achieve something great one day"`,
    options : [`Michael`,`Kaitlyn`,`Steph`,`Kobe`,`Bill`],
    correct: `Kobe`
  },
  {
    ID: 2,
    question: `In the sentence below, please select the person who speaks.`,
    text: `Theo tells Vicent that he should take care of his health`,
    options : [`Theo`,`Nora`,`Dan`,`Julia`,`Vincent`],
    correct: `Theo`

  },
  {
    ID: 3,
    question: `In the sentence below, please select the person who is being asked the question.`,
    text: `Helen asks Anne : "How would my life have looked like if I hadn't met you?"`,
    options : [`Nick`,`Helen`,`Anne`,`Nora`,`Kaitlyn`],
    correct: `Anne`
  },
]
// create the list of trials for a participant by randomly choosing 4
// lists (each consisting of 6 trial types) and filling them in with
// the content

const create_correct = {
  universal: {
    complement: `no`,
    cancellation: `yes`
  },
  negated_universal: {
    complement: `yes`,
    cancellation: `no`
  }
};

const trial_list = _.flatten(_.sampleSize(latin_square_lists, 4)); // set to 4 for original trial nr

// fills in a single trial based on context_type, trigger_type and continuation_type
const create_critical_trial = function (trial, args) {
  let final_correct_answer = trial.correct;
  
  if (trial.correct === 'universal' || trial.correct === 'negated_universal') {
    final_correct_answer = create_correct[trial.correct][args.continuation_type];
  }
  
  return {
    ID: trial.ID,
    type: `critical`,
    knowledge: args.context_type,
    context_type: args.context_type,
    trigger_type: args.trigger_type,
    continuation_type: args.continuation_type,
    context: trial.context[args.context_type],
    trigger: trial.trigger[args.trigger_type],
    continuation: trial.continuation[args.continuation_type],
    question:
      typeof trial.question === 'string'
        ? trial.question
        : args.trigger_type in trial.question
          ? trial.question[args.trigger_type]
          : trial.question[args.continuation_type],
    question_type: trial.question_type,
    correct_answer: final_correct_answer,
    option1: 'yes',
    option2: 'no'
  };
};

const create_filler_trial = function (trial) {
  return {
    ID: trial.ID,
    type: trial.type,
    context: trial.context,
    trigger: trial.trigger,
    continuation: trial.continuation,
    question_type: trial.question_type,
    question: trial.question,
    correct_answer: trial.correct,
    option1: 'yes',
    option2: 'no'
  };
};

const create_IMC = function (trial) {
  return {
    ID: trial.ID,
    type: `IMC`,
    question: trial.question,
    context: trial.text,
    options:trial.options,
    correct_answer: trial.correct
  };
};


const critical_trials = trial_list.map(function (e, index) {
  let trial = create_critical_trial(
    raw_critical_trials[index],
    e
  );
  return trial;
});

const filler_trials = raw_filler_trials.map(function (e, index) {
  let trial = create_filler_trial(
    raw_filler_trials[index]
  );
  return trial;
});

const IMCs = raw_IMCs.map(function (e,index) {
  let trial = create_IMC(
    raw_IMCs[index]
  );
  return trial;
});

const suffled = _.shuffle([...critical_trials, ...filler_trials]);

var main_trials = []
  .concat(
    suffled.slice(0, 18), IMCs[0],
    suffled.slice(18, 36), IMCs[1],
    suffled.slice(36, 54), IMCs[2],
    suffled.slice(54)
  );

export { practice_trials, main_trials };