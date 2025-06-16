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
];
