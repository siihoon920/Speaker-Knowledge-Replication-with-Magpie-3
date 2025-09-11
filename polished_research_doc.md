# Research Question
Does speaker knowledge influence implicature interpretation?

# Motivation

While it has been shown that implicature interpretation depends on many grammatical and lexical contexts, it is still debated whether speaker knowledge affects implicature interpretation for reasons below. First, while many previously studied contexts are binary, the reliability of speaker knowledge exists on a spectrum. Second, speaker knowledge can be traced back to the question of whether our comprehension is egocentric or not, which remains heavily debated with arguments on both sides. This study uses the method of self-paced reading to measure processing difficulty, which serves as an indicator of implicature interpretation.

# Materials

## Critical Trials

The critical trials in this experiment aim to measure how the listener's judgement about the speaker's knowledge of the situation influences impicature generation in the listener's mind. The sentences in the critical trials follow the same format as in the original experiment.

**S1(context)**: by demonstrating the context in which the speaker accessed the information, it implies how certain the speaker might be about the strong statement('some but not all'). 
- full knowledge : the context shows that the speaker had close access or paid close attention to the situation, implying that the speaker is likely to know whether the stronger statement is true. 
- partial knowledge: the context shows that the speaker did not have close access or paid close attention to the situation, implying that speaker is uncertain whether the stronger statement is true.

**S2(trigger)** : introduces a scalar quantifier, which the listener may interpret with strong implicature('some but not all') or weak('some and possibly all') implicature, based on the the context set by S1. 

- scalar: 'some'
  -  if S1 : full knowledge -> strong implicature
  - if S1 : partial knowledge -> weak implicature
- scalar 'only some'
  - regardless of whether S1 is full or partial knolwedge, the strong statement is confirmed.

**S3(continuation)** : resolves the ambiguity in S2, either confirming or rejecting the implicatures that the listener had established.

- complement : complements 
- 
**example**

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
    cancelation: `In fact, | they all | were, | so the | company is | planning | to sue.`
  }
}
```

- **Context sentence**: 'Carefully inspecting' the shipment sets the context that the speaker has full knowledge of the situation, while 'helping unload' the shipment sets the context that the speaker has partial knowledge of the situation.
- **Trigger sentence**: 'Some of the gold watches' triggers participants to make a strong or weak implicature, while 'only some of the gold watches' collapses the strong implicature 'some but not all' to an explicit truth.
- **Continuation sentence**: 'The rest were' complements the strong implicature 'only some of all', while 'they all were' cancels the strong implicature.
- **Comprehension question (universal quantifier)**: If the continuation sentence type is 'complement', then the correct answer is 'no'. If 'cancelation', the correct answer is 'yes'.

We have 24 situations, with S1, S2 and S3 sentences in the two versions. We generate each trial using the possible factor combinations of sentence versions shown below (A - F). The combinations with a focused trigger and a cancelation continuation are excluded because they result in a logical contradiction. For example: “Only some of the watches were fake … In fact, they all were fake.” In this case, the cancelation directly contradicts the focused trigger, which makes the implicature completely uninformative. Including such items would undermine the purpose of studying the process of implicature generation.



| Code | Context | Trigger | Continuation |
| :--: | :------ | :------ | :----------- |
| A    | full    | scalar  | complement   |
| B    | full    | scalar  | cancelation  |
| C    | full    | focused | complement   |
| D    | partial | scalar  | complement   |
| E    | partial | scalar  | cancelation  |
| F    | partial | focused | complement   |

If we generated trials for each participant by assigning a random combination to each situation, we could potentially end up with certain situations being matched significantly more often with some factor combinations than others. Therefore, we use a Latin square to ensure that the matches between factor combinations and situations are balanced across participants. We place 6 permutations of the combinations above in a row, creating a matrix in which no combination appears in the same position within a row more than once. Then 4 rows are chosen randomly from the Latin square, yielding a list of 24 factor combinations to match with each situation.

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

### Comprehension Questions (original)

The comprehension questions test the participant's understanding of the scalar statement after each trial. Each question follows one of the following formats, and the correct answer to each format varies systematically by continuation sentence type.

| Question Type | Correct Answer if 'Complement' | Correct Answer if 'Cancelation' |
| ------------- | ------------------------------ | ------------------------------- |
| Existential quantifier | yes | yes |
| Negated existential quantifier | yes | no |
| Universal quantifier | no | yes |
| Negated universal quantifier | no | no |
```javascript
{
  
  question: `Did the new shipment of jewelry contain gold watches that were fake?`,
  question_type: "existential"
  
  //question: `Did the new shipment of jewelry contain gold watches that were real?`,
  //question_type: "negated_existential"
  //question: `Were all the gold watches in the shipment of jewelry fake?`,
  //question_type: "universal"
  //question: `Were all the gold watches in the shipment of jewelry real?`,
  //question_type: "negated_universal"
}
```

### Comprehension questions (with Jack's suggestion)

The original comprehension questions are about the scalar expression in S2 or how its ambiguity resolves in S3. Consequently, the correct answer becomes clear in either S2 (in the case of existential quantifier or negated universal quantifier) or S3(in the case of negated existential quantifier or universal quantifier). This raises the issue that the participants may get accustomed to the position and the logical formation of the clues.


We included 24 comprehension questions in total: 16 about S1, 16 about S2, and 16 about S3. This aims to spread the participant's attention over the entire text. The questions about S1 targeted only miscellaneous information, in order to prevent participants from anticipating a fixed pattern. 
For S2 and S3 questions, half of the questions (8) also targeted miscellaneous information, while the other half (8) directly ask about scalar ambiguity resolution, as in the original design. The correct answers were set to "yes" for half of all questions, and "no" for the other half, also n order to prevent anticipation. The answers to the questions about the scalar expression are given in quantifier type for the same reason as in the original comprehension questions: since the correct answers depend on the trigger or continuation type.

<table>
  <thead>
    <tr>
      <th>Section</th>
      <th>Total Trials</th>
      <th>Subtype</th>
      <th>Breakdown</th>
      <th>Trials</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><b>S1</b></td>
      <td rowspan="2">8</td>
      <td rowspan="2">Scalar</td>
      <td>Yes</td>
      <td>4</td>
    </tr>
    <tr>
      <td>No</td>
      <td>4</td>
    </tr>
    <tr>
      <td rowspan="4"><b>S2</b></td>
      <td rowspan="4">8</td>
      <td rowspan="2">Scalar</td>
      <td>Existential quantifier</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Negated universal quantifier</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="2">Miscellaneous</td>
      <td>Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>No</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="4"><b>S3</b></td>
      <td rowspan="4">8</td>
      <td rowspan="2">Scalar</td>
      <td>Existential</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Negated universal quantifier</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="2">Miscellaneous</td>
      <td>Yes</td>
      <td>2</td>
    </tr>
    <tr>
      <td>No</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

## Filler Trials (original)

We also have 10 filler trials, which have self-paced reading sentences and comprehension questions in free format, unlike the critical trials. These ensure that participants do not become accustomed to the format of the critical trials as the experiment proceeds.

## Filler Trials(With Jack's suggestion)

We also included 48 filler trials, which are designed to resemble the general structure of the critical trials, but differ from them in the critical conditions for camouflage. 

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

We have 12 trials of 4 types of filler trials, each of which differs from the main trials in its own way. In types that involve **type unambiguous**, the majority was chosen to be **type unambiguous** in order to maximize naturalness and balance out the ratio between types when combined with the main trials. This is intended to help the participant **spread their attention evenly** across all 3 sentences.

---

## **Filler Type 1–3: Difference in Trigger (36 trials)**

Of the 4 types, the following 3 create variation by introducing a **different source of ambiguity** in the **trigger sentence**.

---

### **1. Pronoun Resolution – Equal Accessibility (12 trials)**

inspired by Greene et al. 1992, further trials hand & AI generated 

- **Context**: `Mary and John were doing the dishes after dinner.`  
- **Trigger**: `One of them was washing while the other dried.`  
- **Continuation**: `Mary accidentally scratched John with a knife and then she dropped it on the counter.`  

#### **Type ambiguous (12 trials)**

- **Trigger**: introduces equal mental accessibility to two names (`Mary` & `John`) using the phrase `one of them... the other...`  
- **Continuation**: confirms the reference to one of the names with a pronoun `she`

---

### **2. Polysemy Resolution – Semantically Related Nouns (12 trials)**

modified from Foraker & Murphy 2012, context sentence further padded 

#### **Type unambiguous (9 trials)**

- **Context**: `The CEO updated the design team on their latest collection.`  
- **Trigger**: `The fashion designers discussed the cotton.`  
- **Continuation**: `The fabric was not what they had been hoping for.`

- **Trigger**: disambiguates the polysemous noun `cotton` (fabric vs. plant), favoring *fabric* due to the semantically related profession `fashion designers`  
- **Continuation**: confirms the fabric interpretation

#### **Type ambiguous (3 trials)**

- **Context**: `The instructor showed us the final step in the practical session.`  
- **Trigger**: `She meticulously tested the filling.`  
- **Continuation**: `The metal was smooth and even on the teeth.`

- **Trigger**: the use of `filling` without bias toward a specific interpretation (culinary vs. dental) maintains ambiguity  
- **Continuation**: confirms one interpretation — that `the filling` refers to a dental procedure

---

### **3. Pronoun Resolution – Semantically Related Nouns (12 trials)**

inspired by Lago et al. 2017, further trials hand & AI generated 

#### **Type unambiguous (9 trials)**

- **Context**: `The maintenance men told the singer about a problem.`  
- **Trigger**: `They had broken his piano and would have to repair that first.`  
- **Continuation**: `The singer agreed but asked for a replacement keyboard until the repair is finished.`

- **Trigger**: introduces unambiguous reference of the possessive pronoun `his` to `the singer`, as supported by the semantically related noun `piano`  
- **Continuation**: confirms the more plausible interpretation, referencing `the singer`

#### **Type ambiguous (3 trials)**

- **Context**: `The researcher and the interns walked into the break room.`  
- **Trigger**: `He noticed their coffee cups were still on the table.`  
- **Continuation**: `The researcher asked the interns to clean up next time.`

- **Trigger**: introduces ambiguous reference of the possessive pronoun `their` to either `the researcher` or `the interns`, using a semantically neutral noun `coffee cups`  
- **Continuation**: confirms one interpretation — that the coffee cups belonged to the `interns`

---

## **Filler Type 4: Difference in Continuation (12 trials)**

AI & hand generated

### **4. Scalar**
inspired by Lago et al. 2017, further trials hand & AI generated 


This final type uses the **same scalar trigger** as in the main trials but differs in that the **continuation sentence confirms neither implicature**.

- **Context**: `After the forest fire, I conducted an official survey of the damage.`  
- **Trigger**: `Many of the large trees burned down.`  
- **Continuation**: `Nevertheless, my data suggested the ecosystem would bounce back.`  

- **Trigger**: uses scalar term `many`, which could imply *not all*  
- **Continuation**: neutral — does not resolve either possible implicature
  
# Procedure

## Preparation
- Since this is a web experiment, participants are prompted to answer a captcha question. If they answer incorrectly 3 times, the experiment cannot proceed.
- Participants are shown the instructions for the experiment.

## Practice Trials
- 3 practice sentences such as "Would you like to see another example?" are shown in self-paced reading format. If the participant presses "yes", then the screen moves to the practice sentence. If the participant presses "no", then the screen skips to the main trials.

## Main Trials
34 main trials are created by randomly mixing 24 critical trials and 10 fillers. In each main trial, the three sentences are presented in blocks of phrases hidden by underlines. Participants press the spacebar to reveal the phrases one by one. Meanwhile, the intervals between presses are recorded. The participant's answer to the comprehension question is also recorded.

## Personal Information
Participants can optionally submit their age, gender, and education level.

# Independent Variables

## Within-Participant (2×2×2 factorial design)

### Context Type
Full speaker knowledge vs. partial speaker knowledge

### Trigger Type
- **Scalar ('some')**: Can lead either to strong implicature 'some but not all' or weak implicature 'some and maybe all'
- **Focused ('only some')**: Collapses the strong implicature 'some but not all' to an explicit truth

### Continuation Type
- **Complement ('some but not all')**: Expected by strong implicature or focused trigger
- **Cancelation ('all')**: Only weak implicature preserves this possibility

## Between-Participant
Factor combinations associated with each trial, balanced using the Latin square

# Dependent Variables
- Reaction time at trigger sentence
- Reaction time at continuation sentence

# Hypotheses

1. When the context sentence implies that the speaker has full knowledge, compared to when partial knowledge is implied, given that the trigger type is a scalar trigger, a longer reaction time is observed at the trigger sentence.
   - **Explanation**: Strong implicature conveys stronger information so requires longer time to process
   - **Result**: True

2. When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, after a scalar trigger, a shorter reaction time is observed at the continuation sentence of complement type.
   - **Explanation**: With strong implicature, compared to weak implicature, complement is more strongly expected
   - **Result**: True - no difference at anaphor exactly, but sufficient difference at predicate where anaphor is disambiguated

3. When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, after a scalar trigger, a longer reaction time is observed at the continuation sentence of cancelation type.
   - **Explanation**: With strong implicature, compared to weak implicature, complement is more strongly expected, and cancelation is less strongly expected
   - **Result**: True - no difference at anaphor exactly, but sufficient difference at predicate where anaphor is disambiguated

4. After a focused trigger, the same reaction time at the trigger sentence is observed whether the context sentence implies full knowledge or partial knowledge.
   - **Explanation**: Focused trigger leaves no room for implicature and therefore also no room for difference between strong and weak implicature
   - **Result**: True

5. After a focused trigger, the same reaction time at the complement sentence is observed whether the context sentence implies full knowledge or partial knowledge.
   - **Explanation**: Focused trigger leaves no room for implicature and therefore also no room for difference between strong and weak implicature
   - **Result**: True

# Improvements from Previous Study

In the practice trials, the screen did not skip to the main trials even if the participant answered "no" to the offer to see another practice sentence. In this version, participants are taken directly to the main trial in this case.

The answers to questions with universal quantifiers vary by complement type. But in the previous version, the correct answer was uniformly assigned, which was incorrect. This variation is taken into account in this project, ensuring that comprehension can be better evaluated.

# Trial Distribution

24 critical trials distributed as follows:

- **S1**: 8 trials
  - Yes: 4
  - No: 4
- **S2**: 8 trials
  - Systematic: 4
    - Existential quantifier
    - Negated universal quantifier
  - Miscellaneous: 4
    - Yes: 2
    - No: 2
- **S3**: 8 trials
  - Systematic: 4
    - Existential: 2
    - Negated universal quantifier: 2
  - Miscellaneous: 4
    - Yes: 2
    - No: 2


