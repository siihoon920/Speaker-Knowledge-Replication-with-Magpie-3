# Research Question

Does speaker knowledge influence online interpretation of scalar implicatures?

# Motivation

The original paper by Bergen and Grodner (2012) demonstrated that speaker knowledge influences scalar implicature processing in online comprehension. Using self-paced reading, they showed that when listeners believed a speaker had full knowledge of a situation (e.g., "I meticulously compiled the investment report"), they were more likely to compute strong scalar implicatures from utterances like "Some of the real estate investments lost money" (meaning 'some but not all'). In contrast, when the speaker appeared to have only partial knowledge (e.g., "I skimmed the investment report"), listeners computed weaker implicatures ('some and possibly all'). 

This result was important as it challenged two previously prominent views: first, that scalar implicatures are computed automatically regardless of context, and second, that online language comprehension is fundamentally egocentric and does not immediately incorporate the speaker's perspective.

However, this  paper leaves some methodological gaps, as it does not provide detailed information about the actual filler trials and comprehension questions used in the experiment. This lack of transparency raises some concerns, particularly about the potential for participants to detect the critical manipulations if filler materials were not carefully designed.

This replication aims to address these methodological concerns. We have designed new filler trials that closely resemble the critical trials in structure but differ in the critical manipulations of speaker knowledge and scalar implicature generation. Additionally, we have created comprehension questions that target various sentence types evenly, rather than focusing disproportionately on the critical parts.

# Materials

## Critical Trials

The critical trials in this experiment aim to measure how the listener's judgment about the speaker's knowledge of the situation influences **implicature** activation in the listener's mind. The sentences in the critical trials follow the same format as in the original experiment.

**S1 (context)**: By demonstrating the context in which the speaker accessed the information, it implies how certain the speaker might be about the **stronger** statement ('some but not all').

- **Full knowledge**: The context shows that the speaker had close access to or paid close attention to the situation, implying that the speaker is likely to know whether the stronger statement is true.
- **Partial knowledge**: The context shows that the speaker did not have close access to or did not pay close attention to the situation, implying **that the** speaker is uncertain whether the stronger statement is true.

**S2 (trigger)**: Introduces a scalar quantifier, which the listener may interpret with a strong implicature ('some but not all') or a weak implicature('some and possibly all'), based on the context set by S1.

- **Scalar**: 'some'
  - If S1: full knowledge → strong implicature
  - If S1: partial knowledge → weak implicature
- **Focused** 'only some'
  - Regardless of whether S1 involves full or partial knowledge, the strong statement is confirmed.

**S3 (continuation)**: Resolves the ambiguity in S2, either confirming or rejecting the implicatures that the listener had established.

- **Complement**: Confirms the implicature
- **Cancellation**: Contradicts the implicature

### Example

```javascript
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
 }
}
```
### Explanation

- **Context sentence**: 'Carefully inspecting' the shipment sets the context that the speaker has full knowledge of the situation, while 'helping unload' the shipment sets the context that the speaker has partial knowledge of the situation.

- **Trigger sentence**: 'Some of the gold watches' triggers participants to make a chioce between the strong or weak implicature, while 'only some of the gold watches' triggers the strong implicature exclusively('some but not all')

- **Continuation sentence**: 'The rest were real' confirms the strong implicature ('some but not all'), while 'they all were fakes' cancels the strong implicature.

- **Comprehension question (universal quantifier)**: If the continuation sentence type is 'complement', then the correct answer is 'no'. If 'cancellation*', the correct answer is 'yes'.

### Trial Generation

We have 24 situations, with S1, S2, and S3 sentences in two versions. We generate each trial using the possible factor combinations of sentence versions shown below (A - F). The combinations with a focused trigger and a cancellation continuation are excluded because they result in a logical contradiction (e.g., "Only some were fake... In fact, they all were fake"). Including such items would undermine the purpose of studying the process of implicature generation.

| Code | Context | Trigger | Continuation |
| :--: | :------ | :------ | :----------- |
| A    | full    | scalar  | complement   |
| B    | full    | scalar  | cancellation |
| C    | full    | focused | complement   |
| D    | partial | scalar  | complement   |
| E    | partial | scalar  | cancellation |
| F    | partial | focused | complement   |

If we generated trials for each participant by assigning a random combination to each situation, we could potentially end up with certain situations being matched significantly more often with some factor combinations than others. Therefore, we use a Latin square to ensure that the matches between factor combinations and situations are balanced across participants. By randomly selecting 4 rows from this square, we yield exactly 24 condition assignments (4 of each condition A-F). These are then mapped 1-to-1 against our 24 situations.

**latin square used:**

```
C E D B A F  
D C A E F B  
A B F D E C  
E D C F B A  
F A B C D E  
B F E A C D  
```

**Example of list generated**

C E D B A F / D C A E F B / A B F D E C / F A B C D E

### Comprehension Questions 

In the previous replication, all of the comprehension questions were about the scalar expression in S2 or how its ambiguity resolves in S3. Consequently, the correct answer became clear in either S2 (in the case of existential quantifier 'some' or negated existential quantifier'not even some') or S3 (in the case of universal quantifier 'all' or universal quantifier'some but not all'). This raises the issue that the participants may get accustomed to the position and the phrasing of the critical clues.

We therefore included 24 comprehension questions in total: 8 about S1, 8 about S2, and 8 about S3. This aims to spread the participant's attention over the entire text. The questions targeting S1 ask about non-critical contextual details given in the sentence to prevent participants from anticipating a fixed pattern.

Regarding the questions about S2 and S3, half of the questions (4 for S2, 4 for S3) also target miscellaneous information, while the other half (4 for S2, 4 for S3) directly ask about scalar ambiguity resolution. The correct answers were set to "yes" for half of all questions, and "no" for the other half, also in order to prevent anticipation. The correct answers to the questions about scalar expression in S3 (S3_scalar) are given in quantifier type since the correct answers depend on the trigger or continuation type as shown below.

```javascript
question: `Were all the gold watches in the shipment of jewelry fake?`,
question_type: "S3_scalar" 
// If continuation type is complement, not all are fake. -> no
// If continuation type is cancelation, then all are indeed fake -> yes
correct: "universal"
question: `Did the new shipment of jewelry contain gold watches that were real?`,
question_type: "S3_scalar"
correct: "negated_universal" 
// If continuation type is complement, not all are fake. -> answer : yes
// If continuation type is cancelation, then all are indeed fake -> answer : no
```
<table>
  <thead>
    <tr>
      <th> question type </th>
      <th> universal </th>
      <th> negated universal </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b> complement</td>
      <td> no</td><td> yes </td>
    </tr>
    <tr>
      <td><b> cancelation </td>
      <td> yes</td><td> no </td>
</table>

To sum up, the distribution of comprehension questions are as below.

<table>
  <thead>
    <tr>
      <th>Target Sentence</th>
      <th>Subtype</th>
      <th>Correct answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><b>S1 (8)</b></td>
      <td rowspan="2">Miscellaneous (8)</td>
      <td>Yes (4)</td>
    </tr>
    <tr>
      <td>No (4)</td>
    </tr>
    <tr>
      <td rowspan="4"><b>S2 (8)</b></td>
      <td rowspan="2">Scalar (4)</td>
      <td> Yes (2)</td>
    </tr>
    <tr>
      <td> No (2)</td>
    </tr>
    <tr>
      <td rowspan="2"> Miscellaneous (4)</td>
      <td>Yes (2)</td>
    </tr>
    <tr>
      <td>No (2)</td>
    </tr>
    <tr>
      <td rowspan="4"><b> S3 (8)</b></td>
      <td rowspan="2"> Scalar (4)</td>
      <td> Universal Quantifier (2)</td>
    </tr>
    <tr>
      <td>Negated Universal Quantifier (2)</td>
    </tr>
    <tr>
      <td rowspan="2">Miscellaneous (4)</td>
      <td>Yes (2)</td>
    </tr>
    <tr>
      <td>No (2)</td>
    </tr>
  </tbody>
</table>



## Filler Trials

We also included 48 filler trials, which are designed to resemble the general structure of the critical trials, but differ from them in the critical manipulations for camouflage. 

### Filler Type 1–3: Difference in Trigger (36 trials)

Filler types 1-3 (12 each) differ from the critical trials in the sources of the ambiguity and correpsonding implication.

For types 2 & 3, `type ambiguous`(6 each) and `type unambiguous` (6 each)  were distinguished. 

`type ambiguous` : S2 introduces an ambiguity with two similarly plausible interpretations; this aims to camouflage the main trials with a scalar trigger, which activates strong and weak implicature in the participant's mind simultaneously. 

`type unambiguous` : S2 introduces two interpretations, but one of the interpretations is significantly more plausible. This resembles the main trials with a focused trigger ('only some'), which activates one obvious implication ('some but not all').

The table below compares the manipulations of the critical trials and the fillers.
<table>
  <thead>
    <tr>
      <th>Sentence</th>
      <th>Type</th>
      <th>Critical Trials</th>
      <th>Filler Trials</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>S1 (context)</b></td>
      <td>—</td>
      <td>sets context of speaker knowledge</td>
      <td>sets context of situation</td>
    </tr>
    <tr>
      <td rowspan="2"><b>S2 (trigger)</b></td>
      <td>Ambiguous</td>
      <td>introduces ambiguity between strong and weak implicature (scalar trigger)</td>
      <td>introduces ambiguity between two similarly plausible interpretations </td>
    </tr>
    <tr>
      <td>Unambiguous</td>
      <td>introduces a source of unambiguous implication (focused trigger)</td>
      <td>introduces two interpretations, with one being more plausible</td>
    </tr>
    <tr>
      <td rowspan="2"><b>S3 (continuation)</b></td>
      <td>Ambiguous</td>
      <td>confirms or rejects implicature</td>
      <td>confirms one of the possible interpretations</td>
    </tr>
    <tr>
      <td>Unambiguous</td>
      <td>confirms implication (in case of focused trigger)</td>
      <td>reinforces the more plausible interpretation</td>
    </tr>
  </tbody>
</table>


#### 1. Pronoun Resolution – Equal Accessibility (12 trials)

inspired by Greene et al. 1992, further trials hand & AI generated 

- Context: `Mary and John were doing the dishes after dinner.`  
- Trigger: `One of them was washing while the other dried.`  
- Continuation: `Mary accidentally scratched John with a knife and then she dropped it on the counter.`  

##### Type ambiguous (12 trials)

- Trigger: introduces equal mental accessibility to two names (`Mary` & `John`) using the phrase `one of them... the other...`  
- Continuation: confirms the reference to one of the names with a pronoun `she`

#### 2. Polysemy Resolution (12 trials)

modified from Foraker & Murphy 2012, context sentence further padded 

##### Type unambiguous (6 trials)

example 

- S1 (context): `The CEO updated the design team on their latest collection.`  
- S2 (trigger): `The fashion designers discussed the cotton.`  
- S3 (continuation): `The fabric was not what they had been hoping for.`

- S2: introduces a polysemous noun `cotton` (fabric vs. plant), but previous context `fashion designers` makes the 'fabric' interpretation more plausible.
- S3: confirms the more plausible 'fabric' interpretation.

##### Type ambiguous (6 trials)

- S1 (context): `The instructor showed us the final step in the practical session.`  
- S2 (trigger): `She meticulously tested the filling.`  
- S3 (continuation): `The metal was smooth and even on the teeth.`

- S2: introduces a polysemous noun `filling` (culinary vs. dental) without providing context to give more plausibility to either interpretation. 
- S3: confirms one of the interpretations — that `the filling` refers to a dental procedure.

#### 3. Pronoun Resolution – Semantically Related Nouns (12 trials)

inspired by Lago et al. 2017, further trials hand & AI generated 

##### Type unambiguous (6 trials)

- S1 (context): `The maintenance men told the singer about a problem.`  
- Trigger: `They had broken his piano and would have to repair that first.`  
- Continuation: `The singer agreed but asked for a replacement keyboard until the repair is finished.`

- Trigger: introduces a possessive pronoun `his`, which would be ambiguous in itself, but the context of `the singer` favors the interpretation that the `piano` belongs to `the singer` rather than `the maintenance men`.
- Continuation: confirms the more plausible interpretation, referencing `the singer`.

##### Type ambiguous (6 trials)

- Context: `The researcher and the interns walked into the break room.`  
- Trigger: `He noticed their coffee cups were still on the table.`  
- Continuation: `The researcher asked the interns to clean up next time.`

- Trigger: introduces a possessive pronoun `their`, which can refer to either `the researcher` or `the interns`, using a noun `coffee cups`, which is not semantically related to `the researcher` or `the interns`.
- Continuation: confirms one of the interpretations — that the coffee cups belonged to the `interns`.

#### Filler Type 4: Difference in Continuation (12 trials)

AI & hand generated

##### 4. Scalar
inspired by Lago et al. 2017, further trials hand & AI generated 

This 4th and final type introduces the same ambiguity as in the critical trials by using scalar words but differs in that the continuation sentence confirms neither of the implicatures.

- Context: `After the forest fire, I conducted an official survey of the damage.`  
- Trigger: `Many of the large trees burned down.`  
- Continuation: `Nevertheless, my data suggested the ecosystem would bounce back.`  

- S1 & S2: follows the same format as in the critical trials, until a different scalar word 'many' is introduced, which might generate the implicature 'many but not all'.  
- S3: does not resolve either of the possible implicature
  
### Comprehension questions

Just like in the critical trials, the comprehension questions for filler trials also targeted all three sentences evenly. (16 for S1, 16 for S2 and 16 for S3)

## Attention Checks
3 Instructional Manipulation Checks(IMCs) were included to ensure the participant is paying attention to the questions. By using a different format of question, these also serve as an attention refresher.


# Procedure
## Preparation

- Since this is a web experiment, participants are prompted to answer a captcha question. If they answer incorrectly 3 times, the experiment cannot proceed.
- Participants are shown the instructions for the experiment.

## Practice Trials

- 3 practice sentences (e.g., "Would you like to see another example?") are shown in self-paced reading format. If the participant presses "yes", then the screen moves to the practice sentence. If the participant presses "no", then the screen skips to the main trials.

## Main Trials

72 main trials are created by randomly mixing 24 critical trials and 48 filler trials. In the self-paced reading section, the three sentences are presented in blocks of phrases hidden by underlines. Participants press the spacebar to reveal the phrases one by one. Meanwhile, the intervals between presses are recorded, representing the amount of time the participant took to process each block.

Once the participant has seen all the blocks, the participant is presented with the comprehension question, and the participant's answer to the question is recorded. 

## Personal Information
Participants can optionally submit their age, gender, and education level.

# Independent Variables

## Within-Participant (2×2×2 factorial design)

### Context Type
Full speaker knowledge vs. partial speaker knowledge

### Trigger Type
- Scalar ('some'): Can lead either to strong implicature 'some but not all' or weak implicature 'some and maybe all'
- Focused ('only some'): Collapses the strong implicature 'some but not all' to an explicit truth

### Continuation Type
- Complement ('some but not all'): Expected by strong implicature or focused trigger
- Cancellation ('all'): Only weak implicature preserves this possibility

## Between-Participant
Factor combinations associated with each trial (balanced using the Latin square)

# Dependent Variables
- Reaction time when processing the trigger sentence
- Reaction time when processing the continuation sentence

# Hypotheses

## With a scalar trigger...

1. When the context sentence implies that the speaker has full knowledge, compared to when partial knowledge is implied, participants exhibit longer reaction times when processing the trigger sentence.
   - Rationale: Strong implicature conveys richer information, thus requiring additional processing time

2. When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, participants exhibit shorter reaction times when processing complement-type continuation sentences.
   - Rationale: With strong implicature, compared to weak implicature, complement('some but not all') is more strongly expected.

3. When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, after a scalar trigger, participants exhibit longer reaction time when processing of cancellation-type continuation sentences.
   - Rationale: With strong implicature, compared to weak implicature, cancelation is more less expected.

## With a focused trigger,

4. Reaction times when processing the trigger sentence remain equivalent whether the context sentence implies full knowledge or partial knowledge.
   - Rationale: Focused trigger eliminates ambiguity regarding implicature and therefore leaves no difference between strong and weak implicature

5. Reaction times when processing the trigger sentence remain equivalent whether the context sentence implies full knowledge or partial knowledge.
   - Rationale: A focused trigger eliminates ambiguity regarding implicature and therefore leaves no difference between strong and weak implicature.


(  minor improvements from previous replication)

In the practice trials, the screen did not skip to the main trials even if the participant answered "no" to the offer to see another practice sentence. In this version, participants are taken directly to the main trial in this case.

The answers to questions with universal quantifiers vary by complement type. But in the previous version, the correct answer was uniformly assigned, which was incorrect. This variation is taken into account in this project, ensuring that comprehension can be better evaluated.